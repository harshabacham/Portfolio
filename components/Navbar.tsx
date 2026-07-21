import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';
import { AsciiGlitchRipple } from './ui/ascii-glitch-ripple';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleThemeChange = () => {
      const isDark = window.document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    };

    window.addEventListener('theme-change', handleThemeChange);
    handleThemeChange();

    return () => {
      window.removeEventListener('theme-change', handleThemeChange);
    };
  }, []);

  // Scroll tracking with Framer Motion
  const { scrollY } = useScroll();
  
  // Apply a smooth spring to the raw scroll value for organic transition physics
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 26,
    restDelta: 0.001
  });

  // State to track simple scrolled threshold for other styling/logic if needed
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  // Define transition scroll range
  const scrollRange = [0, 150];

  // Desktop Scroll-Linked Interpolations
  const desktopWidth = useTransform(smoothScrollY, scrollRange, ["100%", "55%"]);
  const desktopY = useTransform(smoothScrollY, scrollRange, [0, 16]);
  const desktopPaddingLeft = useTransform(smoothScrollY, scrollRange, ["64px", "24px"]);
  const desktopPaddingRight = useTransform(smoothScrollY, scrollRange, ["64px", "24px"]);
  const desktopPaddingY = useTransform(smoothScrollY, scrollRange, ["14px", "6px"]);
  const desktopBorderRadius = useTransform(smoothScrollY, scrollRange, ["0px", "9999px"]);

  const bgOpacity = useTransform(smoothScrollY, scrollRange, [0, 0.85]);
  const desktopBgColor = useTransform(bgOpacity, (opacity) => 
    theme === 'dark' ? `rgba(15, 15, 15, ${opacity})` : `rgba(255, 255, 255, ${opacity})`
  );

  const borderOpacity = useTransform(smoothScrollY, scrollRange, [0, 0.05]);
  const desktopBorderColor = useTransform(borderOpacity, (opacity) => 
    theme === 'dark' ? `rgba(255, 255, 255, ${opacity * 1.5})` : `rgba(0, 0, 0, ${opacity})`
  );

  const desktopBackdropFilter = useTransform(smoothScrollY, scrollRange, ["blur(0px)", "blur(16px)"]);
  const desktopShadow = useTransform(smoothScrollY, scrollRange, [
    "0px 0px 0px rgba(0, 0, 0, 0)",
    theme === 'dark' 
      ? "0px 20px 50px rgba(0, 0, 0, 0.3), 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 0px 0px 1px rgba(255, 255, 255, 0.03)"
      : "0px 20px 50px rgba(0, 0, 0, 0.04), 0px 1px 1px rgba(0, 0, 0, 0.02), 0px 0px 0px 1px rgba(0, 0, 0, 0.03)"
  ]);

  // Mobile Scroll-Linked Interpolations
  const mobileWidth = useTransform(smoothScrollY, scrollRange, ["100%", "92%"]);
  const mobileY = useTransform(smoothScrollY, scrollRange, [0, 16]);
  const mobilePaddingLeft = useTransform(smoothScrollY, scrollRange, ["24px", "16px"]);
  const mobilePaddingRight = useTransform(smoothScrollY, scrollRange, ["24px", "16px"]);
  const mobilePaddingY = useTransform(smoothScrollY, scrollRange, ["12px", "6px"]);
  const mobileBorderRadius = useTransform(smoothScrollY, scrollRange, ["0px", "9999px"]);

  const mobileBgColor = useTransform(bgOpacity, (opacity) => 
    theme === 'dark' ? `rgba(15, 15, 15, ${opacity})` : `rgba(255, 255, 255, ${opacity})`
  );

  const mobileBorderColor = useTransform(borderOpacity, (opacity) => 
    theme === 'dark' ? `rgba(255, 255, 255, ${opacity * 1.5})` : `rgba(0, 0, 0, ${opacity})`
  );

  const mobileBackdropFilter = useTransform(smoothScrollY, scrollRange, ["blur(0px)", "blur(16px)"]);
  const mobileShadow = useTransform(smoothScrollY, scrollRange, [
    "0px 0px 0px rgba(0, 0, 0, 0)",
    theme === 'dark'
      ? "0px 20px 40px rgba(0, 0, 0, 0.3), 0px 1px 1px rgba(0, 0, 0, 0.2)"
      : "0px 20px 40px rgba(0, 0, 0, 0.04), 0px 1px 1px rgba(0, 0, 0, 0.02)"
  ]);

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full pointer-events-none">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex w-full justify-center">
        <motion.header
          style={{
            width: desktopWidth,
            y: desktopY,
            paddingLeft: desktopPaddingLeft,
            paddingRight: desktopPaddingRight,
            paddingTop: desktopPaddingY,
            paddingBottom: desktopPaddingY,
            borderRadius: desktopBorderRadius,
            backgroundColor: desktopBgColor,
            borderColor: desktopBorderColor,
            backdropFilter: desktopBackdropFilter,
            boxShadow: desktopShadow,
            minWidth: "680px",
          }}
          className="pointer-events-auto flex items-center justify-between border transition-colors duration-300 max-w-7xl mx-auto"
        >
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="font-outfit font-black text-lg tracking-tighter text-[#111111] dark:text-[#FAF9F6] flex items-center gap-1"
          >
            <AsciiGlitchRipple as="span" dur={800} spread={0.6}>HB</AsciiGlitchRipple>
            <span className="text-[#FF5A36] font-bold">.</span>
          </Link>

          {/* Nav Items with Hover effect */}
          <div 
            onMouseLeave={() => setHovered(null)}
            className="flex items-center space-x-1 text-[11px] font-outfit font-extrabold uppercase tracking-widest text-neutral-400 dark:text-neutral-500"
          >
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path || 
                (link.path.startsWith('/#') && location.pathname === '/' && location.hash === link.path.substring(1));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => {
                    if (link.path.startsWith('/#')) {
                      const id = link.path.substring(2);
                      if (location.pathname === '/') {
                        e.preventDefault();
                        const element = document.getElementById(id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }
                  }}
                  onMouseEnter={() => setHovered(idx)}
                  className={`relative px-4 py-2 rounded-full transition-colors duration-300 ${
                    isActive ? 'text-[#111111] dark:text-[#FAF9F6]' : 'hover:text-[#111111] dark:hover:text-[#FAF9F6]'
                  }`}
                >
                  {hovered === idx && (
                    <motion.div
                      layoutId="nav-hover-bg"
                      className="absolute inset-0 h-full w-full rounded-full bg-black/5 dark:bg-white/5"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]" />
                    )}
                    <AsciiGlitchRipple as="span" dur={600} spread={0.8}>{link.name}</AsciiGlitchRipple>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <AnimatedThemeToggler variant="star" duration={700} />
            <Link 
              to="/contact"
              className="px-4 py-2 bg-[#111111] dark:bg-[#FAF9F6] text-white dark:text-[#111111] text-[10px] font-outfit uppercase tracking-wider font-extrabold rounded-full hover:bg-[#FF5A36] dark:hover:bg-[#FF5A36] dark:hover:text-white transition-colors duration-300"
            >
              Let's Talk
            </Link>
          </div>
        </motion.header>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden w-full justify-center">
        <motion.header
          style={{
            width: mobileWidth,
            y: mobileY,
            paddingLeft: mobilePaddingLeft,
            paddingRight: mobilePaddingRight,
            paddingTop: mobilePaddingY,
            paddingBottom: mobilePaddingY,
            borderRadius: mobileBorderRadius,
            backgroundColor: mobileBgColor,
            borderColor: mobileBorderColor,
            backdropFilter: mobileBackdropFilter,
            boxShadow: mobileShadow,
          }}
          className="pointer-events-auto flex items-center justify-between border transition-all duration-300"
        >
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="font-outfit font-black text-base tracking-tighter text-[#111111] dark:text-[#FAF9F6] flex items-center gap-0.5"
          >
            <AsciiGlitchRipple as="span" dur={800} spread={0.6}>HB</AsciiGlitchRipple>
            <span className="text-[#FF5A36] font-bold">.</span>
          </Link>

          {/* Action Toggle Button */}
          <div className="flex items-center gap-2">
            <AnimatedThemeToggler variant="star" duration={700} />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X size={18} className="text-[#111111] dark:text-[#FAF9F6]" />
              ) : (
                <Menu size={18} className="text-[#111111] dark:text-[#FAF9F6]" />
              )}
            </button>
          </div>

          {/* Drawer Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-x-0 top-[110%] z-50 flex w-full flex-col items-start justify-start gap-3 rounded-3xl bg-white/95 dark:bg-[#111111]/95 backdrop-blur-2xl px-6 py-8 shadow-[0_25px_60px_rgba(0,_0,_0,_0.08)] dark:shadow-[0_25px_60px_rgba(0,_0,_0,_0.4)] border border-black/5 dark:border-white/5"
              >
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path || 
                    (link.path.startsWith('/#') && location.pathname === '/' && location.hash === link.path.substring(1));
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        if (link.path.startsWith('/#')) {
                          const id = link.path.substring(2);
                          if (location.pathname === '/') {
                            e.preventDefault();
                            const element = document.getElementById(id);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }
                      }}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-outfit uppercase tracking-widest font-extrabold flex items-center gap-2 transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#111111] dark:bg-[#FAF9F6] text-white dark:text-[#111111]' 
                          : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]" />}
                      {link.name}
                    </Link>
                  );
                })}
                <div className="w-full h-[1px] bg-black/5 dark:bg-white/5 my-2"></div>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-3 bg-[#FF5A36] text-white rounded-xl text-xs font-outfit uppercase tracking-widest font-extrabold hover:bg-black transition-colors duration-300"
                >
                  Let's Talk
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </div>
    </div>
  );
};

export default Navbar;

