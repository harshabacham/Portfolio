
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import GraphicDesign from './pages/GraphicDesign';
import WebDevelopment from './pages/WebDevelopment';
import AppDevelopment from './pages/AppDevelopment';
import Contact from './pages/Contact';
import AnimatedPage from './components/AnimatedPage';
import DemoPage from './pages/DemoPage';

// Scroll to top on route change, or to a specific section if hash is present
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly to ensure component has mounted
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
          <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
          <Route path="/graphic-design" element={<AnimatedPage><GraphicDesign /></AnimatedPage>} />
          <Route path="/web-development" element={<AnimatedPage><WebDevelopment /></AnimatedPage>} />
          <Route path="/app-development" element={<AnimatedPage><AppDevelopment /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path="/demo" element={<AnimatedPage><DemoPage /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
