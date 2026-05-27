import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { DataDetailMedia, DataDetailSection, DataWorkDetail } from "./data-details";

const CONTENT_DIR = path.join(process.cwd(), "content/works/data");

const SECTION_META: Record<string, { label: string; title: string }> = {
  context: { label: "01", title: "Context" },
  role: { label: "02", title: "Role" },
  "data & analysis": { label: "03", title: "Data & Analysis" },
  "data-and-analysis": { label: "03", title: "Data & Analysis" },
  deliverables: { label: "04", title: "Deliverables" },
  impact: { label: "05", title: "Impact" },
};

function normalizeHeading(heading: string) {
  return heading.trim().toLowerCase();
}

function parseBulletItems(body: string): string[] {
  return body
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim())
    .filter(Boolean);
}

function dataGallery(galleryId: string): DataDetailMedia[] {
  return [1, 2, 3, 4, 5].map((n) => ({
    src: `/works/${galleryId}-${n}.png`,
    alt: `데모 ${n}`,
  }));
}

function parseMarkdownFile(filePath: string): DataWorkDetail | null {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const id = typeof data.id === "string" ? data.id : path.basename(filePath, ".md");
  if (!data.title || !data.summary || !data.company) return null;

  let overview = "";
  const sections: DataDetailSection[] = [];

  const parts = content.trim().split(/^##\s+/m).filter(Boolean);
  for (const part of parts) {
    const newline = part.indexOf("\n");
    const heading =
      newline === -1 ? part.trim() : part.slice(0, newline).trim();
    const body = newline === -1 ? "" : part.slice(newline + 1).trim();
    const key = normalizeHeading(heading);

    if (key === "overview") {
      overview = body.replace(/\n+/g, " ").trim();
      continue;
    }

    const meta = SECTION_META[key];
    if (!meta) continue;

    sections.push({
      label: meta.label,
      title: meta.title,
      items: parseBulletItems(body),
    });
  }

  sections.sort((a, b) => a.label.localeCompare(b.label));

  const galleryId =
    typeof data.galleryId === "string" ? data.galleryId : `data-${id}`;

  return {
    id,
    listAnchorId: String(data.listAnchorId ?? `data-${id}`),
    company: String(data.company),
    department: String(data.department ?? ""),
    period: String(data.period ?? ""),
    projectPeriod:
      typeof data.projectPeriod === "string" ? data.projectPeriod : undefined,
    title: String(data.title),
    summary: String(data.summary),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    gallery: dataGallery(galleryId),
    overview,
    sections,
  };
}

let productionCache: Map<string, DataWorkDetail> | null = null;

function loadMarkdownDataDetails(): Map<string, DataWorkDetail> {
  if (process.env.NODE_ENV === "production" && productionCache) {
    return productionCache;
  }

  const map = new Map<string, DataWorkDetail>();
  if (!fs.existsSync(CONTENT_DIR)) {
    if (process.env.NODE_ENV === "production") productionCache = map;
    return map;
  }

  for (const file of fs.readdirSync(CONTENT_DIR)) {
    if (!file.endsWith(".md")) continue;
    const detail = parseMarkdownFile(path.join(CONTENT_DIR, file));
    if (detail) map.set(detail.id, detail);
  }

  if (process.env.NODE_ENV === "production") productionCache = map;
  return map;
}

export function getMarkdownDataWorkDetail(
  id: string,
): DataWorkDetail | undefined {
  return loadMarkdownDataDetails().get(id);
}

export function getAllMarkdownDataWorkDetailIds(): string[] {
  return [...loadMarkdownDataDetails().keys()];
}
