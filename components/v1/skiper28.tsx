import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'motion/react';

interface Skiper28Props {
  /**
   * Words to scroll in Row 1. Will loop infinitely.
   */
  row1Text?: string;
  /**
   * Words to scroll in Row 2. Will loop infinitely.
   */
  row2Text?: string;
  /**
   * Words to scroll in Row 3. Will loop infinitely.
   */
  row3Text?: string;
  /**
   * Words to scroll in Row 4. Will loop infinitely.
   */
  row4Text?: string;
  /**
   * Main heading above the 3D scroll.
   */
  title?: string;
  /**
   * Subtitle displayed below the title.
   */
  subtitle?: string;
}

export const Skiper28: React.FC<Skiper28Props> = ({
  row1Text = "SYSTEM ARCHITECTURE • LOW-LATENCY CORE • PIXEL PERFECT • NATIVE PERFORMANCE •",
  row2Text = "✦ DESIGN SYSTEMS ✦ BRAND STRATEGY ✦ MOTION PHYSICS ✦ SWISS GRAPHICS ✦",
  row3Text = "DEVELOPER • GRAPHIC ARTIST • SYSTEM ARCHITECT • CREATIVE CODER •",
  row4Text = "✦ BESPOKE WEB ✦ INTERACTIVE LAYOUTS ✦ TACTILE UX ✦ COGNITIVE FLOW ✦",
  title = "3D PERSPECTIVE SCROLL",
  subtitle = "Interactive spatial mechanics powered by scroll-linked velocity vectors"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Dynamically listen to class list changes on documentElement to sync theme state
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    window.addEventListener("theme-change", checkTheme);
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("theme-change", checkTheme);
      observer.disconnect();
    };
  }, []);

  // Track page scroll relative to this component container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll progress to eliminate any stuttering
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  // Transform scroll progress to horizontal translation for infinite scrolling rows
  // Row 1 & 3 move right, Row 2 & 4 move left
  const x1 = useTransform(smoothProgress, [0, 1], ["-20%", "10%"]);
  const x2 = useTransform(smoothProgress, [0, 1], ["10%", "-20%"]);
  const x3 = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);
  const x4 = useTransform(smoothProgress, [0, 1], ["15%", "-15%"]);

  // Transform scroll progress to 3D tilt effects
  const rotateX = useTransform(smoothProgress, [0, 1], [35, 15]);
  const rotateY = useTransform(smoothProgress, [0, 1], [-12, 12]);
  const skewX = useTransform(smoothProgress, [0, 1], [-6, 6]);

  // Spring animations for mouse cursor tracking (interactive tilt overlay)
  const mouseXSpring = useSpring(0, { stiffness: 120, damping: 25 });
  const mouseYSpring = useSpring(0, { stiffness: 120, damping: 25 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates from -0.5 to 0.5
    const x = (event.clientX - rect.left) / width - 0.5;
    const y = (event.clientY - rect.top) / height - 0.5;
    
    mouseXSpring.set(x);
    mouseYSpring.set(y);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseXSpring.set(0);
    mouseYSpring.set(0);
  };

  // Combine scroll tilt with interactive mouse tilt
  const dynamicRotateX = useTransform(
    [rotateX, mouseYSpring],
    ([rX, mY]) => (rX as number) + (mY as number) * -15
  );

  const dynamicRotateY = useTransform(
    [rotateY, mouseXSpring],
    ([rY, mX]) => (rY as number) + (mX as number) * 15
  );

  // Generate repeated text to ensure full coverage of infinite scroll lines
  const renderRowText = (text: string, count = 4) => {
    return Array(count).fill(text).join(" ");
  };

  return (
    <div
      id="skiper28-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full min-h-[55vh] py-10 flex flex-col items-center justify-center overflow-hidden select-none transition-colors duration-500 ${
        theme === "dark" 
          ? "bg-[#0A0A0A] text-white" 
          : "bg-[#FAF9F6] text-neutral-900"
      }`}
      style={{ perspective: "1200px" }}
    >
      {/* Dynamic Background Grid */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
          theme === "dark"
            ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)]"
        } bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]`} 
      />

      {/* Atmospheric lighting layers */}
      <div 
        className={`absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full blur-[140px] pointer-events-none transition-colors duration-500 ${
          theme === "dark" ? "bg-[#FF6A00]/[0.02]" : "bg-[#FF6A00]/[0.035]"
        }`} 
      />
      <div 
        className={`absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full blur-[140px] pointer-events-none transition-colors duration-500 ${
          theme === "dark" ? "bg-[#059669]/[0.015]" : "bg-[#059669]/[0.025]"
        }`} 
      />

      {/* Header overlay metadata */}
      <div className="relative z-20 text-center px-6 max-w-3xl mb-8 space-y-3">
        {title && (
          <div 
            className={`inline-flex items-center gap-2 px-3 py-1 border rounded-full text-[9px] font-mono tracking-widest text-[#FF6A00] uppercase transition-all duration-500 ${
              theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
            {title}
          </div>
        )}
        {subtitle && (
          <p 
            className={`text-xs font-outfit font-light tracking-wide max-w-xl mx-auto transition-colors duration-500 ${
              theme === "dark" ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* 3D Perspective Stage wrapper */}
      <motion.div
        id="skiper28-stage"
        style={{
          rotateX: dynamicRotateX,
          rotateY: dynamicRotateY,
          skewX,
          transformStyle: "preserve-3d",
        }}
        className="w-[125%] flex flex-col gap-3.5 md:gap-4.5 items-center justify-center relative cursor-grab active:cursor-grabbing"
      >
        {/* Row 1: Bright Accent Filled Text */}
        <motion.div
          id="skiper28-row-1"
          style={{ x: x1, translateZ: "30px" }}
          className="whitespace-nowrap flex select-none pointer-events-none transition-shadow duration-300"
        >
          <span 
            className={`text-[3.5vw] md:text-[2.6vw] font-syne font-black uppercase tracking-tighter text-[#FF6A00] transition-all duration-500 ${
              theme === "dark"
                ? "drop-shadow-[0_4px_12px_rgba(255,106,0,0.15)]"
                : "drop-shadow-[0_4px_8px_rgba(255,106,0,0.1)]"
            }`}
          >
            {renderRowText(row1Text)}
          </span>
        </motion.div>

        {/* Row 2: Hollow Perspective Text */}
        <motion.div
          id="skiper28-row-2"
          style={{ x: x2, translateZ: "10px" }}
          className="whitespace-nowrap flex select-none pointer-events-none"
        >
          <span 
            className="text-[4.2vw] md:text-[3.2vw] font-syne font-extrabold uppercase tracking-tighter text-transparent transition-all duration-500"
            style={{ 
              WebkitTextStroke: theme === "dark" ? "1px rgba(255, 255, 255, 0.2)" : "1px rgba(0, 0, 0, 0.15)" 
            }}
          >
            {renderRowText(row2Text)}
          </span>
        </motion.div>

        {/* Row 3: Solid Sleek Text */}
        <motion.div
          id="skiper28-row-3"
          style={{ x: x3, translateZ: "-10px" }}
          className="whitespace-nowrap flex select-none pointer-events-none"
        >
          <span 
            className={`text-[3.5vw] md:text-[2.6vw] font-outfit font-black uppercase tracking-tight transition-colors duration-500 ${
              theme === "dark" ? "text-white/90" : "text-black/85"
            }`}
          >
            {renderRowText(row3Text)}
          </span>
        </motion.div>

        {/* Row 4: Subtle Hollow Accent Text */}
        <motion.div
          id="skiper28-row-4"
          style={{ x: x4, translateZ: "-25px" }}
          className="whitespace-nowrap flex select-none pointer-events-none"
        >
          <span 
            className="text-[4.2vw] md:text-[3.2vw] font-syne font-black uppercase tracking-tighter text-transparent transition-all duration-500"
            style={{ 
              WebkitTextStroke: theme === "dark" ? "1px rgba(255, 106, 0, 0.25)" : "1px rgba(255, 106, 0, 0.4)" 
            }}
          >
            {renderRowText(row4Text)}
          </span>
        </motion.div>
      </motion.div>

      {/* Decorative Interactive Status Deck at the base */}
      <div 
        className={`absolute bottom-4 left-8 right-8 z-20 hidden md:flex items-center justify-between font-mono text-[9px] transition-colors duration-500 ${
          theme === "dark" ? "text-neutral-500" : "text-neutral-400"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>RENDER_TARGET: WEBGL_PERSPECTIVE_3D</span>
        </div>
        <div className="flex items-center gap-4">
          <span>STRETCH_RATIO: 1.25X</span>
          <span>PERSPECTIVE_INDEX: 1200PX</span>
        </div>
      </div>
    </div>
  );
};
