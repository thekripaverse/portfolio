import { useState } from "react";
import { motion } from "framer-motion";
import { achievementsData } from "../../data/portfolioData";

export default function AccordionGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState<number | null>(0);

  const handlePanelClick = (targetId: string) => {
    // Target scene selector format (e.g., #scene-01, #scene-02, etc.)
    const index = achievementsData.findIndex((a) => a.id === targetId);
    const sceneId = `#scene-${(index + 1).toString().padStart(2, "0")}`;
    const el = document.querySelector(sceneId);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full">
      {/* --- DESKTOP ACCORDION LAYOUT (Horizontal columns) --- */}
      <div className="hidden md:flex flex-row w-full h-[520px] overflow-hidden rounded-lg border border-black/10 shadow-2xl bg-black/5 select-none">
        {achievementsData.map((ach, idx) => {
          const indexStr = (idx + 1).toString().padStart(2, "0");
          const isExpanded = hoveredIndex === null ? idx === 0 : hoveredIndex === idx;

          return (
            <motion.div
              key={ach.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handlePanelClick(ach.id)}
              animate={{
                flexGrow: isExpanded ? 4.2 : 0.8,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="relative h-full overflow-hidden border-r border-black/5 cursor-pointer flex flex-col justify-end group transition-all duration-300"
              style={{ flexBasis: "0%" }}
            >
              {/* Background Image Grid with Grayscale filter */}
              <motion.img
                src={ach.image}
                alt={ach.placement}
                animate={{
                  filter: isExpanded ? "grayscale(0%) contrast(1)" : "grayscale(100%) contrast(0.85)",
                  scale: isExpanded ? 1.03 : 1.0,
                  opacity: isExpanded ? 0.95 : 0.45
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />

              {/* Bottom Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1412]/95 via-[#1C1412]/30 to-transparent opacity-90 z-10 pointer-events-none" />

              {/* Collapsed view indicator (Vertical text) */}
              <div
                className={`absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-start space-y-4 transition-all duration-500 z-20 ${
                  isExpanded ? "opacity-0 translate-y-[-20px] pointer-events-none" : "opacity-100 translate-y-0"
                }`}
              >
                <span className="font-display text-[10px] font-bold tracking-widest text-[#B28D95] uppercase">
                  {indexStr}
                </span>
                <div
                  className="font-display text-[8px] font-bold tracking-widest text-white/50 uppercase whitespace-nowrap"
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                >
                  {ach.title.split(" — ")[0].split(" / ")[0]}
                </div>
              </div>

              {/* Expanded view content */}
              <div
                className={`p-8 relative z-20 flex flex-col justify-end h-full text-left space-y-3 transition-all duration-500 delay-100 ${
                  isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="font-display text-[9px] font-black tracking-widest text-[#C0A0A5] uppercase">
                    SCENE {indexStr}
                  </span>
                  <span className="font-display text-[8px] font-bold tracking-widest text-white/60 border border-white/20 px-2 py-0.5 uppercase">
                    {ach.year}
                  </span>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl font-black text-white leading-none uppercase max-w-sm tracking-tight">
                  {ach.placement}
                </h3>
                
                <p className="font-sans text-xs text-[#FAF6EE]/75 max-w-sm line-clamp-2">
                  {ach.details}
                </p>

                <div className="pt-2 flex items-center space-x-1 text-[#C0A0A5] font-display text-[9px] font-bold tracking-widest uppercase">
                  <span>READ STORY NARRATIVE</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* --- MOBILE ACCORDION LAYOUT (Vertical rows) --- */}
      <div className="flex md:hidden flex-col w-full space-y-4">
        {achievementsData.map((ach, idx) => {
          const indexStr = (idx + 1).toString().padStart(2, "0");
          const isExpanded = expandedMobileIndex === idx;

          return (
            <motion.div
              key={`mob-${ach.id}`}
              onClick={() => setExpandedMobileIndex(isExpanded ? null : idx)}
              animate={{
                height: isExpanded ? 280 : 75
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="relative w-full overflow-hidden rounded border border-black/10 cursor-pointer flex flex-col justify-end group shadow-md"
            >
              {/* Background Image Grid with Grayscale filter */}
              <img
                src={ach.image}
                alt={ach.placement}
                className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-all duration-500 ${
                  isExpanded ? "grayscale-0 opacity-80" : "grayscale opacity-35"
                }`}
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1412]/95 via-[#1C1412]/20 to-transparent z-10 pointer-events-none" />

              {/* Collapsed mobile row */}
              <div
                className={`absolute inset-0 flex items-center justify-between px-6 z-25 transition-opacity duration-300 ${
                  isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="font-display text-xs font-bold text-[#C0A0A5]">
                    [{indexStr}]
                  </span>
                  <span className="font-display text-xs font-black text-white uppercase tracking-tight truncate max-w-[200px]">
                    {ach.title.split(" — ")[0].split(" / ")[0]}
                  </span>
                </div>
                <span className="font-display text-[9px] font-bold text-white/50 border border-white/20 px-2 py-0.5 rounded">
                  {ach.year}
                </span>
              </div>

              {/* Expanded mobile details */}
              <div
                className={`p-6 relative z-20 flex flex-col justify-end space-y-2.5 transition-all duration-300 ${
                  isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="font-display text-[8px] font-black tracking-widest text-[#C0A0A5] uppercase">
                    SCENE {indexStr}
                  </span>
                  <span className="font-display text-[8px] font-bold tracking-widest text-white/60 border border-white/20 px-2 py-0.5 uppercase">
                    {ach.year}
                  </span>
                </div>

                <h3 className="font-display text-lg font-black text-white leading-tight uppercase">
                  {ach.placement}
                </h3>
                
                <p className="font-sans text-[11px] text-[#FAF6EE]/75 line-clamp-2">
                  {ach.details}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePanelClick(ach.id);
                  }}
                  className="pt-1 flex items-center space-x-1.5 text-[#C0A0A5] font-display text-[9px] font-bold tracking-widest uppercase cursor-pointer"
                >
                  <span>GO TO NARRATIVE ↓</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
