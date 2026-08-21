import { useWindowWidth } from "./hooks/useWindowWidth";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { GnbHeader } from "./components/layout/GnbHeader";
import { HeroProfileSection } from "./components/sections/HeroProfileSection";
import { WorkSection } from "./components/sections/WorkSection";
import { LeadershipSection } from "./components/sections/LeadershipSection";
import { ContactFooter } from "./components/sections/ContactFooter";
import { FloatingControls } from "./components/common/FloatingControls";

export default function App() {
  const w = useWindowWidth();
  useScrollReveal();

  return (
    <div id="top" style={{ backgroundColor: "#FFFFFF", minHeight: "100vh", color: "#111111" }}>
      <GnbHeader w={w} />
      <main>
        {/* 01. ABOUT (Hero + Metrics + 3 Core Competencies + 15-Year Career Expansion) */}
        <HeroProfileSection w={w} />
        {/* 02. PROJECTS (Keyword Chips + Featured Top 2 + 6 Platform Grid + Full Deep-Dive Modal) */}
        <WorkSection w={w} />
        {/* 03. LEADERSHIP (Dark Mode Canvas + Interactive Spotlight Focus Matrix) */}
        <LeadershipSection w={w} />
      </main>
      {/* 04. CONTACT (Action Buttons + Email Quick Copy + PDF Resume Download) */}
      <ContactFooter w={w} />
      {/* 05. FLOATING CONTROLS (KakaoTalk 1:1 Open Chat + Scroll to Top Button) */}
      <FloatingControls />
    </div>
  );
}
