import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllWorkDetailIds,
  getWorkDetail,
} from "@/lib/works/details";
import { WorkHeroCarousel } from "./WorkHeroCarousel";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getAllWorkDetailIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const work = getWorkDetail(id);
  if (!work) return { title: "Project | Dasom Kim" };
  return {
    title: `${work.title} | Dasom Kim`,
    description: work.summary,
  };
}

function PageShell({ children }: { children: React.ReactNode }) {
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
            href="/works"
            className="text-[13px] tracking-wide text-neutral-500 transition-colors hover:text-accent"
          >
            ← About Me
          </Link>
        </div>
      </header>

      <main className="relative mx-auto max-w-3xl px-6 pt-32 pb-24">
        {children}
      </main>
    </div>
  );
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { id } = await params;
  const work = getWorkDetail(id);
  if (!work) notFound();

  return (
    <PageShell>
      <Link
        href={`/works#${work.id}`}
        className="text-[13px] tracking-wide text-neutral-500 transition-colors hover:text-accent"
      >
        ← Experience
      </Link>

      <p className="section-label mt-10 text-accent">Project</p>
      <time className="mt-4 block text-xs tracking-wide text-neutral-400 uppercase">
        {work.period}
      </time>
      <h1 className="mt-4 text-2xl font-bold leading-snug text-black sm:text-3xl">
        {work.title}
      </h1>

      <p className="mt-4 text-[0.9375rem] leading-[1.85] text-neutral-500">
        {work.summary}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {work.tags.map((tag) => (
          <li
            key={tag}
            className="border border-accent/25 px-3 py-1 text-[11px] text-neutral-600"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-12 border-t border-black/10 pt-12">
        <h2 className="section-label mb-4">
          <span className="text-neutral-400">Overview</span>
        </h2>
        <p className="text-[0.9375rem] leading-[1.9] text-neutral-700">
          {work.overview}
        </p>

        {work.gallery && work.gallery.length > 0 ? (
          <WorkHeroCarousel
            slides={work.gallery}
            caption={work.galleryCaption ?? "데모 화면"}
          />
        ) : work.hero ? (
          <WorkHeroCarousel slides={[work.hero]} caption={work.hero.caption} />
        ) : (
          <div
            className="mt-10 flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-black/15 bg-neutral-50"
            aria-hidden
          >
            <span className="text-xs tracking-wide text-neutral-400 uppercase">
              Demo media
            </span>
          </div>
        )}
      </div>

      {work.sections.map((section) => (
        <section
          key={section.label}
          className="mt-16 border-t border-black/10 pt-12"
        >
          <h2 className="section-label mb-8">
            <span className="text-accent">{section.label}</span>
            <span className="text-neutral-400"> — {section.title}</span>
          </h2>
          <ul className="space-y-4">
            {section.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[0.9375rem] leading-[1.85] text-neutral-700"
              >
                <span
                  className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <footer className="mt-20 flex flex-wrap gap-4 border-t border-black/10 pt-10">
        <Link
          href={`/works#${work.id}`}
          className="more-cta"
        >
          <span>목록으로</span>
          <span aria-hidden>→</span>
        </Link>
      </footer>
    </PageShell>
  );
}
