import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, align = 'left' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-cinema-accent font-mono text-sm tracking-widest uppercase mb-2 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display font-bold text-4xl md:text-5xl leading-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;