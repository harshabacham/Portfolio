import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  WEB_DEVELOPMENT_WORKS, 
  APP_DEVELOPMENT_WORKS, 
  GRAPHIC_DESIGN_WORKS 
} from '../data/projects';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  ExternalLink, 
  Github, 
  X, 
  Search, 
  SlidersHorizontal,
  ArrowUpRight,
  Maximize2
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { InteractiveGridBackground } from '../components/ui/InteractiveGridBackground';

// Dynamic background gradients for web projects to match the requested premium style
const WEB_BACKGROUND_GRADIENTS: Record<string, string> = {
  'web-2': 'from-[#0F172A] via-[#1E1B4B] to-[#311042]', // Grotesque Studio (Dark futuristic WebGL)
  'web-3': 'from-[#FDF2F8] via-[#FCE7F3] to-[#FBCFE8]', // Nalanda Foundation (Warm premium pink)
  'web-4': 'from-[#ECFDF5] via-[#D1FAE5] to-[#A7F3D0]', // IPC Debugger (Fresh green/cyan dev tool)
  'web-5': 'from-[#FFF7ED] via-[#FFEDD5] to-[#FED7AA]', // Bacham Email Bot (Coral/orange assistant)
  'web-6': 'from-[#F5F3FF] via-[#EDE9FE] to-[#DDD6FE]', // Chess Online (Lavender premium game)
  'web-7': 'from-[#FFF1F2] via-[#FFE4E6] to-[#FECDD3]', // LPU ALFA (Reddish/rose slate portal)
  'web-8': 'from-[#EFF6FF] via-[#DBEAFE] to-[#BFDBFE]', // Ratan Tata Innovation Hub (Electric blue innovation)
  'web-9': 'from-[#FAF5FF] via-[#F3E8FF] to-[#E9D5FF]', // Nawaf Edits (Violet creative space)
  'web-10': 'from-[#ECFEFF] via-[#CFFAFE] to-[#A5F3FC]', // Auraa PDF (Cyan/teal productivity)
};

// macOS Traffic Lights Header for Browser Mockups
const BrowserHeader: React.FC = () => (
  <div className="flex items-center gap-1.5 px-4 py-3 bg-black/10 border-b border-white/[0.05]">
    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-80" />
    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-80" />
    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-80" />
  </div>
);

// Unified high-fidelity browser mockup wrapper for web projects
interface WebMockupProps {
  image: string;
  title: string;
  url: string;
  gradientClass?: string;
}

