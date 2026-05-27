"use client";

import { useCallback, useState } from "react";
import type { WorkDetailHero } from "@/lib/works/details";

type WorkHeroCarouselProps = {
  slides: WorkDetailHero[];
  caption?: string;
};

export function WorkHeroCarousel({ slides, caption }: WorkHeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
    },
    [total],
  );

  if (total === 0) return null;

  const slide = slides[index];

  return (
    <figure className="mt-10">
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-neutral-50 shadow-sm">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((item, i) => (
            <img
              key={`${item.src}-${i}`}
              src={item.src}
              alt={item.alt}
              width={1200}
              height={675}
              className="h-auto max-h-[min(70vh,36rem)] w-full shrink-0 object-contain p-2 sm:p-3"
              loading={item === slide ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
        </div>

        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-lg text-neutral-700 shadow-sm transition-colors hover:border-accent/40 hover:text-accent"
              aria-label="이전 이미지"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-lg text-neutral-700 shadow-sm transition-colors hover:border-accent/40 hover:text-accent"
              aria-label="다음 이미지"
            >
              ›
            </button>
            <p className="absolute right-3 bottom-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] tracking-wide text-white">
              {index + 1} / {total}
            </p>
          </>
        ) : null}
      </div>

      {total > 1 ? (
        <div
          className="mt-3 flex justify-center gap-2"
          role="tablist"
          aria-label="데모 이미지 선택"
        >
          {slides.map((item, i) => (
            <button
              key={`dot-${item.src}-${i}`}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${i + 1}번째 이미지`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-accent" : "bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      ) : null}

      {caption ? (
        <figcaption className="mt-3 text-center text-xs tracking-wide text-neutral-400">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
