
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Globe, Smartphone, Sparkles, User } from 'lucide-react';

interface Role {
  name: string;
  color: string;
}

const Typewriter: React.FC<{ roles: Role[] }> = ({ roles }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].name.length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2500);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, roles]);

  return (
    <span className={`relative inline-block transition-colors duration-500 ${roles[index].color}`}>
      {roles[index].name.substring(0, subIndex)}
      <span className="inline-block w-[2px] h-[0.9em] bg-current ml-1 animate-pulse align-middle" />
    </span>
  );
};

const Home: React.FC = () => {
  const roles: Role[] = [
    { name: 'GRAPHIC DESIGNER', color: 'text-orange-500' },
    { name: 'WEB DEVELOPER', color: 'text-orange-500' },
    { name: 'APP DEVELOPER', color: 'text-orange-500' }
  ];

  return (
    <div className="pb-32 px-6 overflow-hidden">
      {/* Refined Hero Section - cleaner spacing and hierarchy */}
      <section className="min-h-[90vh] flex items-center justify-center max-w-7xl mx-auto py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <span className="text-[10px] font-bold tracking-[0.3em] text-orange-500 uppercase">Personal Portfolio</span>
              <span className="w-8 h-[1px] bg-zinc-800"></span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-zinc-500 text-sm md:text-base font-medium tracking-tight">
                Designed & Developed by <span className="text-white border-b border-orange-500/50 pb-0.5">Harsha Bacham</span>
              </h2>
              <h1 className="text-[11vw] sm:text-[7vw] lg:text-[6.5vw] font-bold tracking-tighter leading-[0.95] text-white">
                CREATIVE <br />
                <Typewriter roles={roles} />
              </h1>
            </div>

            <p className="max-w-xl text-zinc-400 text-lg md:text-xl font-light leading-relaxed mx-auto lg:mx-0">
              I specialize in bridging the gap between <span className="text-zinc-200">visual artistry</span> and <span className="text-zinc-200">technical engineering</span> to build seamless digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link to="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm uppercase tracking-widest">
                Get in touch
              </Link>
              <Link to="/web-development" className="px-8 py-4 glass border border-white/5 text-white font-bold rounded-full hover:border-white/20 transition-all duration-300 text-sm uppercase tracking-widest">
                View Projects
              </Link>
            </div>
          </div>

          {/* Right Side: Portrait - Simplified presentation */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative group mx-auto max-w-[400px] lg:max-w-none">
              <div className="aspect-[1/1.2] rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 relative z-10 shadow-2xl">
                <img 
                  src="https://i.postimg.cc/BnT6wZJm/Whats-App-Image-2025-09-16-at-2-06-41-PM.jpg" 
                  alt="Harsha Bacham" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Bento Grid - More balanced and less busy */}
      <section className="max-w-7xl mx-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[400px]">
          {/* About Card */}
          <div className="glass rounded-3xl p-10 flex flex-col justify-between group relative overflow-hidden">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <Sparkles size={18} className="text-orange-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4 tracking-tight">The intersection of <br /> Design & Logic.</h2>
              <p className="text-zinc-500 leading-relaxed max-w-sm">
                Creating digital solutions that are as beautiful as they are functional. I handle everything from the first sketch to the final deployment.
              </p>
            </div>
            <Link to="/about" className="inline-flex items-center text-xs font-bold uppercase tracking-widest gap-2 group-hover:gap-3 transition-all text-white mt-8">
              My Story <ArrowRight size={14} className="text-orange-500" />
            </Link>
          </div>

          {/* Web Card */}
          <Link to="/web-development" className="glass rounded-3xl p-10 flex flex-col justify-between group border border-white/5 hover:border-orange-500/30 transition-all duration-500">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500">
                <Globe size={24} className="text-zinc-400 group-hover:text-white" />
              </div>
              <ArrowRight size={20} className="text-zinc-800 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Web Engineering</h3>
              <p className="text-zinc-500 text-sm">Full-stack applications with modern performance standards.</p>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto md:h-[300px]">
          {/* Apps Card */}
          <Link to="/app-development" className="glass rounded-3xl p-10 flex flex-col justify-between group border border-white/5 hover:border-orange-500/30 transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500">
              <Smartphone size={24} className="text-zinc-400 group-hover:text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">App Development</h3>
              <p className="text-zinc-500 text-xs">Crafting native mobile experiences using Flutter & React Native.</p>
            </div>
          </Link>

          {/* Design Card */}
          <Link to="/graphic-design" className="glass rounded-3xl p-10 flex flex-col justify-between group border border-white/5 hover:border-orange-500/30 transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500">
              <Palette size={24} className="text-zinc-400 group-hover:text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Visual Arts</h3>
              <p className="text-zinc-500 text-xs">Branding, UI/UX, and graphic compositions that tell a story.</p>
            </div>
          </Link>

          {/* Contact Card */}
          <Link to="/contact" className="glass rounded-3xl p-10 flex flex-col justify-center items-center group bg-orange-500/5 hover:bg-orange-500 transition-all duration-500 text-center">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-white">Have a project?</h3>
            <p className="text-orange-500 text-sm font-bold group-hover:text-white/80">Let's work together <ArrowRight size={16} className="inline ml-1" /></p>
          </Link>
        </div>
      </section>

      {/* Cleaner Footer Tagline */}
      <section className="py-32 max-w-4xl mx-auto text-center">
        <div className="inline-block w-8 h-[1px] bg-orange-500/30 mb-8"></div>
        <p className="text-zinc-400 text-xl md:text-2xl font-light italic serif leading-relaxed">
          "The best digital products are built where empathy meets expertise. I strive to create tools that empower users through intuitive design and reliable code."
        </p>
      </section>
    </div>
  );
};

export default Home;
