# 이선영 포트폴리오

Product Design Lead 이선영의 포트폴리오 웹사이트.
Figma Make에서 구성 후 로컬에서 이어서 개발 중.

## 기술 스택

- React 19 + TypeScript 5.7
- Vite 8 (개발 서버 포트: **8443**, `vite.config.ts`에서 고정)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- 이미지: WebP 최적화 완료 (`src/imports/optimized/`)

## SEO / 메타 관리 구조

> ⚠️ `index.html`이 아닌 `.figma/make/site.json`이 title·description·OG를 최종 결정한다.
> `vite.config.ts`의 `figmaSiteConfiguration` 플러그인이 빌드 시 `site.json`을 주입하므로
> SEO 수정은 반드시 `.figma/make/site.json`을 수정할 것.
>
> 📌 `"robots": { "index": false }` 유지 — 이 포트폴리오는 담당자에게 직접 URL로 공유하는 비공개 자료.
> 검색엔진에 노출할 필요 없음. 절대 `true`로 변경하지 말 것.

```
.figma/make/site.json  ← SEO 수정은 여기
index.html             ← Vite HTML 쉘 (figma:* 슬롯 포함)
vite.config.ts         ← site.json을 HTML에 주입하는 플러그인 포함
```

## 커밋 규칙

- `feat:` 새 섹션 / 기능 추가
- `fix:` 버그·레이아웃 오류 수정
- `style:` 디자인 토큰·CSS 변경
- `refactor:` 컴포넌트 분리·코드 정리
- `chore:` 빌드·패키지·설정 변경
- `content:` 포트폴리오 텍스트·이미지 내용 변경

## 워크플로우

- 개발 서버 확인 후 작업 (`http://localhost:8443`)
- 작업 유형별 필독 파일은 `AGENTS.md` 참조
- UI 수정 → `.agents/rules/design-system.md` 먼저 확인
- 이미지 추가 시 → `npm run optimize:images` 실행
- SEO 수정 시 → `.figma/make/site.json` 수정 (index.html 아님)
- 빌드 검증 후 커밋 → `npm run build`

## 주요 파일

- `src/App.tsx` — 메인 컴포넌트 (단일 파일 ~2,500줄)
- `src/index.css` — Tailwind v4 + 전역 스타일 + scroll-reveal
- `index.html` — Vite HTML 쉘 (SEO는 site.json으로 주입됨)
- `.figma/make/site.json` — **title, description, OG, robots 설정**
- `vite.config.ts` — Figma Make 플러그인 포함 (포트 8443 고정)
- `scripts/optimize-images.mjs` — 이미지 WebP 최적화 스크립트
- `.agents/` — AI 작업 규칙 및 가이드

## 전체 섹션 구성 (App.tsx 렌더 순서)

```
Header (고정)
├── Cover              #top
├── Profile            #profile
├── SelectedCases      #cases
├── DoolinkerCover     #doolinker   [04]
├── DoolinkerBrand                  [05]
├── DoolinkerStructure              [06]
├── DoolinkerInteraction            [07]
├── DoolinkerSystem                 [08]
├── IntranetCover      #intranet    [09]
├── IntranetIA                      [10]
├── IntranetSystem                  [11]
├── DualspaceCover     #dualspace   [12]
├── DualspaceProblem               [13]
├── DualspaceUX                    [14]
├── DualspaceDecision              [15]
├── DualspaceResult                [16]
├── DWorksCover        #dworks     [17]
├── DWorksSystem
├── CSTalkCover        #cstalk
├── CSTalkDetail
├── SalesBridge
├── MobileExperience
├── DesignLeadership   #leadership
├── CareerJourney      #career
└── Closing
DotNav (우측 점 내비게이션, 고정)
```

@AGENTS.md
