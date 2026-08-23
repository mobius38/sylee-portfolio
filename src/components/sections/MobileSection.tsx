import imgNH from "../../imports/optimized/mobile-nh.webp";
import imgHelloLink from "../../imports/optimized/mobile-hellolink.webp";
import imgDime from "../../imports/optimized/mobile-dime.webp";

export function MobileSection({ w }: { w: number }) {
  const isMobile = w < 768;

  const apps = [
    {
      img: imgNH,
      name: "NH바로바로마켓",
      period: "Android · 2015.02",
      work: "리뉴얼 디자인 단독 작업",
      scope: "브랜딩 + 디자인 + 가이드",
      tag: "Commerce / Mobile",
    },
    {
      img: imgHelloLink,
      name: "HELLO LINK",
      period: "Android · iOS · 2013.12~2016.02",
      work: "디자인 단독 작업",
      scope: "브랜딩 + 디자인 + 가이드 + 운영관리",
      tag: "VoIP / Native App",
    },
    {
      img: imgDime,
      name: "DIME",
      period: "Android · iOS · 2013.12~2016.02",
      work: "디자인 단독 작업",
      scope: "브랜딩 + 디자인 + 가이드 + 운영관리",
      tag: "VoIP / Native App",
    },
  ];

  return (
    <section
      id="mobile"
      className="reveal-init"
      style={{
        padding: isMobile ? "48px 16px" : "80px 40px",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: isMobile ? "28px" : "40px", borderBottom: "1px solid #E5E7EB", paddingBottom: "16px" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 800, color: "#2563EB", display: "block", marginBottom: "6px" }}>
          03 / MOBILE &amp; CROSS-PLATFORM
        </span>
        <h2 style={{ fontSize: isMobile ? "24px" : "36px", fontWeight: 900, color: "#111111", margin: "0 0 6px 0", letterSpacing: "-0.02em" }}>
          Mobile &amp; Cross-platform 경험
        </h2>
        <p style={{ fontSize: isMobile ? "13px" : "15px", color: "#6B7280", margin: 0 }}>
          Native Mobile(iOS·Android), Responsive Web, PWA 등 다양한 플랫폼 환경을 경험했습니다.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? "24px" : "32px" }}>
        {apps.map((app) => (
          <div key={app.name}>
            <div style={{ width: "100%", aspectRatio: "4/3", backgroundColor: "#F8F9FA", overflow: "hidden", border: "1px solid #E5E7EB", marginBottom: "12px" }}>
              <img src={app.img} alt={app.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: 800, color: "#111111", margin: 0 }}>{app.name}</h3>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#6B7280", backgroundColor: "#F3F4F6", padding: "2px 6px" }}>
                {app.tag}
              </span>
            </div>

            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#2563EB", fontWeight: 700, display: "block", marginBottom: "4px" }}>
              {app.period}
            </span>

            <p style={{ fontSize: "13px", fontWeight: 700, color: "#111111", margin: "0 0 2px 0" }}>{app.work}</p>
            <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>{app.scope}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
