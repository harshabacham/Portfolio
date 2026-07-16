import React, { useEffect, useRef, useState } from 'react';

type CursorState = 'default' | 'hover' | 'view';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Detect touch / fine pointer device
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) {
      return; // Do not enable custom cursor on touch screens / mobile
    }

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      
      // Use requestAnimationFrame for extra hardware-accelerated fluid motion
      window.requestAnimationFrame(() => {
        if (dot) {
          dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        }
        if (ring) {
          ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        }
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find closest interactive element or custom cursor elements
      const interactiveEl = target.closest('a, button, [role="button"], .cursor-pointer, input, textarea, select, [data-cursor]');
      
      if (interactiveEl) {
        // Retrieve custom data-cursor attribute if present
        const customCursor = interactiveEl.getAttribute('data-cursor') || 
                             interactiveEl.closest('[data-cursor]')?.getAttribute('data-cursor');
        
        if (customCursor === 'view') {
          setCursorState('view');
        } else {
          setCursorState('hover');
        }
      } else {
        setCursorState('default');
      }
    };

    const onMouseLeaveWindow = () => {
      if (dot) dot.style.opacity = '0';
      if (ring) ring.style.opacity = '0';
    };

    const onMouseEnterWindow = () => {
      if (dot) dot.style.opacity = '1';
      if (ring) ring.style.opacity = '1';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeaveWindow);
    document.addEventListener('mouseenter', onMouseEnterWindow);
    document.body.classList.add('custom-cursor-active');

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeaveWindow);
      document.removeEventListener('mouseenter', onMouseEnterWindow);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!isVisible) return null;

  // Determine sizing and styles based on state
  let ringClasses = '';
  let dotClasses = '';
  
  if (cursorState === 'hover') {
    ringClasses = 'w-14 h-14 border-[#FF5A36] bg-[#FF5A36]/10 scale-100';
    dotClasses = 'w-1.5 h-1.5 bg-[#FF5A36]';
  } else if (cursorState === 'view') {
    ringClasses = 'w-20 h-20 bg-black border-transparent scale-100 shadow-[0_15px_30px_rgba(0,0,0,0.15)] text-white';
    dotClasses = 'w-0 h-0 opacity-0';
  } else {
    // Default
    ringClasses = 'w-9 h-9 border-black/20 bg-transparent scale-100';
    dotClasses = 'w-1.5 h-1.5 bg-black';
  }

  return (
    <>
      {/* Inner precise dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[99999] transition-[width,height,opacity,background-color] duration-300 ease-out hidden md:block ${dotClasses}`}
        style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
      />
      
      {/* Smooth outer follower ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none z-[99998] flex items-center justify-center transition-[width,height,background-color,border-color,transform] duration-300 ease-out hidden md:block ${ringClasses}`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
          // Set a slightly slower transform transition for the "follower" lag effect
          transition: 'transform 0.12s cubic-bezier(0.1, 0.8, 0.2, 1), width 0.3s cubic-bezier(0.1, 0.8, 0.2, 1), height 0.3s cubic-bezier(0.1, 0.8, 0.2, 1), background-color 0.3s, border-color 0.3s'
        }}
      >
        {/* VIEW badge text inside */}
        <span 
          className={`text-[9px] font-bold tracking-[0.2em] text-white font-sans uppercase transition-opacity duration-300 select-none ${
            cursorState === 'view' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          VIEW
        </span>
      </div>
    </>
  );
};

export default CustomCursor;
