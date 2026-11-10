import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "CEIS 2025 – Caribbean Excellence and Innovation Summit" };

const attend = [
  ["Financial Institutions & Regulators", "Banks, insurance companies, and compliance professionals seeking clarity on new regulations and best practices"],
  ["Government & Policy Leaders", "Decision-makers driving Suriname’s or the region’s economic transformation"],
  ["Audit & Risk Management Professionals", "Experts aiming to elevate standards and enhance transparency in the financial system"],
  ["Business Leaders, Entrepreneurs & Investors", "Those looking to navigate new landscapes, unlock investment potential, and contribute to Suriname’s future growth"],
  ["Technology & Innovation Specialists", "Fintech innovators and digital leaders shaping the next generation of financial services"],
];
const expect = [
  ["Keynote Speeches & Interactive Panels", "Learn from leading experts, senior regulators, and industry visionaries addressing today’s most pressing issues in finance, compliance, and governance"],
  ["Workshops & Breakout Sessions", "Take part in practical, hands-on learning on topics like digital finance, risk-oriented compliance, and building resilient institutions"],
  ["Networking & Strategic Partnerships", "Engage directly with decision-makers, financial professionals, and innovators to build alliances that benefit your organization and Suriname’s economic future"],
];

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

export default function Ceis2025Page() {
  return (
    <>
      <PageHero
        dark
        image="/images/service-events.jpg"
        eyebrow="CEIS 2025"
        title="Caribbean Excellence and Innovation Summit"
        text="CEIS 2025 is Suriname’s premier platform for financial excellence and innovation, attracting top industry decision-makers, regional stakeholders, and international thought leaders."
      >
        <Link href="/event-details" className={cn(buttonVariants({ variant: "mint", size: "xl" }))}>Event Details <ArrowRight className="size-4" /></Link>
      </PageHero>

      <div className="container-x max-w-4xl space-y-12 py-16">
        <p className="text-[15px] leading-relaxed text-navy/75">
          The Caribbean Excellence and Innovation Summit 2025 – Suriname Edition is a pivotal gathering dedicated to building a stronger, more resilient financial landscape for Suriname and the wider region. Taking place September 11-12, 2025, in Paramaribo, this summit unites financial institutions, regulators, business leaders, policy makers, and innovators to address Suriname’s compliance journey and economic future.
        </p>
        <section>
          <h2 className="text-2xl font-extrabold">Why is This Summit Important for Suriname and Its People?</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-navy/75">Suriname stands at a critical moment in its financial evolution. Strengthening regulatory systems, embracing modern compliance strategies, and ensuring stable financial institutions are vital for the country’s long-term prosperity. This summit will focus on how Suriname can advance its financial sector, foster public trust, and unlock sustainable economic growth—creating lasting benefits for individuals, communities, and enterprises across the nation. Attendees will gain insights on anti-money laundering, good governance, digital transformation, and risk management, all directly impacting national stability and opportunity.</p>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold">Why Should Businesses Attend?</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-navy/75">For businesses, the summit is more than an educational experience—it’s an engine for strategic advantage. As new rules and innovations shape the financial sector, companies able to adapt, comply, and innovate will seize tomorrow’s opportunities. Whether you are part of a financial institution, an emerging fintech company, an investor, or a corporate leader, you’ll learn from some of the brightest minds in compliance, technology, and business strategy, and forge connections that can drive your own growth and resilience.</p>
        </section>
        <section><h2 className="text-2xl font-extrabold">Who Should Attend?</h2><Pairs items={attend} /></section>
        <section><h2 className="text-2xl font-extrabold">What To Expect?</h2><Pairs items={expect} /></section>
        <p className="flex gap-3 rounded-xl bg-mint-soft/60 p-6 text-[15px] leading-relaxed text-navy/80">
          <MapPin className="mt-1 size-5 shrink-0 text-mint-strong" />
          The SKAI Conference 2025 is more than just an event—it’s a movement to inspire, connect, and transform. By participating, you join an influential community working to secure Suriname’s economic prosperity and strengthen the Caribbean’s place on the global stage.
        </p>
      </div>
      <CtaBanner title="Join us at" highlight="CEIS" text="See the latest summit dates, locations and registration fees." cta="Event Details" href="/event-details" image="/images/event-2.jpg" />
    </>
  );
}
