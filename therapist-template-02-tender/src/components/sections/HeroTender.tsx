import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { HandwrittenAccent } from "@/components/ui/HandwrittenAccent";
import { practitioner } from "@content/practitioner";
import { home } from "@content/home";

export function HeroTender() {
  return (
    <section className="overflow-hidden" aria-label="Introduction">
      <div className="mx-auto grid w-full max-w-[var(--container-max)] items-center gap-10 px-6 pb-16 pt-12 md:px-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-[72px] lg:pb-24 lg:pt-16">
        {/* Left: the letter */}
        <div className="order-2 lg:order-1">
          <HandwrittenAccent className="mb-6">{home.hero.greeting}</HandwrittenAccent>
          <h1 className="h1-hero text-[var(--color-ink)]">{home.hero.title}</h1>
          <div className="reading mt-8 space-y-4">
            {home.hero.opening.map((line, i) => (
              <p key={i} className="text-lg leading-relaxed text-[var(--color-ink-muted)]">
                {line}
              </p>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/story" variant="primary">
              Read my story
            </Button>
            <Button href="/contact" variant="secondary">
              Reach out
            </Button>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="relative order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px]">
            <Image
              src="/images/portrait.jpg"
              alt={`${practitioner.fullName}, ${practitioner.credentials.join(", ")}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
