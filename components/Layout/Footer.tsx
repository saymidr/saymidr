
import React from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cinema-900 border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <img 
              src="/assets/logo.png" 
              alt="Aymid Logo" 
              className="h-12 w-auto object-contain mb-4" 
            />
            <p className="text-gray-400 text-sm max-w-xs">Video Editor for Creators. High retention, storytelling, and speed.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:text-cinema-accent transition-all hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:text-cinema-accent transition-all hover:scale-110">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:text-cinema-accent transition-all hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="mailto:syedahmedrehmani3@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:text-cinema-accent transition-all hover:scale-110">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Syed Ahmed Rehmani. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;