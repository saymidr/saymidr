
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Brainstorm from './pages/Brainstorm'; // Added import for Brainstorm page since file exists
import InteractiveBackground from './components/UI/InteractiveBackground';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  // Simple loading state for initial aesthetic
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-cinema-900 flex items-center justify-center flex-col gap-4">
        <div className="w-12 h-12 border-t-2 border-l-2 border-cinema-accent rounded-full animate-spin"></div>
        <h1 className="text-cinema-accent font-display tracking-[0.3em] text-sm animate-pulse">RENDERING</h1>
      </div>
    );
  }

  return (
    <HashRouter>
      <ScrollToTop />
      {/* 
         Changed bg-cinema-900 to bg-[#050505] (matches body) but added relative to contain children.
         InteractiveBackground is absolute/fixed behind everything.
      */}
      <div className="min-h-screen relative bg-[#050505] text-white selection:bg-cinema-accent selection:text-white overflow-x-hidden">
        <InteractiveBackground />
        
        <div className="relative z-10">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/brainstorm" element={<Brainstorm />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
