import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, CalendarDays, Check, MessageCircle, Monitor } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { Icon } from "@/components/icon";
import { ServiceCard } from "@/components/service-card";
import { buttonVariants } from "@/components/ui/button";
import { businessServices, qualities, services } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-surface">
        <div className="container-x grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:py-16">
          <div className="relative z-10">
            <p className="eyebrow">Sombrilla Group of Companies</p>
            <h1 className="mt-6 text-[2.5rem] leading-[1.05] font-extrabold tracking-tight sm:text-[3.4rem]">
              Developing businesses to achieve the{" "}
              <span className="text-gradient-mint">results you desire</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy/80">
              We provide solutions for business development and outsourcing needs of companies in the public, private, voluntary sector, start-ups, small and medium sized entities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className={cn(buttonVariants({ variant: "navy", size: "xl" }), "h-[52px] px-7")}>
                Explore Our Services <ArrowRight className="size-4" />
              </Link>
              <Link href="/contact" className={cn(buttonVariants({ variant: "outline-mint", size: "xl" }), "h-[52px] px-7")}>
                <MessageCircle className="size-4" /> Talk to Our Team
              </Link>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {["Excellence", "Integrity & professionalism", "Effective strategies"].map((t) => (
                <div key={t} className="border-l-2 border-mint-strong/60 pl-3 text-sm font-semibold">{t}</div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-2xl shadow-xl lg:aspect-[1/1.02]">
              <Image src="/images/service-business.jpg" alt="Sombrilla team in discussion" fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <Badge className="top-4 left-4 bg-navy text-white sm:-left-6" icon={<BarChart3 className="size-5 text-mint" />} label="Business" />
            <Badge className="top-16 right-4 bg-mint text-navy sm:top-12 sm:-right-4" icon={<Monitor className="size-5" />} label="Technology" />
            <Badge className="right-4 bottom-8 bg-navy text-white sm:-right-4" icon={<CalendarDays className="size-5 text-mint" />} label={<>Entertainment &amp;<br />Event Management</>} />
          </div>
        </div>
      </section>

      {/* QUALITIES */}
      <section className="border-y bg-surface/70">
        <div className="container-x grid items-center gap-6 py-7 lg:grid-cols-[1fr_repeat(3,1.2fr)]">
          <h2 className="text-lg leading-snug font-bold lg:max-w-[14rem]">Three qualities we are committed to</h2>
          {qualities.map((q, i) => (
            <div key={q.title} className="flex gap-4 lg:border-l lg:pl-6">
              <Icon name={["badge", "shield", "target"][i]} className="size-9 shrink-0 text-navy" />
              <div>
                <h3 className="text-sm font-semibold">{q.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-navy/65">{q.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-x grid items-center gap-10 py-16 lg:grid-cols-[1fr_1fr] lg:py-20">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image src="/images/home-phone.jpg" alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="eyebrow">About Sombrilla Group Of Companies</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Solutions that match your company&apos;s needs</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-navy/70">
            We are a business development organization focused on providing solutions that match your company&apos;s needs. We help our clients to realize their full business potential by providing tailormade solutions by capturing value with technology, consulting, and managed services.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-navy/70">
            Our team consists of business development, IT, management, social media and finance specialists. Working remotely with current projects in Suriname, the Netherlands and Aruba, the team delivers a variety of specialized business services including:
          </p>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {businessServices.map((s) => (
              <li key={s} className="flex gap-2.5 text-sm text-navy/80">
                <Check className="mt-0.5 size-4 shrink-0 text-mint-strong" />{s}
              </li>
            ))}
          </ul>
          <Link href="/about" className={cn(buttonVariants({ variant: "navy", size: "xl" }), "mt-8")}>
            About Us <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-surface/60">
        <div className="container-x py-16 lg:py-20">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Our Services</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Services built around your goals</h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 border-b border-mint-strong pb-1 text-sm font-medium text-mint-strong transition-all hover:gap-3">
              View all services <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* CEIS teaser */}
      <section className="container-x py-14">
        <div className="relative overflow-hidden rounded-2xl bg-navy text-white">
          <Image src="/images/event-1.jpg" alt="" fill sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
          <div className="relative flex flex-col items-start justify-between gap-6 p-8 sm:p-12 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-[11px] font-medium tracking-[0.3em] text-mint uppercase">Caribbean Excellence &amp; Innovation Summit</p>
              <h2 className="mt-3 text-3xl font-bold">CEIS 2026 – Aruba Edition, June 4-5, 2026</h2>
              <p className="mt-3 text-sm text-white/80">Navigating Economic Horizons: Innovating Finance for Sustainable Growth.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/event-details" className={cn(buttonVariants({ variant: "mint", size: "xl" }))}>Event Details <ArrowRight className="size-4" /></Link>
              <Link href="/event-registration" className={cn(buttonVariants({ variant: "outline", size: "xl" }), "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white")}>Register</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function Badge({ className, icon, label }: { className?: string; icon: React.ReactNode; label: React.ReactNode }) {
  return (
    <span className={cn("absolute flex items-center gap-3 rounded-full px-4 py-2.5 text-sm leading-tight font-semibold shadow-lg", className)}>
      {icon}
      {label}
    </span>
  );
}
