// 이미지 최적화 스크립트
// PNG → WebP 변환 + 파일명 정리
// 실행: node scripts/optimize-images.mjs

import sharp from "sharp";
import { readdir, rename, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMPORTS_DIR = path.join(__dirname, "../src/imports");
const OUTPUT_DIR = path.join(__dirname, "../src/imports/optimized");

// 파일명 매핑 (원본 → 새 이름)
const RENAME_MAP = {
  "___________2026-06-23______4.32.16.png": "dolinker-login.png",
  "___________2026-06-23______4.32.58.png": "dolinker-workflow.png",
  "___________2026-06-23______4.33.29.png": "dolinker-dashboard.png",
  "___________2026-06-23______4.33.16.png": "dolinker-settings.png",
  "DO.LiNKER_Design_System.png": "dolinker-design-system.png",
  "mizuho_admin-2.png": "intranet-admin.png",
  "SEIBI2.0________.png": "intranet-login.png",
  "SEIBI2.0____.png": "intranet-transaction.png",
  "___________2026-08-03______2.40.06.png": "intranet-user.png",
  "___________2026-08-03______2.41.31.png": "intranet-spec.png",
  "MIZUHO_Design_System.png": "intranet-design-system.png",
  "mizuho_user-2.png": "intranet-user-portal.png",
  "isometric-mockups-11.png": "dworks-branding.png",
  "image-3.png": "dworks-product.png",
  "image.png": "mobile-nh.png",
  "image-1.png": "mobile-hellolink.png",
  "image-2.png": "mobile-dime.png",
};

// 최대 너비 (리사이즈 기준)
const MAX_WIDTH = 1440;
// WebP 품질
const WEBP_QUALITY = 85;

async function main() {
  // output 디렉토리 생성
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
  }

  const files = await readdir(IMPORTS_DIR);
  const pngFiles = files.filter(f => f.endsWith(".png") && !f.startsWith("."));

  console.log(`\n🖼  처리할 이미지: ${pngFiles.length}개\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of pngFiles) {
    const newName = RENAME_MAP[file] || file;
    const webpName = newName.replace(".png", ".webp");
    const inputPath = path.join(IMPORTS_DIR, file);
    const outputPath = path.join(OUTPUT_DIR, webpName);

    try {
      const image = sharp(inputPath);
      const meta = await image.metadata();
      const { size: beforeSize } = await import("fs").then(fs =>
        fs.promises.stat(inputPath)
      );

      // 최대 너비 리사이즈 + WebP 변환
      await image
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(outputPath);

      const { size: afterSize } = await import("fs").then(fs =>
        fs.promises.stat(outputPath)
      );

      const saved = (((beforeSize - afterSize) / beforeSize) * 100).toFixed(1);
      const beforeKB = (beforeSize / 1024).toFixed(0);
      const afterKB = (afterSize / 1024).toFixed(0);

      totalBefore += beforeSize;
      totalAfter += afterSize;

      const emoji = beforeSize > 500000 ? "⚠️ " : "✅ ";
      console.log(
        `${emoji}${newName.padEnd(35)} ${beforeKB.padStart(6)}KB → ${afterKB.padStart(5)}KB  (${saved}% 절감)`
      );
    } catch (err) {
      console.error(`❌ 실패: ${file}`, err.message);
    }
  }

  const totalSavedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(2);
  const totalBeforeMB = (totalBefore / 1024 / 1024).toFixed(2);
  const totalAfterMB = (totalAfter / 1024 / 1024).toFixed(2);

  console.log(`\n${"─".repeat(60)}`);
  console.log(`📊 총계: ${totalBeforeMB}MB → ${totalAfterMB}MB (${totalSavedMB}MB 절감)`);
  console.log(`\n✅ 최적화된 파일: src/imports/optimized/`);
  console.log(`\n📝 다음 단계: App.tsx import 경로를 optimized/ 폴더로 업데이트하세요.`);
}

main().catch(console.error);
