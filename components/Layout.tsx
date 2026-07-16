
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#FAF9F6] transition-colors duration-500 selection:bg-black selection:text-white dark:selection:bg-[#FAF9F6] dark:selection:text-black">
      <CustomCursor />
      <main className="flex-grow">
        {children}
      </main>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Layout;
