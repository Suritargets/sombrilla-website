import { and, desc, eq } from "drizzle-orm";
import { db, posts, type Post } from "@/db";

export function postText(content: unknown): string {
  if (content && typeof content === "object" && "text" in content) {
    return String((content as { text: unknown }).text ?? "");
  }
  return "";
}

export function postDate(post: Post): string {
  return (post.publishedAt ?? post.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** Published posts from the admin dashboard, newest first. Empty on DB error. */
export async function getPublishedPosts(): Promise<Post[]> {
  try {
    return await db.select().from(posts).where(eq(posts.status, "published")).orderBy(desc(posts.publishedAt));
  } catch {
    return [];
  }
}

export async function getPublishedPost(slug: string): Promise<Post | null> {
  try {
    const [row] = await db
      .select()
      .from(posts)
      .where(and(eq(posts.slug, slug), eq(posts.status, "published")))
      .limit(1);
    return row ?? null;
  } catch {
    return null;
  }
}
