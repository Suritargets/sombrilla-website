import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { socials } from "@/components/social-icons";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const info = [
    { icon: Phone, label: "Office Phone", value: site.phone, href: site.phoneHref },
    { icon: Mail, label: "Company Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Clock, label: "Working Hours", value: "Mon-Fri / 8-5", href: undefined },
    { icon: MapPin, label: "Office Address", value: site.address, href: undefined },
  ];
  return (
    <>
      <PageHero dark image="/images/home-team.jpg" eyebrow="Contact" title={<>Let&apos;s start a conversation</>} text="We are ready to support your organization with practical solutions. Get in touch with our team today." />

      <section className="container-x grid gap-12 py-14 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <h2 className="text-xl font-bold">Send us your questions</h2>
          <p className="mt-1 mb-6 text-sm text-navy/60">Fill out the form and we will get back to you as soon as possible.</p>
          <ContactForm />
        </div>

        <aside>
          <h2 className="text-xl font-bold">Contact Information</h2>
          <ul className="mt-6 space-y-5">
            {info.map(({ icon: I, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-mint-soft text-mint-strong"><I className="size-4" /></span>
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  {href ? <a href={href} className="text-sm text-navy/70 hover:text-mint-strong">{value}</a> : <p className="text-sm text-navy/70">{value}</p>}
                </div>
              </li>
            ))}
          </ul>
          <Link href="/book" className={cn(buttonVariants({ variant: "navy", size: "xl" }), "mt-8")}><CalendarCheck className="size-4" /> Book an appointment</Link>
          <p className="mt-8 text-sm font-semibold">Follow Us</p>
          <div className="mt-3 flex gap-4">
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-navy hover:text-mint-strong"><Icon className="size-5" /></a>
            ))}
          </div>
        </aside>
      </section>

      <section className="container-x pb-16">
        <iframe
          title="Sombrilla Group of Companies – Savaneta 175E, Aruba"
          src="https://maps.google.com/maps?q=Savaneta%20175E%2C%20Aruba&t=m&z=13&output=embed&iwloc=near"
          loading="lazy"
          className="h-80 w-full rounded-xl border-0"
        />
      </section>
    </>
  );
}
