import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { plans } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Plans" };

type Item = { name: string; price: string; features: string[]; tag?: string; featured?: boolean };

function PlanGrid({ title, items }: { title: string; items: Item[] }) {
  return (
    <section className="container-x py-12">
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {items.map((p) => (
          <article
            key={p.name}
            className={cn(
              "flex flex-col rounded-2xl border bg-white p-7 shadow-[0_2px_14px_rgba(11,26,63,.05)]",
              p.featured && "border-mint-strong ring-2 ring-mint/60",
            )}
          >
            {p.tag && <p className="text-xs font-semibold tracking-wide text-mint-strong uppercase">{p.tag}</p>}
            <h3 className="mt-1 text-lg font-bold">{p.name}</h3>
            <p className="mt-3 text-3xl font-extrabold">{p.price}</p>
            <p className="mt-5 text-sm font-semibold">Service Includes:</p>
            <ul className="mt-3 flex-1 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-[13px] leading-relaxed text-navy/75"><Check className="mt-0.5 size-4 shrink-0 text-mint-strong" />{f}</li>
              ))}
            </ul>
            <Link href="/contact" className={cn(buttonVariants({ variant: p.featured ? "mint" : "navy", size: "xl" }), "mt-7 w-full")}>
              Get Started <ArrowRight className="size-4" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function PlansPage() {
  return (
    <>
      <PageHero image="/images/home-hero.jpg" eyebrow="Plans" title="Plans" text="Transparent pricing models for business plans and project proposals." />
      <PlanGrid title={plans.business.title} items={plans.business.items} />
      <PlanGrid title={plans.proposals.title} items={plans.proposals.items} />
      <section className="container-x pb-16">
        <div className="rounded-2xl bg-mint-soft/60 p-7 sm:p-9">
          <h2 className="text-xl font-bold">Additional Services &amp; Fees</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {plans.extras.map((e) => (
              <li key={e} className="flex gap-2.5 text-sm text-navy/80"><Check className="mt-0.5 size-4 shrink-0 text-mint-strong" />{e}</li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
