import Link from "next/link";
import { Fragment, type ReactNode } from "react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#career", label: "Career" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const CAREER = [
  {
    period: "2024 — Present",
    description: "AI PoC 8건 수행 중",
    aside: "(직장구하는중)",
    href: "/works#poc-01",
  },
  {
    period: "2023 — 2024",
    description: "GAP YEAR",
    href: null,
  },
  {
    period: "2022 — 2023",
    description: "카카오뱅크, 대규모 인입고객 트랜드 분석",
    href: null,
  },
  {
    period: "2020 — 2022",
    description: "현대오토에버, 그룹사 데이터 구축 PM / SM",
    href: null,
  },
  {
    period: "2018 — 2020",
    description: "신용평가사, 비재무 데이터 분석플랫폼 상품출시",
    href: null,
  },
  {
    period: "2017 — 2018",
    description: "대구광역시 전기차충전소 입지 인프라 선정",
    href: null,
  },
];

const CAREER_HIGHLIGHTS = [
  "AI PoC",
  "카카오뱅크",
  "현대오토에버",
  "신용평가사",
  "대구광역시",
];

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
    return <Fragment key={index}>{part}</Fragment>;
  });
}

function highlightDescription(text: string): ReactNode[] {
  const pattern = new RegExp(
    `(${CAREER_HIGHLIGHTS.map((word) =>
      word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    ).join("|")})`,
    "g",
  );
  return text.split(pattern).map((part, index) =>
    CAREER_HIGHLIGHTS.includes(part) ? (
      <span key={index} className="font-bold text-accent">
        {part}
      </span>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 4.126 0 2.062 2.062 0 0 1-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const SKILL_GROUPS = [
  {
    title: "Data & Analytics",
    items: [
      "SQL",
      "Python",
      "Tableau / BI",
      "A/B Test",
      "Statistical Analysis",
    ],
  },
  {
    title: "Product Management",
    items: [
      "Product Discovery",
      "PRD / Spec",
      "Agile / Scrum",
      "Roadmapping",
    ],
  },
  {
    title: "AI & Engineering",
    items: [
      "LLM Applications",
      "RAG / Fine-tuning",
      "Prompt Engineering",
      "Python / ML",
      "API Integration",
    ],
  },
  {
    title: "Collaboration",
    items: [
      "Cross-functional Leadership",
      "Executive Reporting",
      "Data Storytelling",
    ],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-neutral-900">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#" className="wordmark text-black">
            Dasom Kim
          </a>
          <nav className="hidden gap-8 sm:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] tracking-wide text-neutral-500 transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative mx-auto max-w-5xl px-6 pt-32 pb-24">
        {/* Hero */}
        <section className="mb-32">
          <p className="section-label mb-6 text-accent">Portfolio</p>
          <h1 className="max-w-3xl text-4xl leading-[1.25] font-bold tracking-tight sm:text-[3.25rem] sm:leading-[1.2]">
            <span className="text-neutral-500">데이터를 읽고,</span>
            <br />
            <span className="text-accent">AI를 씁니다.</span>
          </h1>
          <div className="mt-6 h-px w-12 bg-accent" aria-hidden />
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.85] text-neutral-500">
            데이터 분석 7년, AI PoC 2년.
            <br />
            데이터 뒤의 맥락을 읽고 사용자와 비즈니스를 연결하는 AI를
            설계합니다.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/works"
              className="inline-flex h-12 items-center justify-center bg-accent px-8 text-[13px] font-normal tracking-[0.12em] text-white uppercase transition-colors hover:bg-accent-dark"
            >
              READ MORE
            </Link>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center border border-accent/30 px-8 text-[13px] tracking-wide text-neutral-600 transition-colors hover:border-accent hover:text-accent"
            >
              연락하기
            </a>
          </div>

          <dl className="mt-20 grid grid-cols-3 gap-px border border-black/10 bg-black/10 sm:max-w-lg">
            {[
              { value: "7+", label: "Years Data" },
              { value: "2+", label: "Years AI PoC" },
              { value: "9+", label: "Years Total" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white px-4 py-6 text-center sm:px-6"
              >
                <dt className="text-2xl font-bold text-accent sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="section-label mt-2 text-neutral-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* About */}
        <section
          id="about"
          className="mb-32 scroll-mt-24 border-t border-black/10 pt-20"
        >
          <h2 className="section-label mb-10">
            <span className="text-accent">01</span>
            <span className="text-neutral-400"> — About</span>
          </h2>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <p className="text-2xl leading-snug font-bold text-neutral-800 sm:text-[1.75rem]">
              Data와 AI,
              <br />
              같은 언어로 말합니다.
            </p>
            <div className="space-y-5 text-[0.9375rem] leading-[1.9] text-neutral-500">
              <p>
                데이터 분석을 수행하며 데이터 파이프라인부터 대시보드, 상품
                출시까지 end-to-end로 문제를 해결해왔습니다. 지금은 AI를
                설계하고 만들며 기술/비즈니스/사용자 요구를 모두 담아 하나로
                구현하는 데 관심을 가지고 있습니다.
              </p>
              <p>
                <span className="bg-accent px-1.5 py-0.5 text-white">
                  &ldquo;데이터로 근거있는, AI로 효율적인&rdquo;
                </span>{" "}
                환경을 만드는 데 중심을 두고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Career */}
        <section
          id="career"
          className="mb-32 scroll-mt-24 border-t border-black/10 pt-20"
        >
          <h2 className="section-label mb-10">
            <span className="text-accent">02</span>
            <span className="text-neutral-400"> — Career</span>
          </h2>
          <ul className="divide-y divide-black/10 border-y border-black/10">
            {CAREER.map((item) => (
              <li
                key={item.period + item.description}
                className="group grid gap-4 py-8 sm:grid-cols-[140px_1fr_auto] sm:items-center sm:gap-8"
              >
                <time className="text-xs tracking-wide text-neutral-500 uppercase">
                  {formatPeriod(item.period)}
                </time>
                <p className="text-[0.9375rem] leading-[1.85] text-neutral-800">
                  <span className="mr-2 text-neutral-300">—</span>
                  {highlightDescription(item.description)}
                  {"aside" in item && item.aside ? (
                    <span className="ml-2 text-sm font-normal text-neutral-400">
                      {item.aside}
                    </span>
                  ) : null}
                </p>
                {item.href ? (
                  <a href={item.href} className="more-cta sm:ml-auto">
                    <span>more</span>
                    <span aria-hidden>→</span>
                  </a>
                ) : (
                  <span className="more-cta sm:ml-auto">
                    <span>more</span>
                    <span aria-hidden>→</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="mb-32 scroll-mt-24 border-t border-black/10 pt-20"
        >
          <h2 className="section-label mb-10">
            <span className="text-accent">03</span>
            <span className="text-neutral-400"> — Skills</span>
          </h2>
          <div className="grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="bg-white p-8">
                <h3 className="section-label text-accent">{group.title}</h3>
                <ul className="mt-6 space-y-3">
                  {group.items.map((skill) => (
                    <li key={skill} className="text-[0.875rem] text-neutral-600">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-black/10 pt-20"
        >
          <h2 className="section-label mb-10">
            <span className="text-accent">04</span>
            <span className="text-neutral-400"> — Contact</span>
          </h2>
          <p className="mb-12 max-w-lg text-[1.0625rem] leading-[1.85] text-neutral-500">
            프로젝트 협업, 채용 문의, 또는 데이터·AI 제품 이야기가 있으시면
            편하게 연락 주세요.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
            <a
              href="mailto:som.dkim@gmail.com"
              className="group flex min-h-[120px] flex-1 flex-col justify-between rounded-2xl border border-black/10 bg-white p-8 transition-colors hover:border-accent/40 hover:bg-neutral-50"
            >
              <p className="section-label text-accent">Email</p>
              <div className="mt-6">
                <p className="text-[0.9375rem] text-neutral-600 transition-colors group-hover:text-black">
                  som.dkim@gmail.com
                </p>
                <p className="mt-4 flex items-center gap-2 text-xs tracking-wide text-neutral-400 transition-colors group-hover:text-accent">
                  <span>메일 보내기</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </div>
            </a>

            <div className="flex gap-4">
              <a
                href="https://github.com/som-dkim"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub 프로필 열기"
                className="group flex min-h-[120px] w-[120px] shrink-0 flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 transition-colors hover:border-accent/40 hover:bg-neutral-50 sm:w-[132px]"
              >
                <p className="section-label text-accent">GitHub</p>
                <div className="flex justify-center text-neutral-700 transition-colors group-hover:text-accent">
                  <GitHubIcon className="h-7 w-7 transition-transform group-hover:scale-110" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/dasom-kim-59b061119"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn 프로필 열기"
                className="group flex min-h-[120px] w-[120px] shrink-0 flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 transition-colors hover:border-accent/40 hover:bg-neutral-50 sm:w-[132px]"
              >
                <p className="section-label text-accent">LinkedIn</p>
                <div className="flex justify-center text-neutral-700 transition-colors group-hover:text-accent">
                  <LinkedInIcon className="h-7 w-7 transition-transform group-hover:scale-110" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 text-xs text-neutral-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Dasom Kim</p>
          <p className="section-label text-accent">Data · Product · AI</p>
        </div>
      </footer>
    </div>
  );
}
