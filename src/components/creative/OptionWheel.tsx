import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

interface WheelItem {
  label: string;
  target: string;
}

export default function OptionWheel() {
  const items: WheelItem[] = [
    { label: "Home", target: "#hero" },
    { label: "About", target: "#intro" },
    { label: "Skills", target: "#skills" },
    { label: "Projects", target: "#projects" },
    { label: "Achievements", target: "#achievements" },
    { label: "Story", target: "#stories" },
    { label: "Contact", target: "#contact" }
  ];

  const [activeItem, setActiveItem] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Check mobile resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Performance-focused Scroll Synchronization using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px", // triggers when section dominates the middle 40% of screen
      threshold: 0.05
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const idx = items.findIndex((item) => item.target === `#${id}`);
          if (idx !== -1) {
            setActiveItem(idx);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    items.forEach((item) => {
      const el = document.querySelector(item.target);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleItemClick = (e: React.MouseEvent, index: number, target: string) => {
    e.preventDefault();
    setActiveItem(index);
    setMobileOpen(false);

    const el = document.querySelector(target);
    if (el) {
      // scroll-margin offset to avoid headings hiding behind absolute/fixed navigation bars
      const offset = target === "#hero" ? 0 : 40;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Determine focus index for desktop curved interaction
  const focusedIdx = hoveredItem !== null ? hoveredItem : activeItem;

  return (
    <>
      {isMobile ? (
        /* ==========================================================================
           1. MOBILE COMPACT LAYOUT (Menu trigger button & drawer)
           ========================================================================== */
        <>
          {/* Menu Trigger Button */}
          <div className="fixed top-6 right-6 z-40 select-none">
            <button
              onClick={() => setMobileOpen(true)}
              className="flex items-center space-x-2 bg-[#FAF6EE]/95 border border-black/10 text-[#1C1412] hover:text-[#5C2533] hover:border-[#5C2533] px-4 py-2.5 rounded shadow-sm font-mono text-[9px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
            >
              <Menu size={11} />
              <span>MENU</span>
            </button>
          </div>

          {/* Fullscreen Mobile Overlay Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 bg-[#FAF6EE] z-50 flex flex-col justify-between p-8 select-none"
              >
                {/* Mobile Drawer Header */}
                <div className="flex justify-between items-center pb-6 border-b border-black/5">
                  <span className="font-mono text-[9px] font-bold tracking-widest text-[#777777] uppercase">
                    JOURNAL NAV
                  </span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 border border-black/10 rounded-full hover:border-[#5C2533] hover:text-[#5C2533] transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Mobile Drawer Links */}
                <nav className="flex flex-col space-y-6 my-auto items-start pl-4">
                  {items.map((item, idx) => {
                    const isActive = activeItem === idx;
                    const numStr = (idx + 1).toString().padStart(2, "0");
                    return (
                      <button
                        key={item.label}
                        onClick={(e) => handleItemClick(e, idx, item.target)}
                        className="flex items-baseline space-x-4 text-left cursor-pointer"
                      >
                        <span className="font-mono text-[10px] font-bold text-[#B28D95]">
                          {numStr}
                        </span>
                        <span
                          className={`font-display text-3xl font-black uppercase tracking-tight transition-all ${
                            isActive ? "text-[#5C2533] translate-x-2" : "text-[#1C1412]/60"
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </nav>

                {/* Mobile Drawer Footer */}
                <div className="pt-6 border-t border-black/5 flex justify-between items-center text-[8px] font-mono font-bold tracking-widest text-[#777777] uppercase">
                  <span>© 2026 KRIPASREE</span>
                  <span>BUILDER ARCHIVE</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        /* ==========================================================================
           2. DESKTOP MINIMAL CURVED COMPACT LAYOUT (Vertical dock on the right)
           ========================================================================== */
        <div
          className="fixed right-8 top-1/2 -translate-y-1/2 z-40 select-none pointer-events-auto flex flex-col items-end space-y-4"
          style={{ width: "220px" }}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {items.map((item, idx) => {
            const isActive = activeItem === idx;
            const diff = idx - focusedIdx;

            // Elastic circular fisheye curve calculations:
            // Focused item is shifted left by 20px, adjacent items shift by 13px, 6px, resting at 0px.
            const xOffset = Math.max(0, 3 - Math.abs(diff)) * -6.5;
            const scale = 1 + Math.max(0, 2 - Math.abs(diff)) * 0.08;
            const opacity = 1 - Math.min(0.6, Math.abs(diff) * 0.15);
            const blur = Math.min(2, Math.abs(diff) * 0.6);

            const numStr = (idx + 1).toString().padStart(2, "0");
            const isDarkBg = activeItem === 2 || activeItem === 6;

            return (
              <motion.button
                key={item.label}
                onClick={(e) => handleItemClick(e, idx, item.target)}
                onMouseEnter={() => setHoveredItem(idx)}
                animate={{
                  x: xOffset,
                  scale: scale,
                  opacity: opacity,
                  filter: blur > 0.25 ? `blur(${blur}px)` : "blur(0px)"
                }}
                transition={{ type: "spring", stiffness: 150, damping: 16 }}
                className="flex items-center space-x-3 cursor-pointer group text-right origin-right"
              >
                {/* Inactive details: hover index number indicator */}
                <span
                  className={`font-mono text-[9px] tracking-widest transition-all duration-300 ${
                    isActive 
                      ? (isDarkBg ? "text-[#C0A0A5] font-black" : "text-[#5C2533] font-black") 
                      : (isDarkBg ? "text-[#FAF6EE]/40 group-hover:opacity-100" : "text-[#777777] opacity-60 group-hover:opacity-100")
                  }`}
                >
                  {isActive ? `•  ${numStr}` : numStr}
                </span>

                {/* Horizontal display label (never rotated) */}
                <span
                  className={`font-display text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? (isDarkBg ? "text-[#C0A0A5]" : "text-[#5C2533]")
                      : (isDarkBg ? "text-[#FAF6EE]/60 hover:text-[#C0A0A5]" : "text-[#1C1412]/60 hover:text-[#5C2533]")
                  }`}
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      )}
    </>
  );
}
