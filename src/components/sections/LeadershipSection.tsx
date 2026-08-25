import { useState } from "react";

// Authentic Leadership Hands-Only Working Scene Photos
import imgHandsDirection from "../../imports/optimized/leadership-hands-direction.jpg";
import imgHandsReview from "../../imports/optimized/leadership-hands-review.jpg";
import imgHandsSystem from "../../imports/optimized/leadership-hands-system.jpg";
import imgHandsCollab from "../../imports/optimized/leadership-hands-collab.jpg";

export function LeadershipSection({ w }: { w: number }) {
  const isMobile = w < 768;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // 4 Leadership Themes — Pure Korean Title + 3-Line Concise Description
  const pillars = [
    {
      title: "제품 방향 제안",
      img: imgHandsDirection,
      lines: [
        "모호한 비즈니스 요구사항을 UX 관점으로 구조화합니다.",
        "기획·개발과 구현 범위를 조율하여 실행 가능한 MVP 우선순위를 도출합니다.",
        "사용자 흐름을 고려한 최적의 프로덕트 설계안을 선제적으로 제시합니다.",
      ],
    },
    {
      title: "디자인 리뷰",
      img: imgHandsReview,
      lines: [
        "전사 디자인 품질 기준을 수립하고 제품 완성도를 정렬합니다.",
        "타 팀 디자이너 산출물을 정기적으로 리뷰하고 품질 피드백을 제공합니다.",
        "인터랙티브 프로토타입 기반 워크숍으로 팀 간 설계 방향성을 일치시킵니다.",
      ],
    },
    {
      title: "디자인 시스템",
      img: imgHandsSystem,
      lines: [
        "멀티 프로덕트 간 일관성을 위한 디자인 원칙과 컴포넌트를 구축합니다.",
        "Foundations 6종과 Components 26종을 규격화하여 디자인·개발 간 재사용과 협업 효율을 높입니다.",
        "브랜드 아이덴티티를 제품 UI와 토큰 시스템까지 일원화하여 관리합니다.",
      ],
    },
    {
      title: "협업과 조율",
      img: imgHandsCollab,
      lines: [
        "PM, 엔지니어, 비즈니스 직군 간의 의사소통 장벽을 낮추고 협업을 촉진합니다.",
        "가설과 인터랙션을 프로토타입으로 시각화하여 팀의 의사결정을 지원합니다.",
        "UX 설계 의도와 구조적 근거를 명문화하여 팀 전체에 체계적으로 공유합니다.",
      ],
    },
  ];

  return (
    <section
      id="leadership"
      className="reveal-init"
      style={{
        backgroundColor: "#0B0C10",
        color: "#FFFFFF",
        padding: isMobile ? "70px 16px" : "120px 40px",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        {/* 1. Giant Bold LEADERSHIP Section Header */}
        <div style={{ maxWidth: "1000px", marginBottom: isMobile ? "40px" : "64px" }}>
          <span className="leadership-section-meta" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 800, color: "#60A5FA", letterSpacing: "0.15em", display: "block", marginBottom: "8px" }}>
            DESIGN LEADERSHIP &amp; PHILOSOPHY
          </span>
          <h2
            className="leadership-section-h2"
            style={{
              fontSize: isMobile ? "44px" : "clamp(56px, 6.5vw, 84px)",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              margin: "0 0 20px 0",
            }}
          >
            LEADERSHIP
          </h2>
          <p className="leadership-lead-p" style={{ fontSize: isMobile ? "18px" : "26px", color: "#93C5FD", margin: "0 0 12px 0", fontWeight: 700, letterSpacing: "-0.02em" }}>
            제품을 직접 설계하며, 디자인의 기준까지 만들어왔습니다.
          </p>
          <p className="leadership-desc-p" style={{ fontSize: isMobile ? "14px" : "16px", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.8, margin: 0 }}>
            Senior Product Designer로 제품 설계를 담당하면서 제품 방향 제안, 디자인 리뷰, 디자인 시스템 구축과 협업 조율까지 실무 기반의 디자인 리딩을 수행했습니다.
          </p>
        </div>

        {/* 2. Clean Reference-Style 2x2 Modular Grid (Title + 3 Lines) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "16px" : "24px",
          }}
        >
          {pillars.map((p, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="leadership-card-item"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "#101218",
                  border: isHovered ? "1px solid rgba(255, 255, 255, 0.35)" : "1px solid rgba(255, 255, 255, 0.12)",
                  padding: isMobile ? "32px 24px" : "44px 36px",
                  borderRadius: "4px",
                  minHeight: isMobile ? "240px" : "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "border-color 0.3s ease",
                  cursor: "default",
                }}
              >
                {/* 🌟 Hands-Only Dark-Toned Photo Layer (Smooth Reveal) */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.35s ease",
                    pointerEvents: "none",
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.42) contrast(1.15)",
                      transform: isHovered ? "scale(1.02)" : "scale(1.06)",
                      transition: "transform 0.5s ease",
                      display: "block",
                    }}
                  />

                  {/* Dark Contrast Vignette Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(to top, rgba(16, 18, 24, 0.95) 0%, rgba(16, 18, 24, 0.5) 50%, rgba(16, 18, 24, 0.85) 100%)",
                    }}
                  />
                </div>

                {/* Top: Large Bold Pure Korean Title (No English Duplicate) */}
                <div style={{ position: "relative", zIndex: 2 }}>
                  <h3
                    className="leadership-card-title"
                    style={{
                      fontSize: isMobile ? "24px" : "28px",
                      fontWeight: 900,
                      color: "#FFFFFF",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.25,
                      margin: 0,
                    }}
                  >
                    {p.title}
                  </h3>
                </div>

                {/* Bottom: Clean 3 Lines of Content */}
                <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: "6px" }}>
                  {p.lines.map((line, lIdx) => (
                    <p
                      key={lIdx}
                      className="leadership-card-desc"
                      style={{
                        fontSize: isMobile ? "13px" : "14px",
                        color: isHovered ? "#FFFFFF" : "rgba(255, 255, 255, 0.72)",
                        lineHeight: 1.6,
                        margin: 0,
                        fontWeight: 500,
                        transition: "color 0.2s ease",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
