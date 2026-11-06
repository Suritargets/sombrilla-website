import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Donkere CTA-band boven de footer. */
export function CtaBanner({
  title = "Ready to move your business",
  highlight = "forward?",
  text = "Discover how Sombrilla Group of Companies can support your goals with practical solutions and a dedicated team.",
  cta = "Start a conversation",
  href = "/contact",
  image = "/images/home-team.jpg",
}: {
  title?: string;
  highlight?: string;
  text?: string;
  cta?: string;
  href?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block">
        <Image src={image} alt="" fill sizes="50vw" className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
      </div>
      <div className="container-x relative flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-center md:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title} <span className="text-mint">{highlight}</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">{text}</p>
          <a href={site.phoneHref} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-mint">
            <Phone className="size-4" /> Call us: {site.phone}
          </a>
        </div>
        <Link href={href} className={cn(buttonVariants({ variant: "mint", size: "xl" }), "h-14 shrink-0 px-8 text-base")}>
          {cta} <ArrowRight className="size-5" />
        </Link>
      </div>
    </section>
  );
}
