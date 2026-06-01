import type { Metadata } from "next";
import Link from "next/link";
import {
  GAP_YEAR_LECTURES,
  GAP_YEAR_UPSKILLING,
  type GapYearEntry,
} from "@/lib/works/gap-year";
import { LectureEntryList } from "./LectureEntryList";

export const metadata: Metadata = {
  title: "GAP YEAR | Dasom Kim",
  description: "AI Upskilling과 강의 활동",
};

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

function GapYearEntryList({ items }: { items: GapYearEntry[] }) {
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
        <li key={item.id} className="py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-[0.9375rem] font-bold leading-snug text-black">
                  {item.title}
                </h3>
                {item.period ? (
                  <time className="text-[11px] tracking-wide text-neutral-400">
                    {formatPeriod(item.period)}
                  </time>
                ) : null}
              </div>
              <p className="mt-2 text-[0.9375rem] leading-[1.85] text-neutral-500">
                {item.summary}
              </p>
              {item.tags && item.tags.length > 0 ? (
                <ul className="mt-3 flex flex-wrap gap-2">
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
            </div>
            {item.href ? (
              <a
                href={item.href}
                target={
                  item.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="more-cta shrink-0"
              >
                <span>more</span>
                <span aria-hidden>→</span>
              </a>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function GapYearPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-neutral-900">
      <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link
            href="/"
            className="wordmark text-black transition-colors hover:text-accent"
          >
            Dasom Kim
          </Link>
          <Link
            href="/#career"
            className="text-[13px] tracking-wide text-neutral-500 transition-colors hover:text-accent"
          >
            ← Home
          </Link>
        </div>
      </header>

      <main className="relative mx-auto max-w-3xl px-6 pt-32 pb-24">
        <Link
          href="/#career"
          className="text-[13px] tracking-wide text-neutral-500 transition-colors hover:text-accent"
        >
          ← Career
        </Link>

        <p className="section-label mt-10 text-accent">Career</p>
        <h1 className="mt-4 text-2xl font-bold leading-snug text-black sm:text-3xl">
          GAP YEAR
        </h1>
        <p className="mt-4 max-w-xl text-[0.9375rem] leading-[1.85] text-neutral-500">
          커리어 공백기 동안 진행한 AI Upskilling과 강의 활동을 정리합니다.
        </p>

        <section
          id="ai-upskilling"
          className="scroll-mt-28 mt-16 border-t border-black/10 pt-12"
        >
          <h2 className="section-label mb-8">
            <span className="text-accent">01</span>
            <span className="text-neutral-400"> — AI Upskilling</span>
          </h2>
          <GapYearEntryList items={GAP_YEAR_UPSKILLING} />
        </section>

        <section
          id="lectures"
          className="scroll-mt-28 mt-16 border-t border-black/10 pt-12"
        >
          <h2 className="section-label mb-8">
            <span className="text-accent">02</span>
            <span className="text-neutral-400"> — 강의</span>
          </h2>
          <LectureEntryList items={GAP_YEAR_LECTURES} />
        </section>

        <footer className="mt-20 border-t border-black/10 pt-10">
          <Link href="/#career" className="more-cta">
            <span>Career로</span>
            <span aria-hidden>→</span>
          </Link>
        </footer>
      </main>
    </div>
  );
}
