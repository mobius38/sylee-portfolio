---
trigger: model_decision
description: >-
  포트폴리오 성능 최적화 전담 에이전트. SEO, 이미지, 번들 최적화 기준과 절차 정의.
  성능 개선, 이미지 추가, SEO 작업, 빌드 최적화 시 나타남.
---

# Optimizer Agent — 이선영 포트폴리오 성능 전담

## 역할

이 에이전트는 포트폴리오의 **성능 최적화, SEO, 번들 최적화** 작업을 담당합니다.
성능 개선, 이미지 최적화, 빌드 최적화, SEO 작업 시 이 지침을 따르세요.

## 필수 참조 파일

작업 전 반드시 읽어야 하는 파일:
1. `.agents/rules/code-quality.md` — 기술 스택 및 빌드 규칙
2. `.agents/skills/image-optimize/SKILL.md` — 이미지 최적화 절차
3. `.agents/skills/portfolio-refactor/SKILL.md` — 컴포넌트 분리 가이드

## 최적화 우선순위

```
1순위: SEO (즉각 효과, 위험 없음)
2순위: 이미지 최적화 (LCP 개선, 용량 감소)
3순위: 번들 / 코드 스플리팅 (빌드 성능)
4순위: 컴포넌트 분리 (유지보수성, 큰 작업)
```

## SEO 체크리스트

`index.html`에 반드시 포함할 항목:

```html
<!-- 기본 -->
<title>이선영 — Product Design Lead 포트폴리오</title>
<meta name="description" content="15년 이상의 Product Design 경험. Workflow Automation, Enterprise Intranet, Communication Platform 설계 전문.">
<link rel="canonical" href="https://[배포URL]">

<!-- OG (소셜 공유) -->
<meta property="og:title" content="이선영 — Product Design Lead">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
<meta property="og:image" content="...">
<meta property="og:url" content="...">

<!-- 폰트 preload -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

## 이미지 최적화 기준

| 기준 | 값 |
|---|---|
| 히어로 이미지 최대 크기 | 500KB |
| 일반 이미지 최대 크기 | 200KB |
| 권장 포맷 | WebP (JPEG/PNG 대비 30~50% 절감) |
| 썸네일 리사이즈 | 최대 1440px 너비 |
| lazy loading | 히어로 제외 모두 `loading="lazy"` |

### 현재 이미지 문제점
- 파일명 한국어/일본어 특수문자 혼재 → 영문 slug로 rename 권장
- 최대 파일: `___________2026-06-23______4.32.16.png` (1MB+)
- WebP 미변환

### 이미지 rename 매핑
```
___________2026-06-23______4.32.16.png  → dolinker-login.png
___________2026-06-23______4.32.58.png  → dolinker-workflow.png
___________2026-06-23______4.33.29.png  → dolinker-dashboard.png
___________2026-06-23______4.33.16.png  → dolinker-settings.png
DO.LiNKER_Design_System.png             → dolinker-design-system.png
mizuho_admin-2.png                      → intranet-admin.png
SEIBI2.0________.png                    → intranet-login.png
SEIBI2.0____.png                        → intranet-transaction.png
___________2026-08-03______2.40.06.png  → intranet-user.png
___________2026-08-03______2.41.31.png  → intranet-spec.png
MIZUHO_Design_System.png                → intranet-design-system.png
mizuho_user-2.png                       → intranet-user-portal.png
isometric-mockups-11.png               → dworks-branding.png
image-3.png                             → dworks-product.png
image.png                               → mobile-nh.png
image-1.png                             → mobile-hellolink.png
image-2.png                             → mobile-dime.png
```

## 번들 최적화

### 현재 상태
- App.tsx 단일 파일 98KB — 모든 컴포넌트 인라인
- 코드 스플리팅 없음

### 목표 구조 (컴포넌트 분리 후)
```
src/
├── components/
│   ├── layout/Header.tsx
│   ├── sections/*.tsx   (섹션별 분리)
│   └── primitives/*.tsx (Label, ProductImg 등)
├── hooks/useWindowWidth.ts
└── tokens/design.ts
```

### Vite 코드 스플리팅 설정
```ts
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        react: ['react', 'react-dom'],
      }
    }
  }
}
```

## 성능 측정

최적화 전후 측정 항목:
- **LCP** (Largest Contentful Paint) — 목표: 2.5초 이하
- **번들 크기** — `npm run build` 후 dist/ 확인
- **이미지 총 크기** — 현재 ~8MB → 목표 ~3MB 이하

## Vite 경고 해결

```ts
// vite.config.ts 수정 필요
// 1. __dirname → import.meta.dirname
// 2. JSON import with type attribute
import siteJson from "./.figma/make/site.json" with { type: "json" };
```
