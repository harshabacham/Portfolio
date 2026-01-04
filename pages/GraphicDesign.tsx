
import React, { useState, useEffect } from 'react';
import { GRAPHIC_DESIGN_WORKS } from '../data/projects';
import { X, Maximize2 } from 'lucide-react';

const GraphicDesign: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Premium easing function for ultra-smooth transitions
  const premiumEase = "transition-all duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)]";

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-white selection:text-black">
      {/* Dynamic Header Section */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-40 pb-24">
        <header className={`flex flex-col md:flex-row items-baseline justify-between gap-12 border-b border-white/5 pb-16 transform transition-all duration-1000 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-bold">
              <span className="w-8 h-[1px] bg-zinc-800"></span> Works / 01
            </div>
            <h1 className="text-7xl md:text-[8vw] font-bold tracking-tighter leading-[0.75] text-white">
              VISUAL <br />
              <span className="serif italic font-normal text-zinc-400">Expression.</span>
            </h1>
          </div>
          <div className="max-w-sm">
            <p className="text-lg text-zinc-500 font-light leading-relaxed italic serif">
              "Design is the bridge between functionality and emotion." I focus on creating visual stories that resonate deeply and endure.
            </p>
          </div>
        </header>
      </div>

      {/* Advanced Masonry Grid */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pb-64">
        <div className={`columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8 transition-all duration-1000 delay-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          {GRAPHIC_DESIGN_WORKS.map((work, index) => (
            <div 
              key={work.id} 
              className={`break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 
                ${premiumEase} 
                hover:scale-[1.02] 
                hover:border-white/20 
                hover:shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_25px_rgba(255,255,255,0.04)]
                z-0 hover:z-10`} 
              onClick={() => setSelectedImage(work.image)}
              style={{ transitionDelay: `${index * 20}ms` }}
            >
              {/* Image Layer - Optimized for 100% Color Originality */}
              <div className="relative overflow-hidden aspect-auto rounded-2xl">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  loading="lazy"
                  className={`w-full h-auto object-cover ${premiumEase} group-hover:scale-[1.04] opacity-100 block`}
                />
                
                {/* Interaction Indicator - Minimal and non-obtrusive */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center pointer-events-none">
                  <div className="p-5 bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 transform scale-50 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-2xl">
                    <Maximize2 size={24} className="text-white" />
                  </div>
                </div>

                {/* Internal Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_0_40px_rgba(255,255,255,0.03)]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Immersive Lightbox Experience */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out animate-in fade-in duration-500"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button className="fixed top-8 right-8 z-[110] p-4 text-white/40 hover:text-white transition-all hover:scale-110 hover:rotate-90">
            <X size={36} strokeWidth={1} />
          </button>
          
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Detailed View" 
              className="max-w-full max-h-full object-contain rounded-sm animate-in zoom-in-95 duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_100px_rgba(0,0,0,1)]"
            />
          </div>
        </div>
      )}

      {/* Minimal Footer */}
      <div className="max-w-[1600px] mx-auto px-12 py-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em]">
        <span className="hover:text-zinc-400 transition-colors cursor-default">© PORTFOLIO ARCHIVE 2025</span>
        <div className="flex gap-10">
          <span className="hover:text-white cursor-pointer transition-all hover:-translate-y-0.5">Instagram</span>
          <span className="hover:text-white cursor-pointer transition-all hover:-translate-y-0.5">Behance</span>
          <span className="hover:text-white cursor-pointer transition-all hover:-translate-y-0.5">Linkedin</span>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
