import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { values } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "About" };

const goals = [
  "adaptive to stay ahead (or stay in the game) in a world where change is constant,",
  "safe and secure, managing risks and being right the first time.",
  "building the right competencies to continuously improve, at all levels, from management to key users.",
  "able to meet organizations desires.",
  "excel in providing high quality experiences.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        dark
        image="/images/service-misc.jpg"
        eyebrow="About"
        title="Who we are"
        text="A business development organization focused on providing solutions that match your company's needs."
      >
        <Link href="/services" className={cn(buttonVariants({ variant: "mint", size: "xl" }))}>
          Our Services <ArrowRight className="size-4" />
        </Link>
      </PageHero>

      {/* WHO WE ARE */}
      <section className="container-x grid items-start gap-10 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-20">
        <div className="space-y-8">
          <p className="text-[15px] leading-relaxed text-navy/75">
            We help our clients to realize their full business potential by providing tailormade solutions by capturing value with <strong>technology</strong>, <strong>consulting</strong>, and <strong>managed services</strong>. The areas we support are:
          </p>
          <div>
            <h2 className="text-xl font-bold">Strategical, tactical, operational</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-navy/70">
              We support our clients&apos; management setting a future proof control strategy to improve quality, be more effective, reduce costs or provide trust to stakeholders. We add value translating strategies into tactical improvements to strengthen your operations. This includes people&apos;s awareness, education, and well-being (happiness).
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Quality</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-navy/70">
              We focus on quality and efficiency in everything we do while providing flexibility to our people and aim to contribute to their personal development to make the communities &amp; companies better.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-navy/70">
              Experienced specialists are hard to get and even more difficult to keep. This is why we offer full flexibility to our people in terms of where, when, and how much they want to work. We provide an umbrella for global specialists and encourage them to stay independent and build their future locally. In the meantime, we encourage them to become a part of a bigger whole and make Sombrilla their home.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-navy/70">
              Our vision, mission, and values focus on the welfare of everyone and contribute to many of the Sustainable Development Goals (SDG&apos;s). We truly believe that the development of small businesses can be a major driver in making communities and the world a better place.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image src="/images/about-portrait.jpg" alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="bg-surface/70">
        <div className="container-x py-16">
          <h2 className="text-3xl font-extrabold tracking-tight">Mission, Vision, Values</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-7 shadow-[0_2px_14px_rgba(11,26,63,.05)]">
              <h3 className="text-lg font-bold text-mint-strong">Our Vision</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy/75">It&apos;s all about achieving your desired results while keeping up with the future.</p>
            </div>
            <div className="rounded-xl border bg-white p-7 shadow-[0_2px_14px_rgba(11,26,63,.05)]">
              <h3 className="text-lg font-bold text-mint-strong">Our Mission</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy/75">We provide solutions to businesses to achieve the results you desire and create better communities.</p>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-navy/70">
            Best practice development is at the heart of all our concepts. We aim to please and help our clients manage, develop, optimize, and secure their strategy to accelerate success and be:
          </p>
          <ul className="mt-4 grid max-w-3xl gap-2.5">
            {goals.map((g) => (
              <li key={g} className="flex gap-2.5 text-sm text-navy/80"><Check className="mt-0.5 size-4 shrink-0 text-mint-strong" />{g}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-x py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image src="/images/about-values.jpg" alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Our values</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="rounded-xl border bg-white p-5 shadow-[0_2px_14px_rgba(11,26,63,.05)]">
                  <span className="flex size-10 items-center justify-center rounded-full bg-mint-soft text-mint-strong"><Icon name={v.icon} className="size-5" /></span>
                  <h3 className="mt-3 font-bold">{v.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-navy/65">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="Let's create new opportunities" highlight="together." text="We are ready to support your organization with tailored solutions." cta="Contact Us" />
    </>
  );
}
