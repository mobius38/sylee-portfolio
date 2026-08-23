export function SelectedCasesIndexSection({ w }: { w: number }) {
  const isMobile = w < 768;

  const cases = [
    {
      num: "01",
      id: "#cases",
      title: "DOOLINKER",
      sub: "Workflow Automation Platform",
      flow: "Brand → Product → System →",
    },
    {
      num: "02",
      id: "#cases",
      title: "MIZUHO PORTAL",
      sub: "일본 미즈호(MIZUHO) 은행 사내 포탈",
      flow: "IA → Permission → System →",
    },
    {
      num: "03",
      id: "#cases",
      title: "DUALSPACE",
      sub: "Unified Communication Platform",
      flow: "Problem → Structure → Prototype →",
    },
    {
      num: "04",
      id: "#cases",
      title: "DWORKS DESIGN SYSTEM",
      sub: "Multi-product Design System",
      flow: "Foundation → Variables → Components 26 →",
    },
    {
      num: "05",
      id: "#cases",
      title: "SALESBRIDGE",
      sub: "Desktop Web (React) & Mobile PWA",
      flow: "Desktop React → Multi-User → Mobile PWA →",
    },
    {
      num: "06",
      id: "#cases",
      title: "DWORKS BRAND IDENTITY",
      sub: "Brand Identity & Corporate Website",
      flow: "Logo Redesign → Brand Guide → Official Web →",
    },
    {
      num: "07",
      id: "#cases",
      title: "CS TALK",
      sub: "Customer Support Platform",
      flow: "UX개선 → Component → Design QA →",
    },
    {
      num: "08",
      id: "#cases",
      title: "SHALUV",
      sub: "Kids Fashion E-Commerce Rebranding",
      flow: "Rebranding → Mall UX/UI → 14x Traffic →",
    },
  ];

  return (
    <section
      id="cases"
      className="reveal-init"
      style={{
        padding: isMobile ? "0 16px 48px 16px" : "0 40px 80px 40px",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <div style={{ borderTop: "1px solid #111111", paddingTop: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
          <div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 800, color: "#4B3FE1", display: "block", marginBottom: "4px" }}>
              INDEX
            </span>
            <h2 style={{ fontSize: isMobile ? "18px" : "22px", fontWeight: 800, color: "#111111", margin: 0, letterSpacing: "-0.02em" }}>
              Selected Cases
            </h2>
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#9CA3AF" }}>
            JUMP TO CASE ↓
          </span>
        </div>

        {/* Essential Bar 2: Index Table Row Lines */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {cases.map((c) => (
            <a
              key={c.num}
              href={c.id}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "36px 1fr auto" : "50px 240px 1fr 280px",
                alignItems: "center",
                padding: isMobile ? "12px 4px" : "16px 8px",
                borderBottom: "1px solid #E5E7EB",
                textDecoration: "none",
                transition: "all 0.15s ease",
                gap: isMobile ? "8px" : "16px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F8F9FA";
                e.currentTarget.style.paddingLeft = isMobile ? "8px" : "16px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.paddingLeft = isMobile ? "4px" : "8px";
              }}
            >
              <div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: isMobile ? "12px" : "13px", fontWeight: 800, color: "#4B3FE1" }}>
                  {c.num}
                </span>
              </div>
              <div>
                <strong style={{ fontSize: isMobile ? "14px" : "15px", fontWeight: 800, color: "#111111", display: "block" }}>
                  {c.title}
                </strong>
                {isMobile && (
                  <span style={{ fontSize: "11px", color: "#6B7280", display: "block", marginTop: "2px" }}>
                    {c.sub}
                  </span>
                )}
              </div>
              {!isMobile && (
                <div>
                  <span style={{ fontSize: "13px", color: "#4B5563" }}>
                    {c.sub}
                  </span>
                </div>
              )}
              <div style={{ textAlign: "right" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: isMobile ? "11px" : "12px", color: "#4B3FE1", fontWeight: 700 }}>
                  {isMobile ? "→" : c.flow}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
