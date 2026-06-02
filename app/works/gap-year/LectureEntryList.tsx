import Image from "next/image";
import type { GapYearLectureEntry } from "@/lib/works/gap-year";

function formatPeriod(period: string) {
  const parts = period.split(/(\s*[—–-]\s*)/);
  return parts.map((part, index) => {
    if (/[—–-]/.test(part)) {
      return (
        <span key={index} className="text-neutral-300">
          {part}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

function LectureBody({ body }: { body: string | string[] }) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return (
    <div className="space-y-4 text-[0.9375rem] leading-[1.9] text-neutral-600">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

function LectureImages({ item }: { item: GapYearLectureEntry }) {
  const imgs = item.images ?? (item.image ? [item.image] : []);
  if (imgs.length === 0) return null;

  if (imgs.length === 1) {
    return (
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl border border-black/10 bg-neutral-100 sm:w-[220px] lg:w-[260px]">
        <Image
          src={imgs[0]}
          alt={item.imageAlt}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, 260px"
          className="object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div className="w-full shrink-0 sm:w-[220px] lg:w-[260px]">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-black/10 bg-neutral-100">
        <Image
          src={imgs[0]}
          alt={`${item.imageAlt} 1`}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, 260px"
          className="object-cover object-center"
        />
      </div>
      {imgs.length > 1 ? (
        <div
          className="mt-2 grid gap-2"
          style={{ gridTemplateColumns: `repeat(${imgs.length - 1}, 1fr)` }}
        >
          {imgs.slice(1).map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-black/10 bg-neutral-100"
            >
              <Image
                src={src}
                alt={`${item.imageAlt} ${i + 2}`}
                fill
                unoptimized
                sizes="120px"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function LectureCard({ item }: { item: GapYearLectureEntry }) {
  const content = (
    <>
      <LectureImages item={item} />

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base font-bold leading-snug text-black sm:text-lg">
            {item.title}
          </h3>
          {item.period ? (
            <time className="text-[11px] tracking-wide text-neutral-400">
              {formatPeriod(item.period)}
            </time>
          ) : null}
        </div>

        <div className="mt-4">
          <LectureBody body={item.body} />
        </div>

        {item.tags && item.tags.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="border border-accent/25 px-2.5 py-0.5 text-[10px] text-neutral-600"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        {item.href ? (
          <a
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={
              item.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="more-cta mt-6 inline-flex"
          >
            <span>more</span>
            <span aria-hidden>→</span>
          </a>
        ) : null}
      </div>
    </>
  );

  return (
    <article className="py-10 first:pt-0">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        {content}
      </div>
    </article>
  );
}

export function LectureEntryList({ items }: { items: GapYearLectureEntry[] }) {
  if (items.length === 0) {
    return (
      <p className="text-[0.9375rem] leading-[1.85] text-neutral-400">
        항목을 준비 중입니다.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-black/10 border-y border-black/10">
      {items.map((item) => (
        <li key={item.id}>
          <LectureCard item={item} />
        </li>
      ))}
    </ul>
  );
}
