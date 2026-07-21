import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";

export interface AnimatedThemeTogglerProps {
  variant?:
    | "circle"
    | "square"
    | "triangle"
    | "diamond"
    | "rectangle"
    | "hexagon"
    | "star";
  duration?: number;
  fromCenter?: boolean;
  className?: string;
}

export const AnimatedThemeToggler: React.FC<AnimatedThemeTogglerProps> = ({
  variant = "circle",
  duration = 600,
  fromCenter = false,
  className = "",
}) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") return saved;
      return "dark";
    }
    return "dark";
  });

  // Track root document changes manually to stay in sync with other togglers
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    // Listen for theme change events
    window.addEventListener("theme-change", checkTheme);
    
    // Initial check
    checkTheme();

    return () => {
      window.removeEventListener("theme-change", checkTheme);
    };
  }, []);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const isDark = document.documentElement.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";

    // Standard fallback if Document View Transitions API is not supported
    // @ts-ignore
    if (!document.startViewTransition) {
      if (nextTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", nextTheme);
      setTheme(nextTheme);
      window.dispatchEvent(new Event("theme-change"));
      return;
    }

    // Calculate mouse click coordinates or viewport center
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    if (!fromCenter && event) {
      x = event.clientX;
      y = event.clientY;
    }

    // Maximum distance from point to viewport corners
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Setup clip path coordinates based on the selected variant
    let startClip = "";
    let endClip = "";

    switch (variant) {
      case "circle":
        startClip = `circle(0px at ${x}px ${y}px)`;
        endClip = `circle(${maxRadius}px at ${x}px ${y}px)`;
        break;
      case "square":
      case "rectangle": {
        const side = variant === "square" ? maxRadius : maxRadius * 1.5;
        startClip = `inset(${y}px ${window.innerWidth - x}px ${window.innerHeight - y}px ${x}px)`;
        endClip = `inset(0px 0px 0px 0px)`;
        break;
      }
      case "triangle":
        startClip = `polygon(${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px)`;
        endClip = `polygon(${x}px ${y - maxRadius * 1.5}px, ${x - maxRadius * 1.5}px ${y + maxRadius}px, ${x + maxRadius * 1.5}px ${y + maxRadius}px)`;
        break;
      case "diamond":
        startClip = `polygon(${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px)`;
        endClip = `polygon(${x}px ${y - maxRadius}px, ${x + maxRadius}px ${y}px, ${x}px ${y + maxRadius}px, ${x - maxRadius}px ${y}px)`;
        break;
      case "hexagon":
        startClip = `polygon(${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px)`;
        endClip = `polygon(
          ${x - maxRadius * 0.5}px ${y - maxRadius * 0.86}px,
          ${x + maxRadius * 0.5}px ${y - maxRadius * 0.86}px,
          ${x + maxRadius}px ${y}px,
          ${x + maxRadius * 0.5}px ${y + maxRadius * 0.86}px,
          ${x - maxRadius * 0.5}px ${y + maxRadius * 0.86}px,
          ${x - maxRadius}px ${y}px
        )`;
        break;
      case "star": {
        startClip = `polygon(${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px)`;
        const rOuter = maxRadius * 1.5;
        const rInner = maxRadius * 0.6;
        const pts = [];
        for (let i = 0; i < 10; i++) {
          const angle = (i * Math.PI) / 5 - Math.PI / 2;
          const r = i % 2 === 0 ? rOuter : rInner;
          pts.push(`${x + r * Math.cos(angle)}px ${y + r * Math.sin(angle)}px`);
        }
        endClip = `polygon(${pts.join(", ")})`;
        break;
      }
      default:
        startClip = `circle(0px at ${x}px ${y}px)`;
        endClip = `circle(${maxRadius}px at ${x}px ${y}px)`;
    }

    // Trigger standard startViewTransition API
    // @ts-ignore
    const transition = document.startViewTransition(() => {
      if (nextTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", nextTheme);
      setTheme(nextTheme);
      window.dispatchEvent(new Event("theme-change"));
    });

    transition.ready.then(() => {
      // Temporarily disable built-in cross-fade to let our clip-path animate
      const style = document.createElement("style");
      style.innerHTML = `
        ::view-transition-old(root) {
          animation: none;
          mix-blend-mode: normal;
        }
        ::view-transition-new(root) {
          animation: none;
          mix-blend-mode: normal;
        }
      `;
      document.head.appendChild(style);

      document.documentElement.animate(
        [
          { clipPath: startClip },
          { clipPath: endClip }
        ],
        {
          duration: duration,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      ).onfinish = () => {
        style.remove();
      };
    });
  };

  return (
    <button
      id="theme-toggler-btn"
      onClick={handleToggle}
      className={`p-2 rounded-full text-neutral-400 hover:text-[#FF5A36] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center ${className}`}
      aria-label={theme === "light" ? "Activate Dark Mode" : "Activate Light Mode"}
      title={theme === "light" ? "Activate Dark Mode" : "Activate Light Mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {theme === "light" ? (
            <Moon size={15} />
          ) : (
            <Sun size={15} className="text-[#FF5A36]" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
