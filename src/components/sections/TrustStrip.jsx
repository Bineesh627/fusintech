import React from 'react';
import { Globe, Shield, Network } from 'lucide-react';

const TrustStrip = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-[#050505] overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-sm font-medium text-[#A0A0A0] tracking-widest uppercase mb-12 relative z-20">Trusted by Global Entities</p>
        <div className="flex w-full justify-around items-center opacity-40 hover:opacity-100 transition-opacity duration-500 relative z-0 flex-wrap gap-8">
          <div className="flex items-center gap-3 font-display font-bold text-2xl tracking-tight interactive-element hover:text-[#2D7FF9] transition-colors"><Globe size={32}/> Global Defense</div>
          <div className="flex items-center gap-3 font-display font-bold text-2xl tracking-tight interactive-element hover:text-[#00E5FF] transition-colors"><Shield size={32}/> CyberSec Govt</div>
          <div className="flex items-center gap-3 font-display font-bold text-2xl tracking-tight interactive-element hover:text-white transition-colors"><Network size={32}/> Quantum Grid</div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
