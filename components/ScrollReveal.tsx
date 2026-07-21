import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number; // delay in milliseconds
  duration?: number; // duration in milliseconds
  threshold?: number; // intersection ratio to trigger
  once?: boolean; // whether to only trigger animation once
  className?: string; // extra custom styling classes
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  threshold = 0.05,
  once = true,
  className = '',
}) => {
  const getInitialStyles = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 30 };
      case 'down':
        return { opacity: 0, y: -30 };
      case 'left':
        return { opacity: 0, x: 30 };
      case 'right':
        return { opacity: 0, x: -30 };
      case 'none':
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialStyles()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount: threshold }}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1], // iOS/Apple dynamic curves
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
