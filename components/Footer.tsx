import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-black/[0.04] dark:border-white/[0.06] py-8 px-6 md:px-12 bg-white dark:bg-[#0A0A0A] transition-colors duration-500 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand credit */}
        <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
          <span className="font-outfit font-extrabold text-xs tracking-tight text-[#111111] dark:text-[#FAF9F6]">HARSHA BACHAM</span>
          <span className="hidden md:inline-block w-1 h-1 rounded-full bg-[#FF5A36]"></span>
          <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </span>
        </div>

        {/* Action Protocols */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/harshabacham" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-9 h-9 rounded-xl bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 flex items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white hover:border-black/10 dark:hover:border-white/20 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all shadow-sm"
            title="GitHub Catalog"
          >
            <Github size={14} />
          </a>
          <a 
            href="https://www.linkedin.com/in/harsha-bacham" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-9 h-9 rounded-xl bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 flex items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white hover:border-black/10 dark:hover:border-white/20 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all shadow-sm"
            title="LinkedIn Protocol"
          >
            <Linkedin size={14} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-9 h-9 rounded-xl bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 flex items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white hover:border-black/10 dark:hover:border-white/20 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all shadow-sm"
            title="Instagram Profile"
          >
            <Instagram size={14} />
          </a>
          <a 
            href="mailto:bachamharsha4091@gmail.com" 
            className="w-9 h-9 rounded-xl bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 flex items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white hover:border-black/10 dark:hover:border-white/20 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all shadow-sm"
            title="Direct Mail"
          >
            <Mail size={14} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
