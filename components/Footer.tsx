
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-800 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Harsha Bacham. Designed with precision.
        </div>
        
        <div className="flex space-x-6">
          <a href="https://github.com/harshabacham" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/harsha-bacham" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:bachamharsha4091@gmail.com" className="text-zinc-400 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
