import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { cancellation } from "@/lib/ceis";

export const metadata: Metadata = { title: "Cancellation Policy" };

export default function CancellationPolicyPage() {
  return (
    <>
      <PageHero dark image="/images/home-team.jpg" eyebrow="CEIS" title="Cancellation Policy" />
      <div className="container-x max-w-3xl space-y-10 py-16">
        {cancellation.map((c) => (
          <section key={c.place}>
            <h2 className="text-2xl font-extrabold">{c.place}</h2>
            <h3 className="mt-5 font-bold">Cancellation</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-navy/75">{c.cancel}</p>
            <h3 className="mt-5 font-bold">Substitution</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-navy/75">{c.substitution}</p>
          </section>
        ))}
      </div>
    </>
  );
}
