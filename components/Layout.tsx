
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-white selection:text-black">
      <main className="flex-grow">
        {children}
      </main>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Layout;
