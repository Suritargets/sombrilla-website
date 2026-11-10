import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { speakers } from "@/lib/ceis";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Speakers – CEIS 2025" };

export default function SpeakersPage() {
  return (
    <>
      <PageHero dark image="/images/event-meeting.jpg" eyebrow="CEIS 2025" title="Speakers" text="Leading voices in audit, compliance, finance and governance from across the Caribbean and beyond.">
        <Link href="/event-registration" className={cn(buttonVariants({ variant: "mint", size: "xl" }))}>Register Now <ArrowRight className="size-4" /></Link>
      </PageHero>
      <section className="container-x py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s) => (
            <article key={s.name} className="overflow-hidden rounded-xl border bg-white shadow-[0_2px_14px_rgba(11,26,63,.05)]">
              <div className="relative aspect-[4/5] bg-surface">
                <Image src={s.image} alt={s.name} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover object-top" />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold">{s.name}</h2>
                <p className="mt-2 text-[13px] leading-relaxed text-navy/65">{s.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
