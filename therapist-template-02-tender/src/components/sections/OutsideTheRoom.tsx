import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { practitioner } from "@content/practitioner";

/**
 * The human moment. A more casual photo and a few warm paragraphs about who
 * they are outside of being a therapist.
 */
export function OutsideTheRoom() {
  return (
    <section className="bg-[var(--color-bg-alt)] py-24 lg:py-32" aria-label="Outside the room">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-square w-full overflow-hidden rounded-[999px]">
              <Image
                src="/images/office.jpg"
                alt={`A glimpse of ${practitioner.firstName}'s life outside the therapy room`}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow mb-4">Outside the room</p>
            <div className="reading space-y-4">
              {practitioner.outsideTheRoomBio.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-[var(--color-ink)]">
                  {p}
                </p>
              ))}
            </div>
            <Link
              href="/story"
              className="group mt-7 inline-flex items-center gap-2 font-body text-sm font-semibold text-[var(--color-ink)]"
            >
              Read my full story
              <ArrowRight
                className="h-4 w-4 text-[var(--color-blush-deep)] transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
