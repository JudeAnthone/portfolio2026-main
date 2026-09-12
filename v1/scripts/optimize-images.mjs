import { readdirSync, statSync, mkdirSync } from "node:fs";
import { join, dirname, basename, relative } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const jobs = [
  { dir: join(root, "public", "brand", "gallery"), match: /\.jpe?g$/i, width: 900, quality: 80 },
  { dir: join(root, "public", "brand"), match: /^card-img.*\.(jpe?g|png)$/i, width: 900, quality: 80 },
  { dir: join(root, "public", "logo"), match: /\.jpe?g$/i, width: 400, quality: 80 },
  { dir: join(root, "src", "assets"), match: /\.png$/i, width: 1600, quality: 82, recursive: true },
];

function collectFiles(dir, match, recursive = false) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stats = statSync(full);
    if (stats.isDirectory()) {
      if (recursive) results.push(...collectFiles(full, match, recursive));
    } else if (match.test(entry)) {
      results.push(full);
    }
  }
  return results;
}

let totalBefore = 0;
let totalAfter = 0;
let converted = 0;

for (const job of jobs) {
  const files = collectFiles(job.dir, job.match, job.recursive);
  for (const file of files) {
    const target = file.replace(/\.(jpe?g|png)$/i, ".webp");
    mkdirSync(dirname(target), { recursive: true });

    const meta = await sharp(file).metadata();
    const before = statSync(file).size;

    await sharp(file)
      .resize({ width: Math.min(job.width, meta.width ?? job.width), withoutEnlargement: true })
      .webp({ quality: job.quality })
      .toFile(target);

    const after = statSync(target).size;
    totalBefore += before;
    totalAfter += after;
    converted++;

    console.log(
      `- ${relative(root, file)}  ${(before / 1024).toFixed(1)} KB -> ` +
        `${(after / 1024).toFixed(1)} KB WebP  (${Math.round(100 - (after / before) * 100)}% smaller)`
    );
  }
}

const pct = totalBefore > 0 ? Math.round(100 - (totalAfter / totalBefore) * 100) : 0;
console.log(
  `\nConverted ${converted} files. Total: ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ` +
    `${(totalAfter / 1024 / 1024).toFixed(2)} MB (${pct}% smaller).`
);
console.log("Review the .webp outputs, then delete the originals.");