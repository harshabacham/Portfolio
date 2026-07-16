import React, { useState, useEffect } from 'react';
import { GRAPHIC_DESIGN_WORKS } from '../data/projects';
import { X, Maximize2, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ScrollReveal from '../components/ScrollReveal';

const GraphicDesign: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="pb-40 bg-[#FAF9F6] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#FAF9F6] transition-colors duration-500 selection:bg-black selection:text-white dark:selection:bg-[#FAF9F6] dark:selection:text-black min-h-screen relative overflow-hidden font-inter">
      
      {/* Background Grid & Dots */}
      <div className="absolute inset-0 bg-dots opacity-[0.35] pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.08] pointer-events-none z-0"></div>
      
      {/* Accent soft Clay orb */}
      <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#FF5A36]/[0.02] rounded-full blur-[150px] pointer-events-none animate-bounce-slow"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-32 pb-16 relative z-10">
        
        {/* Page Header */}
        <ScrollReveal direction="up" delay={50}>
          <header className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-black/[0.04] dark:border-white/[0.06] pb-16">
            <div className="max-w-3xl space-y-5">
              <div className="flex items-center gap-3 text-neutral-400 text-[9px] font-mono uppercase tracking-[0.25em] font-bold">
                <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-800"></span> 04 // GRAPHIC GALLERY
              </div>
              <h1 className="text-5xl md:text-[6.5vw] font-outfit font-extrabold tracking-tighter leading-[0.88] uppercase text-neutral-900 dark:text-neutral-50">
                VISUAL <span className="font-signature font-normal text-[#FF6A00] tracking-normal text-[6.5vw] md:text-[7vw] normal-case">composition</span>
              </h1>
              <p className="font-outfit text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-2xl">
                Form, symmetry, and typography paired to express powerful brand concepts and visual statements.
              </p>
            </div>
            
            {/* Catalog Info Badge */}
            <div className="flex items-center gap-3 px-4 py-2.5 bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 rounded-2xl lg:mb-2 text-neutral-500 dark:text-neutral-400 shadow-sm">
              <SlidersHorizontal size={13} className="text-[#FF5A36]" />
              <span className="text-[9px] font-mono uppercase tracking-widest font-bold">{GRAPHIC_DESIGN_WORKS.length} SPECIMEN PLATES</span>
            </div>
          </header>
        </ScrollReveal>

        {/* Pinterest Style Masonry Grid */}
        <div className={`columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8 transition-all duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          {GRAPHIC_DESIGN_WORKS.map((work, index) => (
            <div 
              key={work.id} 
              onClick={() => setSelectedImage(work.image)}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-[2rem] bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 p-2 transition-all duration-500 hover:scale-[1.01] hover:border-black/10 dark:hover:border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  loading="lazy"
                  className="w-full h-auto object-cover transition-all duration-[1s] group-hover:scale-[1.015] opacity-100 block"
                />
                
                {/* Floating details overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-10">
                  
                  <div className="space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[8px] font-mono text-[#FF5A36] font-bold uppercase tracking-widest block">
                      PLATE // 0{index + 1}
                    </span>
                    <h3 className="text-base font-outfit font-extrabold uppercase text-white leading-tight tracking-wide">
                      {work.title}
                    </h3>
                    <p className="font-instrument text-xs text-neutral-300 italic">
                      {work.medium}
                    </p>
                  </div>

                  {/* Zoom Badge */}
                  <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Maximize2 size={12} className="text-white" />
                  </div>
                </div>

                {/* Aesthetic Corner Guidemarks */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20 opacity-0 group-hover:opacity-100 transition-all"></div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#FAF9F6]/98 dark:bg-[#0A0A0C]/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button className="fixed top-8 right-8 z-[110] p-4 text-neutral-400 hover:text-black dark:hover:text-white transition-all hover:scale-110">
              <X size={28} strokeWidth={1.5} />
            </button>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img 
                src={selectedImage} 
                alt="High-fidelity visual composition detailed preview" 
                className="max-w-full max-h-full object-contain rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.06)] border border-black/5 dark:border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Row */}
      <div className="max-w-[1600px] mx-auto px-12 py-24 border-t border-black/[0.04] dark:border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-8 text-neutral-400 font-mono text-[9px] uppercase tracking-[0.4em] relative z-10 font-bold">
        <span>© HARSHA BACHAM GRAPHIC ARCHIVES</span>
        <div className="flex gap-10">
          <a href="https://github.com/harshabacham" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/harsha-bacham" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>

    </div>
  );
};

export default GraphicDesign;
