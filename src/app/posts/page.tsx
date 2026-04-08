import Link from "next/link";
import type { SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function PostsIndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="mx-auto min-h-screen max-w-3xl bg-brand-bg1 p-8 text-brand-fg1">
      <h1 className="font-heading mb-8 text-4xl font-bold">Posts (Sanity)</h1>
      <p className="mb-6 text-sm text-brand-fg3">
        Ukážkový zoznam z tutoriálu: obsah pridávaš v Sanity Studio (napr.{" "}
        <code className="text-xs">cd studio-lyceum && npm run dev</code> →
        port 3333).
      </p>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/posts/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-brand-fg3">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("sk-SK")
                  : ""}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      {posts.length === 0 ? (
        <p className="text-brand-fg3">
          Zatiaľ žiadne posty: vytvor a publikuj prvý dokument typu Post v
          Sanity Studio.
        </p>
      ) : null}
      <p className="mt-10">
        <Link href="/" className="text-brand-primary underline">
          ← Späť na úvod
        </Link>
      </p>
    </main>
  );
}
