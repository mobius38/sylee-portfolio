# 이선영 포트폴리오 — AI 에이전트 가이드

React + Vite + Tailwind CSS v4 포트폴리오 프로젝트.

## 개발 서버

Vite 개발 서버가 포트 **8443**에서 실행 중.

- 로컬: `http://localhost:8443`
- 핫 리로드: 파일 저장 시 즉시 반영
- 시작 명령어: `npm run dev`

## 프로젝트 구조

```
.agents/
├── rules/
│   ├── design-system.md   # ← 색상 토큰, 폰트, 컴포넌트 패턴 (UI 작업 시 필독)
│   ├── content.md         # ← 포트폴리오 콘텐츠, 프로젝트 5종 상세 (내용 작업 시 필독)
│   └── code-quality.md    # ← React/TS 패턴, 빌드 규칙 (코드 작업 시 필독)
├── agents/
│   ├── designer.md        # ← UI 변경/추가 작업 시 참조
│   └── optimizer.md       # ← 성능·SEO·이미지 작업 시 참조
└── skills/
    ├── portfolio-refactor/ # ← 컴포넌트 분리 작업 시 참조
    ├── image-optimize/     # ← 이미지 최적화 작업 시 참조
    ├── find-skills/        # ← 작업에 맞는 스킬/에이전트 탐색 시 참조
    └── skill-creator/      # ← 새 스킬 생성 및 하네스 자가 진화 시 참조

src/
├── App.tsx          # 메인 컴포넌트 (현재 단일 파일 2,496줄)
├── index.css        # Tailwind v4 + 전역 CSS
├── main.tsx         # React 마운트
└── imports/         # 이미지 에셋

index.html           # Vite HTML 쉘 (SEO 메타 태그 포함)
```

## 작업 유형별 필독 파일

| 작업 유형 | 읽어야 할 파일 |
|---|---|
| **섹션 기획 / 콘텐츠 전략** | `agents/planner.md` |
| UI 추가 / 수정 | `rules/design-system.md`, `agents/designer.md` |
| 섹션 내용 수정 | `rules/content.md` |
| React 컴포넌트 개발 | `rules/code-quality.md`, `agents/developer.md` |
| 성능 / SEO 최적화 | `agents/optimizer.md` |
| 코드 리뷰 / 검증 | `agents/reviewer.md` |
| 이미지 작업 | `skills/image-optimize/SKILL.md` |
| 컴포넌트 분리 | `skills/portfolio-refactor/SKILL.md` |
| 스킬 탐색 / 추천 | `skills/find-skills/SKILL.md` |
| 하네스 학습 / 스킬 생성 | `skills/skill-creator/SKILL.md` |
| 코드 오류 수정 | `rules/code-quality.md` |

## 핵심 디자인 토큰

```ts
const ACCENT = "#4B3FE1";  // 인디고 — 강조색
const DARK   = "#191E2B";  // 딥 네이비 — 다크 배경
const BG     = "#FAF9F7";  // 오프화이트 — 라이트 배경
```

## 섹션 목록

| 번호 | 섹션명 | 앵커 | 컴포넌트 |
|---|---|---|---|
| 01 | Cover | `#top` | `Cover` |
| 02 | Profile | `#profile` | `Profile` |
| 03 | Selected Cases | `#cases` | `SelectedCases` |
| 04-08 | Doolinker | `#doolinker` | `DoolinkerCover`, `DoolinkerBrand`, ... |
| 09-11 | Intranet Portal | `#intranet` | `IntranetCover`, `IntranetIA`, ... |
| 12-16 | Dualspace | `#dualspace` | `DualspaceCover`, `DualspaceProblem`, ... |
| 17+ | DWorks | `#dworks` | `DWorksCover`, ... |
| - | CS Talk | `#cstalk` | CS Talk 섹션 |
| - | Leadership | `#leadership` | 리딩 경험 |
| - | Career | `#career` | 경력 |

## 의존성

- Runtime: React 19, React DOM 19
- Styling: Tailwind CSS v4 (`@tailwindcss/vite`)
- Build: Vite 8, TypeScript 5.7
- Package manager: npm (pnpm 미설치 환경)

## 코드 품질

- 문자열 내 어포스트로피: 큰 따옴표 사용 (`"We're here"`)
- JSX 태그: 항상 닫기
- Inline style: `as const` 필수 (TypeScript 요구사항)
- Default export: 파일당 하나

## 빌드 / 배포

```bash
npm run dev      # 개발 서버 (포트 8443)
npm run build    # 프로덕션 빌드 (dist/)
npm run preview  # 빌드 결과 미리보기
```
