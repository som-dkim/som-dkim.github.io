import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { WorkDetail, WorkDetailHero, WorkDetailSection } from "./details";

const CONTENT_DIR = path.join(process.cwd(), "content/works/poc");

const SECTION_META: Record<string, { label: string; title: string }> = {
  problem: { label: "01", title: "Problem" },
  "role & scope": { label: "02", title: "Role & Scope" },
  "role and scope": { label: "02", title: "Role & Scope" },
  approach: { label: "03", title: "Approach" },
  "tech stack": { label: "04", title: "Tech Stack" },
  outcome: { label: "05", title: "Outcome" },
};

const GALLERY_EXTENSIONS = ["gif", "webp", "png", "jpg", "jpeg"] as const;

function galleryFileExists(galleryId: string, index: number): boolean {
  const worksDir = path.join(process.cwd(), "public/works");
  return GALLERY_EXTENSIONS.some((ext) =>
    fs.existsSync(path.join(worksDir, `${galleryId}-${index}.${ext}`)),
  );
}

function resolveGallerySrc(galleryId: string, index: number): string {
  const worksDir = path.join(process.cwd(), "public/works");
  for (const ext of GALLERY_EXTENSIONS) {
    if (fs.existsSync(path.join(worksDir, `${galleryId}-${index}.${ext}`))) {
      return `/works/${galleryId}-${index}.${ext}`;
    }
  }
  return `/works/${galleryId}-${index}.png`;
}

/** public/works 에 실제 있는 번호만 사용 (gif/webp/png 지원, 없는 번호는 생략) */
function pocGallery(galleryId: string): WorkDetailHero[] {
  const slides: WorkDetailHero[] = [];
  for (let n = 1; n <= 10; n++) {
    if (!galleryFileExists(galleryId, n)) continue;
    slides.push({
      src: resolveGallerySrc(galleryId, n),
      alt: `데모 ${slides.length + 1}`,
    });
  }
  return slides;
}

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

function parseMarkdownFile(filePath: string): WorkDetail | null {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const id =
    typeof data.id === "string" ? data.id : path.basename(filePath, ".md");
  if (!data.title || !data.summary) return null;

  let overview = "";
  const sections: WorkDetailSection[] = [];

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

  const galleryId = typeof data.galleryId === "string" ? data.galleryId : id;

  return {
    id,
    period: String(data.period ?? ""),
    title: String(data.title),
    summary: String(data.summary),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    gallery: pocGallery(galleryId),
    galleryCaption:
      typeof data.galleryCaption === "string" && data.galleryCaption.trim()
        ? data.galleryCaption.trim()
        : undefined,
    overview,
    sections,
  };
}

let productionCache: Map<string, WorkDetail> | null = null;

function loadMarkdownWorkDetails(): Map<string, WorkDetail> {
  if (process.env.NODE_ENV === "production" && productionCache) {
    return productionCache;
  }

  const map = new Map<string, WorkDetail>();
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

export function getMarkdownWorkDetail(id: string): WorkDetail | undefined {
  return loadMarkdownWorkDetails().get(id);
}

export function getAllMarkdownWorkDetailIds(): string[] {
  return [...loadMarkdownWorkDetails().keys()];
}
