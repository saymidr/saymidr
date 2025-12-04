
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ExternalLink, Send, Star, Quote, Heart, Smartphone, Film, Camera, Layers, Check, TrendingUp, Users } from 'lucide-react';
import SectionTitle from '../components/UI/SectionTitle';
import { PROJECTS, TESTIMONIALS, TOOLS } from '../constants';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  // Fake timecode for the hero background
  const [timecode, setTimecode] = useState("00:00:00:00");
  
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const ms = date.getMilliseconds();
      const frames = Math.floor((ms / 1000) * 24).toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      setTimecode(`${hours}:${minutes}:${seconds}:${frames}`);
    }, 41); // ~24fps
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#050505] overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* VIDEO EDITING INSPIRED BACKGROUND */}
        <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none overflow-hidden">
           {/* Film Grain Overlay */}
           <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
           
           {/* Moving Timeline Ruler (Top) */}
           <div className="absolute top-24 left-0 w-[200%] h-16 border-b border-white/10 flex items-end opacity-30">
              {Array.from({ length: 100 }).map((_, i) => (
                 <div key={i} className="flex-1 h-full flex items-end justify-center relative">
                    <div className={`w-[1px] bg-white/50 ${i % 5 === 0 ? 'h-8' : 'h-3'}`}></div>
                    {i % 5 === 0 && <span className="absolute -top-4 text-[10px] font-mono text-white/50">{`00:00:${i.toString().padStart(2, '0')}`}</span>}
                 </div>
              ))}
           </div>

           {/* Giant Background Timecode */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono font-bold text-[10vw] md:text-[15vw] leading-none text-white/[0.03] tracking-widest whitespace-nowrap z-0">
              {timecode}
           </div>

           {/* Animated "Safe Area" Crosshairs */}
           <div className="absolute inset-12 border border-white/5 rounded-3xl hidden md:block">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-cinema-accent/50"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-cinema-accent/50"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-cinema-accent/50"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-cinema-accent/50"></div>
           </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-white/10 rounded-full bg-black/40 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-xs font-mono tracking-widest text-gray-300 uppercase">Rec • 4K RAW</span>
            </motion.div>
            
            <h1 className="font-display font-extrabold text-5xl md:text-8xl mb-6 leading-[0.9] tracking-tight">
              SYED AHMED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cinema-500 to-cinema-accent">REHMANI</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Video Editor for Creators. Short-form, long-form & storytelling specialist. <br className="hidden md:block"/>
              I edit fast-paced, high-retention videos using After Effects and CapCut Pro.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.a 
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Selected Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.a>
              
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium text-lg rounded-full backdrop-blur-md transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Client Banner (Redesigned) */}
      <section className="py-24 relative z-20 overflow-hidden bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-40 bg-cinema-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-5xl mx-auto"
           >
             <div className="relative rounded-3xl p-[1px] overflow-hidden group">
                {/* Border Gradient Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                
                <div className="bg-[#0f0f0f]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                   {/* Decorative Elements */}
                   <div className="absolute top-0 right-0 p-10 opacity-20">
                      <Star size={120} className="text-cinema-accent fill-cinema-accent/20 rotate-12" />
                   </div>

                   <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                      {/* Client Info */}
                      <div className="flex items-center gap-8">
                         <div className="relative">
                            <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-cinema-500 to-cinema-accent">
                               <img 
                                 src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" 
                                 alt="Nolan Glaze" 
                                 className="w-full h-full rounded-full object-cover border-4 border-[#0f0f0f]"
                               />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-cinema-accent text-white text-[10px] font-bold px-3 py-1 rounded-full border-2 border-[#0f0f0f]">
                               PARTNER
                            </div>
                         </div>
                         <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                               <span className="text-cinema-500 font-mono text-xs uppercase tracking-widest font-bold">Featured Client</span>
                               <div className="w-12 h-[1px] bg-cinema-500/50"></div>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">Nolan Glaze</h2>
                            <p className="text-gray-400 max-w-xs">Content Creator with 2M+ followers across platforms.</p>
                         </div>
                      </div>

                      {/* Stats */}
                      <div className="flex divide-x divide-white/10 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-md">
                         <div className="px-8 py-6 text-center group/stat hover:bg-white/5 transition-colors first:rounded-l-2xl">
                            <div className="flex justify-center mb-2"><Users className="text-blue-400 group-hover/stat:scale-110 transition-transform" size={24} /></div>
                            <div className="text-2xl font-bold text-white mb-1">2M+</div>
                            <div className="text-[10px] uppercase tracking-widest text-gray-500">Followers</div>
                         </div>
                         <div className="px-8 py-6 text-center group/stat hover:bg-white/5 transition-colors last:rounded-r-2xl">
                            <div className="flex justify-center mb-2"><TrendingUp className="text-green-400 group-hover/stat:scale-110 transition-transform" size={24} /></div>
                            <div className="text-2xl font-bold text-white mb-1">High</div>
                            <div className="text-[10px] uppercase tracking-widest text-gray-500">Retention</div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Portfolio Section (Redesigned) */}
      <section id="portfolio" className="py-32 relative z-10 bg-[#050505]">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Masterpieces" title="Selected Works" />
          
          <div className="flex flex-col gap-16 mb-24">
            {PROJECTS.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative block w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-cinema-800 border border-white/10 shadow-2xl"
              >
                 {/* Image Container with Parallax/Zoom */}
                 <div className="absolute inset-0 overflow-hidden">
                    <motion.img 
                       src={project.thumbnail} 
                       alt={project.title}
                       className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
                 </div>

                 {/* Content Overlay */}
                 <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                       <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="overflow-hidden mb-3">
                              <motion.span 
                                className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono uppercase tracking-widest rounded-full"
                              >
                                  {project.category}
                              </motion.span>
                          </div>
                          <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-3 group-hover:text-cinema-accent transition-colors duration-300">
                              {project.title}
                          </h3>
                          <p className="text-gray-300 text-lg max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                              {project.description}
                          </p>
                       </div>

                       {/* Interactive Play Button */}
                       <div className="relative group/btn">
                          <div className="w-20 h-20 md:w-24 md:h-24 bg-white text-black rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-white/10">
                             <Play size={32} className="ml-1 fill-black" />
                          </div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-white/50 scale-100 opacity-0 group-hover:animate-ping"></div>
                       </div>
                    </div>
                 </div>
              </motion.a>
            ))}
          </div>

          {/* Converting CTA */}
          <div className="flex justify-center">
            <motion.a 
              href="https://drive.google.com/drive/folders/1VLrS5u4jj7UHbt8iAsKab_Uy0quexhMA" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-12 py-6 bg-cinema-800 text-white rounded-2xl overflow-hidden group border border-white/10 hover:border-cinema-accent/50 transition-colors shadow-2xl shadow-black/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cinema-500/20 via-cinema-accent/20 to-cinema-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Shimmer line */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="p-2 bg-cinema-accent rounded-lg text-white">
                   <Layers size={20} />
                </div>
                <div className="text-left">
                   <div className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-0.5">More Work</div>
                   <div className="font-bold text-lg leading-none">View Full Portfolio</div>
                </div>
                <ExternalLink size={18} className="text-gray-500 group-hover:text-white transition-colors ml-2" />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* TOOLKIT SECTION (Services + Tools) */}
      <section id="services" className="py-32 bg-[#080808] border-y border-white/5 relative overflow-hidden z-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
           <SectionTitle subtitle="Editing Styles" title="What I Edit" align="center" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
             
             {/* 1. Short Form - Phone Animation */}
             <motion.div 
               whileHover="hover"
               initial="initial"
               viewport={{ once: true }}
               className="group relative h-96 bg-[#111] rounded-2xl border border-white/5 overflow-hidden flex flex-col hover:border-blue-500/50 transition-colors duration-500"
             >
               <div className="p-8 relative z-20">
                  <h3 className="text-2xl font-bold font-display text-white mb-2">Short-Form</h3>
                  <p className="text-gray-400 text-sm">TikToks, Reels & Shorts. Designed for maximum retention.</p>
               </div>
               
               {/* Visual: Phone Mockup with Feed */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-64 bg-gray-900 rounded-t-3xl border-x-4 border-t-4 border-gray-800 shadow-2xl flex flex-col overflow-hidden">
                  <div className="w-full h-full bg-black relative">
                      {/* Scrolling Content Animation */}
                      <motion.div 
                        animate={{ y: [-200, 0] }} 
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="flex flex-col gap-2 p-2 opacity-50"
                      >
                         {[1, 2, 3, 4].map(i => (
                             <div key={i} className="w-full h-32 bg-gray-800 rounded-lg relative overflow-hidden">
                                <div className="absolute bottom-2 left-2 w-16 h-2 bg-gray-600 rounded"></div>
                                <div className="absolute bottom-6 left-2 w-8 h-8 bg-gray-600 rounded-full"></div>
                             </div>
                         ))}
                      </motion.div>
                      
                      {/* Like Button Pop */}
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                        className="absolute bottom-10 right-4 z-10"
                      >
                          <Heart fill="#ef4444" className="text-red-500" size={24} />
                      </motion.div>
                  </div>
               </div>
               
               {/* Gradient Glow */}
               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
             </motion.div>

             {/* 2. Long Form - Timeline Animation */}
             <motion.div 
               whileHover="hover"
               viewport={{ once: true }}
               className="group relative h-96 bg-[#111] rounded-2xl border border-white/5 overflow-hidden flex flex-col hover:border-purple-500/50 transition-colors duration-500"
             >
               <div className="p-8 relative z-20">
                  <h3 className="text-2xl font-bold font-display text-white mb-2">Long-Form</h3>
                  <p className="text-gray-400 text-sm">YouTube & Documentaries. Pacing, flow, and narrative structure.</p>
               </div>

               {/* Visual: Timeline Interface */}
               <div className="absolute bottom-8 left-8 right-8 h-32 bg-gray-900/50 rounded-lg border border-white/5 flex items-center px-4 relative overflow-hidden">
                  {/* Timeline Tracks */}
                  <div className="w-full space-y-2">
                     <div className="flex gap-1">
                        <div className="w-1/3 h-4 bg-purple-500/30 rounded-sm"></div>
                        <div className="w-1/4 h-4 bg-purple-500/30 rounded-sm"></div>
                        <div className="w-1/3 h-4 bg-purple-500/30 rounded-sm"></div>
                     </div>
                     <div className="flex gap-1 ml-4">
                        <div className="w-1/4 h-4 bg-blue-500/20 rounded-sm"></div>
                        <div className="w-1/2 h-4 bg-blue-500/20 rounded-sm"></div>
                     </div>
                  </div>
                  
                  {/* Playhead Animation */}
                  <motion.div 
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-[2px] bg-red-500 z-10 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                  >
                     <div className="absolute -top-1 -left-[5px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-red-500"></div>
                  </motion.div>
               </div>

               <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
             </motion.div>

             {/* 3. Magnetes Style - Parallax Animation */}
             <motion.div 
               whileHover="hover"
               viewport={{ once: true }}
               className="group relative h-96 bg-[#111] rounded-2xl border border-white/5 overflow-hidden flex flex-col hover:border-pink-500/50 transition-colors duration-500"
             >
               <div className="p-8 relative z-20">
                  <h3 className="text-2xl font-bold font-display text-white mb-2">Magnetes Style</h3>
                  <p className="text-gray-400 text-sm">Multi-layer parallax & Midjourney visuals.</p>
               </div>

               {/* Visual: Parallax Layers */}
               <div className="absolute inset-0 flex items-center justify-center top-12">
                  <motion.div variants={{ hover: { y: 10, x: 5 } }} transition={{ duration: 1 }} className="absolute w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></motion.div>
                  
                  {/* Back Layer */}
                  <motion.div variants={{ hover: { x: -20 } }} transition={{ duration: 0.5 }} className="absolute">
                      <div className="w-32 h-32 border border-pink-500/20 rounded-lg bg-black/50 backdrop-blur-sm transform rotate-6"></div>
                  </motion.div>
                  
                  {/* Middle Layer */}
                  <motion.div variants={{ hover: { x: 0, scale: 1.1 } }} transition={{ duration: 0.5 }} className="absolute">
                      <div className="w-32 h-32 border border-pink-500/40 rounded-lg bg-black/50 backdrop-blur-sm transform -rotate-3"></div>
                  </motion.div>
                  
                  {/* Front Layer */}
                  <motion.div variants={{ hover: { x: 20 } }} transition={{ duration: 0.5 }} className="absolute">
                      <div className="w-32 h-32 border border-pink-500/80 rounded-lg bg-black/50 backdrop-blur-sm shadow-[0_0_20px_rgba(236,72,153,0.3)]"></div>
                  </motion.div>
               </div>
             </motion.div>

             {/* 4. Motion Graphics - Graph Animation */}
             <motion.div 
               whileHover="hover"
               viewport={{ once: true }}
               className="group relative h-96 bg-[#111] rounded-2xl border border-white/5 overflow-hidden flex flex-col hover:border-green-500/50 transition-colors duration-500"
             >
               <div className="p-8 relative z-20">
                  <h3 className="text-2xl font-bold font-display text-white mb-2">Motion Graphics</h3>
                  <p className="text-gray-400 text-sm">Logo animations, titles, and lower thirds.</p>
               </div>

               {/* Visual: Bezier Curve */}
               <div className="absolute bottom-0 left-0 right-0 h-48 px-8">
                  <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                     <motion.path 
                       d="M0,50 C20,50 20,10 50,10 C80,10 80,40 100,40"
                       fill="none"
                       stroke="rgba(34, 197, 94, 0.5)"
                       strokeWidth="1"
                       initial={{ pathLength: 0 }}
                       whileInView={{ pathLength: 1 }}
                       transition={{ duration: 2, ease: "easeInOut" }}
                     />
                     {/* Bouncing Dot */}
                     <motion.circle 
                       r="2"
                       fill="#4ade80"
                       className="filter drop-shadow-[0_0_4px_#4ade80]"
                     >
                       <animateMotion 
                          dur="2s" 
                          repeatCount="indefinite"
                          path="M0,50 C20,50 20,10 50,10 C80,10 80,40 100,40"
                       />
                     </motion.circle>
                  </svg>
               </div>
             </motion.div>

           </div>

           {/* TOOLS SECTION */}
           <div className="mb-24">
              <p className="text-center text-gray-500 font-mono text-sm uppercase tracking-widest mb-12">Creative Arsenal</p>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                 {TOOLS.map((tool) => (
                    <div key={tool.name} className="group flex flex-col items-center gap-4">
                       <div className="w-20 h-20 md:w-24 md:h-24 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110 group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                          <img 
                            src={tool.icon} 
                            alt={tool.name} 
                            className="w-10 h-10 md:w-12 md:h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                          />
                          {/* Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                       </div>
                       <span className="text-xs text-gray-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0">{tool.name}</span>
                    </div>
                 ))}
              </div>
           </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-32 relative z-10 bg-[#050505] overflow-hidden">
         {/* Background ambient glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-cinema-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

         <div className="container mx-auto px-6 relative z-10">
            <SectionTitle subtitle="Reviews" title="Client Feedback" align="center" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
               {TESTIMONIALS.map((t, i) => (
                  <motion.div 
                     key={t.id}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     whileHover={{ y: -5 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: i * 0.1 }}
                     className="bg-gradient-to-b from-white/[0.08] to-transparent border border-white/5 p-8 md:p-10 rounded-3xl relative group overflow-hidden shadow-2xl shadow-black/50"
                  >
                     {/* Hover gradient overlay */}
                     <div className="absolute inset-0 bg-gradient-to-br from-cinema-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     
                     {/* Background Quote Icon */}
                     <Quote className="absolute top-6 right-8 text-white/[0.02] w-32 h-32 -rotate-12 group-hover:text-white/[0.05] group-hover:scale-110 group-hover:rotate-0 transition-all duration-700" />
                     
                     <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                           <div className="flex gap-1 mb-6">
                              {[1,2,3,4,5].map((s) => (
                                 <Star key={s} size={16} className="text-cinema-accent fill-cinema-accent" />
                              ))}
                           </div>
                           
                           <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-8">
                              "{t.quote}"
                           </p>
                        </div>
                        
                        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                           <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-white/20 to-transparent">
                              <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover" />
                           </div>
                           <div>
                              <div className="font-bold text-white text-lg font-display">{t.name}</div>
                              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider group-hover:text-cinema-accent transition-colors">{t.role}</div>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-32 relative z-10 bg-[#050505] overflow-hidden">
        {/* Background elements for pricing specifically */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-transparent via-cinema-900/50 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
           <SectionTitle subtitle="Investment" title="Pricing Packages" align="center" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { 
                  title: "Short-Form", 
                  price: "$10–$25", 
                  unit: "/video",
                  desc: "TikToks, Reels & Shorts",
                  icon: <Smartphone className="text-blue-400" size={24} />,
                  features: ["High Retention Cuts", "Animated Captions", "Sound Design", "Color Grading"],
                  gradient: "from-blue-500/20 to-cyan-500/5",
                  border: "group-hover:border-blue-500/50"
                },
                { 
                  title: "Long-Form", 
                  price: "$40–$80", 
                  unit: "10-20 mins",
                  desc: "YouTube Storytelling",
                  icon: <Film className="text-purple-400" size={24} />,
                  features: ["Narrative Structuring", "B-Roll Sourcing", "Pacing Control", "Music & SFX"],
                  gradient: "from-purple-500/20 to-pink-500/5",
                  border: "group-hover:border-purple-500/50",
                  popular: true
                },
                { 
                  title: "Documentary", 
                  price: "$50–$100", 
                  unit: "/project",
                  desc: "Cinematic Style",
                  icon: <Camera className="text-amber-400" size={24} />,
                  features: ["Deep Storytelling", "Archival Footage", "Cinematic Look", "Immersive Audio"],
                  gradient: "from-amber-500/20 to-orange-500/5",
                  border: "group-hover:border-amber-500/50"
                },
                { 
                  title: "Magnetes Style", 
                  price: "$60", 
                  unit: "/min",
                  desc: "High-End Production",
                  icon: <Layers className="text-emerald-400" size={24} />,
                  features: ["3D Parallax Effects", "Midjourney AI Art", "Complex Compositing", "Premium Visuals"],
                  gradient: "from-emerald-500/20 to-teal-500/5",
                  border: "group-hover:border-emerald-500/50"
                }
              ].map((plan, i) => (
                 <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`group relative bg-cinema-800/30 backdrop-blur-md border border-white/5 rounded-3xl p-6 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${plan.border}`}
                 >
                    {/* Popular Tag */}
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cinema-500 to-cinema-accent text-white text-xs font-bold rounded-full shadow-lg">
                        MOST POPULAR
                      </div>
                    )}

                    {/* Background Gradient on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:scale-110 transition-transform duration-300">
                          {plan.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg">{plan.title}</h3>
                          <p className="text-xs text-gray-400">{plan.desc}</p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">{plan.price}</span>
                          <span className="text-sm text-gray-500">{plan.unit}</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px w-full bg-white/5 mb-6 group-hover:bg-white/10 transition-colors"></div>

                      {/* Features */}
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            <Check className="w-4 h-4 text-cinema-accent mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Button */}
                      <a href="#contact" className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                        Start Project
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative z-10 bg-gradient-to-b from-transparent to-cinema-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div>
              <SectionTitle subtitle="Get in Touch" title="Let's Create Together" />
              <p className="text-gray-400 mb-12 leading-relaxed text-lg font-light">
                Ready to level up your content? Whether it's a single video or a monthly package, I'm here to help you grow.
              </p>
              
              <div className="space-y-6">
                 <div className="group flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-cinema-accent/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-cinema-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                       <Send size={20} className="text-white" />
                    </div>
                    <div>
                       <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email Me</div>
                       <a href="mailto:syedahmedrehmani3@gmail.com" className="text-lg md:text-xl font-display font-medium text-white group-hover:text-cinema-accent transition-colors break-all">syedahmedrehmani3@gmail.com</a>
                    </div>
                 </div>

                 <div className="group flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-cinema-accent/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-green-900/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                       <Heart size={20} className="text-green-400" />
                    </div>
                    <div>
                       <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">WhatsApp</div>
                       <span className="text-xl font-display font-medium text-white">0315 0220495</span>
                    </div>
                 </div>

                 <div className="p-6">
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">Accepted Payments</div>
                    <div className="flex gap-4">
                       <span className="px-3 py-1 bg-white/10 rounded text-sm text-gray-300">Payoneer</span>
                       <span className="px-3 py-1 bg-white/10 rounded text-sm text-gray-300">Binance Pay</span>
                    </div>
                 </div>
              </div>
            </div>
            
            <form className="space-y-6 bg-cinema-800/30 p-8 rounded-3xl border border-white/5 backdrop-blur-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-wider ml-1">Name</label>
                  <input type="text" className="w-full bg-cinema-900 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cinema-accent focus:ring-1 focus:ring-cinema-accent/50 transition-all text-white placeholder-gray-700" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-wider ml-1">Email</label>
                  <input type="email" className="w-full bg-cinema-900 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cinema-accent focus:ring-1 focus:ring-cinema-accent/50 transition-all text-white placeholder-gray-700" placeholder="you@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-wider ml-1">Project Type</label>
                <div className="relative">
                  <select className="w-full bg-cinema-900 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cinema-accent focus:ring-1 focus:ring-cinema-accent/50 transition-all text-white appearance-none cursor-pointer">
                    <option>Short-Form (Reels/TikTok)</option>
                    <option>Long-Form (YouTube)</option>
                    <option>Documentary</option>
                    <option>Motion Graphics</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-wider ml-1">Message</label>
                <textarea rows={4} className="w-full bg-cinema-900 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cinema-accent focus:ring-1 focus:ring-cinema-accent/50 transition-all text-white placeholder-gray-700 resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient-to-r from-cinema-500 to-cinema-accent text-white font-bold rounded-xl shadow-lg shadow-cinema-accent/20 hover:shadow-cinema-accent/40 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                   Send Message 
                   <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
