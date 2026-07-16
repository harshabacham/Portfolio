import React from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  className = "",
  size = 150,
  duration = 8,
  delay = 0,
  colorFrom = "#FF5A36",
  colorTo = "#059669",
  borderWidth = 1.5,
}) => {
  return (
    <div
      style={
        {
          "--size": `${size}px`,
          "--duration": `${duration}s`,
          "--delay": `-${delay}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--border-width": `${borderWidth}px`,
        } as React.CSSProperties
      }
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(white,white)] ${className}`}
    >
      <div
        className="absolute aspect-square w-[var(--size)] offset-anchor-[100%_100%] animate-border-beam"
        style={{
          offsetPath: "rect(0 auto auto 0 round var(--border-width))",
          background: "linear-gradient(to right, var(--color-from), var(--color-to), transparent)",
        }}
      />
    </div>
  );
};
