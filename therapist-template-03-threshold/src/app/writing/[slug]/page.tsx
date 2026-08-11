import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { site } from "@content/site";
import { writing } from "@content/writing";

interface Params {
  params: Promise<{ slug: string }>;
}

// Only internal (non-external) essays get their own page.
export function generateStaticParams() {
  return writing.filter((w) => !w.external).map((w) => ({ slug: w.slug }));
}

function getEntry(slug: string) {
  return writing.find((w) => w.slug === slug && !w.external);
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.excerpt,
    alternates: { canonical: `/writing/${entry.slug}` },
  };
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

export default async function EssayPage({ params }: Params) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry || !site.showWriting) notFound();

  return (
    <>
      <article className="py-16 lg:py-24">
        <Container>
          <div className="reading mx-auto">
            <Link
              href="/writing"
              className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
              All writing
            </Link>

            <div className="mb-3 flex items-center gap-3">
              <span className="eyebrow">{entry.category}</span>
              <span className="text-sm text-[var(--color-ink-muted)]">
                {formatDate(entry.date)}
              </span>
            </div>
            <h1 className="h1-hero mb-10 text-balance text-[var(--color-ink)]">{entry.title}</h1>

            {entry.content.map((p, i) => (
              <p
                key={i}
                className={`mb-5 leading-relaxed text-[var(--color-ink-muted)] ${
                  i === 0 ? "dropcap text-[var(--color-ink)]" : ""
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </Container>
      </article>

      <BookingCTA />
    </>
  );
}
