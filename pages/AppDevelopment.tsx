
import React from 'react';
import { APP_DEVELOPMENT_WORKS } from '../data/projects';
import { Smartphone, CheckCircle2, PlayCircle, Layers } from 'lucide-react';

const AppDevelopment: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 mb-32">
      <header className="mb-32">
        <div className="flex items-center gap-3 mb-6 text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-bold">
          <span className="w-8 h-[1px] bg-zinc-800"></span> 03 // Mobility
        </div>
        <h1 className="text-6xl md:text-[8vw] font-bold tracking-tighter mb-8 leading-[0.85] text-white">
          Mobile <br />
          <span className="serif italic font-normal text-zinc-400">Experiences.</span>
        </h1>
        <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-xl italic serif">
          Crafting high-performance native and cross-platform mobile applications with a focus on intuitive gestures and seamless performance.
        </p>
      </header>

      <div className="space-y-32">
        {APP_DEVELOPMENT_WORKS.map((app, index) => (
          <div key={app.id} className="group relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              
              {/* Phone Mockup Section */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative mx-auto max-w-[320px]">
                  {/* Decorative Glow */}
                  <div className="absolute -inset-10 bg-orange-500/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  
                  <div className="relative bg-[#050505] rounded-[3.5rem] p-3 border-[10px] border-zinc-900 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden aspect-[9/19] transition-transform duration-700 group-hover:-translate-y-4">
                    <img 
                      src={app.image} 
                      alt={app.title} 
                      className="w-full h-full object-cover rounded-[2.5rem] opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    {/* Screen reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className={`lg:col-span-7 space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    <Smartphone size={12} className="text-orange-500" /> {app.platform}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white group-hover:text-orange-500 transition-colors duration-500">
                    {app.title}
                  </h2>
                  <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-zinc-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-orange-500" /> Core Features
                    </h3>
                    <ul className="space-y-2">
                      {app.features.map(feat => (
                        <li key={feat} className="text-zinc-500 text-sm font-light flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-zinc-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <Layers size={14} className="text-orange-500" /> Technology
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {app.tools.map(tool => (
                        <span key={tool} className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/5 text-[10px] text-zinc-400 font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <a 
                    href={app.link} 
                    className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-2xl"
                  >
                    View Project Details <PlayCircle size={16} className="ml-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppDevelopment;
