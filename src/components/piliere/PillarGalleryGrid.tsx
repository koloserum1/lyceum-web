import Image from "next/image";
import type { PillarGalleryImage } from "@/content/pillars";

/** Mozaika (podnikavosť, charakter, …): na lg+ odlišné šírky a výšky; vzor sa opakuje. */
const mosaicCellClasses: readonly string[] = [
  "lg:col-span-6 lg:min-h-[200px] lg:aspect-[2.05/1]",
  "lg:col-span-3 lg:aspect-[4/3]",
  "lg:col-span-3 lg:aspect-[4/3]",
  "lg:col-span-2 lg:aspect-square",
  "lg:col-span-2 lg:aspect-square",
  "lg:col-span-2 lg:aspect-square",
  "lg:col-span-6 lg:aspect-[21/9] lg:min-h-[min(220px,28vw)]",
  "lg:col-span-2 lg:aspect-[4/3]",
  "lg:col-span-2 lg:aspect-[4/3]",
  "lg:col-span-2 lg:aspect-[4/3]",
  "lg:col-span-6 lg:min-h-[200px] lg:aspect-[2.1/1]",
];

type Props = {
  images: readonly PillarGalleryImage[];
  /** Ak true, na lg+ mozaika namiesto rovnomernej mriežky */
  mosaic?: boolean;
};

export function PillarGalleryGrid({ images, mosaic }: Props) {
  const useMosaic = mosaic && images.length >= mosaicCellClasses.length;

  return (
    <div
      className={
        useMosaic
          ? "grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-6 lg:gap-4"
          : "grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {images.map((img, i) => (
        <figure
          key={img.src}
          className={`relative m-0 w-full overflow-hidden rounded-xl bg-brand-bg2 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06] ${
            useMosaic
              ? `aspect-[4/3] sm:aspect-[4/3] ${mosaicCellClasses[i % mosaicCellClasses.length]}`
              : "aspect-[4/3]"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover object-center"
            sizes={
              useMosaic
                ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                : "(max-width: 640px) 100vw, 360px"
            }
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  );
}
