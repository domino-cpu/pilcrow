import { site } from "@content/site";
import { practitioner } from "@content/practitioner";
import { contact } from "@content/contact";
import { fees } from "@content/fees";

/**
 * JSON-LD structured data: a MedicalBusiness (the practice) with the
 * practitioner as a Person. Helps Google build an accurate entity/knowledge
 * panel and improves local + name-search visibility.
 *
 * Rendered on the home page only (canonical entity source).
 */
export function StructuredData() {
  const [street, ...rest] = contact.address.split(",").map((s) => s.trim());

  const data = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "ProfessionalService"],
    "@id": `${site.url}/#practice`,
    name: site.name,
    url: site.url,
    email: contact.email,
    telephone: contact.phone,
    priceRange: `$${fees.sessionRate}`,
    description: site.tagline,
    image: `${site.url}/images/og-image.jpg`,
    medicalSpecialty: "Psychiatric",
    ...(contact.virtualOnly
      ? { areaServed: `${site.state}, US` }
      : {
          address: {
            "@type": "PostalAddress",
            streetAddress: street,
            addressLocality: site.city,
            addressRegion: site.state,
            postalCode: rest.join(", ").match(/\d{5}/)?.[0] ?? undefined,
            addressCountry: "US",
          },
        }),
    founder: {
      "@type": "Person",
      name: practitioner.fullName,
      honorificSuffix: practitioner.credentials.join(", "),
      jobTitle: "Licensed Therapist",
      description: practitioner.bioShort,
      image: `${site.url}/images/portrait.jpg`,
      knowsAbout: practitioner.modalities,
    },
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; no user input is included.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
