현재 구현된 포트폴리오의 콘텐츠, 컬러, 타이포그래피, 섹션 구성, 전체 디자인 방향은 유지해줘.

새로 디자인하거나 전체 구조를 다시 만들지 말고,
현재 구현된 결과물을 기준으로 아래 두 가지 기능만 개선해줘.

1. Responsive Web
2. PDF Portfolio Download

━━━━━━━━━━━━━━━━━━━━
1. RESPONSIVE WEB 개선
━━━━━━━━━━━━━━━━━━━━

현재 Desktop 중심으로 구현된 포트폴리오를
Desktop / Tablet / Mobile에서 완성도 있게 사용할 수 있도록 반응형으로 개선해줘.

기존 디자인의 시각적 인상과 정보 위계는 유지한다.

검증할 viewport:

Desktop
- 1440px
- 1280px

Tablet
- 1024px
- 768px

Mobile
- 430px
- 390px
- 375px

단순히 Desktop 화면 전체를 축소하지 않는다.

각 breakpoint에 맞게
Grid, Typography, Image, Navigation을 재배치한다.


━━━━━━━━━━━━━━━━━━━━
2. DESKTOP
━━━━━━━━━━━━━━━━━━━━

현재 Desktop 디자인을 기본으로 유지한다.

- 최대 콘텐츠 폭을 일관되게 유지
- 제품 Case Study의 이미지 크기와 정렬 기준 유지
- Text / Product UI 비율 유지
- 너무 넓은 화면에서 콘텐츠가 과도하게 퍼지지 않도록 max-width 적용
- Header는 현재 디자인을 유지하면서 필요하면 sticky 처리

기존 Desktop 디자인을 불필요하게 변경하지 않는다.


━━━━━━━━━━━━━━━━━━━━
3. TABLET
━━━━━━━━━━━━━━━━━━━━

1024px 이하에서는 Desktop의 12 Column 구조를 유연하게 축소한다.

Text + Product Image 구조는 상황에 따라:

Text
Image

또는

Text | Image

둘 중 가독성이 좋은 구조를 사용한다.

2열 콘텐츠가 지나치게 좁아지면 1열로 변경한다.

제품 화면이 너무 작아지지 않도록 이미지 가독성을 우선한다.


━━━━━━━━━━━━━━━━━━━━
4. MOBILE
━━━━━━━━━━━━━━━━━━━━

모바일에서는 기본적으로 1 Column Layout을 사용한다.

권장 좌우 Padding:
20~24px

Desktop의:

Text | Product UI

구조는 Mobile에서:

Text

↓

Product UI

순서로 Stack한다.

2-Up / 3-Up 이미지 Grid는 모바일에서 세로 Stack으로 변경한다.

텍스트와 이미지 사이의 간격은 충분히 확보한다.

Horizontal Scroll이 발생하지 않도록 한다.


━━━━━━━━━━━━━━━━━━━━
5. MOBILE TYPOGRAPHY
━━━━━━━━━━━━━━━━━━━━

Desktop Typography를 비율대로 축소하지 않는다.

모바일에서 실제 읽기 좋은 크기로 조정한다.

기준:

본문:
최소 약 16px

보조 설명:
14~15px 이상

큰 제목:
화면 폭에 따라 clamp() 등을 사용하여 자연스럽게 조정

line-height는 모바일에서 충분히 확보한다.

한 줄이 지나치게 길거나
제목이 어색하게 줄바꿈되지 않도록 확인한다.


━━━━━━━━━━━━━━━━━━━━
6. PRODUCT IMAGE RESPONSIVE
━━━━━━━━━━━━━━━━━━━━

매우 중요하다.

Workflow Builder,
Dashboard,
Design System,
Dualspace 등 Desktop Product UI를
모바일에서 단순히 작은 이미지로 축소하지 않는다.

제품 전체 구조를 보여주는 이미지는:

width: 100%
height: auto

기본으로 유지한다.

하지만 화면 내부 UI가 너무 작아져 읽기 어려운 경우에는:

전체 UI Preview

+

핵심 영역 Detail

방식을 사용한다.

예:

Workflow 전체 화면

↓

Node Interaction 확대 이미지

↓

설정 Panel Detail


Desktop과 Mobile 모두에서
실제 Product Design 작업이 충분히 보이도록 한다.


━━━━━━━━━━━━━━━━━━━━
7. IMAGE GRID
━━━━━━━━━━━━━━━━━━━━

동일한 역할의 이미지는 같은 크기와 비율을 유지한다.

Desktop:

2-Up → 2 Column
3-Up → 3 Column


Tablet:

필요하면 2 Column 또는 1 Column


Mobile:

모두 1 Column Stack


이미지마다 임의의 높이를 적용하지 않는다.

object-fit과 aspect-ratio를 사용하여
레이아웃이 흔들리지 않게 한다.

과도한 Crop으로 중요한 UI가 잘리지 않도록 한다.


━━━━━━━━━━━━━━━━━━━━
8. NAVIGATION RESPONSIVE
━━━━━━━━━━━━━━━━━━━━

현재 Header 디자인을 최대한 유지한다.

Desktop에서는 기존 Navigation 사용.

예:

Projects
About
Leadership
PDF 다운로드


Mobile에서는 공간이 부족하면:

이름 / Logo

PDF

Menu

형태로 단순화한다.


Menu 안에는:

Projects
About
Leadership
PDF 다운로드

를 제공한다.


