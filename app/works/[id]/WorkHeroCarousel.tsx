"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { WorkDetailHero } from "@/lib/works/details";

type WorkHeroCarouselProps = {
  slides: WorkDetailHero[];
  caption?: string;
};

export function WorkHeroCarousel({ slides, caption }: WorkHeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const total = slides.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") goTo(index - 1);
      if (event.key === "ArrowRight") goTo(index + 1);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen, index, goTo]);

  if (total === 0) return null;

  const slide = slides[index];

  return (
    <figure className="mt-10">
      <div className="group relative w-full overflow-hidden rounded-2xl border border-black/10 bg-neutral-50 shadow-sm transition-colors hover:border-accent/30">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="absolute inset-0 z-0 cursor-zoom-in"
          aria-label={`${slide.alt} — 클릭하여 확대`}
        />

        <div
          className="pointer-events-none flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((item, i) => (
            <Image
              key={`${item.src}-${i}`}
              src={item.src}
              alt={item.alt}
              width={1200}
              height={675}
              unoptimized
              className="h-auto max-h-[min(70vh,36rem)] w-full shrink-0 object-contain p-2 sm:p-3"
              priority={i === index}
              draggable={false}
            />
          ))}
        </div>

        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100">
          클릭하여 확대
        </span>

        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="absolute top-1/2 left-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-lg text-neutral-700 shadow-sm transition-colors hover:border-accent/40 hover:text-accent"
              aria-label="이전 이미지"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="absolute top-1/2 right-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-lg text-neutral-700 shadow-sm transition-colors hover:border-accent/40 hover:text-accent"
              aria-label="다음 이미지"
            >
              ›
            </button>
            <p className="pointer-events-none absolute right-3 bottom-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] tracking-wide text-white">
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

      {lightboxOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/25 p-4 backdrop-blur-[2px] sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl border border-black/10 bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white text-lg text-neutral-500 transition-colors hover:border-accent/40 hover:text-accent"
              aria-label="닫기"
            >
              ×
            </button>

            <div className="relative flex items-center justify-center px-10 py-8 sm:px-14 sm:py-10">
              {total > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => goTo(index - 1)}
                    className="absolute top-1/2 left-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-lg text-neutral-600 shadow-sm transition-colors hover:border-accent/40 hover:text-accent sm:left-3"
                    aria-label="이전 이미지"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(index + 1)}
                    className="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-lg text-neutral-600 shadow-sm transition-colors hover:border-accent/40 hover:text-accent sm:right-3"
                    aria-label="다음 이미지"
                  >
                    ›
                  </button>
                </>
              ) : null}

              <Image
                src={slide.src}
                alt={slide.alt}
                width={1200}
                height={675}
                unoptimized
                className="max-h-[min(84vh,43.2rem)] h-auto w-full object-contain"
                draggable={false}
              />
            </div>

            {total > 1 ? (
              <p className="border-t border-black/5 pb-3 text-center text-[11px] tracking-wide text-neutral-400">
                {index + 1} / {total}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </figure>
  );
}
