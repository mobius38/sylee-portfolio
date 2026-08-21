# References — 디자인 토큰 참조

## 현재 확정된 토큰 값

```ts
// src/App.tsx에서 직접 선언된 값들
const ACCENT = "#4B3FE1";   // 인디고 바이올렛
const DARK   = "#191E2B";   // 딥 네이비
const BG     = "#FAF9F7";   // 웜 오프화이트
```

## index.css Tailwind v4 테마 토큰

```css
@theme {
  --color-accent:       #4B3FE1;
  --color-bg-dark:      #191E2B;
  --color-bg:           #FAF9F7;
  --color-text:         #12151B;
  --color-muted:        #6B7280;
  --color-border:       #E2DDD8;
  --color-surface:      #F0EDE8;
  --font-sans: 'Noto Sans KR', 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## 컴포넌트 분리 후 목표 토큰 파일

```ts
// src/tokens/design.ts (분리 후 생성할 파일)
export const ACCENT = "#4B3FE1";
export const DARK   = "#191E2B";
export const BG     = "#FAF9F7";
```
