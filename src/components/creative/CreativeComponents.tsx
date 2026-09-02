import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ==========================================================================
   1. DECRYPTED TEXT
   ========================================================================== */
interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  className?: string;
  animateOn?: "hover" | "view";
}

export function DecryptedText({
  text,
  speed = 40,
  maxIterations = 8,
  className = "",
  animateOn = "hover"
}: DecryptedTextProps) {
  const [displayedText, setDisplayedText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?-=[]\\;',./";

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayedText(() =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current!);
        setIsAnimating(false);
        setDisplayedText(text);
      }
      iteration += text.length / maxIterations;
    }, speed);
  };

  useEffect(() => {
    if (animateOn === "view") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        },
        { threshold: 0.1 }
      );
      if (triggerRef.current) observer.observe(triggerRef.current);
      return () => observer.disconnect();
    }
  }, [text, animateOn]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      ref={triggerRef}
      className={`${className} font-mono cursor-default`}
      onMouseEnter={() => {
        if (animateOn === "hover") startAnimation();
      }}
    >
      {displayedText}
    </span>
  );
}

/* ==========================================================================
   2. SPLIT FLAP TEXT
   ========================================================================== */
interface SplitFlapTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export function SplitFlapText({
  text,
  speed = 50,
  className = ""
}: SplitFlapTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const chars = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-:/↗.()";

  useEffect(() => {
    let currentText = Array(text.length).fill(" ");
    const interval = setInterval(() => {
      let done = true;
      for (let i = 0; i < text.length; i++) {
        const targetChar = text[i];
        if (currentText[i] !== targetChar) {
          done = false;
          const currIdx = chars.indexOf(currentText[i]);
          const targetIdx = chars.indexOf(targetChar);
          if (currIdx === -1 || targetIdx === -1) {
            currentText[i] = targetChar;
          } else {
            currentText[i] = chars[(currIdx + 1) % chars.length];
          }
        }
      }
      setDisplayedText(currentText.join(""));
      if (done) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={`${className} font-mono tracking-wider bg-black text-[#C87A53] px-2 py-0.5 rounded border border-[#C87A53]/20 inline-block`}>
      {displayedText}
    </span>
  );
}

/* ==========================================================================
   3. LOGO LOOP
   ========================================================================== */
interface LogoLoopProps {
  children: React.ReactNode[];
  speed?: number; // duration in seconds
  direction?: "left" | "right";
  className?: string;
}

export function LogoLoop({
  children,
  speed = 30,
  direction = "left",
  className = ""
}: LogoLoopProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={`overflow-hidden flex w-full relative select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style>{`
        @keyframes loop-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes loop-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .logo-loop-container {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: ${direction === "left" ? "loop-left" : "loop-right"} ${speed}s linear infinite;
        }
        .logo-loop-paused {
          animation-play-state: paused;
        }
      `}</style>
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#1C1C1C] via-[#1C1C1C]/90 to-transparent z-10 pointer-events-none" />

      <div className={`logo-loop-container ${isPaused ? "logo-loop-paused" : ""}`}>
        <div className="flex space-x-8 items-center">
          {children}
        </div>
        <div className="flex space-x-8 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   4. COUNTER
   ========================================================================== */
interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // in milliseconds
  className?: string;
}

export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 1500,
  className = ""
}: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          if (start === end) return;

          const totalFrames = Math.round(duration / 16);
          let frame = 0;

          const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            const current = Math.round(easeProgress * end);
            
            setCount(current);

            if (frame >= totalFrames) {
              clearInterval(counter);
              setCount(end);
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/* ==========================================================================
   5. MASKED HEADING
   ========================================================================== */
interface MaskedHeadingProps {
  text: string;
  bgImage?: string;
  className?: string;
}

export function MaskedHeading({
  text,
  bgImage = "/data/love-to-code.jpeg",
  className = ""
}: MaskedHeadingProps) {
  return (
    <h2
      className={`font-display font-black uppercase text-transparent bg-clip-text bg-cover bg-center select-none ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
      }}
    >
      {text}
    </h2>
  );
}

/* ==========================================================================
   6. DRIFT WALL
   ========================================================================== */
interface DriftWallProps {
  images: string[];
  className?: string;
}

export function DriftWall({ images, className = "" }: DriftWallProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  if (images.length === 0) return null;

  // Extend the list to ensure seamless looping visual width
  const extendedImages = [...images, ...images, ...images];

  return (
    <div className={`w-full overflow-hidden relative h-48 md:h-64 border border-black/10 bg-black/5 rounded ${className}`}>
      {/* Subtle overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcfbf9] via-transparent to-[#fcfbf9] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fcfbf9] via-transparent to-[#fcfbf9] z-10 pointer-events-none" />

      <motion.div
        className="flex space-x-6 w-max h-full items-center px-4"
        animate={isMobile ? {} : {
          x: ["0%", "-33.333%"]
        }}
        transition={{
          ease: "linear",
          duration: 35,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        {extendedImages.map((src, idx) => (
          <div
            key={idx}
            className="w-36 h-28 md:w-48 md:h-36 flex-shrink-0 border border-black/10 overflow-hidden shadow-md rounded grayscale hover:grayscale-0 scale-95 hover:scale-100 transition-all duration-500 bg-stone-100"
          >
            <img src={src} alt="Drift Wall Archive" className="w-full h-full object-cover pointer-events-none" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
