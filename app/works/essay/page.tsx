import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal Essay | Dasom Kim",
  description: "데이터와 AI를 일하는 방식, 개인적인 이야기",
};

function EssayDivider() {
  return <hr className="my-12 border-0 border-t border-black/10" />;
}

function EssayBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-5 text-[0.9375rem] leading-[1.9] text-neutral-700">
      {children}
    </div>
  );
}

export default function EssayPage() {
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
        <Link
          href="/works"
          className="text-[13px] tracking-wide text-neutral-500 transition-colors hover:text-accent"
        >
          ← About Me
        </Link>

        <p className="section-label mt-10 text-accent">Personal Essay</p>
        <h1 className="mt-4 text-2xl font-bold leading-snug text-black sm:text-3xl">
          데이터를 읽고, AI를 씁니다
        </h1>
        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] tracking-wide text-neutral-500">
          <a
            href="mailto:som.dkim@gmail.com"
            className="transition-colors hover:text-accent"
          >
            Email
          </a>
          <span className="text-neutral-300" aria-hidden>
            ·
          </span>
          <a
            href="https://github.com/som-dkim"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <span className="text-neutral-300" aria-hidden>
            ·
          </span>
          <a
            href="https://www.linkedin.com/in/dasom-kim-59b061119"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </p>

        <article className="mt-12 border-t border-black/10 pt-12">
          <EssayBody>
            <p>안녕하세요, 김다솜입니다!</p>
            <p>
              대학원에서 비정형데이터를 연구하며 NLP의 근간을 쌓아왔습니다.
              금융, 제조, IT 등 다양한 산업군에서 데이터로 인사이트를
              만들어내는 일에 큰 성취감을 느끼며 성장해왔습니다.
            </p>
          </EssayBody>

          <EssayDivider />

          <EssayBody>
            <p>
              상업고등학교 졸업 후 증권사에서 3년간 근무하며 학사 학위를
              병행했습니다.
            </p>
            <p>
              &lsquo;고졸 사무직&rsquo;이 제 한계가 아니라는 걸 스스로
              증명하고 싶었습니다.
            </p>
            <p>
              이후 대학원까지 진학해 KCI 등재지 2건, 특허 1건, BK21
              산학협력 과제 5건을 수행하며 &lsquo;쓰임&rsquo;에 대한 갈망을
              채울 수 있었습니다.
            </p>
            <p>
              학위 취득 후 계약직 연구원으로 시작해 카카오뱅크 Data
              Scientist까지, 매번 빠르고 밀도 있는 성과로 커리어 성장을
              이어왔습니다.
            </p>
            <p>
              현재는 AI PM으로의 커리어 확장을 위해 AI 프로젝트를 직접
              리딩하고 기획하며, 데이터와 AI를 비즈니스 현장에 연결하는 일에
              깊은 관심을 두고 있습니다.
            </p>
          </EssayBody>

          <EssayDivider />

          <EssayBody>
            <h2 className="text-base font-bold text-black">반전의 ENFP</h2>
            <blockquote className="border-l-2 border-accent/40 pl-4 text-neutral-600 italic">
              &ldquo;그럼에도 불구하고 나는 너를 용서하고 사랑하게
              될 거야&rdquo; — 한로로
            </blockquote>
            <p>
              ENFP답게 잘 녹습니다.
            </p>
            <p>
              &lsquo;매사 사랑하라&rsquo;는 뜻을 담아 지어주신 이름처럼,
              다양한 사람들 사이에서 여러 시각으로 세상을 바라보는 걸
              좋아합니다.
            </p>
            <p>
              전 직장들의 동료평가에서도 &lsquo;협업&rsquo;과
              &lsquo;소통&rsquo; 항목이 최상위였을 만큼, 다양한 포지션의
              동료들과 공동의 목표를 향해 유기적으로 움직이는 게 기본
              베이스로 깔려 있습니다.
            </p>
            <p>
              BUT, ENFP치고 집요합니다.
            </p>
            <p>
              숫자를 다루는 업무 속에서도 문장을 읽고 맥락을 연결하는 일에
              강점이 있습니다.
            </p>
            <p>
              분석과 모델링으로 도출된 결과 앞에서 &lsquo;왜?&rsquo;를 끝까지
              파고드는 편이고, 조직 안팎의 흐름 속에서도 같은 질문으로 현상의
              본질을 짚어내는 데 집요합니다.
            </p>
          </EssayBody>

          <EssayDivider />

          <EssayBody>
            <h2 className="text-base font-bold text-black">레퍼런스</h2>
            <p className="font-medium text-neutral-800">
              &ldquo;김다솜? 밥값은 제대로 한다.&rdquo;
            </p>
            <p>
              실제 레퍼런스 체크 당시 직접 레퍼리로 참여해주신 전 회사
              임원분의 평가입니다.
            </p>
            <p>
              자신 없을 때마다 붙잡고 사는 문장이기도 합니다.
            </p>
            <p>
              짧은 기간 안에 성과를 내며 빠른 성장을 이어온 만큼, 이제는
              장기적으로 조직 내 전문가로 자리매김할 다음 단계를 기다리며
              다양한 시도를 이어가고 있습니다.
            </p>
          </EssayBody>
        </article>

        <footer className="mt-20 border-t border-black/10 pt-10">
          <Link href="/works" className="more-cta">
            <span>목록으로</span>
            <span aria-hidden>→</span>
          </Link>
        </footer>
      </main>
    </div>
  );
}
