"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, ChevronDown, Clock, Mail, Menu, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { socials } from "@/components/social-icons";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { ceisMenu, nav, services, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const ceisPaths = ["/ceis-2025", "/event-details", "/event-registration"];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (item: (typeof nav)[number]) => {
    if (item.href === "/") return pathname === "/";
    if ("menu" in item && item.menu === "ceis") return ceisPaths.includes(pathname);
    return pathname.startsWith(item.href);
  };

  const dropdown = (menu: string) =>
    menu === "services"
      ? services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))
      : ceisMenu;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      {/* Info balk */}
      <div className="hidden bg-navy text-[12px] text-white/85 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-mint"><Mail className="size-3.5" />{site.email}</a>
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-mint"><Phone className="size-3.5" />{site.phone}</a>
            <span className="flex items-center gap-2"><Clock className="size-3.5" />{site.hours}</span>
          </div>
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="hover:text-mint"><Icon className="size-3.5" /></a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b">
        <div className="container-x flex h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label="Sombrilla Group of Companies – home"><Logo /></Link>

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">
            {nav.map((item) => {
              const active = isActive(item);
              const link = (
                <Link
                  href={item.href}
                  className={cn("relative flex items-center gap-1 py-2 text-sm font-medium text-navy/75 transition-colors hover:text-navy", active && "text-navy")}
                >
                  {item.label}
                  {"menu" in item && <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />}
                  {active && <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded bg-mint-strong" />}
                </Link>
              );
              if (!("menu" in item)) return <div key={item.href}>{link}</div>;
              return (
                <div key={item.href} className="group relative">
                  {link}
                  <div className="invisible absolute top-full left-1/2 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className="rounded-xl border bg-white p-2 shadow-xl">
                      {dropdown(item.menu).map((d) => (
                        <Link key={d.href} href={d.href} className="block rounded-lg px-3 py-2.5 text-sm text-navy/85 hover:bg-mint-soft">{d.label}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className={cn(buttonVariants({ variant: "mint", size: "xl" }), "hidden h-11 sm:inline-flex")}>
              Let&apos;s Talk <ArrowRight className="size-4" />
            </Link>
            <button type="button" onClick={() => setOpen(true)} className="inline-flex size-11 items-center justify-center rounded-lg text-navy hover:bg-mint-soft xl:hidden" aria-label="Open menu">
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[85%] max-w-sm overflow-y-auto bg-white p-6">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Logo className="mb-6 h-10" />
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className={cn("block border-b py-3.5 text-base font-semibold text-navy/80", isActive(item) && "text-mint-strong")}>
                  {item.label}
                </Link>
                {"menu" in item && (
                  <div className="border-b py-2 pl-4">
                    {dropdown(item.menu).map((d) => (
                      <Link key={d.href} href={d.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-navy/70">{d.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Link href="/contact" onClick={() => setOpen(false)} className={cn(buttonVariants({ variant: "mint", size: "xl" }), "mt-8 w-full")}>
            Let&apos;s Talk <ArrowRight className="size-4" />
          </Link>
        </SheetContent>
      </Sheet>
    </header>
  );
}
