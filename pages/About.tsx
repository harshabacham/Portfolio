
import React from 'react';
import { SKILLS } from '../data/projects';
import { Layout as LayoutIcon, Code, Smartphone, Palette, Terminal, Globe, Sparkles, Layout } from 'lucide-react';

const About: React.FC = () => {
  // Mapping icons to skill names
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe size={24} />;
      case 'Smartphone': return <Smartphone size={24} />;
      case 'Palette': return <Palette size={24} />;
      case 'Layout': return <Layout size={24} />;
      case 'Code': return <Code size={24} />;
      case 'Sparkles': return <Sparkles size={24} />;
      default: return <Terminal size={24} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-32">
      {/* Intro */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden bg-zinc-900 border border-zinc-800">
            <img 
              src="https://i.postimg.cc/BnT6wZJm/Whats-App-Image-2025-09-16-at-2-06-41-PM.jpg" 
              alt="Harsha Bacham Portrait" 
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-white/10 shadow-2xl hidden md:block">
            <p className="text-sm font-bold">Available for hire</p>
            <p className="text-xs text-zinc-500">Global Remote / On-site</p>
          </div>
        </div>

        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">I build digital tools for humans.</h1>
          <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
            <p>
              I am Harsha Bacham, a hybrid creative comfortable navigating between the realms of high-end visual design and rigorous software engineering. 
            </p>
            <p>
              My journey started with a fascination for graphics, which naturally evolved into building the very interfaces I was designing. Today, I build pixel-perfect web and mobile applications from concept to deployment.
            </p>
            <p>
              Whether it's a minimalist logo or a complex React dashboard, my philosophy remains the same: <strong>simplify the user experience without sacrificing beauty.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Skills Grid - Cleaner Version */}
      <section>
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Core Competencies</h2>
          <p className="text-zinc-500 text-lg">Mastering the intersection of technology and visual communication.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="glass border border-white/5 p-10 rounded-[2.5rem] hover:border-white/20 transition-all duration-500 group relative overflow-hidden">
              <div className="mb-8 w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                 {getIcon(skill.icon)}
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">{skill.name}</h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                Specialized in building robust, performant systems and beautiful interfaces using modern industry standards.
              </p>
              {/* Subtle accent corner */}
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all" />
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="text-center py-24 border-y border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold italic serif max-w-4xl mx-auto leading-tight">
          "The best interface is the one that feels invisible because it works perfectly."
        </h2>
      </section>
    </div>
  );
};

export default About;
