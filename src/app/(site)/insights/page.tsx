import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { getPublishedPosts, postDate, postText } from "@/lib/posts";

export const metadata: Metadata = { title: "Insights" };
export const dynamic = "force-dynamic";

export default async function InsightsPage() {
  const posts = await getPublishedPosts();
  return (
    <>
      <PageHero dark image="/images/home-team.jpg" eyebrow="Insights" title="News & Insights" text="Updates, articles and announcements from Sombrilla Group of Companies." />
      <section className="container-x py-16">
        {posts.length === 0 ? (
          <p className="rounded-xl border bg-white p-10 text-center text-sm text-navy/60">No articles published yet. Please check back soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => {
              const img = p.featuredImage ?? p.images?.[0];
              return (
                <Link key={p.id} href={`/insights/${p.slug}`} className="group overflow-hidden rounded-xl border bg-white shadow-[0_2px_14px_rgba(11,26,63,.05)] transition-shadow hover:shadow-lg">
                  {img && (
                    <div className="relative aspect-[16/10] bg-surface">
                      <Image src={img} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                    </div>
                  )}
                  <div className="p-5">
                    <p className="text-xs font-semibold text-mint-strong">{postDate(p)}</p>
                    <h2 className="mt-1.5 text-lg font-bold group-hover:text-mint-strong">{p.title}</h2>
                    <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-navy/65">{p.excerpt || postText(p.content)}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">Read more <ArrowRight className="size-4" /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
