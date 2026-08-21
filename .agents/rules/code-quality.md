# Code Quality Rules — 이선영 포트폴리오

## 기술 스택

- **React**: 19.x — Hooks 중심, 클래스 컴포넌트 사용 금지
- **TypeScript**: 5.7 — 엄격한 타입, any 사용 지양
- **Tailwind CSS**: v4 (`@import 'tailwindcss'`) — inline style과 혼용 가능
- **Vite**: 8.x — `import.meta.dirname` 사용 (not `__dirname`)
- **패키지**: npm (pnpm 미설치 환경)

## 개발 서버

- 포트: **8443** (현재 실행 중)
- 핫리로드 지원 — 저장 시 즉시 반영

## 파일 구조 기준

```
src/
├── App.tsx          # 현재 단일 파일 (2,496줄, 98KB)
├── index.css        # Tailwind + 전역 CSS + 폰트
├── main.tsx         # React 마운트
├── vite-env.d.ts
└── imports/         # 이미지 에셋
```

> **분리 계획**: App.tsx를 컴포넌트별로 분리할 경우 `.agents/skills/portfolio-refactor/SKILL.md` 참조

## 코드 패턴

### 컴포넌트 정의
```tsx
// 함수 선언식 사용 (arrow function도 허용)
function MyComponent({ w }: { w: number }) {
  return (...);
}

// export는 파일 하단에 default export
export default MyComponent;
```

### Props 타입
```tsx
// Props는 인라인으로 정의
function Component({ 
  children, 
  dark = false, 
  w 
}: { 
  children: React.ReactNode;
  dark?: boolean;
  w: number;
}) {...}
```

### Inline style 패턴
```tsx
// as const 필수 (TypeScript 에러 방지)
style={{
  flexDirection: "column" as const,
  textTransform: "uppercase" as const,
  position: "fixed" as const,
  overflowY: "auto" as const,
}}
```

### Mouse event hover
```tsx
onMouseEnter={(e) => {
  (e.currentTarget as HTMLElement).style.backgroundColor = "#F0EDE8";
}}
onMouseLeave={(e) => {
  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
}}
```

### 반응형 패턴
```tsx
const isMobile = w < 768;
const isTablet = w < 1024;

// clamp() 사용
fontSize: isMobile ? "clamp(22px, 6vw, 28px)" : "clamp(26px, 3.2vw, 40px)"
```

## 빌드 규칙

1. **문자열 내 어포스트로피** — 작은 따옴표 문자열에서 이스케이프하거나 큰 따옴표 사용
   ```tsx
   // 올바름
   "We're here"
   'We\'re here'
   
   // 빌드 오류
   'We're here'
   ```

2. **JSX 닫는 태그** — 모든 태그는 반드시 닫힘
   ```tsx
   <img loading="lazy" />  // ✅
   <img loading="lazy">    // ❌
   ```

3. **Key prop** — map() 내 항상 고유한 key 제공

4. **이미지 alt 텍스트** — 반드시 한국어로 의미 있는 설명 작성

## 성능 규칙

- 이미지 `loading="lazy"` — 히어로 이미지 제외 모두 적용
- 상태 최소화 — 불필요한 useState 지양
- useEffect 클린업 — 이벤트 리스너는 반드시 cleanup

## 금지 사항

- ❌ `console.log` 프로덕션 코드에 남기기
- ❌ `any` 타입 무분별 사용
- ❌ inline style에서 `!important`
- ❌ `document.querySelector` 직접 사용 (React ref 사용)
- ❌ `__dirname` 사용 (대신 `import.meta.dirname`)
