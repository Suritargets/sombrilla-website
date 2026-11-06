import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { attendees, expectations, fees } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Event Details – CEIS" };

function Pairs({ items }: { items: string[][] }) {
  return (
    <ul className="mt-5 grid gap-4 sm:grid-cols-2">
      {items.map(([t, d]) => (
        <li key={t} className="rounded-xl border bg-white p-5 shadow-[0_2px_14px_rgba(11,26,63,.05)]">
          <h3 className="font-bold">{t}</h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-navy/65">{d}</p>
        </li>
      ))}
    </ul>
  );
}

export default function EventDetailsPage() {
  return (
    <>
      <PageHero dark image="/images/event-meeting.jpg" eyebrow="Event Details" title="Summit Locations & Dates">
        <Link href="/event-registration" className={cn(buttonVariants({ variant: "mint", size: "xl" }))}>Register Now <ArrowRight className="size-4" /></Link>
      </PageHero>

      <div className="container-x space-y-14 py-16">
        {/* Locaties */}
        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border-2 border-mint-strong bg-white p-6">
            <p className="text-sm font-semibold text-mint-strong">June 4-5, 2026</p>
            <h2 className="mt-1 text-2xl font-extrabold">Aruba Edition</h2>
            <p className="mt-2 text-sm text-navy/70">Navigating Economic Horizons: Innovating Finance for Sustainable Growth.</p>
          </div>
          <div className="rounded-xl border bg-white p-6">
            <p className="text-sm font-semibold text-navy/50">(To be Announced)</p>
            <h2 className="mt-1 text-2xl font-extrabold">Barbados Edition</h2>
          </div>
        </section>

        <section className="grid items-start gap-8 lg:grid-cols-2">
          <article>
            <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-xl"><Image src="/images/event-2.jpg" alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div>
            <h2 className="text-xl font-bold">Suriname: A Land of Opportunity in Natural Resources and Business Development</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-navy/75">Suriname stands at the forefront of South America’s resource-rich landscape. With significant reserves of oil and minerals, Suriname is increasingly recognized for its potential in energy and resource development. At the same time, the country is witnessing growth in sectors such as tourism and business support services, creating a fertile ground for investments and partnerships. The financial sector in Suriname is evolving, with increasing opportunities for businesses seeking to expand their presence in South America.</p>
            <Link href="/event-registration" className={cn(buttonVariants({ variant: "navy", size: "xl" }), "mt-5")}>Register Now <ArrowRight className="size-4" /></Link>
          </article>
          <article>
            <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-xl"><Image src="/images/event-1.jpg" alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div>
            <h2 className="text-xl font-bold">Aruba: A Hub of Tourism and Financial Excellence</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-navy/75">Aruba is globally recognized for its thriving tourism industry, attracting millions of visitors to its pristine beaches and luxury resorts each year. Beyond its tourism appeal, Aruba has established itself as a growing financial center, offering a favorable business climate for international companies. With an expanding portfolio of business support services, the island is positioning itself as a regional leader in technology-driven solutions and innovation in finance. Aruba’s emerging oil sector, combined with its well-developed tourism and financial industries, make it an ideal location for forward-thinking investments.</p>
            <Link href="/event-registration" className={cn(buttonVariants({ variant: "navy", size: "xl" }), "mt-5")}>Register Now <ArrowRight className="size-4" /></Link>
          </article>
        </section>

        <section className="max-w-4xl">
          <h2 className="text-2xl font-extrabold">Common Vision: Unlocking Regional Synergies</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-navy/75">Both Aruba and Suriname share common strengths in sectors such as <strong>tourism, finance, oil, and business support services</strong>. While each country brings its own unique advantages, their shared commitment to fostering sustainable development and regional growth creates vast potential for collaboration. At CEIS, we believe in harnessing these synergies to unlock new opportunities, bridge industries, and support businesses in both countries as they chart paths towards long-term success.</p>
          <p className="mt-3 text-[15px] leading-relaxed text-navy/75">Together, Aruba and Suriname offer a powerful combination of tourism appeal, financial innovation, energy potential, and business services. Through our initiatives, CEIS is committed to helping businesses and leaders leverage these strengths to drive progress across the Caribbean and Latin America.</p>
        </section>

        <section><h2 className="text-2xl font-extrabold">Who Should Attend?</h2><p className="mt-2 text-sm text-navy/65">The CEIS summits are designed for:</p><Pairs items={attendees} /></section>
        <section><h2 className="text-2xl font-extrabold">What To Expect?</h2><Pairs items={expectations} /></section>

        <p className="max-w-4xl text-[15px] leading-relaxed text-navy/75">The Caribbean Excellence &amp; Innovation Summit (CEIS) 2026 is more than just an event—it is a <strong>catalyst for transformation, resilience, and economic cooperation</strong>. Be part of this forward-thinking initiative and help shape the financial future of the Caribbean. Reserve your seat today and join us in Aruba – June 2026!</p>

        {/* Fees */}
        <section>
          <h2 className="text-2xl font-extrabold">CEIS 2026 – Registration Fees</h2>
          <p className="mt-2 text-sm text-navy/65">Choose the registration option that best suits your participation needs and secure your spot at the CEIS 2026 summit in Aruba.</p>
          <div className="mt-6 overflow-x-auto rounded-xl border">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>{fees.columns.map((c) => <th key={c} className="px-4 py-3 font-semibold">{c}</th>)}</tr>
              </thead>
              <tbody>
                {fees.rows.map((r) => (
                  <tr key={r[0]} className="border-t even:bg-surface/60">
                    {r.map((c, i) => <td key={i} className={cn("px-4 py-3", i === 0 ? "font-medium" : "text-navy/80")}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-mint-soft/60 p-6">
            <h3 className="text-lg font-bold">Registration Includes</h3>
            <ul className="mt-4 space-y-2.5">
              {fees.includes.map((f) => <li key={f} className="flex gap-2.5 text-sm text-navy/80"><Check className="mt-0.5 size-4 shrink-0 text-mint-strong" />{f}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Payment &amp; Discounts</h3>
            <ul className="mt-4 space-y-3">
              {fees.discounts.map(([t, d]) => <li key={t} className="text-sm text-navy/75"><strong className="text-navy">{t}:</strong> {d}</li>)}
            </ul>
          </div>
        </section>
      </div>

      <CtaBanner title="Register" highlight="Now!" text="Secure your participation and be part of the financial transformation shaping Aruba’s economic future." cta="Register Now" href="/event-registration" image="/images/event-1.jpg" />
    </>
  );
}
