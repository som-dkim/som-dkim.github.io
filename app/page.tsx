const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    period: "2024 — Present",
    role: "AI Product Manager",
    summary:
      "AI 제품 기획·로드맵 수립, 이해관계자 정렬, 데이터 기반 의사결정으로 MVP부터 스케일까지 주도.",
    tags: ["Product Strategy", "LLM / AI", "Roadmap", "Stakeholder"],
  },
  {
    period: "2017 — 2023",
    role: "Data Analyst",
    summary:
      "대규모 데이터 분석·시각화·A/B 테스트로 비즈니스 인사이트 도출. 대시보드와 리포팅 체계를 구축.",
    tags: ["SQL", "Python", "Visualization", "Experimentation"],
  },
];

const SKILL_GROUPS = [
  {
    title: "Data & Analytics",
    items: ["SQL", "Python", "Tableau / BI", "A/B Test", "Statistical Analysis"],
  },
  {
    title: "Product & AI",
    items: ["Product Discovery", "PRD / Spec", "LLM Applications", "Agile / Scrum"],
  },
  {
    title: "Collaboration",
    items: ["Cross-functional Leadership", "Executive Reporting", "Data Storytelling"],
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
          <a href="#" className="font-mono text-sm tracking-widest text-black">
            SOM<span className="text-accent">.</span>DKIM
          </a>
          <nav className="hidden gap-8 sm:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-500 transition-colors hover:text-accent"
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
          <p className="mb-6 font-mono text-xs tracking-[0.3em] text-accent uppercase">
            Portfolio
          </p>
          <h1 className="max-w-3xl text-4xl leading-[1.15] font-light tracking-tight text-neutral-500 sm:text-6xl">
            데이터로 질문하고,
            <br />
            <span className="text-accent">제품으로 답합니다.</span>
          </h1>
          <div className="mt-6 h-px w-12 bg-accent" aria-hidden />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-500">
            데이터 분석 7년, AI PM 2년. 숫자 뒤의 맥락을 읽고, 사용자와
            비즈니스 모두에 닿는 제품을 만듭니다.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center bg-accent px-8 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark"
            >
              연락하기
            </a>
            <a
              href="https://github.com/som-dkim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center border border-accent/30 px-8 text-sm text-neutral-600 transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
          </div>

          <dl className="mt-20 grid grid-cols-3 gap-px border border-black/10 bg-black/10 sm:max-w-lg">
            {[
              { value: "7+", label: "Years Data" },
              { value: "2+", label: "Years AI PM" },
              { value: "9+", label: "Years Total" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white px-4 py-6 text-center sm:px-6">
                <dt className="text-2xl font-light text-accent sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 font-mono text-[10px] tracking-widest text-neutral-400 uppercase sm:text-xs">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* About */}
        <section id="about" className="mb-32 scroll-mt-24 border-t border-black/10 pt-20">
          <h2 className="mb-10 font-mono text-xs tracking-[0.25em] uppercase">
            <span className="text-accent">01</span>
            <span className="text-neutral-400"> — About</span>
          </h2>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <p className="text-2xl leading-snug font-light text-neutral-800">
              Analyst에서 PM으로,
              <br />
              같은 언어로 말합니다.
            </p>
            <div className="space-y-5 text-neutral-500 leading-relaxed">
              <p>
                분석가 시절에는 데이터 파이프라인부터 대시보드, 실험 설계까지
                end-to-end로 문제를 풀었습니다. 지금은 AI 제품 영역에서
                기술·비즈니스·사용자 요구를 한 화면에 올리는 역할을 합니다.
              </p>
              <p>
                &ldquo;이 수치가 의미하는 것&rdquo;과 &ldquo;그래서 무엇을
                만들 것인가&rdquo;를 연결하는 것이 제 일의 중심입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mb-32 scroll-mt-24 border-t border-black/10 pt-20"
        >
          <h2 className="mb-10 font-mono text-xs tracking-[0.25em] uppercase">
            <span className="text-accent">02</span>
            <span className="text-neutral-400"> — Experience</span>
          </h2>
          <ul className="space-y-0 divide-y divide-black/10 border-y border-black/10">
            {EXPERIENCE.map((job) => (
              <li
                key={job.role}
                className="grid gap-6 py-10 sm:grid-cols-[140px_1fr] sm:gap-12"
              >
                <time className="font-mono text-xs text-neutral-400">
                  {job.period}
                </time>
                <div>
                  <h3 className="text-xl font-medium text-black">
                    <span className="mr-2 text-accent">—</span>
                    {job.role}
                  </h3>
                  <p className="mt-3 max-w-2xl text-neutral-500 leading-relaxed">
                    {job.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-accent/25 px-3 py-1 font-mono text-[11px] text-neutral-600"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="mb-32 scroll-mt-24 border-t border-black/10 pt-20"
        >
          <h2 className="mb-10 font-mono text-xs tracking-[0.25em] uppercase">
            <span className="text-accent">03</span>
            <span className="text-neutral-400"> — Skills</span>
          </h2>
          <div className="grid gap-px border border-black/10 bg-black/10 sm:grid-cols-3">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="bg-white p-8">
                <h3 className="font-mono text-xs tracking-widest text-accent uppercase">
                  {group.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-neutral-600">
                      {item}
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
          <h2 className="mb-10 font-mono text-xs tracking-[0.25em] uppercase">
            <span className="text-accent">04</span>
            <span className="text-neutral-400"> — Contact</span>
          </h2>
          <p className="max-w-lg text-lg text-neutral-500 leading-relaxed">
            프로젝트 협업, 채용 문의, 또는 데이터·AI 제품 이야기가 있으시면
            편하게 연락 주세요.
          </p>
          <a
            href="https://github.com/som-dkim"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 text-black transition-colors hover:text-accent"
          >
            <span className="font-mono text-sm tracking-wide">
              github.com/som-dkim
            </span>
            <span className="text-accent transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </section>
      </main>

      <footer className="border-t border-black/10 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 text-xs text-neutral-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Som D. Kim</p>
          <p className="font-mono tracking-widest text-accent">
            DATA · PRODUCT · AI
          </p>
        </div>
      </footer>
    </div>
  );
}
