
import React, { useState } from 'react';
import { WEB_DEVELOPMENT_WORKS } from '../data/projects';
import { ExternalLink, Github, Monitor, Code2, Layers } from 'lucide-react';

const WebDevelopment: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'React', 'Full Stack', 'Frontend'];

  const filteredProjects = filter === 'All' 
    ? WEB_DEVELOPMENT_WORKS 
    : WEB_DEVELOPMENT_WORKS.filter(p => p.tools.includes(filter) || p.role === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 mb-32">
      <header className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-bold">
            <span className="w-8 h-[1px] bg-zinc-800"></span> 02 // Engineering
          </div>
          <h1 className="text-6xl md:text-[7vw] font-bold tracking-tighter mb-8 leading-[0.85] text-white">
            Digital <br />
            <span className="serif italic font-normal text-zinc-400">Architectures.</span>
          </h1>
          <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-xl italic serif">
            Engineering high-performance web systems where technical precision meets exceptional user experience.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 border ${
                filter === cat 
                ? 'bg-white text-black border-white shadow-[0_10px_20px_rgba(255,255,255,0.1)]' 
                : 'bg-transparent text-zinc-500 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="space-y-48">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="group relative"
          >
            {/* Project Index Decorator */}
            <div className="absolute -left-4 md:-left-12 top-0 text-[10vw] font-bold text-white/5 select-none pointer-events-none hidden lg:block">
              0{index + 1}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              {/* Project Info */}
              <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.2em]">{project.role}</span>
                    <div className="h-[1px] w-12 bg-zinc-800"></div>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-zinc-500 text-lg leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                    <Code2 size={12} /> Technology Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="bg-white/5 text-zinc-300 px-4 py-2 rounded-xl text-xs font-medium border border-white/5 backdrop-blur-sm group-hover:border-white/10 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center px-10 py-5 bg-white text-black rounded-full font-bold hover:scale-105 active:scale-95 transition-all text-sm shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                    >
                      Live Preview <ExternalLink size={16} className="ml-3" />
                    </a>
                  )}
                  {project.github && project.github !== '#' && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center px-10 py-5 bg-zinc-900/50 text-white rounded-full font-bold hover:bg-zinc-800 border border-white/10 transition-all text-sm backdrop-blur-md"
                    >
                      View Source <Github size={16} className="ml-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Browser Mockup */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative group/mockup">
                  {/* Decorative Glow */}
                  <div className="absolute -inset-4 bg-white/5 rounded-[2.5rem] blur-3xl opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-1000"></div>
                  
                  <div className="relative bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)] transform group-hover/mockup:-translate-y-2 group-hover/mockup:border-white/20 transition-all duration-700 ease-out">
                    {/* Browser Toolbar */}
                    <div className="bg-zinc-900/90 border-b border-white/5 px-6 py-4 flex items-center justify-between">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
                      </div>
                      <div className="bg-black/40 px-6 py-1.5 rounded-full text-[10px] text-zinc-500 font-mono tracking-tight border border-white/5 max-w-[240px] truncate">
                        {project.link?.replace('https://', '')}
                      </div>
                      <div className="w-12"></div> {/* Spacer for alignment */}
                    </div>
                    
                    {/* Viewport */}
                    <div className="aspect-[16/10] relative overflow-hidden bg-black">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top transition-all duration-[3s] ease-in-out group-hover/mockup:scale-105 opacity-80 group-hover/mockup:opacity-100"
                      />
                      
                      {/* Subtle Screen Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Contact Teaser */}
      <section className="mt-64 text-center space-y-12">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-500 italic serif">Interested in collaborating on a <br /> technical project?</h2>
        <a 
          href="#/contact" 
          className="inline-flex items-center gap-3 text-white font-bold border-b-2 border-white/20 pb-2 hover:border-white transition-all group"
        >
          Let's talk engineering <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </a>
      </section>
    </div>
  );
};

// Internal Import helper
const ArrowRight: React.FC<{ size?: number, className?: string }> = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

export default WebDevelopment;
