import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Event Registration – CEIS 2026" };

const notes = [
  "Conference rates and options will only appear once you have completed the membership details section",
  "Package options include: Full package, One-Day passes, Add-ons only (covering social events)",
  "Airfare and accommodations are not included in the conference fee, special rates will be applied through conference hotel",
  "If you are registering an accompanying person, please be sure to add the person’s name to the registration (social events only access)",
  "Due to security checks that most banks have in order to protect you against potential fraud, we recommend that BEFORE you make your online payment, please contact your bank to first authorize your payment. This will guarantee that your payment is processed by your bank and not declined for verification.",
  "Should your payment be declined, please contact us before attempting to process payment a second time in order to prevent your card from being blocked.",
  "The methods of payments available will be direct deposits and wire transfer.",
];
const banks = [
  { bank: "Aruba Bank", address: "Camacuri 12, Oranjestad, Aruba", account: "7533860190", swift: "ARUBAWAX" },
  { bank: "RBC Bank (RBC Royal Bank (Aruba) N.V.)", address: "Italiestraat 36, Oranjestad, Aruba", account: "7700000349847", swift: "RBTTAWAXXX" },
];

export default function EventRegistrationPage() {
  return (
    <>
      <PageHero dark image="/images/event-1.jpg" eyebrow="Event Registration" title="Event Registration" text="Thank you for your interest in attending the Caribbean Excellence & Innovation Summit (CEIS) 2026.">
        <a href={`mailto:${site.email}?subject=CEIS 2026 Registration`} className={cn(buttonVariants({ variant: "mint", size: "xl" }))}><Mail className="size-4" /> Email Us to Register</a>
      </PageHero>

      <div className="container-x grid max-w-5xl gap-12 py-16 lg:grid-cols-[1.3fr_1fr]">
        <section>
          <p className="text-[15px] text-navy/75">Please review the below information before commencing and submitting your registration.</p>
          <ul className="mt-5 space-y-3">
            {notes.map((n) => <li key={n} className="flex gap-3 text-[15px] leading-relaxed text-navy/75"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-mint-strong" />{n}</li>)}
          </ul>
          <p className="mt-8 rounded-xl bg-mint-soft/60 p-5 text-sm"><strong>Registration closes on:</strong> Aruba: May 15, 2026</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/event-details" className={cn(buttonVariants({ variant: "navy", size: "xl" }))}>Details &amp; prices</Link>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "outline-mint", size: "xl" }))}><MessageCircle className="size-4" /> WhatsApp (297) 561-1206</a>
          </div>
          <p className="mt-5 text-sm text-navy/65">Having issues or questions, contact us: <a href={`mailto:${site.email}`} className="font-medium text-mint-strong hover:underline">{site.email}</a></p>
        </section>

        <aside>
          <h2 className="text-xl font-bold">Payment Information</h2>
          <div className="mt-5 space-y-5">
            {banks.map((b) => (
              <div key={b.bank} className="rounded-xl border bg-white p-5 text-sm shadow-[0_2px_14px_rgba(11,26,63,.05)]">
                <p className="font-bold">{b.bank}</p>
                <dl className="mt-3 space-y-1.5 text-navy/75">
                  <div><dt className="inline font-medium text-navy">Account name: </dt><dd className="inline">Sombrilla Group of Companies</dd></div>
                  <div><dt className="inline font-medium text-navy">Bank address: </dt><dd className="inline">{b.address}</dd></div>
                  <div><dt className="inline font-medium text-navy">Account number: </dt><dd className="inline">{b.account}</dd></div>
                  <div><dt className="inline font-medium text-navy">Swiftcode: </dt><dd className="inline">{b.swift}</dd></div>
                </dl>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
