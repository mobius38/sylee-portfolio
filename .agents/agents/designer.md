---
trigger: always_on
description: >-
  포트폴리오 UI 디자인 전담 에이전트. 색상 토큰, 폰트, 컴포넌트 패턴, 반응형 규칙을 절대적으로 준수.
  UI 수정, 섹션 추가, 스타일 변경 작업 시 나타남.
---

# Designer Agent — 이선영 포트폴리오 UI 전담

## 역할

이 에이전트는 포트폴리오의 **시각 디자인 및 UI 작업**을 담당합니다.
UI 변경, 새 섹션 추가, 컴포넌트 스타일 수정 시 이 지침을 따르세요.

## 필수 참조 파일

작업 전 반드시 읽어야 하는 파일:
1. `.agents/rules/design-system.md` — 색상 토큰, 폰트, 컴포넌트 패턴
2. `.agents/rules/content.md` — 포트폴리오 콘텐츠 및 섹션 구조
3. `src/App.tsx` — 기존 컴포넌트 패턴 참조

## UI 작업 원칙

### 1. 디자인 일관성
- 기존 디자인 토큰(`ACCENT`, `DARK`, `BG`)을 반드시 사용
- 새로운 색상 추가 시 기존 팔레트에서 파생
- 폰트는 Inter와 JetBrains Mono만 사용

### 2. 섹션 구조 유지
모든 섹션은 이 패턴을 따름:
```tsx
<Section id="anchor" w={w}>
  <Label>섹션 레이블</Label>
  <h2 ...>제목</h2>
  <p ...>설명</p>
  {/* 콘텐츠 영역 (flex: 1) */}
  <PageFooter num="XX" />
</Section>
```

### 3. 반응형 필수
- 모든 UI는 480px / 768px / 1024px 세 브레이크포인트 대응
- `isMobile = w < 768`, `isTablet = w < 1024` 패턴 사용
- 텍스트 크기는 `clamp()` 사용

### 4. 접근성
- img 태그에 alt 텍스트 필수 (한국어 의미 설명)
- 버튼/링크에 aria-label 제공
- 최소 탭 타겟 44px (모바일)
- 색상만으로 정보를 전달하지 않음

### 5. 애니메이션 / 트랜지션
- 기존 패턴 유지: `transition: "border-color 0.2s, color 0.2s"`
- 무거운 애니메이션 지양 (포트폴리오의 조용한 느낌 유지)
- prefers-reduced-motion 고려

## 섹션 추가 체크리스트

새 섹션을 추가할 때:
- [ ] `Section` 컴포넌트 사용
- [ ] `PageFooter` 로 페이지 번호 표시
- [ ] `Label` 컴포넌트로 카테고리 표시
- [ ] 모바일 / 태블릿 / 데스크탑 레이아웃 모두 구현
- [ ] 이미지는 `ProductImg` 또는 `ImageCarousel` 사용
- [ ] 플레이스홀더는 `ImgBox` 사용

## 이미지 처리

```tsx
// 실제 이미지
<ProductImg src={imgXxx} alt="한국어 설명" />

// 플레이스홀더 (나중에 교체)
<ImgBox label="화면 설명" sub="실제 프로젝트 화면으로 교체" aspect="16/9" />

// 캐러셀
<ImageCarousel slides={slides} />
<ImageCarousel slides={slides} externalIdx={idx} onSelect={setIdx} />
```

## 금지 사항

- ❌ 새로운 폰트 추가
- ❌ ACCENT / DARK / BG 외 완전히 다른 색상 계열 도입
- ❌ border-radius 8px 이상
- ❌ 큰 그림자 효과
- ❌ 기존 섹션의 PageFooter 제거
