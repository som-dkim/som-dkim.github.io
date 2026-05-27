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
  excellent?: boolean;
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
    href: "/works/poc-01",
  },
  {
    id: "poc-02",
    period: "2026",
    title: "외국인 관광객 여행장소 위치추천",
    summary:
      "여행자 선호·동선·주변 정보를 결합한 맞춤형 관광지·코스 추천.",
    tags: ["RAG", "PoC"],
    excellent: true,
    href: "/works/poc-02",
  },
  {
    id: "poc-03",
    period: "2026",
    title: "KMS 기반 실시간 검색 시스템",
    summary:
      "사내 KMS 연동 기반 질의 의도 분류, 문서 실시간 검색·요약·응답.",
    tags: ["Agent", "PoC"],
    excellent: true,
    href: "/works/poc-03",
  },
  {
    id: "poc-04",
    period: "2025",
    title: "야구 중계 해설위원",
    summary:
      "경기 상황·선수·통계 반영 LLM 해설 멘트 실시간 생성.",
    tags: ["LLM", "PoC"],
    href: "/works/poc-04",
  },
  {
    id: "poc-05",
    period: "2025",
    title: "AI 인플루언서 페르소나 생성 · 연애 상담 스트리머",
    summary:
      "스트리머 페르소나·말투·상담 시나리오 설계와 대화 일관성 유지.",
    tags: ["LLM", "Persona", "PoC"],
    href: "/works/poc-05",
  },
  {
    id: "poc-06",
    period: "2025",
    title: "고객 챗봇 상담 시스템",
    summary:
      "고객 문의 분류, FAQ·정책 기반 답변, 상담원 에스컬레이션 연계.",
    tags: ["LLM", "PoC"],
    href: "/works/poc-06",
  },
  {
    id: "poc-07",
    period: "2025",
    title: "특허 초안 작성 시스템",
    summary:
      "발명 요지·기술 포인트 입력 기반 특허 명세서 초안 구조와 문장 생성.",
    tags: ["LLM", "PoC"],
    excellent: true,
    href: "/works/poc-07",
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

type DataProject = {
  id: string;
  title: string;
  period?: string;
  summary: string;
  tags: string[];
  href?: string | null;
};

/** 회사(재직) 단위 + 하위 프로젝트 목록 — Data & Analytics 전용 */
type DataCompanyGroup = {
  id: string;
  company: string;
  period: string;
  role: string;
  focus: string;
  projects: DataProject[];
};

const DATA_EXPERIENCE: DataCompanyGroup[] = [
  {
    id: "data-kakao",
    company: "카카오뱅크",
    period: "2022.05 — 2023.09",
    role: "고객서비스실 / 팀원",
    focus: "상담 데이터 분석·시각화, 고객서비스실 분석 환경 구축",
    projects: [
      {
        id: "kkb01",
        title: "고객서비스 데이터 분석",
        period: "2022.07 — 2023.09",
        summary:
          "ETL·데이터마트·배치 전처리로 분석 환경을 구축하고, 상담센터 인입 데이터에서 키워드·동시출현·기간별 트렌드를 추적했습니다. 인입 상담 문의 예측과 기술연구소 생성형 AI 언어모델 협업을 지원했으며, 대시보드 시각화를 구축했습니다.",
        tags: ["SQL (Hive)", "Python", "ETL", "Tableau"],
        href: "/works/data/kkb01",
      },
      {
        id: "kkb02",
        title: "고객서비스 지표 개발 및 관리",
        summary:
          "콜·톡·일대일 상담 주간 지표 통계를 운영하고 필요 지표를 개발·관리했습니다. 고객센터 요구 데이터 추출 및 시각화를 담당했습니다.",
        tags: ["Excel", "SQL (Hive)", "Tableau"],
        href: "/works/data/kkb02",
      },
      {
        id: "kkb03",
        title: "고객서비스 분석 리포팅",
        summary:
          "고객서비스실 월간 인사이트 보고서와 Ad-Hoc 리포트를 발간했습니다.",
        tags: ["Excel", "SQL (Hive)", "PPT"],
        href: "/works/data/kkb03",
      },
    ],
  },
  {
    id: "data-hyundai",
    company: "현대오토에버",
    period: "2020.06 — 2022.05",
    role: "빅데이터실 / 책임",
    focus: "데이터 분석 과제 수행 및 시스템 운영",
    projects: [
      {
        id: "hae01",
        title: "사내 문서 검색 시스템 구축",
        summary:
          "파일럿·생산기술 분야 기술문서 검색 시스템을 구축하고, 운영 DB 파이프라인·정합성 관리, 사용자 모니터링 지표·성과 관리를 수행했습니다. 일배치 모니터링과 현업 요구사항 대응 등 시스템 운영·유지보수를 담당했습니다.",
        tags: ["Data Platform", "Pipeline", "Operations"],
        href: "/works/data/hae01",
      },
      {
        id: "hae02",
        title: "고객 세그먼테이션 분석 고도화",
        summary:
          "자동차 행동 데이터 기반 GMM·DBSCAN·K-means 클러스터링으로 고객군 분류와 마켓 타겟층을 수립했습니다. 행동 유형 세분화·타겟 분류, 프로젝트 관리, 산출물 작성, 코드 최적화를 수행했습니다.",
        tags: ["Python", "Clustering", "PM"],
        href: "/works/data/hae02",
      },
      {
        id: "hae03",
        title: "내부 감사 시스템 자동화 모델 개발",
        summary:
          "ERP 데이터 이상 징후 탐지를 위해 DBSCAN·회귀·SOM·계층 클러스터링 분석을 수행했습니다. 전 그룹사 자동화 플랫폼 모형에 탑재되는 성과를 냈습니다.",
        tags: ["Anomaly Detection", "ML", "ERP"],
        href: "/works/data/hae03",
      },
    ],
  },
  {
    id: "data-ecredible",
    company: "이크레더블",
    period: "2018.07 — 2020.02",
    role: "정보전략팀 / 대리",
    focus: "데이터 분석 및 정보서비스 기획",
    projects: [
      {
        id: "ecr01",
        title: "뉴스 감성분석",
        summary:
          "형태소 분석·감성 사전 구축, 감성 지수·유사 문서 추천 지표를 개발하고 Word Cloud·Word Network로 시각화했습니다. 기술문서·서비스 명세서를 작성했고, 웹 서비스 출시·상용화에 기여했습니다.",
        tags: ["SQL", "Python", "R", "Product Launch"],
        href: "/works/data/ecr01",
      },
      {
        id: "ecr02",
        title: "산업별 키워드 이슈 트래킹",
        summary:
          "형태소 분석·TF-IDF·토픽 모델링으로 산업별 키워드 이슈를 추적하고, Word Cloud·Word Network·Qlik으로 시각화했습니다. 기술문서 및 프로젝트 보고서를 작성했습니다.",
        tags: ["Python", "SQL", "NLP", "Qlik"],
        href: "/works/data/ecr02",
      },
    ],
  },
  {
    id: "data-penta",
    company: "펜타시스템테크놀러지",
    period: "2017.07 — 2018.02",
    role: "빅데이터팀 / 연구원",
    focus: "공공 빅데이터 프로젝트 수행 및 산출물 작성",
    projects: [
      {
        id: "penta01",
        title: "대구시청 · 전기차 충전 인프라 입지 선정",
        period: "2017.07 — 2017.12",
        summary:
          "통신사 유동인구·도로 통행량·공공데이터를 활용해 상관관계·K-means·수요 예측 분석을 수행하고, QGIS 지리정보 분석과 실사를 거쳐 170개소 최종 입지를 선정했습니다. 2017 행정안전부 공공빅데이터 분석 우수사례집에 선정되었습니다.",
        tags: ["Spatial Analysis", "QGIS", "Public Sector"],
        href: "/works/data/penta01",
      },
    ],
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
  href?: string | null;
};

const CREDENTIALS_LINE =
  "M.S. · B.A. in Business Administration · B.S. in Statistics";

const DOWNLOADS = [
  {
    id: "cv",
    title: "CV",
    format: "Word",
    href: "/downloads/cv.docx",
    downloadName: "Dasom-Kim-CV.docx",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    format: "PDF",
    href: "/downloads/portfolio.pdf",
    downloadName: "Dasom-Kim-Portfolio.pdf",
  },
] as const;

const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "award-kcb",
    category: "수상",
    title: "KCB 금융스타일 시각화경진대회",
    detail: "입상 (최종 9위)",
    href: "https://dacon.io/competitions/official/82407/codeshare/1064",
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

function ExcellentProjectBadge() {
  return (
    <li className="inline-flex items-center gap-1.5 border border-accent bg-accent px-3 py-1 text-[11px] font-bold tracking-wide text-white">
      <span className="text-sm leading-none" aria-hidden>
        🎖️
      </span>
      <span>우수프로젝트</span>
    </li>
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

function DataExperienceList() {
  return (
    <ul className="divide-y divide-black/10 border-y border-black/10">
      {DATA_EXPERIENCE.map((group) => (
        <li key={group.id} id={group.id} className="scroll-mt-28 py-10">
          <div className="grid gap-4 sm:grid-cols-[160px_1fr] sm:gap-12">
            <time className="text-xs tracking-wide text-neutral-500 uppercase">
              {formatPeriod(group.period)}
            </time>
            <div>
              <h4 className="text-lg font-bold text-accent">{group.company}</h4>
              <p className="mt-1 text-[0.8125rem] tracking-wide text-neutral-500">
                {group.role}
              </p>
              <p className="mt-2 text-[0.9375rem] leading-[1.75] text-neutral-600">
                {group.focus}
              </p>
            </div>
          </div>

          <ul className="mt-8 space-y-6 border-l-2 border-accent/20 pl-6 sm:ml-[172px]">
            {group.projects.map((project) => (
              <li key={project.id}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h5 className="text-[0.9375rem] font-bold leading-snug text-black">
                        {project.title}
                      </h5>
                      {project.period ? (
                        <time className="text-[11px] tracking-wide text-neutral-400">
                          {project.period}
                        </time>
                      ) : null}
                    </div>
                    <p className="mt-2 text-[0.9375rem] leading-[1.85] text-neutral-500">
                      {project.summary}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="border border-accent/25 px-2.5 py-0.5 text-[10px] text-neutral-600"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {project.href ? (
                    <Link href={project.href} className="more-cta shrink-0">
                      <span>more</span>
                      <span aria-hidden>→</span>
                    </Link>
                  ) : (
                    <span className="more-cta shrink-0 opacity-40">
                      <span>more</span>
                      <span aria-hidden>→</span>
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
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
        {item.excellent ? <ExcellentProjectBadge /> : null}
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
    "group flex h-full scroll-mt-28 flex-col rounded-2xl border border-black/10 bg-white p-8 transition-colors hover:border-accent/40 hover:bg-neutral-50 focus:outline-none focus-visible:outline-none";

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
      <Link href={item.href} className={cardClass} id={item.id}>
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

        <div className="mt-10">
          <h1 className="flex max-w-full flex-wrap items-baseline gap-x-3 gap-y-1 leading-none">
            <span className="text-[clamp(2rem,10vw,3.25rem)] font-extrabold tracking-[0.06em] text-black">
              DASOM KIM
            </span>
            <Link
              href="/works/essay"
              className="text-xs font-normal tracking-wide text-neutral-400 transition-colors hover:text-accent sm:text-sm"
            >
              [more..]
            </Link>
          </h1>
          <p className="mt-4 text-[0.9375rem] leading-[1.85] text-neutral-600">
            {CREDENTIALS_LINE}
          </p>
          <p className="mt-2 text-[0.9375rem] leading-[1.85] text-neutral-500">
            Data Analyst · PM · AI Engineer · LLM
          </p>
        </div>

        <div className="mt-8">
          <p className="section-label mb-3 text-neutral-400">Download</p>
          <div className="flex flex-wrap gap-3">
            {DOWNLOADS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                download={item.downloadName}
                className="group inline-flex min-w-[140px] items-center justify-between gap-4 rounded-xl border border-black/10 bg-white px-4 py-3 transition-colors hover:border-accent/40 hover:bg-neutral-50"
              >
                <div>
                  <p className="text-[11px] font-bold tracking-wide text-accent uppercase">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-[11px] text-neutral-500">
                    {item.format}
                  </p>
                </div>
                <span
                  className="text-xs text-neutral-400 transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden
                >
                  ↓
                </span>
              </a>
            ))}
          </div>
        </div>

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
          <div className="mb-10 max-w-lg space-y-2 text-[0.9375rem] leading-[1.85] text-neutral-500">
            <p>2024 — 2026 · LLM / RAG / Agent 기반 PoC 8건</p>
            <p>
              기업체(MS, KT, LG 등) 인력참여 평가{" "}
              <span className="font-medium text-accent underline decoration-accent underline-offset-2">
                우수상 3회 수상
              </span>
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {AI_POC_WORKS.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>

          <h3 className="section-label mb-10 mt-20 text-neutral-400">
            Data &amp; Analytics
          </h3>
          <DataExperienceList />
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
              <li
                key={item.id}
                className="grid gap-4 py-8 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8"
              >
                <div>
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
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="more-cta sm:ml-auto"
                  >
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
