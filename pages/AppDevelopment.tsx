import React from 'react';
import { APP_DEVELOPMENT_WORKS } from '../data/projects';
import { Smartphone, CheckCircle2, PlayCircle, Layers, ShieldCheck, Cpu } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const AppDevelopment: React.FC = () => {
  return (
    <div className="pb-40 bg-[#FAF9F6] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#FAF9F6] transition-colors duration-500 selection:bg-black selection:text-white dark:selection:bg-[#FAF9F6] dark:selection:text-black min-h-screen relative overflow-hidden font-inter">
      
      {/* Background Grid & Dots */}
      <div className="absolute inset-0 bg-dots opacity-[0.35] pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.08] pointer-events-none z-0"></div>
      
      {/* Ambient background accent */}
      <div className="absolute top-[15%] left-[20%] w-[600px] h-[600px] bg-[#FF5A36]/[0.025] rounded-full blur-[160px] pointer-events-none animate-bounce-slow"></div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10">
        
        {/* Page Header */}
        <ScrollReveal direction="up" delay={50}>
          <header className="mb-24 border-b border-black/[0.04] dark:border-white/[0.06] pb-16">
            <div className="max-w-3xl space-y-5">
              <div className="flex items-center gap-3 text-neutral-400 text-[9px] font-mono uppercase tracking-[0.25em] font-bold">
                <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-800"></span> 03 // NATIVE SYSTEMS
              </div>
              <h1 className="text-5xl md:text-[6.5vw] font-outfit font-extrabold tracking-tighter leading-[0.88] uppercase text-neutral-900 dark:text-neutral-50">
                MOBILE <span className="font-signature font-normal text-[#FF6A00] tracking-normal text-[6.5vw] md:text-[7vw] normal-case">architectures</span>
              </h1>
              <p className="font-outfit text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-2xl">
                Engineering fluid mobile experiences, modular canvases, and robust Dart & Kotlin systems.
              </p>
            </div>
          </header>
        </ScrollReveal>

        {/* Apps Stream */}
        <div className="space-y-36">
          {APP_DEVELOPMENT_WORKS.map((app, index) => {
            const isEven = index % 2 === 0;
            return (
              <ScrollReveal key={app.id} direction="up" delay={50} className="group relative">
                
                {/* Horizontal Segment line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-black/[0.04] dark:bg-white/[0.06]"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center pt-16">
                  
                  {/* Phone Mockup Section */}
                  <div className={`lg:col-span-5 ${isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                    <div className="relative mx-auto max-w-[280px]">
                      
                      {/* Glow Behind Phone */}
                      <div className="absolute -inset-10 bg-[#FF5A36]/[0.015] rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                      
                      {/* Device Container - Apple Style Off-White Device */}
                      <div className="relative bg-white dark:bg-neutral-900 rounded-[3rem] p-3 border border-black/5 dark:border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.04)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden aspect-[9/18.5] transition-all duration-700 group-hover:-translate-y-1.5 group-hover:border-black/10 dark:group-hover:border-white/20">
                        <img 
                          src={app.image} 
                          alt={app.title} 
                          className="w-full h-full object-cover rounded-[2.5rem] opacity-100 transition-all duration-700"
                        />
                        {/* Elegant reflection shine */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.1] via-transparent to-transparent pointer-events-none"></div>
                        
                        {/* Elegant Minimal Notch */}
                        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-900 rounded-full flex items-center justify-center border border-white/5 z-20 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36] animate-pulse"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`lg:col-span-7 space-y-8 ${isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[8px] text-[#FF5A36] font-bold uppercase tracking-widest">
                          PLATE // 0{index + 1}
                        </span>
                        <div className="h-[1px] w-8 bg-neutral-200 dark:bg-neutral-800"></div>
                        <span className="text-neutral-400 dark:text-neutral-500 font-mono text-[8px] uppercase tracking-widest font-bold">{app.platform}</span>
                      </div>
                      
                      <h2 className="text-3xl font-outfit font-extrabold uppercase tracking-tight text-neutral-900 dark:text-[#FAF9F6] group-hover:text-[#FF5A36] transition-colors duration-500">
                        {app.title}
                      </h2>
                      
                      <p className="font-instrument text-xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed italic">
                        {app.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                      {/* Features Column */}
                      <div className="space-y-4">
                        <h3 className="text-neutral-400 text-[8px] font-mono uppercase tracking-widest flex items-center gap-2 font-bold">
                          <CheckCircle2 size={11} className="text-[#FF5A36]" /> CORE SPECS
                        </h3>
                        <ul className="space-y-2">
                          {app.features.map(feat => (
                            <li key={feat} className="text-neutral-500 dark:text-neutral-400 text-xs font-light flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]/50"></span> {feat}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tooling Column */}
                      <div className="space-y-4">
                        <h3 className="text-neutral-400 text-[8px] font-mono uppercase tracking-widest flex items-center gap-2 font-bold">
                          <Layers size={11} className="text-[#FF5A36]" /> ENGINE BUNDLES
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {app.tools.map(tool => (
                            <span key={tool} className="px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 text-[9px] font-mono text-neutral-500 dark:text-neutral-400 hover:border-black/10 dark:hover:border-white/20 hover:text-black dark:hover:text-white transition-all shadow-sm">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* App Diagnostic Stat Bar */}
                    <div className="flex flex-wrap gap-6 p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.01)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] max-w-xl">
                      <div className="flex items-center gap-2 text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest font-bold">
                        <Cpu size={12} className="text-[#FF5A36]/70" />
                        <span>NATIVE SYSTEM BIND</span>
                      </div>
                      <div className="flex items-center gap-2 text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest font-bold">
                        <ShieldCheck size={12} className="text-[#FF5A36]/70" />
                        <span>SANDBOX PRIVACY SAFE</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      {app.link && app.link !== '#' ? (
                        <a 
                          href={app.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-5 py-3 bg-neutral-900 dark:bg-neutral-800 text-white hover:bg-[#FF5A36] dark:hover:bg-[#FF5A36] transition-all shadow-md shadow-black/10"
                        >
                          Install Package <PlayCircle size={12} className="ml-1.5" />
                        </a>
                      ) : (
                        <div className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 font-bold uppercase tracking-widest bg-white dark:bg-neutral-900 px-4 py-2 border border-black/5 dark:border-white/10 rounded-lg w-fit shadow-sm">
                          INTERNAL PROTOTYPE RELEASE
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default AppDevelopment;
