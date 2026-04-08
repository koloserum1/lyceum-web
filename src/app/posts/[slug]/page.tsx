import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityDocument } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

import { client } from "@/sanity/client";
import { sanityDataset, sanityProjectId } from "@/lib/sanity-config";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const imageBuilder = createImageUrlBuilder({
  projectId: client.config().projectId ?? sanityProjectId,
  dataset: client.config().dataset ?? sanityDataset,
});

const options = { next: { revalidate: 30 } };

type Props = { params: Promise<{ slug: string }> };

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument | null>(
    POST_QUERY,
    { slug },
    options,
  );

  if (!post) notFound();

  const postImageUrl = post.image
    ? imageBuilder.image(post.image).width(550).height(310).url()
    : null;

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-4 bg-brand-bg1 p-8 text-brand-fg1">
      <Link href="/posts" className="text-brand-primary hover:underline">
        ← Späť na zoznam
      </Link>
      {postImageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={postImageUrl}
          alt={String(post.title ?? "")}
          className="aspect-video rounded-xl object-cover"
          width={550}
          height={310}
        />
      ) : null}
      <h1 className="font-heading mb-4 text-4xl font-bold">{post.title}</h1>
      <div className="max-w-none space-y-4 leading-relaxed [&_a]:text-brand-primary [&_a]:underline">
        <p className="text-brand-fg3">
          Publikované:{" "}
          {post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString("sk-SK")
            : "neuvedené"}
        </p>
        {Array.isArray(post.body) ? (
          <PortableText value={post.body} />
        ) : null}
      </div>
    </main>
  );
}
