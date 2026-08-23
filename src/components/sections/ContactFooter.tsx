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
        backgroundColor: "#08090C",
        color: "#FFFFFF",
        padding: isMobile ? "60px 16px 84px 16px" : "100px 40px 60px 40px",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <h2
              className="footer-title-h2"
              style={{
                fontSize: isMobile ? "28px" : "38px",
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                margin: "0 0 10px 0",
              }}
            >
              다음 프로젝트를 함께 만들고 싶으시다면,
              <span style={{ display: "block", color: "#60A5FA", marginTop: "4px" }}>
                언제든 편하게 연락해 주세요.
              </span>
            </h2>
            <p className="footer-signature-p" style={{ fontSize: isMobile ? "15px" : "17px", color: "rgba(255, 255, 255, 0.7)", margin: "0 0 24px 0", fontWeight: 500 }}>
              이선영 <span style={{ color: "rgba(255, 255, 255, 0.35)", margin: "0 6px" }}>·</span> Product Designer
            </p>

            <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
              <button
                onClick={copyEmail}
                style={{
                  backgroundColor: copied ? "#4B3FE1" : "#FFFFFF", // 🌟 인디고 블루 통합
                  color: copied ? "#FFFFFF" : "#111111",
                  border: "none",
                  padding: isMobile ? "12px 18px" : "13px 20px",
                  fontSize: isMobile ? "12px" : "13px",
                  fontWeight: 700,
                  fontFamily: "'JetBrains Mono', monospace",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "4px",
                  transition: "all 0.15s ease",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                {copied ? "이메일 복사 완료" : email}
              </button>
            </div>
          </div>

          <div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "rgba(255, 255, 255, 0.4)" }}>
              © 2026 LEE SUNYOUNG. ALL RIGHTS RESERVED.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
