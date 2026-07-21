import React, { useState } from 'react';
import { SKILLS } from '../data/projects';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  Layout as LayoutIcon, Code, Smartphone, Palette, Terminal, 
  Globe, Sparkles, Compass 
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { InteractiveGridBackground } from '../components/ui/InteractiveGridBackground';

const About: React.FC = () => {
  const [activeCompetency, setActiveCompetency] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe size={18} className="text-[#FF5A36]" />;
      case 'Smartphone': return <Smartphone size={18} className="text-[#FF5A36]" />;
      case 'Palette': return <Palette size={18} className="text-[#FF5A36]" />;
      case 'Layout': return <LayoutIcon size={18} className="text-[#FF5A36]" />;
      case 'Code': return <Code size={18} className="text-[#FF5A36]" />;
      case 'Sparkles': return <Sparkles size={18} className="text-[#FF5A36]" />;
      default: return <Terminal size={18} className="text-[#FF5A36]" />;
    }
  };



  return (
    <div className="pb-40 bg-[#FAF9F6] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#FAF9F6] transition-colors duration-500 selection:bg-black selection:text-white min-h-screen relative overflow-hidden font-inter">
      <Helmet>
        <title>About | Harsha Bacham</title>
        <meta name="description" content="Discover Harsha Bacham's core disciplines, preferred tech stack, and background in design and development." />
        <meta property="og:title" content="About | Harsha Bacham" />
        <meta property="og:description" content="Discover Harsha Bacham's core disciplines, preferred tech stack, and background in design and development." />
      </Helmet>
      {/* 21st.dev Interactive Grid Background with Cursor Tracking Spotlight */}
      <InteractiveGridBackground />
      
      {/* Ambient background soft orb */}
      <div className="absolute top-[15%] right-[10%] w-[600px] h-[600px] bg-[#FF5A36]/[0.02] rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 relative z-10 space-y-32">
        
        {/* Editorial Page Header */}
        <ScrollReveal direction="up" delay={50}>
          <header className="border-b border-black/[0.04] dark:border-white/[0.06] pb-16">
            <div className="max-w-3xl space-y-5">
              <div className="flex items-center gap-3 text-neutral-400 text-[9px] font-mono uppercase tracking-[0.25em] font-bold">
                <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-800"></span> 01 // ARCHITECT PROFILE
              </div>
              <h1 className="text-5xl md:text-[6.5vw] font-outfit font-extrabold tracking-tighter leading-[0.88] uppercase text-neutral-900 dark:text-neutral-50">
                DESIGN <span className="font-signature font-normal text-[#FF6A00] tracking-normal text-[6.5vw] md:text-[7vw] normal-case">chronology</span>
              </h1>
              <p className="font-outfit text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-2xl">
                Formulating clean code layouts and visual symmetries for environments that demand absolute digital standards.
              </p>
            </div>
          </header>
        </ScrollReveal>

        {/* Bento Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Portrait & Metadata (Bento 5-cols) */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="up" delay={100}>
              <div className="group/portrait relative">
                {/* Visual Accent L-Corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#FF5A36] -mt-2 -ml-2 z-20"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#FF5A36] -mb-2 -mr-2 z-20"></div>

                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-transparent border border-black/5 dark:border-white/10 relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-700 hover:border-black/10 dark:hover:border-white/20">
                  <img 
                    src="https://i.postimg.cc/BnT6wZJm/Whats-App-Image-2025-09-16-at-2-06-41-PM.jpg" 
                    alt="Harsha Bacham Portrait" 
                    className="w-full h-full object-cover brightness-[0.95] group-hover/portrait:scale-[1.015] transition-all duration-[1s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                  
                  {/* Glowing active tag */}
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div>
                      <span className="text-[8px] font-mono text-[#FF5A36] font-bold uppercase tracking-widest block mb-1">SYSTEM ARCHITECT</span>
                      <h3 className="text-lg font-outfit font-extrabold uppercase tracking-wide text-white">Harsha Bacham</h3>
                    </div>
                    <span className="px-3 py-1 bg-emerald-500 text-white font-mono text-[8px] uppercase tracking-widest rounded-lg font-bold">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Philosophy & Timeline (Bento 7-cols) */}
          <div className="lg:col-span-7 space-y-14">
            <ScrollReveal direction="up" delay={150}>
              <div className="space-y-6">
                <div className="text-[9px] font-mono text-[#FF5A36] uppercase tracking-widest block font-bold">[ 01 // SYSTEM VISION ]</div>
                <div className="space-y-6 text-neutral-500 dark:text-neutral-400 text-[13px] leading-relaxed font-light">
                  <p>
                    I am <span className="text-[#111111] dark:text-[#FAF9F6] font-semibold">Harsha Bacham</span>, a creative systems developer and interface architect. I collaborate with clients who appreciate layout density and visual perfection to create custom web applications that operate seamlessly.
                  </p>
                  <p>
                    Whether formulating responsive React micro-services, configuring Flutter canvas structures, or editing high-fashion posters, my approach focuses on balancing structural math with clean negative space. No elements are decorative; every line has a logical cause.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Metadata Card */}
            <ScrollReveal direction="up" delay={180}>
              <SpotlightCard className="bg-transparent p-8 rounded-[2rem] space-y-6" glowColor="rgba(255, 90, 54, 0.08)">
                <span className="text-[8px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block font-bold">SYSTEM METADATA</span>
                
                <div className="space-y-4">
                  {[
                    { key: 'Focus Areas', val: 'Web Architecture, Native Android, Editorial Graphics' },
                    { key: 'Preferred Stack', val: 'React 19, TypeScript, Flutter Core, Tailwind' },
                    { key: 'Vibe Preference', val: 'Boutique, Minimalist, Grid-forward, high-contrast' },
                    { key: 'GitHub Profile', val: 'github.com/harshabacham', link: 'https://github.com/harshabacham' },
                  ].map((meta) => (
                    <div key={meta.key} className="flex justify-between items-start text-[13px] border-b border-black/[0.04] dark:border-white/[0.06] pb-3">
                      <span className="font-mono text-neutral-400 dark:text-neutral-500 font-bold">{meta.key}</span>
                      {'link' in meta && meta.link ? (
                        <a 
                          href={meta.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FF6A00] hover:underline font-outfit font-bold uppercase text-right max-w-[200px] leading-tight transition-all"
                        >
                          {meta.val}
                        </a>
                      ) : (
                        <span className="text-neutral-700 dark:text-neutral-300 font-outfit font-bold uppercase text-right max-w-[200px] leading-tight">{meta.val}</span>
                      )}
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>

        </div>

        {/* Capacity Matrix */}
        <section className="space-y-16 pt-16 border-t border-black/[0.04] dark:border-white/[0.06]">
          <ScrollReveal direction="up" delay={50}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-black/[0.04] dark:border-white/[0.06]">
              <div className="space-y-3">
                <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest font-bold">[ CAPABILITY METRIC ]</span>
                <h2 className="text-4xl font-outfit font-extrabold uppercase tracking-tight text-neutral-900 dark:text-neutral-50">
                  SPECIFICATION <span className="font-instrument italic font-light text-neutral-400 dark:text-neutral-500 lowercase">metrics</span>
                </h2>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs max-w-xs leading-relaxed font-light">
                Select a competency card to display our verified technical execution profiles and benchmarks.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skill, index) => {
              const isSelected = activeCompetency === index;
              return (
                <ScrollReveal key={skill.name} direction="up" delay={index * 50}>
                  <SpotlightCard 
                    onClick={() => setActiveCompetency(index)}
                    className={`p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer group relative overflow-hidden h-full flex flex-col justify-between shadow-sm hover:shadow-md ${
                      isSelected 
                        ? 'border-[#FF5A36]/30 bg-transparent' 
                        : 'bg-transparent border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20'
                    }`}
                    glowColor="rgba(255, 90, 54, 0.08)"
                  >
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-[8px] font-mono text-neutral-400 dark:text-neutral-500 font-bold">SPEC // 0{index + 1}</span>
                        <div className="w-9 h-9 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-black/5 dark:border-white/10 flex items-center justify-center group-hover:bg-[#111111] dark:group-hover:bg-[#FAF9F6] group-hover:text-white dark:group-hover:text-[#111111] transition-all">
                          {getIcon(skill.icon)}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-base font-bold font-outfit uppercase tracking-wider text-neutral-900 dark:text-[#FAF9F6]">
                          {skill.name}
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed font-light">
                          Verified structural performance, robust state-management architectures, and pristine visual alignment.
                        </p>
                      </div>
                    </div>

                    {/* Animated Capacity Bar */}
                    <div className="space-y-2 pt-6 mt-6 border-t border-black/[0.04] dark:border-white/[0.06]">
                      <div className="flex justify-between items-center text-[9px] font-mono">
                        <span className="text-neutral-400 dark:text-neutral-500 font-bold">CONFIDENCE ACCURACY</span>
                        <span className="text-[#FF5A36] font-bold uppercase">{skill.level}</span>
                      </div>
                      
                      <div className="h-[2.5px] bg-neutral-100 dark:bg-neutral-850 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-[#FF5A36]"
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level === 'Expert' ? '95%' : '85%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.08 }}
                        />
                      </div>
                    </div>
                  </SpotlightCard>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Symmetrical Quote */}
        <ScrollReveal direction="up" delay={50}>
          <section className="text-center py-20 border-t border-black/[0.04] dark:border-white/[0.06]">
            <Compass className="mx-auto text-[#FF5A36] mb-6 animate-spin-slow" size={24} style={{ animationDuration: '30s' }} />
            <h2 className="font-instrument text-neutral-500 dark:text-neutral-300 text-3xl md:text-4xl font-light italic max-w-2xl mx-auto leading-normal">
              "We strive for total structural completeness. A code is not just written; it is composed in visual and functional proportions."
            </h2>
          </section>
        </ScrollReveal>
        
      </div>
    </div>
  );
};

export default About;
