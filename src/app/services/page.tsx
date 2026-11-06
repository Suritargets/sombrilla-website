import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/service-technology.jpg"
        eyebrow="Our Services"
        title={<>Comprehensive solutions for your business needs</>}
        text="Consulting, business, technology, entertainment & event management and more — tailored to what your organization needs."
      />

      <div className="container-x space-y-6 py-14 lg:space-y-10 lg:py-16">
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className="grid scroll-mt-32 items-stretch overflow-hidden rounded-2xl border bg-white shadow-[0_2px_14px_rgba(11,26,63,.05)] lg:grid-cols-2"
          >
            <div className={cn("relative min-h-64", i % 2 === 1 && "lg:order-2")}>
              <Image src={s.image} alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="p-7 sm:p-10">
              <span className="flex size-12 items-center justify-center rounded-full bg-mint-soft text-mint-strong">
                <Icon name={s.icon} className="size-6" />
              </span>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight">{s.title}</h2>
              {s.intro.map((p) => (
                <p key={p} className="mt-3 text-[15px] leading-relaxed text-navy/70">{p}</p>
              ))}
              {s.list && (
                <>
                  <p className="mt-5 text-sm font-semibold">{s.listTitle}:</p>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {s.list.map((l) => (
                      <li key={l} className="flex gap-2.5 text-sm text-navy/80"><Check className="mt-0.5 size-4 shrink-0 text-mint-strong" />{l}</li>
                    ))}
                  </ul>
                </>
              )}
              <Link href="/contact" className={cn(buttonVariants({ variant: "navy", size: "xl" }), "mt-7")}>
                Get Started <ArrowRight className="size-4" />
              </Link>
            </div>
          </section>
        ))}
      </div>

      <CtaBanner title="Not sure which service fits" highlight="your needs?" text="Let's discuss your goals and find the right solution together." cta="Talk to Our Team" />
    </>
  );
}
