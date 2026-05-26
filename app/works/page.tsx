import type { Metadata } from "next";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Me | Dasom Kim",
  description: "학력, 자격, 프로젝트 및 연구 활동",
};

type WorkItem = {
  id: string;
  period: string;
  title: string;
  summary: string;
  tags: string[];
  highlights?: string[];
  href: string | null;
};

type EducationResearch = {
  category: "특허" | "KCI 논문";
  title: string;
  detail: string;
  period?: string;
};

type EducationItem = {
  id: string;
  period: string;
  school: string;
  degree: string;
  major: string;
  note?: string;
  highlights?: string[];
  noteHighlights?: string[];
  research?: EducationResearch[];
};

const AI_POC_WORKS: WorkItem[] = [
  {
    id: "poc-01",
    period: "2026",
    title: "웹소설/시나리오 현지화 리라이팅 시스템",
    summary:
      "원작 서사·문체 유지와 타겟 언어·문화권에 맞춘 웹소설·시나리오 리라이팅.",
    tags: ["LLM", "PoC"],
    href: null,
  },
  {
    id: "poc-02",
    period: "2026",
    title: "외국인 관광객 여행장소 위치추천",
    summary:
      "여행자 선호·동선·주변 정보를 결합한 맞춤형 관광지·코스 추천.",
    tags: ["RAG", "PoC"],
    href: null,
  },
  {
    id: "poc-03",
    period: "2026",
    title: "KMS 기반 실시간 검색 시스템",
    summary:
      "사내 KMS 연동 기반 질의 의도 분류, 문서 실시간 검색·요약·응답.",
    tags: ["Agent", "PoC"],
    href: null,
  },
  {
    id: "poc-04",
    period: "2025",
    title: "야구 중계 해설위원",
    summary:
      "경기 상황·선수·통계 반영 LLM 해설 멘트 실시간 생성.",
    tags: ["LLM", "PoC"],
    href: null,
  },
  {
    id: "poc-05",
    period: "2025",
    title: "AI 인플루언서 페르소나 생성 · 연애 상담 스트리머",
    summary:
      "스트리머 페르소나·말투·상담 시나리오 설계와 대화 일관성 유지.",
    tags: ["LLM", "Persona", "PoC"],
    href: null,
  },
  {
    id: "poc-06",
    period: "2025",
    title: "고객 챗봇 상담 시스템",
    summary:
      "고객 문의 분류, FAQ·정책 기반 답변, 상담원 에스컬레이션 연계.",
    tags: ["LLM", "PoC"],
    href: null,
  },
  {
    id: "poc-07",
    period: "2025",
    title: "특허 초안 작성 시스템",
    summary:
      "발명 요지·기술 포인트 입력 기반 특허 명세서 초안 구조와 문장 생성.",
    tags: ["LLM", "PoC"],
    href: null,
  },
  {
    id: "poc-08",
    period: "2024",
    title: "AI 기반 모의 면접 시스템",
    summary:
      "직무·경력 맞춤 면접 질문 생성, 답변 분석, 개선 피드백 제공.",
    tags: ["LLM", "PoC"],
    href: "/works/poc-08",
  },
];

