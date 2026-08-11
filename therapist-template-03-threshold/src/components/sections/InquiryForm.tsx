"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ShieldCheck, Check } from "lucide-react";
import { sendInquiry, type InquiryState } from "@/lib/send-inquiry";
import { contact } from "@content/contact";

const initialState: InquiryState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] px-8 py-4 font-body text-sm font-medium tracking-wide text-[var(--color-bg)] transition-colors duration-200 hover:bg-[var(--color-accent-deep)] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending.." : "Send Message"}
    </button>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-[var(--color-ochre-deep)]">
      {message}
    </p>
  );
}

export function InquiryForm() {
  const [state, formAction] = useActionState(sendInquiry, initialState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 border border-[var(--color-accent)] bg-[var(--color-surface)] p-8"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent)]">
          <Check className="h-6 w-6 text-[var(--color-bg)]" aria-hidden="true" />
        </span>
        <h2 className="font-display text-2xl text-[var(--color-ink)]">Thank you. It&apos;s sent.</h2>
        <p className="leading-relaxed text-[var(--color-ink-muted)]">
          I&apos;ve received your note and I&apos;ll be in touch {contact.responseTime.toLowerCase()}.
          If something urgent comes up before then, please call or text 988 for the Suicide and
          Crisis Lifeline, or go to your nearest emergency room.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* HIPAA notice — required, prominent, above the form */}
      <div className="flex gap-3 border-l-2 border-[var(--color-accent)] bg-[var(--color-bg-alt)] p-4">
        <ShieldCheck
          className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent-deep)]"
          aria-hidden="true"
        />
        <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
          This form is for scheduling and general inquiries only. Please do not share protected
          health information (PHI) or medical details. It is not a secure or confidential channel.
        </p>
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-[var(--color-ochre-deep)]">
          {state.message}
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow mb-2 block">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={!!state.fieldErrors?.name}
            aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
            className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-ink)] outline-none focus:border-[var(--color-accent)]"
          />
          <FieldError id="name-error" message={state.fieldErrors?.name} />
        </div>

        <div>
          <label htmlFor="email" className="eyebrow mb-2 block">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={!!state.fieldErrors?.email}
            aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
            className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-ink)] outline-none focus:border-[var(--color-accent)]"
          />
          <FieldError id="email-error" message={state.fieldErrors?.email} />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="eyebrow mb-2 block">
          Phone <span className="lowercase tracking-normal text-[var(--color-ink-muted)]">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-ink)] outline-none focus:border-[var(--color-accent)]"
        />
      </div>

      <div>
        <label htmlFor="message" className="eyebrow mb-2 block">
          What brings you here?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          aria-invalid={!!state.fieldErrors?.message}
          aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
          className="w-full resize-y border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-ink)] outline-none focus:border-[var(--color-accent)]"
        />
        <FieldError id="message-error" message={state.fieldErrors?.message} />
      </div>

      <fieldset>
        <legend className="eyebrow mb-2">Preferred contact method</legend>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm text-[var(--color-ink)]">
            <input type="radio" name="preferredContact" value="email" defaultChecked className="accent-[var(--color-accent)]" />
            Email
          </label>
          <label className="flex items-center gap-2 text-sm text-[var(--color-ink)]">
            <input type="radio" name="preferredContact" value="phone" className="accent-[var(--color-accent)]" />
            Phone
          </label>
        </div>
      </fieldset>

      {/* Honeypot: hidden from users, catches bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <SubmitButton />
    </form>
  );
}
