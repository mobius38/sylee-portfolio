export function ContactFooter({ w }: { w: number }) {
  const email = "mobius38@gmail.com";
  const isMobile = w < 768;

  return (
    <footer
      id="contact"
      className="reveal-init"
      style={{
        backgroundColor: "#0D0F12",
        color: "#FFFFFF",
        padding: isMobile ? "64px 20px 40px 20px" : "100px clamp(24px, 5vw, 80px) 48px clamp(24px, 5vw, 80px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div style={{ maxWidth: "1600px", margin: "0 auto", width: "100%" }}>
        {/* 1. Subheader Tag */}
        <span
          className="section-label"
          style={{
            fontSize: "11px",
            fontWeight: 800,
            color: "#60A5FA",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: isMobile ? "20px" : "28px",
          }}
        >
          GET IN TOUCH
        </span>

        {/* 2. Giant Editorial Serif Display (히어로보다 차분하고 정갈한 스케일) */}
        <h2
          className="footer-title-h2 editorial-display-title"
          style={{
            fontSize: isMobile ? "32px" : "clamp(36px, 4.2vw, 60px)",
            color: "#FFFFFF",
            margin: "0 0 20px 0",
            lineHeight: 1.12,
          }}
        >
          Let's build<br />
          <span className="display-italic-part" style={{ color: "#9CA3AF" }}>
            something great
          </span><br />
          together.
        </h2>

        {/* 3. Subtext Description */}
        <p
          style={{
            fontSize: isMobile ? "15px" : "17px",
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: 1.6,
            fontWeight: 400,
            margin: "0 0 40px 0",
            maxWidth: "700px",
          }}
        >
          B2B 엔터프라이즈 제품 설계, 디자인 시스템 구축, 또는 협업 관련 문의를 환영합니다.
        </p>

        {/* 4. Dual Action Pill Buttons (인쇄 시 완전 숨김 no-print) */}
        <div className="no-print" style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap", marginBottom: isMobile ? "64px" : "96px" }}>
          {/* Email Action Button */}
          <a
            href={`mailto:${email}`}
            className="no-print"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#2563EB",
              color: "#FFFFFF",
              padding: isMobile ? "12px 22px" : "13px 26px",
              borderRadius: "9999px",
              fontSize: isMobile ? "13.5px" : "14.5px",
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "none", // 🌟 인위적인 글로우 제거
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1D4ED8";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#2563EB";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            이메일 보내기
          </a>

          {/* Back to Top / Projects Button */}
          <a
            href="#projects"
            className="no-print"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              color: "rgba(255, 255, 255, 0.85)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              padding: isMobile ? "13px 22px" : "14px 26px",
              borderRadius: "9999px",
              fontSize: isMobile ? "13.5px" : "14.5px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.16)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            작업들 다시 보기 →
          </a>
        </div>

        {/* 5. Bottom Copyright & Info */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "rgba(255, 255, 255, 0.85)" }}>
            LEE SUNYOUNG <span style={{ color: "rgba(255, 255, 255, 0.35)", margin: "0 6px" }}>·</span> Product Designer
          </span>
          <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.4)", letterSpacing: "0.05em", fontWeight: 600 }}>
            © 2026 LEE SUNYOUNG. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
}
