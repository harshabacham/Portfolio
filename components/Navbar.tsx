
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Palette, Globe, Smartphone, Send } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About', path: '/about', icon: <User size={18} /> },
    { name: 'Design', path: '/graphic-design', icon: <Palette size={18} /> },
    { name: 'Web', path: '/web-development', icon: <Globe size={18} /> },
    { name: 'Apps', path: '/app-development', icon: <Smartphone size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Send size={18} /> },
  ];

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className={`pointer-events-auto glass px-2 py-2 rounded-full flex items-center gap-1 shadow-2xl transition-all duration-500 border border-white/10 ${scrolled ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-2 opacity-95 scale-105'}`}>
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`relative flex items-center justify-center p-3 rounded-full transition-all duration-300 group ${isActive ? 'bg-white text-black' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
              title={link.name}
            >
              {link.icon}
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 glass px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {link.name}
              </span>
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full hidden md:block"></span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
