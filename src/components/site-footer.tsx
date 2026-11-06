import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { socials } from "@/components/social-icons";
import { services, site } from "@/lib/site";

const quick = [
  { label: "About Us", href: "/about" },
  { label: "Plans", href: "/plans" },
  { label: "SKAI", href: "/skai" },
  { label: "CEIS 2025", href: "/ceis-2025" },
  { label: "Event Details", href: "/event-details" },
  { label: "Contact us", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.3fr_1.4fr]">
        <div>
          <Link href="/" aria-label="Sombrilla home"><Logo light /></Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">Developing businesses to achieve the results you desire.</p>
          <div className="mt-5 flex gap-4">
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-white/80 hover:text-mint"><Icon className="size-[18px]" /></a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-wide text-white uppercase">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {quick.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-mint">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-wide text-white uppercase">Our Services</h3>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-mint">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-wide text-white uppercase">Get In Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3"><Mail className="size-4 shrink-0" /><a href={`mailto:${site.email}`} className="hover:text-mint">{site.email}</a></li>
            <li className="flex items-center gap-3"><Phone className="size-4 shrink-0" /><a href={site.phoneHref} className="hover:text-mint">{site.phone}</a></li>
            <li className="flex items-center gap-3"><Clock className="size-4 shrink-0" />{site.hours}</li>
            <li className="flex items-center gap-3"><MapPin className="size-4 shrink-0" />{site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© Copyright by Sombrilla Group of Companies</p>
          <Link href="/privacy-policy" className="uppercase hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
