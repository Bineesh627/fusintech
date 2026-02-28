import React from 'react';
import { Cpu, Network, Rocket } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SpotlightCard from '../ui/SpotlightCard';

const Innovations = () => {
  return (
    <section id="innovations" className="py-32 px-6 relative overflow-hidden">
      {/* ── Background layers ─────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#07080D] via-[#0F1115] to-[#090810] pointer-events-none" />
      {/* Central purple depth orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#7C3AED]/8 rounded-full blur-[160px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
      {/* Blue right accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[600px] bg-[#2D7FF9]/8 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '12s', animationDelay: '1s' }} />
      {/* Square grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Bottom fade-out */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20 relative z-10">
          <Reveal direction="down">
            <h2 className="text-sm font-bold text-[#2D7FF9] tracking-widest uppercase mb-4">Capabilities</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold">Engineering the Impossible.</h3>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] relative z-10">
          
          {/* Card 1: AI (Large) */}
          <Reveal delay={100} direction="up" className="md:col-span-2 md:row-span-2 interactive-element">
            <SpotlightCard className="h-full w-full p-10 flex flex-col justify-end relative group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2D7FF9]/20 via-[#0F1115] to-[#0F1115] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute right-0 top-0 w-full h-full opacity-30 bg-mesh pointer-events-none" />
              
              <div className="relative z-20 max-w-lg">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2D7FF9] to-blue-900 flex items-center justify-center mb-8 text-white shadow-lg">
                  <Cpu size={32} />
                </div>
                <h4 className="text-4xl font-display font-bold mb-4 text-white">Neural AI Frameworks</h4>
                <p className="text-[#A0A0A0] text-lg">Recursive learning models capable of managing complex enterprise logistics, energy grids, and digital infrastructure autonomously without human intervention.</p>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Card 2: Quantum */}
          <Reveal delay={200} direction="up" className="interactive-element">
            <SpotlightCard className="h-full w-full p-8 flex flex-col justify-between group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#00E5FF]/20 rounded-full blur-[40px] group-hover:bg-[#00E5FF]/40 transition-colors duration-500" />
              <div className="relative z-20">
                <div className="w-14 h-14 rounded-xl glass-panel flex items-center justify-center mb-6">
                  <Network className="text-[#00E5FF]" size={28} />
                </div>
              </div>
              <div className="relative z-20">
                <h4 className="text-2xl font-display font-bold mb-3 text-white">Quantum Systems</h4>
                <p className="text-[#A0A0A0] text-base leading-relaxed">Processing power and cryptographic protocols beyond binary limitations.</p>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Card 3: Space */}
          <Reveal delay={300} direction="up" className="interactive-element">
            <SpotlightCard className="h-full w-full p-8 flex flex-col justify-between group">
              <div className="absolute inset-0 bg-mesh opacity-20 group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative z-20">
                <div className="w-14 h-14 rounded-xl glass-panel flex items-center justify-center mb-6">
                  <Rocket className="text-white" size={28} />
                </div>
              </div>
              <div className="relative z-20">
                <h4 className="text-2xl font-display font-bold mb-3 text-white">Orbital Data</h4>
                <p className="text-[#A0A0A0] text-base leading-relaxed">High-latency tolerant software architected for satellite constellations.</p>
              </div>
            </SpotlightCard>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Innovations;
