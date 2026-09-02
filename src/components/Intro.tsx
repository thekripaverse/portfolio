import { motion } from "framer-motion";
import { MaskedHeading } from "./creative/CreativeComponents";

export default function Intro() {
  const enjoys = [
    "ARTIFICIAL INTELLIGENCE",
    "PRACTICAL SYSTEMS",
    "COMPUTER VISION",
    "DEEP LEARNING",
    "AGENTIC AI",
    "EXPERIMENTATION",
    "INTENSE HACKATHONS",
    "COMMUNICATION & LEADERSHIP",
    "LEARNING BY BUILDING"
  ];

  return (
    <section
      id="intro"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-black/5 flex flex-col justify-center min-h-screen bg-[#FAF6EE] select-none"
    >
      {/* Section Label */}
      <div className="mb-16">
        <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-[#B28D95] uppercase block">
          01 / ABOUT
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Short statements */}
        <div className="lg:col-span-7 space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1C1412] leading-[0.95] uppercase"
          >
            I AM AN AI & DATA SCIENCE ENGINEER.
          </motion.h2>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans text-lg sm:text-xl leading-relaxed text-[#554A47] font-normal"
            >
              I don't study AI just to write papers or pad my resume. I get my hands dirty. I organize workshops, coordinate labs, collaborate with mentors, and push through 24-hour hackathon crunches.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-base text-[#777777] leading-relaxed"
            >
              My work spans real-time gesture control systems, deepfake voice detection backends, and digital twins for mining infrastructure. If it doesn't run in production, it's not finished.
            </motion.p>
          </div>

          {/* Bullet focus block */}
          <div className="space-y-3 pt-4 border-t border-black/10">
            <span className="font-mono text-[10px] font-bold tracking-widest text-[#777777] uppercase block mb-4">
              FIELDS OF ENGAGEMENT
            </span>
            <div className="flex flex-wrap gap-2.5">
              {enjoys.map((item, idx) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="font-display text-[10px] font-semibold tracking-wider border border-black/15 bg-white px-3 py-1.5 uppercase hover:bg-[#5C2533] hover:text-white transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Masked Statement */}
        <div className="lg:col-span-5 flex flex-col space-y-12 lg:border-l lg:border-black/10 lg:pl-12 pt-8 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="font-mono text-[9px] font-bold tracking-widest text-[#777777] uppercase block">
              CORE PHILOSOPHY
            </span>
            
            <MaskedHeading
              text="THE THINGS I BUILT TAUGHT ME MORE THAN THE THINGS I PLANNED."
              bgImage="/data/love-to-code.jpeg"
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-none tracking-tighter"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-6 bg-[#1C1412] text-[#FAF6EE] space-y-4 rounded shadow-lg border border-white/5"
          >
            <span className="font-mono text-[9px] font-bold tracking-widest text-[#777777] uppercase block">
              METHODOLOGY
            </span>
            <h4 className="font-display text-lg font-black uppercase text-[#C87A53]">
              TRY • FAIL • BUILD AGAIN
            </h4>
            <p className="font-sans text-xs leading-relaxed text-[#aaaaaa]">
              Engineering isn't about getting it right on the first commit. It's about how fast you run around to borrow components when your demo fails at the 22nd hour, and making it work under pressure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