const WebMockup: React.FC<WebMockupProps> = ({ image, title, url, gradientClass }) => {
  const finalGradient = gradientClass || 'from-[#EEF2F6] to-[#DFE5EB]';
  return (
    <div className={`w-full aspect-[4/3] bg-gradient-to-tr ${finalGradient} rounded-[2rem] p-6 sm:p-10 flex items-center justify-center relative group overflow-hidden shadow-inner`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
      {/* Light/Dark Browser container depending on project vibe */}
      <div className="w-full max-w-[92%] bg-[#0F0F11] rounded-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden transform group-hover:scale-[1.015] transition-transform duration-700 ease-out">
        <BrowserHeader />
        <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden">
          <img 
            src={image} 
            alt={`${title} Preview`}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover object-top opacity-100 transition-opacity duration-500"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/[0.04] pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'websites' | 'apps' | 'designs'>('websites');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Filter design posters if design tab is active
  const filteredDesigns = GRAPHIC_DESIGN_WORKS.filter((design) =>
    design.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-40 bg-[#FAF9F6] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#FAF9F6] transition-colors duration-500 selection:bg-black selection:text-white dark:selection:bg-[#FAF9F6] dark:selection:text-black min-h-screen relative overflow-hidden font-inter">
      {/* 21st.dev Interactive Grid Background with Cursor Tracking Spotlight */}
      <InteractiveGridBackground />
      
      {/* Soft color decorative orbs */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#FF5A36]/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[600px] h-[600px] bg-[#059669]/[0.015] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-32 relative z-10">
        {/* Header Section */}
        <ScrollReveal direction="up" delay={50}>
          <header className="mb-16 flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-neutral-400 text-[10px] font-mono uppercase tracking-[0.25em] font-extrabold">
              <span className="w-6 h-[1px] bg-neutral-300 dark:bg-neutral-800"></span> SPECIMEN ARCHIVE
            </div>
            <h1 className="text-4xl md:text-6xl font-outfit font-extrabold tracking-tight uppercase text-neutral-900 dark:text-neutral-50">
              My <span className="font-signature font-normal text-[#FF6A00] tracking-normal text-5xl md:text-7xl normal-case">projects</span>
            </h1>
            <p className="text-neutral-500 dark:text-neutral-400 font-sans text-sm md:text-base font-light leading-relaxed">
              An exhaustive archive of high-performance web products, modular smartphone architectures, and creative visual designs.
            </p>
          </header>
        </ScrollReveal>

        {/* Tab Controls (Websites, Apps, Designs) */}
        <ScrollReveal direction="up" delay={80}>
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 shadow-sm">
              <button
                onClick={() => setActiveTab('websites')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                  activeTab === 'websites'
                    ? 'bg-white dark:bg-neutral-800 text-black dark:text-white font-extrabold shadow-sm'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <Globe size={14} />
                <span>Websites</span>
              </button>
              <button
                onClick={() => setActiveTab('apps')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                  activeTab === 'apps'
                    ? 'bg-white dark:bg-neutral-800 text-black dark:text-white font-extrabold shadow-sm'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <Smartphone size={14} />
                <span>Apps</span>
              </button>
              <button
                onClick={() => setActiveTab('designs')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                  activeTab === 'designs'
                    ? 'bg-white dark:bg-neutral-800 text-black dark:text-white font-extrabold shadow-sm'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <Palette size={14} />
                <span>Designs</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Dynamic Content Streams */}
        <AnimatePresence mode="wait">
          {/* WEBSITES TAB */}
          {activeTab === 'websites' && (
            <motion.div
              key="websites"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start"
            >
              {WEB_DEVELOPMENT_WORKS.map((project, idx) => {
                // Determine layout column staggering
                const isEvenCol = idx % 2 === 0;
                const gradient = WEB_BACKGROUND_GRADIENTS[project.id] || 'from-[#EEF2F6] to-[#DFE5EB]';

                return (
                  <SpotlightCard 
                    key={project.id} 
                    className={`p-6 md:p-8 flex flex-col justify-between h-full bg-transparent rounded-[2.5rem] group/card ${!isEvenCol ? 'md:mt-24' : ''}`}
                    glowColor="rgba(255, 90, 54, 0.08)"
                  >
                    <div>
                      {/* Visual mockup preview */}
                      <WebMockup 
                        image={project.image} 
                        title={project.title} 
                        url={project.link || '#'} 
                        gradientClass={gradient}
                      />

                      {/* Metadata descriptions */}
                      <div className="mt-6 flex flex-col gap-3 px-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-[#FF5A36] font-bold uppercase tracking-widest">
                            SPECIMEN // 0{idx + 1}
                          </span>
                          <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 font-medium">
                            {project.role || 'Production'}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold font-outfit text-neutral-900 dark:text-[#FAF9F6] tracking-tight group-hover/card:text-[#FF5A36] transition-colors duration-300">
                          {project.title}
                        </h3>

                        <p className="text-neutral-500 dark:text-neutral-400 font-sans text-sm md:text-base font-light leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tool Badges */}
                        <div className="flex flex-wrap gap-2 mt-1">
                          {project.techStack?.map((tech) => (
                            <span 
                              key={tech} 
                              className="px-3 py-1 bg-neutral-50 dark:bg-neutral-800 border border-black/[0.04] dark:border-white/[0.06] rounded-lg text-[10px] font-mono text-neutral-500 dark:text-neutral-400 shadow-sm"
                            >
                              {tech}
                            </span>
                          )) || project.tools.map((tool) => (
                            <span 
                              key={tool} 
                              className="px-3 py-1 bg-neutral-50 dark:bg-neutral-800 border border-black/[0.04] dark:border-white/[0.06] rounded-lg text-[10px] font-mono text-neutral-500 dark:text-neutral-400 shadow-sm"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Launch Buttons */}
                    {project.link && project.link !== '#' && (
                      <div className="flex items-center gap-4 mt-6 pt-4 border-t border-black/[0.04] dark:border-white/[0.06] px-2">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-950 dark:text-[#FAF9F6] hover:text-[#FF5A36] dark:hover:text-[#FF5A36] transition-colors"
                        >
                          <span>Live Preview</span>
                          <ArrowUpRight size={14} className="text-[#FF5A36]" />
                        </a>
                      </div>
                    )}
                  </SpotlightCard>
                );
              })}
            </motion.div>
          )}

          {/* APPS TAB */}
          {activeTab === 'apps' && (
            <motion.div
              key="apps"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start"
            >
              {APP_DEVELOPMENT_WORKS.map((app, idx) => {
                const isEvenCol = idx % 2 === 0;
                // Pastel backplates for apps
                const appGradients = [
                  'from-[#FBCFE8] via-[#F472B6] to-[#DB2777]', // pink
                  'from-[#E0E7FF] via-[#C7D2FE] to-[#818CF8]', // indigo
                  'from-[#ECFDF5] via-[#A7F3D0] to-[#34D399]'  // mint emerald
                ];
                const finalGradient = appGradients[idx % appGradients.length];

                return (
                  <SpotlightCard 
                    key={app.id} 
                    className={`p-6 md:p-8 flex flex-col justify-between h-full bg-transparent rounded-[2.5rem] group/card ${!isEvenCol ? 'md:mt-24' : ''}`}
                    glowColor="rgba(255, 90, 54, 0.08)"
                  >
                    {/* Device Mockup Card */}
                    <div className={`w-full aspect-[4/3] bg-gradient-to-tr ${finalGradient} rounded-[2rem] p-6 sm:p-10 flex items-center justify-center relative overflow-hidden shadow-inner`}>
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                      
                      {/* Apple Style Mobile Device Frame */}
                      <div className="relative bg-[#0A0A0C] w-[210px] aspect-[9/18.5] rounded-[2.5rem] p-2.5 border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.4)] overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 ease-out flex flex-col">
                        {/* Speaker & Camera island notch */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 mr-2" />
                          <div className="w-8 h-1 bg-neutral-900 rounded-full" />
                        </div>

                        {/* Internal Screen Content */}
                        <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-black relative">
                          <img 
                            src={app.image} 
                            alt={app.title} 
                            loading="lazy"
                            className="w-full h-full object-cover opacity-100 transition-opacity duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Metadata description */}
                    <div className="mt-6 flex flex-col gap-3 px-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-[#FF5A36] font-bold uppercase tracking-widest">
                          SPECIMEN // NATIVE 0{idx + 1}
                        </span>
                        <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 font-medium">
                          {app.platform || 'Cross-Platform'}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold font-outfit text-neutral-900 dark:text-[#FAF9F6] tracking-tight group-hover:text-[#FF5A36] transition-colors duration-300">
                        {app.title}
                      </h3>

                      <p className="text-neutral-500 dark:text-neutral-400 font-sans text-sm md:text-base font-light leading-relaxed">
                        {app.description}
                      </p>

                      {/* Feature chips */}
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {app.features?.slice(0, 4).map((feat) => (
                          <span 
                            key={feat} 
                            className="px-2.5 py-1 bg-white dark:bg-neutral-800 border border-black/5 dark:border-white/10 rounded-lg text-[9px] font-mono text-neutral-500 dark:text-neutral-400 shadow-sm"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>

                      {/* App Tools */}
                      <div className="flex items-center gap-1.5 mt-6 pt-4 border-t border-black/[0.04] dark:border-white/[0.06] px-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
                        <span className="font-extrabold text-neutral-500 dark:text-neutral-400">ENGINE:</span>
                        <span>{app.tools.join(' • ')}</span>
                      </div>
                    </div>
                  </SpotlightCard>
                );
              })}
            </motion.div>
          )}

          {/* DESIGNS TAB */}
          {activeTab === 'designs' && (
            <motion.div
              key="designs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-10"
            >
              {/* Filter and Search controls */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/50 dark:bg-neutral-900/50 backdrop-blur border border-black/5 dark:border-white/10 p-4 rounded-2xl">
                <div className="relative w-full sm:max-w-md">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400 dark:text-neutral-500">
                    <Search size={15} />
                  </span>
                  <input
                    type="text"
                    placeholder="Search specimen by title (e.g., Poster 01)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white dark:bg-neutral-800 text-[#111111] dark:text-[#FAF9F6] pl-10 pr-4 py-2 rounded-xl text-xs font-mono border border-black/5 dark:border-white/10 focus:outline-none focus:border-neutral-900 dark:focus:border-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
                  />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-wider">
                  <SlidersHorizontal size={12} className="text-[#FF5A36]" />
                  <span>{filteredDesigns.length} specimen plates found</span>
                </div>
              </div>

              {/* Responsive Masonry Layout */}
              <div 
                className={`columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-6 space-y-6 transition-opacity duration-500 ${
                  isMounted ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {filteredDesigns.map((work) => (
                  <SpotlightCard 
                    key={work.id} 
                    onClick={() => setSelectedImage(work.image)}
                    className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-[1.8rem] bg-transparent p-2 transition-all duration-500 hover:scale-[1.01] flex flex-col"
                    glowColor="rgba(255, 90, 54, 0.08)"
                  >
                    {/* Poster container */}
                    <div className="relative overflow-hidden rounded-[1.4rem] bg-neutral-100 dark:bg-neutral-850">
                      <img 
                        src={work.image} 
                        alt={work.title} 
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-auto transition-transform duration-[1.5s] group-hover:scale-105"
                      />
                      {/* Interactive zoom overlay */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-black shadow-lg">
                          <Maximize2 size={16} />
                        </div>
                      </div>
                    </div>

                    {/* Meta info below poster */}
                    <div className="py-3 px-2.5 flex items-center justify-between">
                      <h4 className="text-xs font-bold font-outfit text-neutral-800 dark:text-[#FAF9F6] group-hover:text-[#FF5A36] transition-colors duration-300 uppercase tracking-tight">
                        {work.title}
                      </h4>
                      <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 font-bold uppercase tracking-wider bg-neutral-50 dark:bg-neutral-850 px-2 py-0.5 rounded border border-neutral-100 dark:border-white/[0.06]">
                        {work.medium || 'Specimen'}
                      </span>
                    </div>
                  </SpotlightCard>
                ))}
              </div>

              {filteredDesigns.length === 0 && (
                <div className="text-center py-24 bg-white/40 dark:bg-neutral-900/40 border border-black/5 dark:border-white/10 rounded-3xl">
                  <p className="text-neutral-400 dark:text-neutral-500 font-mono text-sm">No specimens match your search parameters.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox Zoom Portal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          >
            {/* Close trigger */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-[#111]"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Selected Artwork Specimen" 
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl mx-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
