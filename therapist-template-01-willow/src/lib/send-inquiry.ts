"use server";

import { z } from "zod";
import { Resend } from "resend";
import { contact } from "@content/contact";
import { site } from "@content/site";

/*
  Contact-form Server Action.
  - Validates with Zod.
  - Sends a formatted email to the practitioner's inbox via Resend.
  - NEVER logs message contents (privacy: the message may contain sensitive,
    though not-PHI, personal detail).
  - Degrades gracefully to "demo mode" when RESEND_API_KEY is not configured,
    so a preview deploy still demonstrates the full flow.
*/

const InquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more so I can help.")
    .max(2000, "Please keep this under 2000 characters."),
  preferredContact: z.enum(["email", "phone"]).default("email"),
  // Honeypot: real users leave this empty. Bots fill it.
  company: z.string().max(0).optional(),
});

export type InquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof InquirySchema>, string>>;
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const parsed = InquirySchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") ?? "",
    message: formData.get("message"),
    preferredContact: formData.get("preferredContact") ?? "email",
    company: formData.get("company") ?? "",
  });

  if (!parsed.success) {
    const fieldErrors: InquiryState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof InquirySchema>;
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
    };
  }

  const { name, email, phone, message, preferredContact, company } = parsed.data;

  // Silently succeed for honeypot hits (do not tip off bots).
  if (company) return { status: "success" };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_INBOX || contact.email;
  const from = process.env.CONTACT_FROM;

  // Demo mode: no key configured. Behave as success so the preview flow works.
  if (!apiKey || !from) {
    return {
      status: "success",
      message: "demo",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const html = `
      <div style="font-family: Georgia, serif; color: #2C2823;">
        <p style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#6B6560;">
          New inquiry from ${escapeHtml(site.name)}
        </p>
        <h2 style="margin:8px 0;">${escapeHtml(name)}</h2>
        <p><strong>Email:</strong> ${escapeHtml(email)}<br/>
        ${phone ? `<strong>Phone:</strong> ${escapeHtml(phone)}<br/>` : ""}
        <strong>Prefers contact by:</strong> ${escapeHtml(preferredContact)}</p>
        <p><strong>What brings them here:</strong></p>
        <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
        <hr style="border:none;border-top:1px solid #D9D0BF;margin:16px 0;"/>
        <p style="font-size:13px;color:#6B6560;">
          This inquiry came from your website. Reply directly to this email to respond to the client.
        </p>
      </div>`;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html,
    });

    if (error) {
      // Log the error type only, never the message contents.
      console.error("Resend send failed:", error.name);
      return {
        status: "error",
        message: "Something went wrong sending your message. Please email me directly.",
      };
    }

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your message. Please email me directly.",
    };
  }
}
