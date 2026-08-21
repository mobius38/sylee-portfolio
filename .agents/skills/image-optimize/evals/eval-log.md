# Evals — Image Optimize 스킬 개선 기록

## 개선 이력

| 날짜 | 시도 | 문제 | 개선 |
|---|---|---|---|
| 2026-08-21 | 전체 이미지 WebP 변환 | SKILL.md에 YAML frontmatter 없음 | frontmatter 추가 |
| 2026-08-21 | 최적화 실행 | 11.27MB → 1.47MB (87% 절감) 성공 | — |

## 실제 최적화 결과 (2026-08-21)

```
총계: 11.27MB → 1.47MB (9.80MB 절감)
최대 절감: intranet-login (97.9%), dolinker-login (95.1%)
```

## 다음 검증 항목

- [ ] 새 이미지 추가 시 스크립트 재실행 확인
- [ ] dworks-branding.webp 195KB → 추가 압축 가능 여부 확인
