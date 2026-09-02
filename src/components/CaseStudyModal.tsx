import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "../data/portfolioData";

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    // Block background scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const modalVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20, mass: 0.8 },
    },
    exit: {
      opacity: 0,
      y: "100%",
      transition: { duration: 0.4, ease: "easeInOut" as const },
    },
  };

  const c = project.caseStudy;

  return (
    <motion.div
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 bg-[#FAF6EE] text-[#1C1C1C] overflow-y-auto w-full h-full flex flex-col selection:bg-[#5B2A3B] selection:text-white"
    >
      {/* Top Banner Bar */}
      <div className="sticky top-0 z-10 w-full bg-[#FAF6EE]/80 backdrop-blur-md border-b border-black/5 px-6 py-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="font-display text-[10px] font-bold tracking-widest text-[#777777] uppercase">
            CASE STUDY // {project.category}
          </span>
        </div>
        <button
          onClick={onClose}
          className="group flex items-center space-x-2 font-display text-xs font-bold tracking-widest text-white bg-black hover:bg-black/90 px-4 py-2 transition-all cursor-pointer"
          data-cursor="open"
          aria-label="Close Case Study"
        >
          <span>CLOSE</span>
          <X size={14} className="transition-transform group-hover:rotate-90" />
        </button>
      </div>

      {/* Main Content Layout */}
      <div className="flex-grow max-w-5xl mx-auto w-full px-6 py-12 md:py-20 md:px-12">
        {/* Large Editorial Headline */}
        <div className="border-b border-black/10 pb-8 mb-12">
          <h2 className="font-display text-5xl sm:text-7xl font-extrabold tracking-tighter uppercase leading-none select-none">
            {project.title}
          </h2>
          <p className="font-display text-lg text-[#777777] mt-4 font-medium leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Problem, Idea, What I Built, Tech, Role */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Project Overview Details */}
            <div className="grid grid-cols-2 gap-6 border-b border-black/10 pb-8">
              <div>
                <span className="font-display text-[10px] font-bold tracking-widest text-[#777777] uppercase block mb-1">
                  ROLE
                </span>
                <span className="font-sans text-sm font-semibold text-[#1C1C1C]">
                  Lead AI Developer & Core Architect
                </span>
              </div>
              <div>
                <span className="font-display text-[10px] font-bold tracking-widest text-[#777777] uppercase block mb-1">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-display text-[8px] font-bold tracking-wider border border-black/10 px-2 py-0.5 bg-black/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Problem */}
            <section className="space-y-3">
              <h3 className="font-display text-xs font-bold tracking-widest text-[#777777] uppercase">
                01 / THE PROBLEM
              </h3>
              <p className="font-sans text-base leading-relaxed text-[#444444]">
                {c.problem}
              </p>
            </section>

            {/* Idea */}
            <section className="space-y-3">
              <h3 className="font-display text-xs font-bold tracking-widest text-[#777777] uppercase">
                02 / THE IDEA
              </h3>
              <p className="font-display text-lg font-medium leading-relaxed text-[#1C1C1C] border-l-2 border-[#C87A53] pl-4">
                {c.idea}
              </p>
            </section>

            {/* What I Built */}
            <section className="space-y-4">
              <h3 className="font-display text-xs font-bold tracking-widest text-[#777777] uppercase">
                03 / WHAT I BUILT
              </h3>
              <p className="font-sans text-sm leading-relaxed text-[#444444] mb-4">
                {c.build.architecture}
              </p>

              {/* System Schematic / Diagram representation */}
              <div className="border border-black/15 p-5 bg-[#FAF6EE] font-mono text-[10px] text-[#1C1C1C]/60 overflow-x-auto rounded">
                <div className="text-[#777777] uppercase font-bold tracking-wider mb-3 text-[9px] border-b border-black/5 pb-1">
                  System Component Mapping
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  {c.build.components.map((comp, idx) => (
                    <div key={comp} className="flex items-center">
                      <span className="border border-black/10 bg-black/5 px-2 py-1 text-[#1C1C1C] font-semibold rounded">
                        {comp}
                      </span>
                      {idx < c.build.components.length - 1 && (
                        <span className="text-[#C87A53] font-bold mx-2">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Decisions */}
              <div className="mt-4 space-y-2">
                <span className="text-[11px] font-display font-bold tracking-wider text-[#1C1C1C] uppercase block">
                  Engineering Decisions:
                </span>
                <ul className="list-disc pl-5 font-sans text-xs text-[#555555] space-y-1">
                  {c.build.decisions.map((dec, i) => (
                    <li key={i}>{dec}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column: Challenges (Chaos), Outcome, What I Learned, Next Iteration */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* CHALLENGES (The Chaos) */}
            <section className="border border-black/15 bg-black text-[#FAF6EE] p-6 shadow-[4px_4px_0px_#5B2A3B] relative overflow-hidden rounded">
              <div className="absolute top-0 right-0 bg-[#5B2A3B] text-white font-display font-black text-[9px] tracking-widest px-2 py-1 uppercase">
                CRITICAL SHIFT
              </div>
              <h4 className="font-display text-xs font-black tracking-widest text-[#C87A53] uppercase mb-4">
                ⚠️ THINGS THAT BROKE (CHALLENGES)
              </h4>
              <ul className="space-y-3">
                {c.chaos.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs font-sans text-stone-300">
                    <span className="font-mono text-[#C87A53] font-bold select-none">[!]</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Outcome (The Result) */}
            <section className="space-y-3">
              <h3 className="font-display text-xs font-bold tracking-widest text-[#777777] uppercase">
                04 / OUTCOME
              </h3>
              <p className="font-sans text-sm leading-relaxed text-[#444444]">
                {c.result}
              </p>
            </section>

            {/* What I Learned */}
            <section className="space-y-3">
              <h3 className="font-display text-xs font-bold tracking-widest text-[#777777] uppercase">
                05 / WHAT I LEARNED
              </h3>
              <ul className="list-disc pl-5 font-sans text-xs text-[#444444] space-y-1">
                {c.learned.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </section>

            {/* Next Iteration */}
            <section className="space-y-3">
              <h3 className="font-display text-xs font-bold tracking-widest text-[#777777] uppercase">
                06 / NEXT ITERATION
              </h3>
              <p className="font-display text-xs font-semibold text-[#1C1C1C] leading-relaxed bg-[#C87A53]/10 border-l border-[#C87A53] p-3">
                {c.nextIteration}
              </p>
            </section>
          </div>
        </div>

        {/* GitHub Link Footer */}
        {project.github && (
          <div className="border-t border-black/10 pt-8 mt-16 flex justify-between items-center">
            <span className="font-display text-[10px] text-[#777777] tracking-widest font-semibold">
              WANT TO REVIEW THE CODE DIRECTLY?
            </span>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 font-display text-sm font-bold tracking-wider hover:bg-[#5B2A3B]/10 border border-black px-4 py-2 hover:border-[#5B2A3B] transition-colors duration-200"
              data-cursor="open"
            >
              <span>VIEW ON GITHUB ↗</span>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
