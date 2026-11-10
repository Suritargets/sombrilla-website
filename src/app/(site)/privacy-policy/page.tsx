import type { Metadata } from "next";
import lines from "@/lib/privacy.json";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-x py-14">
          <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
        </div>
      </section>
      <article className="container-x max-w-3xl py-12">
        {(lines as string[]).map((l, i) => {
          if (/^\d+\.\s/.test(l)) return <h2 key={i} className="mt-9 mb-3 text-xl font-bold">{l}</h2>;
          const m = l.match(/^([^:]{2,40}):\s(.+)$/);
          if (m && !l.startsWith("At ")) return <p key={i} className="mb-2 text-[15px] leading-relaxed text-navy/75"><strong className="text-navy">{m[1]}:</strong> {m[2]}</p>;
          if (l.length < 40 && !l.endsWith(".") && !l.endsWith(":")) return <h3 key={i} className="mt-5 mb-2 font-semibold">{l}</h3>;
          return <p key={i} className="mb-3 text-[15px] leading-relaxed text-navy/75">{l}</p>;
        })}
        <p className="mt-2 text-[15px] leading-relaxed text-navy/75">
          Sombrilla Group of Companies<br />{site.address}<br />
          <a href={`mailto:${site.email}`} className="text-mint-strong hover:underline">{site.email}</a><br />{site.phone}
        </p>
      </article>
    </>
  );
}
