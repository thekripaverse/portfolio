import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<string>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Mouse coordinates using motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring settings for smooth tracking physics
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if the device is a mobile or touch device
    const checkDevice = () => {
      const mobile =
        window.matchMedia("(max-width: 768px)").matches ||
        navigator.maxTouchPoints > 0 ||
        ("ontouchstart" in window);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return;

    // Enable pointer styling in document body
    document.documentElement.classList.add("custom-cursor-active");

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Event delegation to detect cursor state on hovered targets
      const target = e.target as HTMLElement;
      if (target) {
        const hoverTarget = target.closest("[data-cursor]");
        if (hoverTarget) {
          const type = hoverTarget.getAttribute("data-cursor");
          setCursorType(type || "default");
        } else {
          setCursorType("default");
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [isMobile, isVisible, mouseX, mouseY]);

  if (isMobile || !isVisible) return null;

  // Variants based on hover target state
  const variants = {
    default: {
      width: 8,
      height: 8,
      backgroundColor: "#5C2533", // Plum cursor dot
      mixBlendMode: "normal" as const,
      border: "0px solid transparent"
    },
    view: {
      width: 22,
      height: 22,
      backgroundColor: "rgba(0, 0, 0, 0)",
      mixBlendMode: "normal" as const,
      border: "1.5px solid #C87A53", // Copper border ring
    },
    open: {
      width: 22,
      height: 22,
      backgroundColor: "rgba(0, 0, 0, 0)",
      mixBlendMode: "normal" as const,
      border: "1.5px solid #5C2533", // Plum border ring
    },
  };

  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        pointerEvents: "none",
        zIndex: 9999,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      animate={cursorType}
      variants={variants}
      transition={{ type: "spring" as const, stiffness: 350, damping: 25, mass: 0.2 }}
    />
  );
}
