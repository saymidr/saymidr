
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Portfolio', path: '/#portfolio' },
    { name: 'Services', path: '/#services' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-out ${scrolled ? 'bg-cinema-900/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="block relative z-50 group">
          <img 
            src="" 
            alt="Aymid Logo" 
            className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path} 
              className="text-sm font-medium tracking-wider text-gray-400 hover:text-white transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-cinema-accent origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
              <span className="absolute -top-1 -right-1 w-1 h-1 bg-cinema-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white relative z-50" onClick={() => setIsOpen(!isOpen)}>
          <div className="relative w-6 h-6 flex flex-col justify-center gap-1.5 overflow-hidden">
             <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
             <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'translate-x-full opacity-0' : ''}`}></span>
             <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-cinema-900/95 backdrop-blur-xl z-40 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-display font-bold text-gray-300 hover:text-white tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
