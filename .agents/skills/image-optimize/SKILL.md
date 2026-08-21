---
name: image-optimize
description: >-
  포트폴리오 이미지 자산을 WebP로 변환하고 파일명을 영문 slug로 정리하는 최적화 절차.
  새 이미지 추가시, PNG 기존 파일 스캔시, LCP 개선 작업 시 활성화.
---

# Skill: Image Optimize
# 이선영 포트폴리오 이미지 최적화 가이드

## 현재 이미지 현황

### 경로: `src/imports/`

| 파일명 | 크기 | 상태 |
|---|---|---|
| `___________2026-06-23______4.32.16.png` | 1.0MB | ⚠️ 1MB 초과 |
| `SEIBI2.0________.png` | 874KB | ⚠️ 대용량 |
| `image.png` | 736KB | ⚠️ 대용량 |
| `___________2026-06-23______4.33.29.png` | 209KB | ✅ 양호 |
| `isometric-mockups-11.png` | 587KB | ⚠️ 대용량 |
| `mizuho_admin-2.png` | 694KB | ⚠️ 대용량 |
| 기타 | 66~537KB | 부분 최적화 필요 |

**총 이미지 용량**: 약 8MB+

### 문제점
1. **파일명**: 한국어/일본어 특수문자, 날짜 기반 — URL/빌드 이슈 잠재
2. **포맷**: 모두 PNG — WebP로 변환 시 30~50% 절감 가능
3. **크기**: 1MB 이상 파일 존재 — LCP에 직접 영향

## 최적화 절차

### Step 1: 파일명 정리 (rename)

```bash
cd src/imports

# Doolinker 이미지
mv "___________2026-06-23______4.32.16.png" dolinker-login.png
mv "___________2026-06-23______4.32.58.png" dolinker-workflow.png
mv "___________2026-06-23______4.33.29.png" dolinker-dashboard.png
mv "___________2026-06-23______4.33.16.png" dolinker-settings.png
mv "DO.LiNKER_Design_System.png" dolinker-design-system.png

# Intranet 이미지
mv "mizuho_admin-2.png" intranet-admin.png
mv "SEIBI2.0________.png" intranet-login.png
mv "SEIBI2.0____.png" intranet-transaction.png
mv "___________2026-08-03______2.40.06.png" intranet-user.png
mv "___________2026-08-03______2.41.31.png" intranet-spec.png
mv "MIZUHO_Design_System.png" intranet-design-system.png
mv "mizuho_user-2.png" intranet-user-portal.png

# DWorks 이미지
mv "isometric-mockups-11.png" dworks-branding.png
mv "image-3.png" dworks-product.png

# Mobile 이미지
mv "image.png" mobile-nh.png
mv "image-1.png" mobile-hellolink.png
mv "image-2.png" mobile-dime.png
```

### Step 2: App.tsx import 경로 업데이트

rename 후 App.tsx 상단 import 경로 수정:
```tsx
import imgLogin from "./imports/dolinker-login.png";
import imgWorkflow from "./imports/dolinker-workflow.png";
import imgDashboard from "./imports/dolinker-dashboard.png";
import imgSettings from "./imports/dolinker-settings.png";
import imgDoolinkerDS from "./imports/dolinker-design-system.png";
import imgIntranetHome from "./imports/intranet-admin.png";
import imgIntranetLogin from "./imports/intranet-login.png";
import imgIntranetTx from "./imports/intranet-transaction.png";
import imgIntranetUser from "./imports/intranet-user.png";
import imgIntranetSpec from "./imports/intranet-spec.png";
import imgIntranetDS from "./imports/intranet-design-system.png";
import imgIntranetUserPortal from "./imports/intranet-user-portal.png";
import imgDworksBranding from "./imports/dworks-branding.png";
import imgDworksProduct from "./imports/dworks-product.png";
import imgNH from "./imports/mobile-nh.png";
import imgHelloLink from "./imports/mobile-hellolink.png";
import imgDime from "./imports/mobile-dime.png";
```

### Step 3: WebP 변환 (선택 사항)

macOS에서 `cwebp` 사용:
```bash
# cwebp 설치 (Homebrew)
brew install webp

# 변환 (품질 85%)
cd src/imports
for f in *.png; do
  cwebp -q 85 "$f" -o "${f%.png}.webp"
done
```

WebP 변환 후 App.tsx에서 `.png` → `.webp`로 변경

### Step 4: OG 이미지 생성

소셜 공유용 OG 이미지 (`public/og-image.png`):
- 크기: 1200×630px
- 내용: 이름, 직함, 대표 프로젝트 화면 1~2개
- 배경: `#191E2B` (DARK)
- 텍스트 색: 흰색

## 빌드 검증

```bash
npm run build
# dist/ 폴더에서 이미지 최적화 결과 확인
ls -lh dist/assets/*.png
ls -lh dist/assets/*.webp
```

## 성능 목표

| 지표 | 현재 | 목표 |
|---|---|---|
| 이미지 총 크기 | ~8MB+ | ~3MB 이하 |
| 최대 단일 이미지 | 1MB+ | 300KB 이하 |
| LCP | 미측정 | 2.5초 이하 |
| 히어로 이미지 | PNG 1MB+ | WebP 200KB |