Mobile Menu는
Touch로 쉽게 사용할 수 있어야 한다.

Touch Target은 약 44px 이상 확보한다.


━━━━━━━━━━━━━━━━━━━━
9. PDF DOWNLOAD 기능
━━━━━━━━━━━━━━━━━━━━

포트폴리오 PDF를 다운로드할 수 있는 기능을 추가해줘.

PDF 파일은 public asset으로 관리한다.

예:

/public/portfolio.pdf

또는 프레임워크에 맞는
동일 목적의 public/static asset 경로를 사용한다.


다운로드 버튼 클릭 시
실제 PDF 파일 다운로드가 실행되도록 구현한다.

가능하면 HTML download 속성을 사용한다.

예시 목적:

<a href="/portfolio.pdf" download>
  PDF 다운로드
</a>

실제 구현 환경에 맞게 코드 구조는 적절하게 변경해도 된다.


━━━━━━━━━━━━━━━━━━━━
10. PDF DOWNLOAD 위치
━━━━━━━━━━━━━━━━━━━━

PDF 다운로드 접근 경로를 다음 위치에 제공한다.

Desktop:

1. Header
2. Hero
3. Footer


Mobile:

1. Header 또는 Mobile Menu
2. Hero
3. Footer


버튼 문구:

PDF 다운로드

또는

포트폴리오 PDF


불필요한 영어 문구
Download Resume,
Download Portfolio 등을 사용하지 않는다.


━━━━━━━━━━━━━━━━━━━━
11. PDF CTA DESIGN
━━━━━━━━━━━━━━━━━━━━

PDF 다운로드는 Primary CTA가 아니다.

Primary:

프로젝트 보기


Secondary:

PDF 다운로드


Secondary Button 스타일을 사용한다.

예:

Outline Button

또는

Ghost Button + Download Icon


현재 포트폴리오의
Dark Navy / Indigo 디자인 시스템을 유지한다.

버튼만 새로운 스타일로 튀지 않게 한다.


━━━━━━━━━━━━━━━━━━━━
12. PDF 파일 교체 용이성
━━━━━━━━━━━━━━━━━━━━

PDF 파일은 나중에 내가 쉽게 교체할 수 있어야 한다.

파일 경로나 파일명을
여러 Component에 각각 하드코딩하지 않는다.

가능하다면 하나의 constant 또는 configuration에서 관리한다.

예:

const PORTFOLIO_PDF_URL = '/portfolio.pdf'

Header,
Hero,
Footer의 PDF 버튼이
모두 동일한 URL을 사용하게 구성한다.


━━━━━━━━━━━━━━━━━━━━
13. ACCESSIBILITY
━━━━━━━━━━━━━━━━━━━━

PDF 다운로드 버튼에는 명확한 accessible label을 제공한다.

예:

aria-label="이선영 포트폴리오 PDF 다운로드"


Mobile Navigation 버튼에도
aria-label을 제공한다.

Keyboard focus 상태도 확인한다.

색상 대비를 유지한다.


━━━━━━━━━━━━━━━━━━━━
14. INTERACTION
━━━━━━━━━━━━━━━━━━━━

현재 구현된 Animation과 Interaction은 최대한 유지한다.

단 Mobile에서는:

Hover 전용 Interaction 제거

Touch로 대체

과도한 Parallax 제거

과도한 Scroll Animation 완화


애니메이션 때문에
콘텐츠를 읽기 어렵거나
성능이 떨어지지 않게 한다.


prefers-reduced-motion도 가능하면 대응한다.


━━━━━━━━━━━━━━━━━━━━
15. PERFORMANCE
━━━━━━━━━━━━━━━━━━━━

모바일 접속을 고려하여 이미지 최적화도 확인한다.

- 필요 이상의 고해상도 이미지 로딩 금지
- Lazy Loading 적용
- 적절한 이미지 format 사용
- Layout Shift 방지
- width / height 또는 aspect-ratio 지정

제품 UI 이미지의 선명도는 유지한다.


━━━━━━━━━━━━━━━━━━━━
16. RESPONSIVE QA
━━━━━━━━━━━━━━━━━━━━

수정 후 반드시 다음 viewport에서 실제 화면을 검증해줘.

1440px
1280px
1024px
768px
430px
390px
375px


각 viewport에서 확인:

- Header
- Navigation
- Hero
- Typography
- Product Case Study
- Workflow UI
- Diagram
- Design System 이미지
- Leadership Section
- Career Timeline
- Footer
- PDF 다운로드 버튼


다음을 수정한다.

- Horizontal Overflow
- 텍스트 겹침
- 이미지 잘림
- CTA 겹침
- 너무 작은 Product UI
- 비정상적인 줄바꿈
- 지나치게 큰 여백
- 모바일에서 너무 작은 본문


━━━━━━━━━━━━━━━━━━━━
17. IMPORTANT
━━━━━━━━━━━━━━━━━━━━

현재 구현된 Portfolio의:

콘텐츠
프로젝트 순서
색상 시스템
디자인 컨셉
Case Study 구조

를 임의로 다시 만들거나 변경하지 않는다.

이번 작업의 목적은:

“기존 포트폴리오를 유지하면서
Desktop / Tablet / Mobile 반응형 완성도를 높이고,
PDF 포트폴리오 다운로드 기능을 추가하는 것”

이다.

기존 디자인을 전면 리디자인하지 않는다.
새로운 프로젝트나 문구를 임의로 생성하지 않는다.