const DATA_WORKS: WorkItem[] = [
  {
    id: "data-kakao",
    period: "2022 — 2023",
    title: "카카오뱅크 · 인입고객 트렌드 분석",
    summary:
      "대규모 인입 고객 데이터를 분석해 트렌드와 세그먼트 인사이트를 도출하고, 의사결정에 활용 가능한 리포트를 제공했습니다.",
    tags: ["SQL", "Analytics", "Trend"],
    highlights: ["카카오뱅크"],
    href: null,
  },
  {
    id: "data-hyundai",
    period: "2020 — 2022",
    title: "현대오토에버 · 그룹사 데이터 구축",
    summary:
      "그룹사 데이터 구축 프로젝트를 PM/SM으로 수행하며 요구사항 정리, 일정·품질 관리, 이해관계자 커뮤니케이션을 담당했습니다.",
    tags: ["PM", "Data Platform", "Governance"],
    highlights: ["현대오토에버"],
    href: null,
  },
  {
    id: "data-credit",
    period: "2018 — 2020",
    title: "신용평가사 · 비재무 데이터 분석플랫폼",
    summary:
      "비재무 데이터 분석 플랫폼 상품 출시를 위해 데이터 모델링, 분석 로직, 상품화 프로세스를 end-to-end로 기획·실행했습니다.",
    tags: ["Product Launch", "Platform", "Analytics"],
    highlights: ["신용평가사"],
    href: null,
  },
  {
    id: "data-daegu",
    period: "2017 — 2018",
    title: "대구광역시 · 전기차 충전소 입지 선정",
    summary:
      "전기차 충전소 입지 인프라 선정을 위한 데이터 분석을 수행하고, 공간·수요 기반 의사결정 근거를 마련했습니다.",
    tags: ["Spatial Analysis", "Public Sector"],
    highlights: ["대구광역시"],
    href: null,
  },
];

const EDUCATION: EducationItem[] = [
  {
    id: "edu-kookmin",
    period: "2015.03 — 2017.02",
    school: "국민대학교 비즈니스IT전문대학원",
    degree: "석사",
    major: "비즈니스IT",
    highlights: ["국민대학교"],
    research: [
      {
        category: "특허",
        title: "텍스트 분석을 통한 이종 매체 카테고리 다중 매핑 시스템",
        detail: "특허번호 10-1928732",
        period: "2018.12.07",
      },
      {
        category: "KCI 논문",
        title: "텍스트 분석을 활용한 과학기술이슈 여론 분석 방법론",
        detail:
          "김다솜, et al., 한국IT서비스학회지, Vol. 14, No. 3, pp. 33-48, 2015",
      },
      {
        category: "KCI 논문",
        title: "텍스트 분석을 통한 이종 매체 카테고리 다중 매핑 방법론",
        detail:
          "김다솜, 김남규, 지능정보연구, Vol. 22, No. 4, pp. 193-215, 2016",
      },
    ],
  },
  {
    id: "edu-knou",
    period: "2019.03 — 2023.08",
    school: "한국방송통신대학교",
    degree: "학사",
    major: "통계데이터과학과",
    highlights: ["한국방송통신대학교"],
  },
  {
    id: "edu-credit",
    period: "2011.07 — 2015.02",
    school: "국가평생교육진흥원 학점은행제",
    degree: "학사",
    major: "경영학",
    highlights: ["국가평생교육진흥원"],
  },
  {
    id: "edu-highschool",
    period: "2006.03 — 2009.02",
    school: "서울여자상업고등학교",
    degree: "졸업",
    major: "—",
    note: "고교 졸업 후 LIG투자증권에서 근무하며, 3년간 직장과 학사 학위 취득을 병행했습니다.",
    highlights: ["서울여자상업고등학교"],
    noteHighlights: ["LIG투자증권"],
  },
];

type CredentialItem = {
  id: string;
  period: string;
  title: string;
};

const CERTIFICATIONS: CredentialItem[] = [
  {
    id: "cert-aws-ml",
    period: "2025.03",
    title: "AWS Certification Machine Learning Specialty",
  },
  {
    id: "cert-aws-saa",
    period: "2024.03",
    title: "AWS Certification Solution Architect Associate",
  },
  {
    id: "cert-opic",
    period: "2025.05",
    title: "OPIc Intermediate Mid 3 (외국어)",
  },
];

type AchievementItem = {
  id: string;
  category: "수상" | "특허" | "KCI 논문";
  title: string;
  detail: string;
  period?: string;
};

const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "award-kcb",
    category: "수상",
    title: "KCB 금융스타일 시각화경진대회",
    detail: "입상 (최종 9위)",
  },
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

