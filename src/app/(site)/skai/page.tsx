import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { site, skaiObjectives, speakers } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "SKAI – Strategic Key Alliances & Initiatives" };

export default function SkaiPage() {
  return (
    <>
      <PageHero
        dark
        image="/images/home-phone.jpg"
        eyebrow="Welcome"
        title={<>More Than a Conference – It&apos;s a Transformative Experience</>}
        text="Welcome to Strategic Key Alliances & Initiatives (SKAI), where we bring visionary leaders and change-makers together to drive impactful dialogues and innovative strategies across industries."
      >
        <Link href="/event-details" className={cn(buttonVariants({ variant: "mint", size: "xl" }))}>Learn More <ArrowRight className="size-4" /></Link>
      </PageHero>

      <section className="container-x grid items-center gap-10 py-16 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-[15px] leading-relaxed text-navy/75">
            We are excited to announce a dynamic conference taking place in Suriname, focused on fostering regional collaboration, empowering business growth, and promoting sustainable solutions. This event will bring together industry experts, government officials, entrepreneurs, and investors to explore new opportunities, exchange ideas, and build strategic alliances. Join us to be part of this transformative experience and help shape the future of business in the Caribbean and Latin American regions.
          </p>
          <h2 className="mt-8 text-2xl font-extrabold">About Strategic Key Alliances &amp; Initiatives (SKAI)</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-navy/75">
            At Strategic Key Alliances &amp; Initiatives (SKAI), our mission is to create meaningful platforms for collaboration across regions, industries, and sectors, fostering sustainable growth and innovation. We specialize in connecting leaders, businesses, and stakeholders to cultivate partnerships that advance regional development.
          </p>
          <a href={site.phoneHref} className={cn(buttonVariants({ variant: "navy", size: "xl" }), "mt-7")}><Phone className="size-4" /> Call Us Now! {site.phone}</a>
        </div>
        <div className="relative aspect-[5/2] w-full overflow-hidden rounded-2xl border bg-white">
          <Image src="/images/skai-logo.png" alt="SKAI – Strategic Key Initiative and Alliances" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-contain p-4" />
        </div>
      </section>

      <section className="bg-surface/70">
        <div className="container-x py-16">
          <h2 className="text-3xl font-extrabold tracking-tight">CEIS Summit Speakers</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {speakers.map((s) => (
              <article key={s.name} className="flex gap-4 rounded-xl border bg-white p-5 shadow-[0_2px_14px_rgba(11,26,63,.05)]">
                {s.image && (
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-full">
                    <Image src={s.image} alt={s.name} fill sizes="80px" className="object-cover object-top" />
                  </div>
                )}
                <div>
                  <h3 className="font-bold">{s.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-navy/65">{s.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">Objectives of Strategic Key Alliances &amp; Initiatives (SKAI)</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skaiObjectives.map((o, i) => (
            <div key={o.title} className="rounded-xl border bg-white p-6 shadow-[0_2px_14px_rgba(11,26,63,.05)]">
              <span className="text-2xl font-bold text-mint-strong">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-bold">{o.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-navy/65">{o.text}</p>
            </div>
          ))}
        </div>
        <Link href="/event-details" className={cn(buttonVariants({ variant: "mint", size: "xl" }), "mt-10")}>Event Details <ArrowRight className="size-4" /></Link>
      </section>

      <CtaBanner />
    </>
  );
}
