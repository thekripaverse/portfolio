import CustomCursor from "./components/CustomCursor";
import DitherBackground from "./components/creative/DitherBackground";
import OptionWheel from "./components/creative/OptionWheel";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import StoriesSection from "./components/StoriesSection";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#FAF6EE] text-[#1C1412] overflow-x-hidden font-sans selection:bg-[#5C2533] selection:text-white">
      {/* Dynamic Dither Canvas Texture Layer */}
      <DitherBackground />

      {/* Floating OptionWheel Navigation (replaces conventional navbar) */}
      <OptionWheel />

      {/* Custom Pointer Physics */}
      <CustomCursor />

      {/* Main Structural Pages */}
      <main className="relative z-10">
        <Hero />
        <Intro />
        <Skills />
        <Projects />
        <Achievements />
        <StoriesSection />
        <Contact />
      </main>
    </div>
  );
}
