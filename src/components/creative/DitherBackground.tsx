import { useEffect, useRef } from "react";

export default function DitherBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, tx: -1000, ty: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let time = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.tx = e.clientX;
      mouseRef.current.ty = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      time += 0.005;

      const mouse = mouseRef.current;
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const spacing = 12; 
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      ctx.fillStyle = "rgba(92, 37, 51, 0.035)"; 

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * spacing + (r % 2 === 0 ? spacing / 2 : 0);
          const y = r * spacing;

          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let size = 1.0;
          if (dist < 180) {
            const factor = (180 - dist) / 180;
            size = 1.0 + factor * 2.2 * Math.sin(dist * 0.08 - time * 10);
          } else {
            size = 1.0 + 0.3 * Math.sin(c * 0.15 + time) * Math.cos(r * 0.15 + time * 0.5);
          }

          if (size > 0.1) {
            ctx.beginPath();
            ctx.arc(x, y, Math.max(0.4, size * 0.6), 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
}
