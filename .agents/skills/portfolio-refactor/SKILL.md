---
name: portfolio-refactor
description: >-
  이선영 포트폴리오 App.tsx(2,500줄 단일 파일)를 섹션별 컴포넌트로 분리하는 단계별 가이드.
  컴포넌트 분리, 토큰 중앙화, 훅 분리, 폴더 구조 재편 시 활성화.
---

# Skill: Portfolio Refactor
# 이선영 포트폴리오 컴포넌트 분리 가이드

## 목적

현재 단일 파일(`src/App.tsx` 98KB, 2,496줄)을 기능 단위 컴포넌트로 분리하여
유지보수성과 AI 작업 정확도를 향상시킵니다.

## 분리 원칙

1. **기능 단위 분리** — 섹션별로 하나의 파일
2. **공통 컴포넌트** — `primitives/`에 분리
3. **디자인 토큰 중앙화** — `tokens/design.ts`
4. **하위 호환** — App.tsx는 조립 파일로만 남음

## 목표 구조

```
src/
├── tokens/
│   └── design.ts              # ACCENT, DARK, BG, 브레이크포인트
├── hooks/
│   └── useWindowWidth.ts      # useWindowWidth 훅
├── components/
│   ├── primitives/
│   │   ├── Label.tsx           # Label 컴포넌트
│   │   ├── PageFooter.tsx      # PageFooter 컴포넌트
│   │   ├── Section.tsx         # Section 래퍼
│   │   ├── ProductImg.tsx      # ProductImg 컴포넌트
│   │   ├── ImgBox.tsx          # ImgBox 플레이스홀더
│   │   ├── PdfButton.tsx       # PdfButton 컴포넌트
│   │   ├── ImageCarousel.tsx   # 이미지 캐러셀
│   │   └── SlideTitles.tsx     # 슬라이드 제목 목록
│   ├── layout/
│   │   ├── Header.tsx          # 고정 헤더 + 모바일 메뉴
│   │   └── sectionHelpers.tsx  # CaseLayout, CaseMeta, TwoUp, TextImage
│   └── sections/
│       ├── Cover.tsx            # 01 Cover
│       ├── Profile.tsx          # 02 Profile
│       ├── SelectedCases.tsx    # 03 Selected Cases
│       ├── DoolinkerCover.tsx   # 04 Doolinker Cover
│       ├── DoolinkerBrand.tsx   # 05 Brand to Product
│       ├── DoolinkerStructure.tsx  # 06 Product Structure
│       ├── DoolinkerInteraction.tsx # 07 Interaction
│       ├── DoolinkerSystem.tsx  # 08 Design System
│       ├── IntranetCover.tsx    # 09 Intranet Cover
│       ├── IntranetIA.tsx       # 10 IA & Permission
│       ├── IntranetSystem.tsx   # 11 Design System & Product
│       ├── DualspaceCover.tsx   # 12 Dualspace Cover
│       ├── DualspaceProblem.tsx # 13 Problem
│       ├── DualspaceUX.tsx      # 14 UX Architecture
│       ├── DualspaceDecision.tsx # 15 Design Decision
│       ├── DualspaceResult.tsx  # 16 Result
│       ├── DWorksCover.tsx      # 17+ DWorks
│       └── ...
├── App.tsx                      # 조립만 하는 얇은 파일 (~100줄)
├── index.css
└── main.tsx
```

## 분리 단계 (순서대로 실행)

### Step 1: 토큰 및 훅 분리

**`src/tokens/design.ts`**
```ts
export const ACCENT = "#4B3FE1";
export const DARK   = "#191E2B";
export const BG     = "#FAF9F7";

export function sectionPadV(w: number): string {
  if (w < 480) return "40px";
  if (w < 768) return "48px";
  if (w < 1024) return "56px";
  return "64px";
}

export function sectionPadH(w: number): string {
  if (w < 480) return "20px";
  if (w < 768) return "24px";
  if (w < 1024) return "48px";
  return "80px";
}
```

**`src/hooks/useWindowWidth.ts`**
```ts
import { useState, useEffect } from "react";

export function useWindowWidth(): number {
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1440
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}
```

### Step 2: 프리미티브 컴포넌트 분리

각 컴포넌트(Label, PageFooter, Section, ProductImg, ImgBox, PdfButton)를  
`src/components/primitives/`로 이동

### Step 3: 이미지 캐러셀 분리

`ImageCarousel`과 `SlideTitles`는 복잡한 상태를 가지므로  
`src/components/primitives/ImageCarousel.tsx`로 분리

### Step 4: 레이아웃 분리

`Header` → `src/components/layout/Header.tsx`  
`CaseLayout`, `CaseMeta`, `TwoUp`, `TextImage` → `src/components/layout/sectionHelpers.tsx`

### Step 5: 섹션별 분리

App.tsx에서 각 섹션 함수를 `src/components/sections/`로 이동

### Step 6: App.tsx 정리

```tsx
// src/App.tsx (분리 후)
import { useWindowWidth } from "@/hooks/useWindowWidth";
import Header from "@/components/layout/Header";
import Cover from "@/components/sections/Cover";
import Profile from "@/components/sections/Profile";
// ... 모든 섹션 import

export default function App() {
  const w = useWindowWidth();
  return (
    <>
      <Header w={w} />
      <Cover w={w} />
      <Profile w={w} />
      {/* ... */}
    </>
  );
}
```

## 주의사항

- 분리 시 **import 경로** `@/` 별칭 사용 (vite.config.ts에 이미 설정됨)
- `useState`가 있는 컴포넌트는 반드시 `"use client"` 불필요 (Vite SPA)
- 이미지 import는 각 섹션 파일로 이동 (또는 중앙 `images.ts` 파일 생성)
- CarouselSlide 타입은 공통 `types.ts`로 분리

## 분리 검증

분리 후 다음을 확인:
```bash
npm run build  # 빌드 오류 없음 확인
```
- `http://localhost:8443` 에서 모든 섹션 정상 렌더링
- 이미지 캐러셀 인터랙션 정상 작동
- 반응형 레이아웃 정상 (480 / 768 / 1024px)
