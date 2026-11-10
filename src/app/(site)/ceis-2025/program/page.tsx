import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { program } from "@/lib/ceis";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Program – CEIS 2025" };

export default function ProgramPage() {
  return (
    <>
      <PageHero dark image="/images/event-2.jpg" eyebrow="CEIS 2025" title="Program" text="Three days of leadership, compliance, innovation and discovery in Suriname.">
        <Link href="/event-registration" className={cn(buttonVariants({ variant: "mint", size: "xl" }))}>Register Now <ArrowRight className="size-4" /></Link>
      </PageHero>
      <section className="container-x max-w-4xl space-y-6 py-16">
        {program.map((d) => (
          <article key={d.day} className="rounded-xl border bg-white p-6 shadow-[0_2px_14px_rgba(11,26,63,.05)] md:p-8">
            <p className="text-sm font-semibold text-mint-strong">{d.date}</p>
            <h2 className="mt-1 text-xl font-extrabold md:text-2xl">{d.day}</h2>
            <div className="mt-4 space-y-3">
              {d.text.map((t) => <p key={t} className="text-[15px] leading-relaxed text-navy/75">{t}</p>)}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
