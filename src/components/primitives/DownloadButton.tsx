import { PORTFOLIO_PDF_URL } from "../../tokens/design";

export function DownloadButton({
  variant = "dark",
  isMobile = false,
}: {
  variant?: "dark" | "light" | "ghost";
  isMobile?: boolean;
}) {
  const isDark = variant === "dark";
  const isGhost = variant === "ghost";

  return (
    <a
      href={PORTFOLIO_PDF_URL}
      download="이선영_포트폴리오.pdf"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        
        fontSize: isMobile ? "11px" : "12px",
        fontWeight: 700,
        backgroundColor: isDark ? "#111111" : isGhost ? "transparent" : "#FFFFFF",
        color: isDark || isGhost ? "#FFFFFF" : "#111111",
        border: isGhost ? "1px solid rgba(255,255,255,0.3)" : "1px solid #111111",
        padding: isMobile ? "8px 12px" : "10px 18px",
        textDecoration: "none",
        letterSpacing: "0.02em",
        transition: "all 0.2s ease",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        if (isDark) {
          e.currentTarget.style.backgroundColor = "#2563EB"; // 🌟 신뢰 블루 통합
          e.currentTarget.style.borderColor = "#2563EB"; // 🌟 신뢰 블루 통합
        } else if (isGhost) {
          e.currentTarget.style.borderColor = "#FFFFFF";
          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
        }
      }}
      onMouseLeave={(e) => {
        if (isDark) {
          e.currentTarget.style.backgroundColor = "#111111";
          e.currentTarget.style.borderColor = "#111111";
        } else if (isGhost) {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
          e.currentTarget.style.backgroundColor = "transparent";
        }
      }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      <span>{isMobile ? "PDF" : "PDF 다운로드"}</span>
    </a>
  );
}
