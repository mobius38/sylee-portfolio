import { useState } from "react";

export function ContactFooter({ w }: { w: number }) {
  const [copied, setCopied] = useState(false);
  const email = "mobius38@gmail.com";
  const isMobile = w < 768;

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            fontWeight: 800,
            color: "#60A5FA",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: isMobile ? "20px" : "28px",
          }}
        >
          GET IN TOUCH
        </span>

        {/* 2. Giant Editorial Serif Display (적정 스케일 36px~68px) */}
        <h2
          className="footer-title-h2 editorial-display-title"
          style={{
            fontSize: isMobile ? "36px" : "clamp(42px, 4.8vw, 72px)",
            color: "#FFFFFF",
            margin: "0 0 24px 0",
            lineHeight: 1.1,
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
            fontFamily: "'Noto Sans KR', sans-serif",
            fontSize: isMobile ? "15px" : "17px",
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: 1.6,
            fontWeight: 400,
            margin: "0 0 40px 0",
            maxWidth: "700px",
          }}
        >
          B2B SaaS 제품 디자인, 디자인 시스템 구축, 또는 협업 관련 문의를 환영합니다.
        </p>

        {/* 4. Dual Action Pill Buttons */}
        <div style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap", marginBottom: isMobile ? "64px" : "96px" }}>
          {/* Email Action Button */}
          <a
            href={`mailto:${email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#2563EB",
              color: "#FFFFFF",
              padding: isMobile ? "13px 22px" : "14px 28px",
              borderRadius: "9999px",
              fontSize: isMobile ? "13.5px" : "14.5px",
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(37, 99, 235, 0.35)",
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1D4ED8";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 99, 235, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#2563EB";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(37, 99, 235, 0.35)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            이메일 보내기
          </a>

          {/* Copy Email Button */}
          <button
            onClick={copyEmail}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              color: copied ? "#60A5FA" : "rgba(255, 255, 255, 0.85)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              padding: isMobile ? "12px 20px" : "13px 24px",
              borderRadius: "9999px",
              fontSize: isMobile ? "13px" : "14px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.14)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
            }}
          >
            {copied ? "✓ 이메일 복사 완료" : "이메일 복사"}
          </button>

          {/* Back to Top / Projects Button */}
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "transparent",
              color: "rgba(255, 255, 255, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              padding: isMobile ? "12px 20px" : "13px 24px",
              borderRadius: "9999px",
              fontSize: isMobile ? "13px" : "14px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            }}
          >
            작업들 다시 보기 ↑
          </a>
        </div>

        {/* 5. Bottom Copyright & Info */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 700, color: "rgba(255, 255, 255, 0.85)" }}>
            LEE SUNYOUNG <span style={{ color: "rgba(255, 255, 255, 0.35)", margin: "0 6px" }}>·</span> Product Designer
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "rgba(255, 255, 255, 0.4)", letterSpacing: "0.05em" }}>
            © 2026 LEE SUNYOUNG. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
}
