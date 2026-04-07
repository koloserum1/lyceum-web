import type { PortableTextBlock } from "@portabletext/types";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { createImageUrlBuilder } from "@sanity/image-url";

import { client } from "@/sanity/client";
import { sanityDataset, sanityProjectId } from "@/lib/sanity-config";

const imageBuilder = createImageUrlBuilder({
  projectId: client.config().projectId ?? sanityProjectId,
  dataset: client.config().dataset ?? sanityDataset,
});

/** Max. šírka na stránke (25rem = 400px); z CDN pýtame 2× kvôli ostrejšiemu zobrazeniu. */
const IMG_DISPLAY_MAX_PX = 400;

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = imageBuilder
        .image(value)
        .width(IMG_DISPLAY_MAX_PX * 2)
        .fit("max")
        .auto("format")
        .quality(82)
        .url();
      const alt = typeof value.alt === "string" ? value.alt : "";
      return (
        <figure className="my-5 mx-auto w-full max-w-[min(100%,25rem)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={url}
            alt={alt}
            width={IMG_DISPLAY_MAX_PX}
            sizes="(max-width: 400px) 100vw, 400px"
            className="h-auto w-full rounded-xl object-contain"
            loading="lazy"
            decoding="async"
          />
        </figure>
      );
    },
  },
};

/** Typografia v štýle podstránok „Pre študentov“. */
const pt =
  "[&_a]:font-medium [&_a]:text-brand-primary [&_a]:underline [&_a]:decoration-brand-primary/35 [&_a]:underline-offset-2 [&_a]:hover:decoration-brand-primary " +
  "[&_h2]:font-heading [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-brand-fg1 [&_h2]:first:mt-0 md:[&_h2]:text-xl " +
  "[&_h3]:font-heading [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-brand-fg1 md:[&_h3]:text-[17px] " +
  "[&_p]:m-0 [&_p]:mt-3 [&_p]:first:mt-0 [&_p+p]:mt-3 " +
  "[&_ul]:m-0 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-[15px] md:[&_ul]:text-[17px] " +
  "[&_li]:leading-relaxed";

export function DodPageBody({ value }: { value: PortableTextBlock[] }) {
  return (
    <div className={`max-w-none text-[15px] leading-relaxed sm:text-[16px] md:text-[17px] md:leading-[1.62] ${pt}`}>
      <PortableText value={value} components={components} />
    </div>
  );
}
