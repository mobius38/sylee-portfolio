# 디자인 시스템 & 에디토리얼 매거진 토큰 (The Editorial Dossier)

## 핵심 컨셉
- **The Design Lead Monograph & Editorial Dossier**
- 글로벌 테크 매거진 (Monocle, Wired, Offscreen) 및 정갈한 인쇄물/신문 형식의 에디토리얼 포트폴리오

## 핵심 컬러 토큰
```ts
const PAPER = "#F7F6F1";         // 웜 크림/린넨 종이 배경
const PAPER_LIGHT = "#FFFFFF";   // 화이트 플레이트
const INK = "#18181B";           // 딥 잉크 블랙
const INK_MUTED = "#52525B";     // 뉴스프린트 그레이
const INK_LIGHT = "#71717A";     // 캡션 메타데이터
const RULE = "#D4D4D8";          // 1px 정밀 구분선
const STAMP_INDIGO = "#312E81";  // 딥 인디고 인증 스탬프
const STAMP_RED = "#991B1B";     // 볼드 레드 헤드라인 스탬프
const DARK_PRESS = "#12151B";    // 리더십 특별 피처 다크 잉크
```

## 타이포그래피 시스템
1. **헤드라인 & 제호 (Masthead)**: `Newsreader`, `Playfair Display`, `Noto Serif KR` (에디토리얼 세리프)
2. **본문 (Body)**: `Plus Jakarta Sans`, `Noto Sans KR` (모던 산세리프)
3. **메타데이터 & 인덱스**: `JetBrains Mono` (도시에 인증 스탬프 및 플레이트 번호)

## 에디토리얼 UI 패턴
1. **신문 제호 & 탑바 (Masthead)**: 이슈 번호(`VOL. 15 · SPECIAL ISSUE 2026`), 포지션 명기, 더블 룰라인
2. **도시에 인증 카드 (Dossier File)**: 지원자 프로필 및 인증 스탬프
3. **화보 플레이트 갤러리 (Exhibit Plates)**: 대형 고화질 제품 화면 + 캡션 바
4. **리더십 특별 기획 피처 (Dark Press Section)**: 고대비 다크 잉크 프레스 4대 축
