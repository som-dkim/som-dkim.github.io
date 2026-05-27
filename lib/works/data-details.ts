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
  overview: string;
  sections: DataDetailSection[];
  /** works 페이지 회사 블록 앵커 id */
  listAnchorId: string;
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
