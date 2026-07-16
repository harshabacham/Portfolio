import React from "react";
import { motion } from "motion/react";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.015, y: -1 }}
      whileTap={{ scale: 0.985 }}
      className={`relative overflow-hidden rounded-xl bg-neutral-950 px-6 py-3.5 text-[10px] font-outfit uppercase font-bold tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#FF5A36] hover:shadow-[0_8px_20px_rgba(255,90,54,0.15)] ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Light sheen sweeping across the button on hover */}
      <motion.div
        className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/15 to-transparent z-0"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
          ease: "linear",
        }}
      />
    </motion.button>
  );
};
