import React, { useEffect, useRef, useState } from 'react';

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
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -60px 0px', // slightly offset trigger to feel more natural as elements enter from bottom
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const getDirectionStyles = () => {
    if (!isIntersecting) {
      switch (direction) {
        case 'up':
          return 'opacity-0 translate-y-12';
        case 'down':
          return 'opacity-0 -translate-y-12';
        case 'left':
          return 'opacity-0 translate-x-12';
        case 'right':
          return 'opacity-0 -translate-x-12';
        case 'none':
        default:
          return 'opacity-0';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0';
  };

  const transitionStyle = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out will-change-transform ${getDirectionStyles()} ${className}`}
      style={transitionStyle}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
