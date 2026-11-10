import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { Icon } from "@/components/icon";
import { ServiceCard } from "@/components/service-card";
import { buttonVariants } from "@/components/ui/button";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return { title: s?.title ?? "Service", description: s?.intro[0] };
}

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative">
        <div className="relative h-56 w-full sm:h-72">
          <Image src={service.image} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-transparent" />
        </div>
        <div className="container-x absolute inset-x-0 top-4 text-xs text-navy/80">
          <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link><ChevronRight className="size-3" />
            <Link href="/services" className="hover:underline">Services</Link><ChevronRight className="size-3" />
            <span className="font-semibold">{service.title}</span>
          </nav>
        </div>
        <div className="container-x relative -mt-14 sm:-mt-16">
          <div className="max-w-xl rounded-2xl bg-white p-6 shadow-xl sm:p-8">
            <span className="-mt-14 mb-3 flex size-14 items-center justify-center rounded-full bg-white text-mint-strong shadow-md">
              <Icon name={service.icon} className="size-6" />
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight">{service.title}</h1>
          </div>
        </div>
      </section>

      <section className="container-x max-w-4xl py-12">
        {service.intro.map((p) => (
          <p key={p} className="mb-4 text-base leading-relaxed text-navy/75">{p}</p>
        ))}
        {service.list && (
          <div className="mt-6 rounded-xl bg-mint-soft/60 p-6">
            <h2 className="font-bold">{service.listTitle}</h2>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {service.list.map((l) => (
                <li key={l} className="flex gap-2.5 text-sm text-navy/85"><Check className="mt-0.5 size-4 shrink-0 text-mint-strong" />{l}</li>
              ))}
            </ul>
          </div>
        )}
        <Link href="/contact" className={cn(buttonVariants({ variant: "navy", size: "xl" }), "mt-8")}>
          Get Started <ArrowRight className="size-4" />
        </Link>
      </section>

      <section className="bg-surface/60">
        <div className="container-x py-14">
          <h2 className="text-2xl font-extrabold">Other services</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <CtaBanner title="Ready to explore" highlight="new opportunities?" text={`Let's discuss how our ${service.title} services can support your organization.`} cta="Contact Us" />
    </>
  );
}
