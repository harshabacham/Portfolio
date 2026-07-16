import React, { useEffect, useRef, useState } from "react";

export const InteractiveGridBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 h-full w-full overflow-hidden"
    >
      {/* Editorial Grid Pattern with light intersections */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] text-black dark:text-white pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Dynamic Mouse Spotlight Glow tracking cursor */}
      <div
        className="absolute w-[360px] h-[360px] rounded-full blur-[100px] pointer-events-none opacity-[0.03] dark:opacity-[0.07] transition-transform duration-200"
        style={{
          background: "radial-gradient(circle, #FF5A36 0%, transparent 70%)",
          transform: `translate3d(${mousePos.x - 180}px, ${mousePos.y - 180}px, 0)`,
        }}
      />
    </div>
  );
};
