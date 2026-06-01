import {
  getAllMarkdownDataWorkDetailIds,
  getMarkdownDataWorkDetail,
} from "./load-data-markdown";

export type DataDetailSection = {
  label: string;
  title: string;
  items: string[];
};

export type DataDetailMedia = {
  src: string;
  alt: string;
};

/** Impact 항목 중 match 문자열이 포함된 줄 옆에 표시할 링크 */
export type DataImpactDownload = {
  match: string;
  href: string;
  label?: string;
  /** 있으면 파일 다운로드, 없으면 일반/외부 링크 */
  downloadName?: string;
};

export type DataWorkDetail = {
  id: string;
  company: string;
  department: string;
  period: string;
  projectPeriod?: string;
  title: string;
  summary: string;
  tags: string[];
  gallery?: DataDetailMedia[];
  /** 캐러셀 하단 캡션 (비우면 미표시) */
  galleryCaption?: string;
  overview: string;
  sections: DataDetailSection[];
  /** works 페이지 회사 블록 앵커 id */
  listAnchorId: string;
  impactDownload?: DataImpactDownload;
};

/** TS 파일에 직접 정의하는 Data 상세 (Markdown 이외) */
export const DATA_WORK_DETAILS: Record<string, DataWorkDetail> = {};

export function getDataWorkDetail(id: string): DataWorkDetail | undefined {
  return getMarkdownDataWorkDetail(id) ?? DATA_WORK_DETAILS[id];
}

export function getAllDataWorkDetailIds(): string[] {
  const ids = new Set([
    ...getAllMarkdownDataWorkDetailIds(),
    ...Object.keys(DATA_WORK_DETAILS),
  ]);
  return [...ids].sort();
}
