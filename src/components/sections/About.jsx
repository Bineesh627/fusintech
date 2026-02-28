import React from 'react';
import { Rocket, Cpu, Shield, Network, Fingerprint } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SpotlightCard from '../ui/SpotlightCard';
import TiltElement from '../ui/TiltElement';

const About = () => {
  return (
    <section id="aboutus" className="py-32 px-6 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-mesh opacity-10 mask-image:linear-gradient(to_left,black,transparent)]" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left: Content */}
        <div>
          <Reveal direction="left">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#2D7FF9]"></div>
              <h2 className="text-sm font-bold text-[#2D7FF9] tracking-widest uppercase">About Us</h2>
            </div>
            <h3 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">Where Future<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Meets Intelligence.</span></h3>
          </Reveal>
          
          <Reveal delay={200} direction="up">
            <p className="text-[#A0A0A0] text-xl leading-relaxed mb-10 font-light">
              Established as a sovereign technological entity, Fusin Technology was founded on a singular premise: The future belongs to those who can fuse distinct technologies into a unified intelligent force. We dismantle the barriers between hardware and software, designing solutions that empower enterprises to think smarter and act autonomously.
            </p>
          </Reveal>

          <Reveal delay={300} direction="up">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Future-First', desc: 'Architecting for 2030 standards.', icon: <Rocket size={20}/> },
                { title: 'Super-Intelligent', desc: 'Autonomous algorithmic adaptation.', icon: <Cpu size={20}/> },
                { title: 'Tech-Sovereignty', desc: 'Independent enterprise power.', icon: <Shield size={20}/> },
                { title: 'Quantum-Ready', desc: 'Beyond binary limitations.', icon: <Network size={20}/> }
              ].map((item, i) => (
                <SpotlightCard key={i} className="p-6">
                  <div className="text-[#00E5FF] mb-4">{item.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </SpotlightCard>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: 3D Interactive Visual */}
        <Reveal delay={400} direction="right" className="flex justify-center">
          <TiltElement className="w-full max-w-md aspect-square relative interactive-element">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2D7FF9]/20 to-[#00E5FF]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="w-full h-full glass-panel rounded-3xl p-8 flex items-center justify-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20">
              {/* 3D Core representation */}
              <div className="relative w-48 h-48 animate-[float_6s_ease-in-out_infinite]">
                <div className="absolute inset-0 rounded-full border-2 border-[#2D7FF9] animate-[spin_8s_linear_infinite]" style={{borderStyle: 'dashed'}} />
                <div className="absolute inset-4 rounded-full border border-[#00E5FF]/60 animate-[spin_12s_linear_infinite_reverse]" />
                <div className="absolute inset-8 rounded-full border border-white/30 animate-[spin_16s_linear_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#2D7FF9] to-[#00E5FF] shadow-[0_0_60px_#00E5FF] rotate-45 flex items-center justify-center">
                     <Fingerprint className="text-white -rotate-45 opacity-80" size={32} />
                  </div>
                </div>
              </div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-xs font-mono text-[#A0A0A0] uppercase tracking-wider">
                <span>Core Diagnostics</span>
                <span className="text-[#00E5FF]">Optimal</span>
              </div>
            </div>
          </TiltElement>
        </Reveal>

      </div>
    </section>
  );
};

export default About;
