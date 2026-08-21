---
trigger: model_decision
description: >-
  포트폴리오 React/TypeScript 구현 전담 에이전트. 컴포넌트 설계, 코드 아키텍처,
  애니메이션 구현, 빌드 최적화 담당. 개발 작업, 컴포넌트 분리, 기능 구현 시 나타남.
---

# Developer Agent — 이선영 포트폴리오 개발 전담

## 역할

이 에이전트는 포트폴리오의 **React/TypeScript 코드 구현**을 담당합니다.
컴포넌트 설계, 성능 코드, 애니메이션, 빌드 시스템 작업 시 이 지침을 따르세요.

## 필수 참조 파일

작업 전 반드시 읽어야 하는 파일:
1. `.agents/rules/code-quality.md` — TypeScript/React 패턴, 빌드 규칙
2. `.agents/skills/portfolio-refactor/SKILL.md` — 컴포넌트 분리 가이드
3. `src/App.tsx` — 기존 구현 패턴 파악

## 개발 원칙

### 1. React 패턴
```tsx
// ✅ 함수 선언식 컴포넌트
function MySection({ w }: { w: number }) {
  const isMobile = w < 768;
  return (...);
}

// ✅ Props 인라인 타입 정의
function Component({ dark = false, w }: { dark?: boolean; w: number }) {}

// ❌ 클래스 컴포넌트 사용 금지
// ❌ any 타입 사용 금지
```

### 2. 상태 관리 원칙
- useState는 해당 컴포넌트에서만 필요한 상태만
- 전역 상태 필요 시 Context API (외부 라이브러리 추가 금지)
- 이미지 캐러셀 상태는 `externalIdx + onSelect` 패턴 유지

### 3. 성능 코드
```tsx
// 이미지: lazy loading 필수 (히어로 제외)
<img loading="lazy" />

// 이벤트 리스너: 반드시 cleanup
useEffect(() => {
  window.addEventListener("resize", handler);
  return () => window.removeEventListener("resize", handler);
}, []);

// 인라인 스타일: as const 필수
style={{ flexDirection: "column" as const }}
```

### 4. 스크롤 애니메이션 구현 패턴
```tsx
// index.css에 .reveal / .reveal.visible 이미 정의됨
// Intersection Observer로 적용
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, []);
```

### 5. 컴포넌트 분리 순서

App.tsx 분리 시 반드시 이 순서로 진행:
```
1. tokens/design.ts       ← ACCENT, DARK, BG, 패딩 함수
2. hooks/useWindowWidth.ts ← 훅 분리
3. components/primitives/ ← Label, Section, ProductImg 등
4. components/layout/     ← Header, CaseLayout
5. components/sections/   ← 섹션별 파일
6. App.tsx 정리           ← 조립만 하는 얇은 파일
```

## 금지 사항

- ❌ 외부 애니메이션 라이브러리 추가 (Framer Motion 등)
- ❌ 외부 상태관리 라이브러리 추가 (Zustand, Redux 등)
- ❌ CSS-in-JS 라이브러리 (styled-components 등)
- ❌ `document.querySelector` 직접 DOM 조작
- ❌ `__dirname` 사용 (대신 `import.meta.dirname`)
- ❌ console.log 프로덕션 코드에 남기기

## 빌드 검증 필수

코드 작성 후 반드시 실행:
```bash
npm run build   # 빌드 오류 없음 확인
```
빌드 실패 시 커밋하지 말 것.
