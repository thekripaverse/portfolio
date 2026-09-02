import { useState } from "react";
import { motion } from "framer-motion";
import { techSkillsData, softSkillsData } from "../data/portfolioData";
import { LogoLoop } from "./creative/CreativeComponents";

export default function Skills() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const categories = [
    { id: "AI / ML", title: "AI / ML & Research" },
    { id: "Frameworks & UI", title: "Frameworks & User Interfaces" },
    { id: "Data & Backend", title: "Data Systems & Backends" },
    { id: "DevOps & Tools", title: "DevOps & Toolchains" }
  ];

  return (
    <section id="skills" className="py-24 bg-[#1C1412] text-[#FAF6EE] relative select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ==========================================
           TECHNICAL SKILLS SECTION
           ========================================== */}
        <div className="mb-12">
          <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-[#B28D95] uppercase block">
            02 / TECH STACK
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF6EE] mt-4 uppercase">
            TECHNICAL REPERTOIRE
          </h2>
        </div>

        {/* Dynamic Skills Logo Loop Marquee */}
        <LogoLoop speed={35} className="bg-black/30 border border-[#FAF6EE]/10 rounded py-8 mb-12 px-4">
          {techSkillsData.map((skill) => (
            <div
              key={`loop-${skill.name}`}
              className="flex flex-col items-center justify-center p-4 min-w-[120px] h-[110px] border border-white/10 rounded bg-black/50 text-white hover:border-[#5C2533] hover:text-[#C87A53] transition-all duration-300"
            >
              <div className="w-8 h-8 mb-2 flex items-center justify-center">
                <div dangerouslySetInnerHTML={{ __html: skill.logoSvg }} className="w-full h-full [&>svg]:w-full [&>svg]:h-full" />
              </div>
              <span className="font-display text-[10px] font-bold uppercase tracking-wider">
                {skill.name}
              </span>
            </div>
          ))}
        </LogoLoop>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {categories.map((cat) => {
            const skills = techSkillsData.filter((skill) => skill.category === cat.id);
            return (
              <div key={cat.id} className="border border-white/10 rounded p-6 bg-black/40 space-y-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#C87A53]">
                  {cat.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skills.map((skill) => (
                    <div
                      key={`grid-${skill.name}`}
                      className="flex items-center space-x-2.5 p-3 rounded border border-white/5 bg-white/5 text-white hover:border-[#5C2533]/50 hover:bg-[#5C2533]/10 transition-all duration-300"
                    >
                      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                        <div
                          dangerouslySetInnerHTML={{ __html: skill.logoSvg }}
                          className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-white/80"
                        />
                      </div>
                      <span className="font-display text-[9px] font-bold uppercase tracking-wider truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ==========================================
           SOFT SKILLS SECTION
           ========================================== */}
        <div className="mb-16 mt-8">
          <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-[#B28D95] uppercase block">
            03 / SOFT SKILLS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF6EE] mt-4 uppercase">
            COLLABORATION & PRESENCE
          </h2>
        </div>

        {/* Soft Skills 3D Flip Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkillsData.map((soft) => {
            const isFlipped = flippedCard === soft.name;
            return (
              <div
                key={soft.name}
                onClick={() => setFlippedCard(isFlipped ? null : soft.name)}
                className="w-full aspect-[4/3] cursor-pointer group [perspective:1000px]"
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative w-full h-full [transform-style:preserve-3d] transition-shadow duration-500 rounded border border-white/10 overflow-hidden"
                >
                  {/* FRONT FACE */}
                  <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] z-10 transition-opacity duration-300 ${isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                    <img
                      src={soft.image}
                      alt={soft.name}
                      className={`w-full h-full object-cover filter grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 ease-in-out ${
                        soft.name === "Communication" ? "object-[center_20%] scale-110" : ""
                      }`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <h4 className="font-display text-2xl font-black tracking-tight text-[#FAF6EE] uppercase">
                        {soft.name}
                      </h4>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className={`absolute inset-0 w-full h-full bg-[#1C1412] text-[#FAF6EE] [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 flex flex-col justify-between border border-[#5C2533]/20 z-20 transition-opacity duration-300 ${isFlipped ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-lg font-black tracking-tight text-[#C87A53] uppercase">
                          {soft.name}
                        </h4>
                        <span className="font-mono text-[8px] font-bold tracking-widest text-white/40 border border-white/10 px-2 py-0.5 uppercase">
                          CLOSE ×
                        </span>
                      </div>
                      <p className="font-sans text-[11px] leading-relaxed text-[#cccccc]">
                        {soft.description}
                      </p>
                    </div>
                    <div className="border-t border-white/10 pt-3">
                      <span className="font-mono text-[8px] tracking-widest text-[#777777] uppercase block">
                        DEVELOPED EXPERIENCE
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
