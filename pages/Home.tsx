import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, Globe, Smartphone, Sparkles, Code, Cpu, 
  Mail, ArrowUpRight, Terminal, Clock, Laptop, Star
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { ShinyButton } from '../components/ui/ShinyButton';
import { InteractiveGridBackground } from '../components/ui/InteractiveGridBackground';
import { BorderBeam } from '../components/ui/BorderBeam';
import { AsciiGlitchRipple } from '../components/ui/ascii-glitch-ripple';
import { CylinderCarousel } from '../components/ui/cylinder-carousel';
import { GRAPHIC_DESIGN_WORKS } from '../data/projects';
import CurvedLoop from '../components/CurvedLoop';
import { Skiper28 } from '../components/v1/skiper28';

const Home: React.FC = () => {
  const [timeStr, setTimeStr] = useState('');

  // Clock Update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Framer Motion Animation Variants for the Main Typographic Headline
  const containerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.04,
        delayChildren: 0.15,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 180, damping: 14 },
    },
  };

  return (
    <div className="pb-40 min-h-screen bg-[#FAF9F6] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#FAF9F6] transition-colors duration-500 selection:bg-black selection:text-white relative overflow-hidden font-inter">
      
      {/* 21st.dev Interactive Grid Background with Cursor Tracking Spotlight */}
      <InteractiveGridBackground />
      
      {/* Pastel soft glowing layers */}
      <div className="absolute top-[5%] left-[5%] w-[600px] h-[600px] bg-[#FF6A00]/[0.02] rounded-full blur-[150px] pointer-events-none animate-bounce-slow"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[600px] h-[600px] bg-neutral-900/[0.015] rounded-full blur-[160px] pointer-events-none"></div>

      {/* Hero Block */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-16">
        <div className="space-y-16">
          
          {/* Main Title & Slogan Section */}
          <div className="relative">
            {/* 21st.dev Premium Interactive Slogan Badge with BorderBeam */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative group/badge cursor-pointer"
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/95 dark:bg-neutral-900/95 border border-black/[0.04] dark:border-white/[0.08] rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.01)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)] text-[10px] font-mono text-neutral-600 dark:text-neutral-400 transition-all duration-300 hover:scale-[1.01] hover:border-black/10 dark:hover:border-white/20 relative overflow-hidden">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6A00]"></span>
                  </span>
                  <span className="font-extrabold text-neutral-900 dark:text-neutral-100 tracking-wider">CRAFT // V2.0</span>
                  <span className="w-[1.5px] h-3 bg-black/10 dark:bg-white/15"></span>
                  <span className="tracking-wide text-neutral-500 dark:text-neutral-400 group-hover/badge:text-[#FF6A00] transition-colors duration-300">
                    EXPLORING INTUITIVE DESIGN SYSTEMS
                  </span>
                  <BorderBeam size={60} duration={5} colorFrom="#FF6A00" colorTo="#FF6A00" borderWidth={1} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 text-[9px] font-mono text-neutral-500 uppercase tracking-[0.2em]"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100/50 dark:bg-neutral-900/50 rounded-lg border border-black/[0.02] dark:border-white/[0.04]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-bold text-neutral-700 dark:text-neutral-300">ONLINE PROTOCOL ACTIVE</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 font-bold">
                  <Clock size={11} className="text-[#FF6A00]" />
                  <span>{timeStr || "00:00:00"} IST</span>
                </div>
              </motion.div>
            </div>
            
            {/* Massive Typographic Headline with Atmospheric Aura */}
            <div className="relative group/title select-none py-2">
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[350px] h-[150px] bg-gradient-to-r from-[#FF6A00]/[0.025] to-[#059669]/[0.015] rounded-full blur-[80px] pointer-events-none group-hover/title:scale-[1.15] transition-transform duration-1000" />
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                <h1 className="text-[11vw] md:text-[8vw] font-syne font-extrabold tracking-tighter leading-[0.80] uppercase relative flex flex-wrap items-baseline justify-center gap-x-4 md:gap-x-6">
                  <span className="inline-flex select-none">
                    {"HARSHA".split("").map((letter, i) => (
                       <motion.span
                         key={i}
                         variants={letterVariants}
                         className="inline-block text-[#FF6A00] transition-colors duration-200 cursor-pointer hover:text-neutral-950 dark:hover:text-white"
                         whileHover={{ 
                           y: -8,
                           scale: 1.05,
                           rotate: i % 2 === 0 ? 3 : -3,
                           transition: { type: "spring", stiffness: 400, damping: 10 }
                         }}
                       >
                         {letter}
                       </motion.span>
                    ))}
                  </span>
                  <span className="inline-flex select-none relative group/lastname ml-1 items-baseline">
                    {"BACHAM".split("").map((letter, i) => (
                      <motion.span
                        key={i}
                        variants={letterVariants}
                        className="inline-block text-[#FF6A00] transition-colors duration-200 cursor-pointer hover:text-neutral-950 dark:hover:text-white"
                        whileHover={{ 
                          y: -8,
                          scale: 1.05,
                          rotate: i % 2 === 0 ? 3 : -3,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF6A00] ml-2 md:ml-3 animate-pulse shadow-[0_0_12px_rgba(255,106,0,0.6)]" />
                  </span>
                </h1>
                
                 {/* Secondary architectural row / High-Tech Metadata strip */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-t border-black/[0.06] dark:border-white/[0.08] pt-6 mt-4">
                  <div className="md:col-span-5 flex items-center gap-3">
                    <AsciiGlitchRipple 
                      as="span" 
                      className="text-[4.5vw] sm:text-[2.2vw] md:text-[1.6vw] font-outfit font-black tracking-[0.06em] text-neutral-900 dark:text-neutral-100 uppercase"
                      dur={1000}
                      spread={0.8}
                    >
                      SYSTEM ARCHITECT
                    </AsciiGlitchRipple>
                    <span className="px-2 py-0.5 border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-[8px] font-mono font-extrabold rounded-md uppercase tracking-widest hidden sm:inline-block">
                      ACTIVES
                    </span>
                  </div>
                  <div className="md:col-span-7 flex flex-wrap items-center md:justify-end gap-2.5">
                    <span className="font-mono text-[9px] text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-[0.16em] border border-black/[0.04] dark:border-white/[0.08] rounded-lg px-3.5 py-1.5 bg-white dark:bg-neutral-900 shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
                      LATENCY OPTIMIZED
                    </span>
                    <span className="font-mono text-[9px] text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-[0.16em] border border-black/[0.04] dark:border-white/[0.08] rounded-lg px-3.5 py-1.5 bg-white dark:bg-neutral-900 shadow-sm flex items-center gap-1.5">
                      <Laptop size={11} className="text-[#FF6A00]" />
                      REACT • FLUTTER Cores
                    </span>
                    <span className="font-mono text-[9px] text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.16em] border border-black/[0.04] dark:border-white/[0.08] rounded-lg px-3.5 py-1.5 bg-neutral-100/40 dark:bg-neutral-900/40">
                      UTC +05:30
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Premium Redesigned Unified Showcase Card */}
          <div className="pt-8 relative w-full">
            <ScrollReveal direction="up" delay={150}>
              <SpotlightCard className="p-6 md:p-8 lg:p-10 relative group/portrait" glowColor="rgba(255, 106, 0, 0.04)">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                  
                  {/* Portrait Column */}
                  <div className="lg:col-span-4">
                    {/* Photo frame with rounded corners and scale feedback */}
                    <div data-cursor="view" className="relative aspect-square overflow-hidden rounded-[2rem] border border-black/[0.04] dark:border-white/[0.08] bg-neutral-50 dark:bg-neutral-900 shadow-[inset_0_2px_12px_rgba(0,0,0,0.02)] cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6A00]/5 via-transparent to-transparent opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-700 z-10"></div>
                      <img 
                        src="https://i.postimg.cc/BnT6wZJm/Whats-App-Image-2025-09-16-at-2-06-41-PM.jpg" 
                        alt="Harsha Bacham Portrait" 
                        className="w-full h-full object-cover brightness-[0.97] contrast-[1.02] group-hover/portrait:scale-[1.03] transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent z-10"></div>
                      
                      {/* Access code or badge on bottom corner */}
                      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
                        <div>
                          <span className="text-[7px] font-mono text-[#FF6A00] font-bold uppercase tracking-[0.25em] block mb-1">DESIGN & ENGINEERING</span>
                          <h4 className="text-sm font-extrabold font-syne uppercase tracking-wider text-white">Harsha Bacham</h4>
                        </div>
                        <span className="px-2 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white font-mono text-[7px] uppercase tracking-widest rounded-md">
                          SPEC.04
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content & Action Column */}
                  <div className="lg:col-span-8 flex flex-col justify-between py-1 space-y-8 lg:space-y-0">
                    
                    {/* Biography Header & Core Slogan */}
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <div className="text-[9px] font-mono text-neutral-400 uppercase tracking-[0.25em]">[ 01 // PROFESSIONAL SPECIMEN ]</div>
                        <Sparkles size={11} className="text-[#FF6A00] animate-pulse" />
                      </div>

                      <div className="space-y-4">
                        <p className="text-neutral-500 dark:text-neutral-400 text-xs md:text-sm leading-relaxed font-light max-w-3xl">
                          Harsha Bacham operates at the intersection of robust backend telemetry and pristine client-side execution. By pairing absolute modular standards with fluid micro-interactions, he elevates typical workspaces into masterpieces of modern engineering.
                        </p>
                      </div>

                      {/* Live Status Deck - Elegantly adapted as a horizontal strip */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 py-4 border-y border-black/[0.04] dark:border-white/[0.06] font-mono text-[9px] px-1">
                        <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500">
                          <span>[ REGION ]</span>
                          <span className="text-neutral-900 dark:text-neutral-100 font-bold uppercase tracking-wider">INDIA // EAST</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500">
                          <span>[ STATUS ]</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            ROUTING ACTIVE
                          </span>
                        </div>
                      </div>

                      {/* High-End Design Pillars Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-black/[0.04] dark:border-white/[0.06]">
                        
                        <div className="p-4 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/40 border border-black/[0.03] dark:border-white/[0.06] space-y-2 hover:border-black/[0.08] dark:hover:border-white/[0.12] hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300">
                          <div className="flex justify-between items-center text-[9px] font-mono text-neutral-400">
                            <span>[ 01 ]</span>
                            <span className="text-[#FF6A00] font-bold">CORE</span>
                          </div>
                          <AsciiGlitchRipple 
                            as="h4" 
                            className="text-[11px] font-bold font-outfit uppercase tracking-wider text-neutral-900 dark:text-[#FAF9F6]"
                            dur={800}
                            spread={0.7}
                          >
                            SYSTEM ARCHITECTURE
                          </AsciiGlitchRipple>
                          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                            Low-latency compiler pipelines, structured native schemas, and mathematically robust state graphs.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/40 border border-black/[0.03] dark:border-white/[0.06] space-y-2 hover:border-black/[0.08] dark:hover:border-white/[0.12] hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300">
                          <div className="flex justify-between items-center text-[9px] font-mono text-neutral-400">
                            <span>[ 02 ]</span>
                            <span className="text-[#FF6A00] font-bold">CRAFT</span>
                          </div>
                          <AsciiGlitchRipple 
                            as="h4" 
                            className="text-[11px] font-bold font-outfit uppercase tracking-wider text-neutral-900 dark:text-[#FAF9F6]"
                            dur={800}
                            spread={0.7}
                          >
                            VISUAL PRECISION
                          </AsciiGlitchRipple>
                          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                            Bespoke grid structures, Swiss typography scales, and responsive micro-animations.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/40 border border-black/[0.03] dark:border-white/[0.06] space-y-2 hover:border-black/[0.08] dark:hover:border-white/[0.12] hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300">
                          <div className="flex justify-between items-center text-[9px] font-mono text-neutral-400">
                            <span>[ 03 ]</span>
                            <span className="text-[#FF6A00] font-bold">UTILITY</span>
                          </div>
                          <AsciiGlitchRipple 
                            as="h4" 
                            className="text-[11px] font-bold font-outfit uppercase tracking-wider text-neutral-900 dark:text-[#FAF9F6]"
                            dur={800}
                            spread={0.7}
                          >
                            COGNITIVE FLOW
                          </AsciiGlitchRipple>
                          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                            Intelligent workspace flows, responsive tactile layouts, and lightweight memory profiles.
                          </p>
                        </div>

                      </div>
                    </div>

                    {/* Buttons Action Deck with ShinyButton Components */}
                    <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-black/[0.04] dark:border-white/[0.06]">
                      <Link to="/contact">
                        <ShinyButton>
                          Initiate Inquiry <ArrowUpRight size={13} className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </ShinyButton>
                      </Link>
                      <Link 
                        to="/projects" 
                        className="px-6 py-3.5 bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 text-[#111111] dark:text-[#FAF9F6] font-outfit font-bold rounded-xl hover:border-black/10 dark:hover:border-white/20 hover:bg-neutral-50 dark:hover:bg-neutral-850 transition-all duration-300 text-[10px] uppercase tracking-wider shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
                      >
                        Browse Creations
                      </Link>
                    </div>

                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Beautiful Curved Loop Section */}
      <section className="py-6 overflow-hidden z-20 relative w-full bg-transparent">
        <CurvedLoop 
          marqueeText="HIGH FIDELITY CODES ✦ PIXEL PERFECT LAYOUT ✦ MOBILE ARCHITECTURE ✦ FLUTTER CORES ✦ SYMMETRICAL BRANDING ✦ VECTOR GRAPHIC ART ✦ "
          speed={0.8}
          curveAmount={80}
          direction="left"
          interactive={true}
          className="fill-[#FF6A00] font-outfit font-medium tracking-[0.25em]"
        />
      </section>

      {/* Symmetrical Design Cylinder Carousel */}
      <section className="py-12 md:py-16 relative z-10 max-w-7xl mx-auto px-6 md:px-12 overflow-hidden">
        <ScrollReveal direction="up" delay={50}>
          <div className="text-center space-y-3 mb-6">
            <span className="text-[9px] font-mono text-[#FF5A36] uppercase tracking-[0.3em] font-bold">
              [ VISUAL SPECTRUM // ARCHIVAL PLATES ]
            </span>
            <h2 className="text-3xl md:text-5xl font-outfit font-extrabold tracking-tighter uppercase text-neutral-900 dark:text-neutral-50">
              DESIGN <span className="font-signature font-normal text-[#FF6A00] tracking-normal text-4xl md:text-5xl normal-case">showcase</span>
            </h2>
            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 font-light max-w-lg mx-auto">
              A dynamic circular projection of high-fidelity visual layouts, posters, and vector identities.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150}>
          <div className="relative py-2">
            <CylinderCarousel 
              images={GRAPHIC_DESIGN_WORKS.slice(0, 12).map(work => ({ src: work.image, alt: work.title }))}
              animationDuration={35}
              cardWidth={200}
              className="min-h-[340px] md:min-h-[380px]"
              cardClassName="border border-black/5 dark:border-white/10 shadow-lg dark:shadow-black/50"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mt-6">
            <Link 
              to="/graphic-design"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950 hover:bg-[#FF6A00] dark:hover:bg-[#FF6A00] hover:text-white dark:hover:text-white font-outfit font-bold rounded-xl transition-all duration-300 text-[10px] uppercase tracking-wider shadow-sm hover:scale-[1.02]"
            >
              Explore Full Gallery <ArrowRight size={12} />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* 3D Perspective Text Scroll Component section */}
      <section className="relative z-10 w-full overflow-hidden bg-transparent">
        <ScrollReveal direction="up" delay={50}>
          <Skiper28 
            title="3D PERSPECTIVE TEXT SCROLL"
            subtitle="Interactive spatial text rendering engine driven by client-side scroll mechanics"
          />
        </ScrollReveal>
      </section>

      {/* Beautiful Editorial Quote Section */}
      <section className="py-24 max-w-4xl mx-auto px-6 relative">
        <ScrollReveal direction="up" delay={50}>
          <div className="relative overflow-hidden rounded-3xl border border-black/[0.05] dark:border-white/[0.05] bg-white/[0.2] dark:bg-black/[0.2] backdrop-blur-md p-8 md:p-16 text-center group">
            
            {/* 21st.dev style subtle interactive background effect */}
            <div className="absolute inset-0 bg-dots opacity-35 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#FF6A00]/[0.02] dark:bg-[#FF6A00]/[0.03] blur-[80px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            
            {/* Small corner decorative crosses */}
            <div className="absolute top-3 left-3 text-[10px] font-mono text-neutral-300 dark:text-neutral-700 pointer-events-none select-none">+</div>
            <div className="absolute top-3 right-3 text-[10px] font-mono text-neutral-300 dark:text-neutral-700 pointer-events-none select-none">+</div>
            <div className="absolute bottom-3 left-3 text-[10px] font-mono text-neutral-300 dark:text-neutral-700 pointer-events-none select-none">+</div>
            <div className="absolute bottom-3 right-3 text-[10px] font-mono text-neutral-300 dark:text-neutral-700 pointer-events-none select-none">+</div>

            {/* Elegant Manifesto Badge */}
            <div className="relative z-10 inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 rounded-full text-[9px] font-mono tracking-widest text-[#FF6A00] uppercase mb-8 shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF6A00]"></span>
              </span>
              DESIGN PHILOSOPHY
            </div>

            {/* Quote with gorgeous Space Grotesk / high contrast modern font */}
            <p id="philosophy-quote" className="font-space text-neutral-700 dark:text-neutral-200 text-xl md:text-2xl lg:text-3xl font-light tracking-tight leading-relaxed max-w-2xl mx-auto z-10 relative">
              "Design is not decoration. We architect <span className="text-neutral-950 dark:text-white font-medium underline decoration-[#FF6A00]/50 decoration-2 underline-offset-4">logical systems</span>, pair <span className="text-neutral-950 dark:text-white font-medium underline decoration-[#FF6A00]/50 decoration-2 underline-offset-4">clean layouts</span>, and orchestrate <span className="text-neutral-950 dark:text-white font-medium underline decoration-[#FF6A00]/50 decoration-2 underline-offset-4">robust technologies</span> into pristine digital artifacts."
            </p>

            {/* Author inside the card */}
            <div className="mt-8 pt-6 border-t border-black/[0.04] dark:border-white/[0.04] flex flex-col sm:flex-row items-center justify-center gap-2 z-10 relative">
              <div className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em] font-bold">
                — HARSHA BACHAM PORTFOLIO
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};

export default Home;
