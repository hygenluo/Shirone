import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { CACHE_DIR_NAME } from "../../resolve/paths.ts";
const WIDTHS = [192, 384, 640];
const SUPPORTED_EXTENSIONS = /* @__PURE__ */ new Set([
  ".avif",
  ".jpeg",
  ".jpg",
  ".png",
  ".webp"
]);
async function collectImages(directory) {
  let entries;
  try {
    entries = await fs.readdir(directory, { withFileTypes: true });
  } catch {
    return [];
  }
  const images = [];
  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      images.push(...await collectImages(absolutePath));
    } else if (SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      images.push(absolutePath);
    }
  }
  return images;
}
async function readCache(cachePath) {
  try {
    const parsed = JSON.parse(await fs.readFile(cachePath, "utf8"));
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}
async function hashFile(filePath) {
  return createHash("sha256").update(await fs.readFile(filePath)).digest("hex");
}
async function hasUsableOutput(outputPath) {
  try {
    return (await fs.stat(outputPath)).size > 0;
  } catch {
    return false;
  }
}
async function generateMomentThumbnails({
  projectRoot,
  sourceDir = "public/images/moments",
  outputDir = "public/assets/moments/thumbnails",
  prune = true,
  cachePath: cachePathOption
}) {
  const sourceRoot = path.resolve(projectRoot, sourceDir);
  const outputRoot = path.resolve(projectRoot, outputDir);
  const cachePath = cachePathOption ?? path.join(projectRoot, CACHE_DIR_NAME, "moment-thumbnails.json");
  await fs.mkdir(path.dirname(cachePath), { recursive: true });
  const legacyCache = path.join(outputRoot, ".cache.json");
  if (legacyCache !== cachePath && existsSync(legacyCache)) {
    await fs.rm(legacyCache, { force: true });
  }
  const images = await collectImages(sourceRoot);
  const previousCache = await readCache(cachePath);
  const nextCache = {};
  const expectedOutputs = /* @__PURE__ */ new Set();
  let generated = 0;
  for (const sourcePath of images) {
    const relativePath = path.relative(sourceRoot, sourcePath);
    const cacheKey = relativePath.split(path.sep).join("/");
    const digest = await hashFile(sourcePath);
    const parsed = path.parse(relativePath);
    for (const width of WIDTHS) {
      const outputPath = path.join(
        outputRoot,
        parsed.dir,
        `${parsed.name}-${width}.webp`
      );
      expectedOutputs.add(path.resolve(outputPath).toLowerCase());
      if (previousCache[cacheKey] === digest && await hasUsableOutput(outputPath)) {
        continue;
      }
      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      await sharp(sourcePath).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 64, effort: 5, smartSubsample: true }).toFile(outputPath);
      generated += 1;
    }
    nextCache[cacheKey] = digest;
  }
  await fs.mkdir(outputRoot, { recursive: true });
  let removed = 0;
  const canPrune = prune && existsSync(sourceRoot);
  if (canPrune) {
    for (const outputPath of await collectImages(outputRoot)) {
      if (expectedOutputs.has(path.resolve(outputPath).toLowerCase())) continue;
      await fs.unlink(outputPath);
      removed += 1;
    }
  }
  await fs.writeFile(cachePath, `${JSON.stringify(nextCache, null, 2)}
`);
  return { generated, removed, total: images.length };
}
export {
  generateMomentThumbnails
};
