import React, { useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  glowColor = "rgba(255, 90, 54, 0.08)", // subtle brand orange glow
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-[2.5rem] bg-transparent transition-all duration-500 ${className}`}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};
