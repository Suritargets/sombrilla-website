import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { venue } from "@/lib/ceis";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Venue – CEIS 2025" };

export default function VenuePage() {
  return (
    <>
      <PageHero dark image="/images/event-1.jpg" eyebrow="CEIS 2025" title={venue.title} text={venue.text}>
        <Link href="/event-registration" className={cn(buttonVariants({ variant: "mint", size: "xl" }))}>Register Now <ArrowRight className="size-4" /></Link>
      </PageHero>
      <section className="container-x max-w-3xl py-16">
        <h2 className="text-2xl font-extrabold">How to get there?</h2>
        <ul className="mt-6 space-y-5">
          <li className="flex gap-4">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-mint-soft text-mint-strong"><Phone className="size-4" /></span>
            <div><p className="text-sm font-semibold">Phone</p><a href={venue.phoneHref} className="text-sm text-navy/70 hover:text-mint-strong">{venue.phone}</a></div>
          </li>
          <li className="flex gap-4">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-mint-soft text-mint-strong"><MapPin className="size-4" /></span>
            <div><p className="text-sm font-semibold">Address</p><p className="text-sm text-navy/70">{venue.address}</p></div>
          </li>
        </ul>
      </section>
    </>
  );
}
