import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import ScrambleText from '../ui/ScrambleText';
import MagneticButton from '../ui/MagneticButton';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20, 
        y: (e.clientY / window.innerHeight - 0.5) * 20 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0F1115]">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 bg-mesh opacity-40 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.05)` }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2D7FF9] rounded-full mix-blend-screen filter blur-[180px] opacity-20 animate-pulse pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(calc(-50% + ${-mousePos.x * 2}px), calc(-50% + ${-mousePos.y * 2}px))` }}
      />
      <div 
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#00E5FF] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * 3}px, ${mousePos.y * 3}px)` }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center pb-32">
        <Reveal direction="down" delay={100}>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 glass-panel text-[#00E5FF] text-xs font-semibold tracking-widest uppercase mt-12 mb-8 shadow-[0_0_30px_rgba(0,229,255,0.1)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00E5FF]"></span>
            </span>
            System Online • Core Active
          </div>
        </Reveal>
        
        <Reveal delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] mb-8 tracking-tight drop-shadow-2xl">
            Shaping Tomorrow with<br />
            <span className="relative inline-block mt-2">
               <span className="absolute -inset-2 bg-gradient-to-r from-[#2D7FF9]/20 to-[#00E5FF]/20 blur-2xl rounded-full"></span>
               <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#2D7FF9] to-[#00E5FF]">
                 <ScrambleText text="Intelligent Technology" />
               </span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-lg md:text-2xl text-[#A0A0A0] max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Fusintech architects the adaptive AI and quantum infrastructure that powers the next generation of global industry. <strong className="text-white font-medium">We architect the future.</strong>
          </p>
        </Reveal>

        <Reveal delay={500} direction="up" className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto z-20 relative">
          <MagneticButton variant="primary">
            Explore Innovations <ArrowRight size={18} />
          </MagneticButton>
          <MagneticButton variant="outline">
            Initiate Contact
          </MagneticButton>
        </Reveal>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce z-20 pointer-events-none">
        <span className="text-xs uppercase tracking-widest text-[#00E5FF]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00E5FF] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
