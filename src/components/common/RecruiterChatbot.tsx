import { useState } from "react";
import { DownloadButton } from "../primitives/DownloadButton";
import { PetDuoAvatar } from "./PetDuoAvatar";

interface FAQItem {
  id: string;
  q: string;
  a: string;
  actionText?: string;
  actionHref?: string;
  isDownload?: boolean;
}

const FAQ_LIST: FAQItem[] = [
  {
    id: "career",
    q: "주요 경력과 전문 분야는 무엇인가요?",
    a: "15년간 스펙트라, 도전하는사람들 등에서 B2B 온프레미스 플랫폼, 금융 포탈, 워크플로우 자동화 도구, 이커머스를 리딩했습니다. 복잡한 비즈니스 로직을 명쾌한 사용자 경험으로 구조화하는 데 특화되어 있습니다.",
    actionText: "프로젝트 12선 보기",
    actionHref: "#projects",
  },
  {
    id: "design-system",
    q: "디자인 시스템 구축 경험이 궁금해요.",
    a: "Figma Variables 기반 Foundations 6종 및 공통 Components 26종을 구축했습니다. 디자인 토큰을 코드와 동기화하고 디자인 QA 기준을 수립하여 개발 리소스를 절감했습니다.",
    actionText: "디자인 시스템 케이스 보기",
    actionHref: "#projects",
  },
  {
    id: "process",
    q: "협업 및 프로덕트 설계 방식은 어떤가요?",
    a: "실서비스 수준의 Hi-Fi 프로토타입으로 PM 및 엔지니어와 빠르게 의사결정합니다. 명확한 정보구조(IA)와 권한 모델을 선행 정의하여 릴리즈 지연을 방지합니다.",
    actionText: "설계 & 리더십 보기",
    actionHref: "#leadership",
  },
  {
    id: "resume",
    q: "이력서 및 포트폴리오 PDF를 받고 싶어요.",
    a: "채용 검토용 최신 이력서 및 포트폴리오 PDF를 즉시 다운로드하실 수 있습니다.",
    isDownload: true,
  },
  {
    id: "coffee-chat",
    q: "이선영 디자이너와 직접 커피챗을 신청하고 싶어요.",
    a: "보름이(러시안블루) & 보리(말티푸) 집사와의 편안한 커피챗! 가벼운 티타임부터 프로덕트 포지션 이야기까지 카카오톡 1:1 오픈채팅으로 언제든 편하게 말 걸어주세요.",
    actionText: "카카오톡 1:1 커피챗 열기",
    actionHref: "https://open.kakao.com/o/sLeeSunyoung",
  },
];

export function RecruiterChatbot({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [openId, setOpenId] = useState<string | null>("career");

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-label="채용 Q&A 및 커피챗 안내"
      className="no-print"
      style={{
        position: "fixed",
        bottom: "80px",
        right: "24px",
        width: "min(400px, calc(100vw - 32px))",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "12px",
        boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
        zIndex: 999,
        overflow: "hidden",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif",
        animation: "fadeIn 0.2s ease",
      }}
    >
      {/* 1. Header with Real Photos of 보름이 & 보리 */}
      <div
        style={{
          padding: "16px 18px",
          borderBottom: "1px solid #F3F4F6",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#FAFAFA",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <PetDuoAvatar size={44} />

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fontWeight: 800, color: "#2563EB", letterSpacing: "0.08em" }}>
                COFFEE CHAT &amp; Q&amp;A
              </span>
            </div>
            <div style={{ fontSize: "13px", fontWeight: 800, color: "#111111", letterSpacing: "-0.01em" }}>
              보름이 &amp; 보리 집사의 커피챗
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "#9CA3AF",
            fontSize: "16px",
            cursor: "pointer",
            padding: "4px",
            lineHeight: 1,
          }}
          aria-label="닫기"
        >
          ✕
        </button>
      </div>

      {/* 2. Accordion FAQ List */}
      <div style={{ padding: "8px 16px", maxHeight: "400px", overflowY: "auto" }}>
        {FAQ_LIST.map((item) => {
          const isExpanded = openId === item.id;
          return (
            <div
              key={item.id}
              style={{
                borderBottom: "1px solid #F3F4F6",
                padding: "10px 0",
              }}
            >
              <button
                onClick={() => setOpenId(isExpanded ? null : item.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  padding: "4px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  color: isExpanded ? "#111111" : "#4B5563",
                  fontSize: "13px",
                  fontWeight: isExpanded ? 700 : 500,
                  lineHeight: 1.4,
                }}
              >
                <span>{item.q}</span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    color: "#9CA3AF",
                    marginLeft: "8px",
                  }}
                >
                  {isExpanded ? "−" : "+"}
                </span>
              </button>

              {isExpanded && (
                <div style={{ paddingTop: "8px", paddingBottom: "4px" }}>
                  <p style={{ margin: "0 0 10px 0", fontSize: "12.5px", color: "#6B7280", lineHeight: 1.6 }}>
                    {item.a}
                  </p>

                  {item.isDownload && (
                    <div>
                      <DownloadButton isMobile={false} />
                    </div>
                  )}

                  {item.actionText && item.actionHref && (
                    <a
                      href={item.actionHref}
                      target={item.actionHref.startsWith("http") ? "_blank" : "_self"}
                      rel={item.actionHref.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={() => {
                        if (!item.actionHref?.startsWith("http")) {
                          onClose();
                        }
                      }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: "11.5px",
                        fontWeight: 700,
                        color: "#2563EB",
                        textDecoration: "none",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {item.actionText} →
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 3. Direct Contact Minimal Footer */}
      <div
        style={{
          padding: "12px 18px",
          backgroundColor: "#FAFAFA",
          borderTop: "1px solid #F3F4F6",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "11px",
          color: "#6B7280",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        <span>이메일: mobius38@gmail.com</span>
        <a
          href="https://open.kakao.com/o/sLeeSunyoung"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#FFFFFF",
            fontWeight: 700,
            textDecoration: "none",
            backgroundColor: "#111111",
            padding: "5px 10px",
            borderRadius: "4px",
          }}
        >
          1:1 Open Chat →
        </a>
      </div>
    </div>
  );
}
