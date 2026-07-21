import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WEB_DEVELOPMENT_WORKS } from '../data/projects';
import { ExternalLink, Github, Code2, Sparkles, Monitor, Cpu } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../components/ScrollReveal';
import { ImageWithSkeleton } from '../components/ui/ImageWithSkeleton';

const WebDevelopment: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'React', 'Full Stack', 'Frontend'];

  const filteredProjects = filter === 'All' 
    ? WEB_DEVELOPMENT_WORKS 
    : WEB_DEVELOPMENT_WORKS.filter(p => p.tools.includes(filter) || p.role === filter);

  return (
    <div className="pb-40 bg-[#FAF9F6] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#FAF9F6] transition-colors duration-500 selection:bg-black selection:text-white dark:selection:bg-[#FAF9F6] dark:selection:text-black min-h-screen relative overflow-hidden font-inter">
      <Helmet>
        <title>Web Development | Portfolio Catalog</title>
        <meta name="description" content="Browse high-fidelity web production systems, interactive layouts, and full stack web engineering by Harsha Bacham." />
        <meta property="og:title" content="Web Development | Portfolio Catalog" />
        <meta property="og:description" content="Browse high-fidelity web production systems, interactive layouts, and full stack web engineering by Harsha Bacham." />
      </Helmet>
      
      {/* Background Grid & Dots */}
      <div className="absolute inset-0 bg-dots opacity-[0.35] pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.08] pointer-events-none z-0"></div>
      
      {/* Soft pastel accent orb */}
      <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-[#FF5A36]/[0.02] rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10">
        
        {/* Page Header */}
        <ScrollReveal direction="up" delay={50}>
          <header className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-black/[0.04] dark:border-white/[0.06] pb-16">
            <div className="max-w-3xl space-y-5">
              <div className="flex items-center gap-3 text-neutral-400 text-[9px] font-mono uppercase tracking-[0.25em] font-bold">
                <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-800"></span> 02 // WEB CREATIONS
              </div>
              <h1 className="text-5xl md:text-[6.5vw] font-outfit font-extrabold tracking-tighter leading-[0.88] uppercase text-neutral-900 dark:text-neutral-50">
                WEB <span className="font-signature font-normal text-[#FF6A00] tracking-normal text-[6.5vw] md:text-[7vw] normal-case">production</span>
              </h1>
              <p className="font-outfit text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-2xl">
                Engineering responsive client portals and high-performance React architectures with perfect typographic ratios.
              </p>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-1 bg-neutral-100 dark:bg-neutral-900 p-1.5 rounded-2xl border border-black/5 dark:border-white/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-xl text-[9px] font-mono uppercase tracking-widest transition-all duration-300 ${
                    filter === cat 
                      ? 'bg-white dark:bg-neutral-800 text-black dark:text-white font-bold shadow-sm' 
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </header>
        </ScrollReveal>

        {/* Project Stream */}
        <div className="space-y-36">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  key={project.id} 
                  className="group relative"
                >
                  {/* Subtle Top Divider */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-black/[0.04] dark:bg-white/[0.06]"></div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16">
                    
                    {/* Project Specifications */}
                    <div className={`lg:col-span-5 space-y-8 ${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-[8px] text-[#FF5A36] font-bold uppercase tracking-widest">
                            PLATE // 0{index + 1}
                          </span>
                          <div className="h-[1px] w-8 bg-neutral-200 dark:bg-neutral-800"></div>
                          <span className="text-neutral-400 dark:text-neutral-500 font-mono text-[8px] uppercase tracking-widest font-bold">{project.role}</span>
                        </div>
                        
                        <h2 className="text-3xl font-outfit font-extrabold uppercase tracking-tight text-neutral-900 dark:text-[#FAF9F6] group-hover:text-[#FF5A36] transition-colors duration-500">
                          {project.title}
                        </h2>
                        
                        <p className="font-instrument text-xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed italic">
                          {project.description}
                        </p>
                      </div>

                      {/* Stack System */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-neutral-400 text-[8px] font-mono uppercase tracking-widest font-bold">
                          <Code2 size={11} className="text-[#FF5A36]" /> SYSTEM ARCHITECTURE
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map(tech => (
                            <span key={tech} className="bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 px-3 py-1.5 rounded-lg text-[9px] font-mono border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 hover:text-black dark:hover:text-white transition-all shadow-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Telemetry diagnostics */}
                      <div className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.01)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
                        <div className="flex items-center gap-2 text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest font-bold">
                          <Cpu size={12} className="text-[#FF5A36]" />
                          <span>SSL SECURE</span>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest font-bold">
                          <Sparkles size={12} className="text-[#FF5A36]" />
                          <span>UI PERFECT</span>
                        </div>
                      </div>

                      {/* Call to Actions */}
                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center px-5 py-3 bg-neutral-900 dark:bg-neutral-800 text-white rounded-xl font-outfit font-bold hover:bg-[#FF5A36] dark:hover:bg-[#FF5A36] transition-all text-[9px] uppercase tracking-wider shadow-md shadow-black/10"
                          >
                            Browse Production <ExternalLink size={12} className="ml-1.5" />
                          </a>
                        )}
                        {project.github && project.github !== '#' && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center px-5 py-3 bg-white dark:bg-neutral-900 text-[#111111] dark:text-white rounded-xl font-outfit font-bold hover:border-black/20 dark:hover:border-white/20 border border-black/5 dark:border-white/10 transition-all text-[9px] uppercase tracking-wider shadow-sm"
                          >
                            Source Code <Github size={12} className="ml-1.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Screenshot Browser mockup frame */}
                    <div className={`lg:col-span-7 ${isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
                      <div className="relative group/mockup cursor-pointer">
                        
                        {/* Soft background shadow highlight */}
                        <div className="absolute -inset-6 bg-[#FF5A36]/[0.012] rounded-[2.5rem] blur-3xl opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-1000"></div>

                        <div className="relative bg-[#ffffff] dark:bg-neutral-950 rounded-[2rem] border border-black/5 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover/mockup:-translate-y-1.5 group-hover/mockup:border-black/10 dark:group-hover/mockup:border-white/20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                          
                          {/* Browser bar */}
                          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3.5 flex items-center justify-between border-b border-black/[0.04] dark:border-white/[0.06]">
                            <div className="flex gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-neutral-200 dark:bg-neutral-800"></span>
                              <span className="w-2 h-2 rounded-full bg-neutral-200 dark:bg-neutral-800"></span>
                              <span className="w-2 h-2 rounded-full bg-neutral-200 dark:bg-neutral-800"></span>
                            </div>
                            
                            <div className="flex items-center gap-1.5 bg-neutral-200/30 dark:bg-neutral-800/30 px-5 py-1 rounded-lg text-[8px] font-mono text-neutral-400 dark:text-neutral-500 border border-black/5 dark:border-white/10 max-w-[240px] truncate select-none tracking-wider font-bold">
                              <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                              {project.link ? project.link.replace('https://', '') : 'harshabacham.dev'}
                            </div>
                            
                            <Monitor size={10} className="text-neutral-300 dark:text-neutral-600" />
                          </div>
                          
                          {/* App viewport area */}
                          <div className="aspect-[16/10] relative overflow-hidden bg-neutral-50 dark:bg-neutral-900">
                            <ImageWithSkeleton 
                              src={project.image} 
                              alt={project.title} 
                              aspectRatio="aspect-[16/10]"
                              className="w-full h-full object-cover object-top transition-all duration-[3s] ease-in-out group-hover/mockup:scale-[1.01]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent z-20 pointer-events-none"></div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Symmetrical CTA section */}
        <ScrollReveal direction="up" delay={50}>
          <section className="mt-48 text-center space-y-8 py-16 border-t border-black/[0.04] dark:border-white/[0.06]">
            <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block font-bold">WORK INTEGRATION</span>
            <h2 className="text-3xl font-outfit font-extrabold uppercase text-neutral-900 dark:text-white">
              Symmetrical <span className="font-instrument italic font-light text-neutral-400 dark:text-neutral-500 normal-case">production lines</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto text-xs leading-relaxed font-light">
              We translate abstract concepts into production-grade systems. Let us construct something exceptional together.
            </p>
            <div className="pt-4">
              <a 
                href="#/contact" 
                className="px-6 py-3.5 bg-neutral-900 dark:bg-neutral-800 text-white font-outfit font-bold uppercase text-[9px] tracking-wider rounded-xl hover:bg-[#FF5A36] dark:hover:bg-[#FF5A36] transition-all shadow-md shadow-black/10"
              >
                Initiate Inquiry Protocol
              </a>
            </div>
          </section>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default WebDevelopment;
