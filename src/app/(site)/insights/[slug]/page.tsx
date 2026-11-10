import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getPublishedPost, postDate, postText } from "@/lib/posts";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) return { title: "Not found" };
  return { title: post.seoTitle || post.title, description: post.seoDescription || post.excerpt || undefined };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) notFound();
  const images = (post.images ?? []).filter(Boolean);

  return (
    <article className="container-x max-w-3xl py-16">
      <Link href="/insights" className="inline-flex items-center gap-1.5 text-sm font-medium text-navy/70 hover:text-mint-strong"><ArrowLeft className="size-4" /> All insights</Link>
      <p className="mt-6 text-sm font-semibold text-mint-strong">{postDate(post)}</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">{post.title}</h1>
      {images.length > 0 && (
        <div className={images.length > 1 ? "mt-8 grid gap-3 sm:grid-cols-2" : "mt-8"}>
          {images.map((src) => (
            <div key={src} className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface">
              <Image src={src} alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      )}
      <div className="mt-8 whitespace-pre-line text-[15px] leading-relaxed text-navy/80">{postText(post.content) || post.excerpt}</div>
    </article>
  );
}
