import {
  getAllMarkdownWorkDetailIds,
  getMarkdownWorkDetail,
} from "./load-poc-markdown";

export type WorkDetailSection = {
  title: string;
  label: string;
  items: string[];
};

export type WorkDetailHero = {
  src: string;
  alt: string;
  mediaType?: "image" | "gif";
  caption?: string;
};

export type WorkDetail = {
  id: string;
  period: string;
  title: string;
  summary: string;
  tags: string[];
  hero?: WorkDetailHero;
  gallery?: WorkDetailHero[];
  /** 캐러셀 하단 캡션 (비우면 "데모 화면" 기본값 사용) */
  galleryCaption?: string;
  overview: string;
  sections: WorkDetailSection[];
};

/** TS 파일에 직접 정의하는 PoC 상세 (Markdown 이외 수동 override) */
export const WORK_DETAILS: Record<string, WorkDetail> = {};

export function getWorkDetail(id: string): WorkDetail | undefined {
  return getMarkdownWorkDetail(id) ?? WORK_DETAILS[id];
}

export function getAllWorkDetailIds(): string[] {
  const ids = new Set([
    ...getAllMarkdownWorkDetailIds(),
    ...Object.keys(WORK_DETAILS),
  ]);
  return [...ids].sort();
}
