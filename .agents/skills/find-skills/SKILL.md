---
name: find-skills
description: >-
  현재 작업이나 요구사항에 필요한 스킬, 룰, 에이전트를 탐색하고 적합한 것을 추천하거나
  외부/내부 레포지토리에서 발견하는 스킬 탐색기. 새 기능 개발, 도구 필요 시 활성화.
---

# Skill: Find Skills (스킬 탐색기)

## 목적
작업 진행 중 필요한 기능, 라이브러리, 워크플로우에 최적화된 스킬이나 에이전트가 있는지 탐색하고 적합한 가이드를 연결합니다.

## 탐색 워크플로우

1. **요구사항 분석**: 유저의 요청에서 필요한 도메인 파악 (예: 애니메이션, SEO, 복잡한 폼, 접근성 등)
2. **내부 스킬 매칭**:
   - `.agents/skills/` 내 스킬 검색
   - 글로벌 플러그인/스킬 (`~/.gemini/config/plugins`) 검색
3. **부재 시 대안 제시**:
   - 기존 스킬로 해결 가능한지 확인
   - 반복적인 작업 패턴일 경우 `skill-creator`를 호출하여 신규 스킬로 승격/학습 제안

## 보유 스킬 매핑 테이블

| 요구 작업 | 매칭 스킬 / 에이전트 |
|---|---|
| 컴포넌트 분리, 리팩토링 | `portfolio-refactor` / `developer.md` |
| 이미지 용량 줄이기, WebP 변환 | `image-optimize` / `optimizer.md` |
| UI 디자인, 토큰 수정 | `design-system.md` / `designer.md` |
| 섹션 기획, 콘텐츠 스토리텔링 | `content.md` / `planner.md` |
| 코드/완성도 검증 | `code-quality.md` / `reviewer.md` |
| 새로운 스킬 생성 및 하네스 진화 | `skill-creator` |
