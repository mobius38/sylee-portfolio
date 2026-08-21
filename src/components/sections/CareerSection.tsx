export function CareerSection({ w }: { w: number }) {
  const isMobile = w < 768;

  // Figma PDF p.30 exact 8 stages
  const stages = [
    { period: "~2010", role: "Visual Design", desc: "그래픽 · 브랜드" },
    { period: "2010–2017", role: "Web · Mobile", desc: "Web UI · Responsive · iOS · Android" },
    { period: "2017–2021", role: "UI/UX Design", desc: "사용자 흐름 · 인터랙션 · 서비스 경험 설계" },
    { period: "2022", role: "CS Talk · DWorks", desc: "사용성 개선 · 브랜딩 · 디자인 시스템 구축" },
    { period: "2023", role: "SalesBridge", desc: "브랜딩 · 협업 플랫폼 UX/UI · PWA" },
    { period: "2024", role: "Dualspace", desc: "제품 방향 기획 · UX/UI · High-fi Prototype" },
    { period: "2025", role: "DWorks 통합 제품", desc: "멀티 프로덕트 디자인 시스템 · 통합 제품 경험" },
    { period: "2025–2026", role: "DOOLINKER · MIZUHO Portal", desc: "Workflow 구조화 · 제품 설계 · 디자인 시스템" },
  ];

  return (
    <section
      id="career"
      className="reveal-init"
      style={{
        padding: isMobile ? "48px 16px" : "90px 40px",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      {/* Pure Clean Section Title (No Numbering) */}
      <div style={{ marginBottom: isMobile ? "28px" : "40px", borderBottom: "1px solid #E5E7EB", paddingBottom: "16px" }}>
        <h2 style={{ fontSize: isMobile ? "28px" : "40px", fontWeight: 900, color: "#111111", margin: "0 0 8px 0", letterSpacing: "-0.03em" }}>
          CAREER
        </h2>
        <p style={{ fontSize: isMobile ? "14px" : "16px", color: "#4B5563", margin: "0 0 4px 0", fontWeight: 600 }}>
          화면 설계에서 제품의 구조와 방향 설계로
        </p>
        <p style={{ fontSize: isMobile ? "13px" : "15px", color: "#6B7280", margin: 0, maxWidth: "900px" }}>
          15년간 화면과 인터랙션 설계에서 시작해, 복잡한 제품의 구조와 디자인 시스템, 제품 방향을 함께 설계하는 역할로 확장해왔습니다.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: isMobile ? "20px 16px" : "32px 24px" }}>
        {stages.map((st, idx) => {
          const isLatest = idx >= 6;
          return (
            <div key={idx} style={{ borderTop: "1px solid #E5E7EB", paddingTop: "12px" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 800, color: isLatest ? "#2563EB" : "#9CA3AF", display: "block", marginBottom: "4px" }}>
                {st.period}
              </span>
              <h3 style={{ fontSize: isMobile ? "14px" : "16px", fontWeight: 800, color: "#111111", margin: "0 0 4px 0" }}>
                {st.role}
              </h3>
              <p style={{ fontSize: isMobile ? "11px" : "13px", color: "#6B7280", lineHeight: 1.5, margin: 0 }}>
                {st.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
