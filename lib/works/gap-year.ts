export type GapYearEntry = {
  id: string;
  title: string;
  period?: string;
  summary: string;
  tags?: string[];
  href?: string | null;
};

/**
 * 강의 — 이미지: public/gap-year/lectures/{파일명} → 경로는 /gap-year/lectures/...
 * 단일 이미지: image 만 지정
 * 갤러리(여러 장): images 배열 지정 (image 는 무시됨)
 */
export type GapYearLectureEntry = {
  id: string;
  title: string;
  period?: string;
  /** 단일 이미지 */
  image?: string;
  /** 갤러리 — 여러 장일 때 image 대신 사용 */
  images?: string[];
  imageAlt: string;
  /** 본문 줄글 — 문자열 하나 또는 문단 배열 */
  body: string | string[];
  tags?: string[];
  href?: string | null;
};

/** AI Upskilling — 항목 추가 시 아래 배열에 넣으면 됩니다 */
export const GAP_YEAR_UPSKILLING: GapYearEntry[] = [];

/** 강의 — 항목 추가 시 아래 배열에 넣으면 됩니다 */
export const GAP_YEAR_LECTURES: GapYearLectureEntry[] = [
  {
    id: "data-literacy-ai",
    title: "데이터 리터러시와 AI",
    image: "/gap-year/lectures/lectures1.jpg",
    imageAlt: "데이터 리터러시와 AI 강의",
    body: [
      "고등학생을 대상으로 Excel 기본 활용법부터 데이터를 읽고 정리하는 방법까지 단계적으로 안내했습니다. 학생들이 직접 다룬 데이터로 만든 분석 결과를 바탕으로, 생성형 AI를 활용해 이미지를 만들고 보고서 형태로 결과를 정리하는 흐름까지 연결했습니다.",
      "데이터 리터러시와 AI 활용을 한 세션 안에서 체험할 수 있도록, 분석 → 시각화·산출물 이해 → AI 보조 작성·이미지 생성 순으로 구성했습니다.",
    ],
    tags: ["강의", "고등학생", "Excel", "데이터 리터러시", "생성형 AI"],
  },
  {
    id: "ssafy-news-dashboard",
    title: "SSAFY 특강",
    image: "/gap-year/lectures/ssafy.png",
    imageAlt: "SSAFY 데이터 트랙 특강",
    body: [
      "삼성전자가 운영하는 SSAFY(Samsung Software Academy For Youth) 데이터 트랙에서 1일 특강으로 진행했습니다. 뉴스 기사 데이터를 수집·정제하고, 분석 관점을 잡아 대시보드로 시각화하는 흐름을 중심으로 설계했습니다.",
      "기사 텍스트에서 키워드·이슈·트렌드를 읽는 방법, 분석 결과를 한눈에 보여주는 대시보드 구성 원칙, 실무에서 쓰는 데이터 분석·BI 사고방식까지 데이터 트랙 수강생이 바로 적용할 수 있도록 맞춰 전달했습니다.",
    ],
    tags: ["SSAFY", "특강", "데이터 트랙", "뉴스 분석", "대시보드", "BI"],
  },
  {
    id: "encore-ai-pm",
    title: "AI 프로젝트 리딩",
    images: [
      "/gap-year/lectures/ai-project1.jpg",
      "/gap-year/lectures/ai-project2.jpg",
      "/gap-year/lectures/ai-project3.jpg",
    ],
    imageAlt: "엔코아 AI 개발자 양성과정 AI 프로젝트 리딩 특강",
    body: [
      "엔코아 AI 개발자 양성과정에서 특강으로 진행했습니다. AI 프로젝트를 기획·진행·완료까지 관리하는 실무 관점, 서비스 기획에서 요구사항을 정리하고 PoC·MVP를 구분하는 방법, 그리고 AI 직무에 맞는 자기소개서 작성 포인트까지 한 세션에서 연결해 다뤘습니다.",
      "개발 역량과 함께 기획·커뮤니케이션·문서화가 프로젝트 성패를 가르는 지점을 사례 중심으로 공유했고, 수강생이 과정 내 프로젝트와 취업 준비에 바로 쓸 수 있도록 정리했습니다.",
    ],
    tags: ["엔코아", "특강", "AI PM", "서비스 기획", "자기소개서", "AI 개발자 양성"],
  },
];
