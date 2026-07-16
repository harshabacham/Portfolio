"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useSpring,
} from "motion/react";

import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  scrollProgress?: number;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  scrollProgress?: number;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Non-linear mapping function: Maps scrollY (0 to 180) to progress (0 to 1) with an ease-out cubic curve
  const nonLinearProgress = useTransform(scrollY, [0, 180], [0, 1], {
    ease: (t) => 1 - Math.pow(1 - t, 3),
  });

  // Apply smooth spring physics to the non-linear progress
  const smoothProgress = useSpring(nonLinearProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.6,
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const bounded = Math.min(Math.max(latest, 0), 1);
    setScrollProgress(bounded);
    setVisible(bounded > 0.15);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean; scrollProgress?: number }>,
              { visible, scrollProgress },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible, scrollProgress = 0 }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: scrollProgress > 0.05 ? "blur(12px)" : "none",
        boxShadow: scrollProgress > 0.05
          ? `0 ${scrollProgress * 8}px ${scrollProgress * 24}px rgba(0, 0, 0, ${scrollProgress * 0.04}), 0 1px 1px rgba(0, 0, 0, ${scrollProgress * 0.02}), 0 0 0 1px rgba(0, 0, 0, ${scrollProgress * 0.03})`
          : "none",
        width: `${100 - (scrollProgress * 45)}%`,
        y: scrollProgress * 20,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 38,
      }}
      style={{
        minWidth: scrollProgress > 0.5 ? "680px" : "100%",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-8 py-4 lg:flex transition-colors duration-300",
        scrollProgress > 0.05 && "bg-white/80 dark:bg-neutral-950/80 border border-black/5",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-y-0 left-1/2 -translate-x-1/2 hidden flex-row items-center justify-center space-x-1 text-xs font-semibold uppercase tracking-wider text-neutral-400 lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2.5 rounded-full transition-colors duration-200 text-neutral-500 hover:text-neutral-900"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered-bg"
              className="absolute inset-0 h-full w-full rounded-full bg-black/5 dark:bg-white/5"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible, scrollProgress = 0 }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: scrollProgress > 0.05 ? "blur(12px)" : "none",
        boxShadow: scrollProgress > 0.05
          ? `0 ${scrollProgress * 8}px ${scrollProgress * 24}px rgba(0, 0, 0, ${scrollProgress * 0.04}), 0 1px 1px rgba(0, 0, 0, ${scrollProgress * 0.02}), 0 0 0 1px rgba(0, 0, 0, ${scrollProgress * 0.03})`
          : "none",
        width: `${100 - (scrollProgress * 10)}%`,
        paddingRight: `${24 - (scrollProgress * 4)}px`,
        paddingLeft: `${24 - (scrollProgress * 4)}px`,
        borderRadius: scrollProgress > 0.05 ? "9999px" : "0px",
        y: scrollProgress * 16,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 38,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between bg-transparent py-4 lg:hidden transition-colors duration-300",
        scrollProgress > 0.05 && "bg-white/80 dark:bg-neutral-950/80 border border-black/5",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-3xl bg-white px-6 py-8 shadow-[0_20px_50px_rgba(0,_0,_0,_0.05)] border border-black/5 dark:bg-neutral-950",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button 
      onClick={onClick}
      className="p-2 rounded-full hover:bg-black/5 transition-colors focus:outline-none"
    >
      {isOpen ? (
        <X size={18} className="text-black dark:text-white" />
      ) : (
        <Menu size={18} className="text-black dark:text-white" />
      )}
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
      />
      <span className="font-medium text-black dark:text-white">Startup</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-full text-xs font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-black text-white shadow-sm hover:bg-[#FF5A36]",
    secondary: "bg-transparent text-neutral-500 hover:text-neutral-900",
    dark: "bg-black text-white shadow-sm",
    gradient:
      "bg-gradient-to-b from-neutral-800 to-black text-white",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
