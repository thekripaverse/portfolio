import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  enableBlur?: boolean;
  baseRotation?: number;
  blurStrength?: number;
  baseOpacity?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  enableBlur = true,
  baseRotation = 3,
  blurStrength = 8,
  baseOpacity = 0,
  duration = 1.0,
  delay = 0,
  className = ""
}: ScrollRevealProps) {
  const variants = {
    hidden: {
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
      rotateX: baseRotation,
      y: 18,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      rotateX: 0,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] as any, // premium custom cubic-bezier easeOut
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-12%" }} // triggers slightly before center viewport
      variants={variants}
      className={`origin-top-left ${className}`}
      style={{ perspective: 800 }}
    >
      {children}
    </motion.div>
  );
}