function highlightText(
  text: string,
  highlights: string[] = [],
  tone: "accent" | "soft" = "accent",
): ReactNode[] {
  if (highlights.length === 0) return [text];
  const pattern = new RegExp(
    `(${highlights.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g",
  );
  return text.split(pattern).map((part, index) =>
    highlights.includes(part) ? (
      <span
        key={index}
        className={tone === "soft" ? undefined : "font-bold text-accent"}
        style={
          tone === "soft"
            ? { color: "#a86a6a", fontWeight: 500 }
            : undefined
        }
      >
        {part}
      </span>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

function MoreLink() {
  return (
    <span className="mt-6 flex justify-end border-t border-black/10 pt-5">
      <span className="more-cta">
        <span>more</span>
        <span aria-hidden>→</span>
      </span>
    </span>
  );
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function WorkCard({ item }: { item: WorkItem }) {
  const inner = (
    <>
      <time className="text-xs tracking-wide text-neutral-400 uppercase">
        {formatPeriod(item.period)}
      </time>
      <h3 className="mt-4 text-lg font-bold leading-snug text-black">
        {highlightText(item.title, item.highlights)}
      </h3>
      <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.85] text-neutral-500">
        {item.summary}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <li
            key={tag}
            className="border border-accent/25 px-3 py-1 text-[11px] text-neutral-600"
          >
            {tag}
          </li>
        ))}
      </ul>
      <MoreLink />
    </>
  );

  const cardClass =
    "group flex h-full scroll-mt-28 flex-col rounded-2xl border border-black/10 bg-white p-8 transition-colors hover:border-accent/40 hover:bg-neutral-50";

  if (item.href) {
    if (isExternalHref(item.href)) {
      return (
        <a
          id={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClass}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link id={item.id} href={item.href} className={cardClass}>
        {inner}
      </Link>
    );
  }

  return (
    <article id={item.id} className={cardClass}>
      {inner}
    </article>
  );
}

export default function WorksPage() {
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
          <Link
            href="/"
            className="wordmark text-black transition-colors hover:text-accent"
          >
            Dasom Kim
          </Link>
          <Link
            href="/"
            className="text-[13px] tracking-wide text-neutral-500 transition-colors hover:text-accent"
          >
            ← Home
          </Link>
        </div>
      </header>

      <main className="relative mx-auto max-w-5xl px-6 pt-32 pb-24">
        <p className="section-label mb-6 text-accent">About Me</p>
        <div className="h-px w-12 bg-accent" aria-hidden />

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#experience"
            className="inline-flex h-12 items-center justify-center bg-accent px-8 text-[13px] font-normal tracking-[0.12em] text-white uppercase transition-colors hover:bg-accent-dark"
          >
            Experience
          </a>
          <a
            href="#education"
            className="inline-flex h-12 items-center justify-center border border-accent/30 px-8 text-[13px] tracking-[0.12em] text-neutral-600 uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Education
          </a>
        </div>

        {/* Experience */}
        <section
          id="experience"
          className="scroll-mt-24 mt-20 border-t border-black/10 pt-20"
        >
          <h2 className="section-label mb-12">
            <span className="text-accent">01</span>
            <span className="text-neutral-400"> — Experience</span>
          </h2>

          <h3 className="section-label mb-6 text-neutral-400">AI PoC</h3>
          <p className="mb-10 max-w-lg text-[0.9375rem] leading-[1.85] text-neutral-500">
            2024 — 2026 · LLM / RAG / Agent 기반 PoC 8건
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {AI_POC_WORKS.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>

          <h3 className="section-label mb-6 mt-20 text-neutral-400">
            Data &amp; Analytics
          </h3>
          <p className="mb-10 max-w-lg text-[0.9375rem] leading-[1.85] text-neutral-500">
            데이터 분석 · 플랫폼 구축 · 상품 출시 경험
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {DATA_WORKS.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Education & Credentials */}
        <section
          id="education"
          className="scroll-mt-24 mt-24 border-t border-black/10 pt-20"
        >
          <h2 className="section-label mb-12">
            <span className="text-accent">02</span>
            <span className="text-neutral-400"> — Education</span>
          </h2>

          <h3 className="section-label mb-6 text-neutral-400">학력</h3>
          <ul className="divide-y divide-black/10 border-y border-black/10">
            {EDUCATION.map((item) => (
              <li
                key={item.id}
                className="grid gap-4 py-8 sm:grid-cols-[160px_1fr] sm:gap-12"
              >
                <time className="text-xs tracking-wide text-neutral-500">
                  {formatPeriod(item.period)}
                </time>
                <div>
                  <h4 className="text-lg font-bold text-black">
                    {highlightText(item.school, item.highlights)}
                  </h4>
                  <p className="mt-2 text-[0.9375rem] text-neutral-600">
                    <span className="font-bold text-accent">{item.degree}</span>
                    {item.major !== "—" ? (
                      <>
                        <span className="mx-2 text-neutral-300">·</span>
                        {item.major}
                      </>
                    ) : null}
                  </p>
                  {item.note ? (
                    <p className="mt-3 text-[0.9375rem] leading-[1.85] text-neutral-500">
                      {item.id === "edu-highschool" ? (
                        <>
                          고교 졸업 후{" "}
                          <span style={{ color: "#a86a6a", fontWeight: 500 }}>
                            LIG투자증권
                          </span>
                          에서 근무하며, 3년간 직장과 학사 학위 취득을
                          병행했습니다.
                        </>
                      ) : (
                        highlightText(
                          item.note,
                          item.noteHighlights ?? [],
                          "soft",
                        )
                      )}
                    </p>
                  ) : null}
                  {item.research && item.research.length > 0 ? (
                    <ul className="mt-6 space-y-5 border-t border-black/10 pt-6">
                      {item.research.map((work) => (
                        <li key={work.title}>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="border border-accent/25 px-3 py-1 text-[11px] font-bold text-accent">
                              {work.category}
                            </span>
                            {work.period ? (
                              <time className="text-xs text-neutral-400">
                                {work.period}
                              </time>
                            ) : null}
                          </div>
                          <p className="mt-3 text-[0.9375rem] font-bold leading-relaxed text-neutral-800">
                            {work.title}
                          </p>
                          <p className="mt-1 text-[0.875rem] leading-[1.85] text-neutral-500">
                            {work.detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>

          <h3 className="section-label mb-6 mt-16 text-neutral-400">자격</h3>
          <ul className="divide-y divide-black/10 border-y border-black/10">
            {CERTIFICATIONS.map((item) => (
              <li
                key={item.id}
                className="grid gap-4 py-6 sm:grid-cols-[160px_1fr] sm:items-center sm:gap-12"
              >
                <time className="text-xs tracking-wide text-neutral-500">
                  {item.period}
                </time>
                <p className="text-[0.9375rem] leading-relaxed text-neutral-800">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="section-label mb-6 mt-16 text-neutral-400">수상</h3>
          <ul className="divide-y divide-black/10 border-y border-black/10">
            {ACHIEVEMENTS.map((item) => (
              <li key={item.id} className="py-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="border border-accent/25 px-3 py-1 text-[11px] font-bold text-accent">
                    {item.category}
                  </span>
                  {item.period ? (
                    <time className="text-xs text-neutral-400">
                      {item.period}
                    </time>
                  ) : null}
                </div>
                <h4 className="mt-4 text-[0.9375rem] font-bold leading-relaxed text-black">
                  {item.title}
                </h4>
                <p className="mt-2 text-[0.9375rem] leading-[1.85] text-neutral-500">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-20 border-t border-black/10 pt-12">
          <Link
            href="/#contact"
            className="inline-flex h-12 items-center justify-center border border-accent/30 px-8 text-[13px] tracking-wide text-neutral-600 transition-colors hover:border-accent hover:text-accent"
          >
            연락하기
          </Link>
        </div>
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
