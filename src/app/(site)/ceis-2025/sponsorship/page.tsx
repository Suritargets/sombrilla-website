import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { sponsorship as s } from "@/lib/ceis";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Sponsorship – CEIS 2025" };

export default function SponsorshipPage() {
  return (
    <>
      <PageHero dark image="/images/event-meeting.jpg" eyebrow="CEIS 2025" title="CEIS Sponsorship" text={s.intro[0]}>
        <a href={`mailto:${site.email}?subject=CEIS Sponsorship`} className={cn(buttonVariants({ variant: "mint", size: "xl" }))}><Mail className="size-4" /> Become a Sponsor</a>
      </PageHero>
      <div className="container-x max-w-5xl space-y-14 py-16">
        <section className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold">CEIS Sponsorship</h2>
            {s.intro.slice(1).map((t) => <p key={t} className="text-[15px] leading-relaxed text-navy/75">{t}</p>)}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl"><Image src="/images/event-2.jpg" alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" /></div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">{s.benefitsTitle}</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {s.benefits.map(([t, d]) => (
              <li key={t} className="rounded-xl border bg-white p-5 shadow-[0_2px_14px_rgba(11,26,63,.05)]">
                <h3 className="font-bold">{t}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-navy/65">{d}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[15px] leading-relaxed text-navy/75">{s.closing}</p>
          <p className="mt-6 rounded-xl bg-mint-soft/60 p-5 text-sm font-medium">{s.note}</p>
        </section>
      </div>
    </>
  );
}
