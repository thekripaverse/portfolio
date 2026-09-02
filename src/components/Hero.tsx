import { motion } from "framer-motion";
import { DecryptedText } from "./creative/CreativeComponents";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 max-w-7xl mx-auto pt-32 pb-16 select-none relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Side: Big typography & Subtitle */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter text-[#1C1412] leading-[0.9] uppercase">
              KRIPASREE <br />
              MOHANRAJ
            </h1>
            <div className="flex flex-col space-y-3 items-start">
              <span className="font-display text-xs sm:text-sm font-semibold tracking-widest text-[#FAF6EE] bg-[#5C2533] px-4 py-2 inline-block uppercase">
                <DecryptedText text="AI & DATA SCIENCE ENGINEER" speed={30} maxIterations={12} animateOn="view" />
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-display text-xl sm:text-2xl font-medium tracking-tight text-[#444444] max-w-xl leading-snug uppercase"
          >
            I don't just build projects. I chase ideas.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex items-center space-x-8 pt-4 font-display text-xs font-bold tracking-widest"
          >
            <a
              href="https://github.com/thekripaverse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1C1412] hover:text-[#5C2533] transition-colors border-b border-transparent hover:border-[#5C2533]"
            >
              <DecryptedText text="GITHUB ↗" speed={30} animateOn="hover" />
            </a>
            <a
              href="https://www.linkedin.com/in/kripa-sree-m/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1C1412] hover:text-[#5C2533] transition-colors border-b border-transparent hover:border-[#5C2533]"
            >
              <DecryptedText text="LINKEDIN ↗" speed={30} animateOn="hover" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Editorial Photo Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            className="w-64 h-[340px] sm:w-72 sm:h-[380px] md:w-[350px] md:h-[450px] overflow-hidden border border-black/10 bg-[#1C1412]/5 relative grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl"
          >
            <img
              src="/src/assets/kripasree.png"
              alt="Kripasree Mohanraj"
              className="w-full h-full object-cover object-top scale-105 hover:scale-100 transition-transform duration-700 ease-in-out"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
