import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-8 border-t border-white/5 px-6 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#2D7FF9]/50 to-transparent z-20"></div>
      
      {/* Massive Background Text (Centered across entire footer, behind everything) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[18vw] leading-none font-display font-black text-[#0A0A0A] tracking-tighter whitespace-nowrap">
          FUSINTECH
        </span>
      </div>

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 relative z-20 w-full mt-10">
        <div className="lg:col-span-1">
          <a href="#" className="text-3xl font-display font-bold tracking-tight flex items-center gap-3 mb-6 interactive-element text-white">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2D7FF9] to-[#00E5FF] flex items-center justify-center">
              <span className="text-white text-lg font-bold">F</span>
            </div>
            Fusintech
          </a>
          <p className="text-[#A0A0A0] text-sm leading-relaxed mb-8">
            Architecting the adaptive infrastructure for tomorrow's enterprises.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#2D7FF9] hover:border-transparent transition-all duration-300 interactive-element hover:-translate-y-1 text-white">in</a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 interactive-element hover:-translate-y-1 text-white">X</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm tracking-widest uppercase mb-8 text-white drop-shadow-md">Divisions</h4>
          <ul className="space-y-4 text-sm text-[#A0A0A0]">
            <li><a href="#" className="hover:text-[#00E5FF] hover:translate-x-2 transition-all inline-block interactive-element">Neural AI Frameworks</a></li>
            <li><a href="#" className="hover:text-[#00E5FF] hover:translate-x-2 transition-all inline-block interactive-element">Quantum Encryption</a></li>
            <li><a href="#" className="hover:text-[#00E5FF] hover:translate-x-2 transition-all inline-block interactive-element">Orbital Data Systems</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm tracking-widest uppercase mb-8 text-white drop-shadow-md">Corporate</h4>
          <ul className="space-y-4 text-sm text-[#A0A0A0]">
            <li><Link to="/about" className="hover:text-white hover:translate-x-2 transition-all inline-block interactive-element">About Fusintech</Link></li>
            <li><Link to="/about#founder" className="hover:text-white hover:translate-x-2 transition-all inline-block interactive-element" onClick={() => { setTimeout(() => { const el = document.getElementById('founder'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>Founder (Bineesh S.)</Link></li>
            <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block interactive-element">Investor Relations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm tracking-widest uppercase mb-8 text-white drop-shadow-md">Compliance</h4>
          <ul className="space-y-4 text-sm text-[#A0A0A0]">
            <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block interactive-element">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block interactive-element">Cybersecurity Protocols</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full relative border-t border-white/10 pt-8 mt-auto z-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-[10px] md:text-sm text-[#555555] font-mono tracking-[0.1em] uppercase">
          <p>© {new Date().getFullYear()} Fusin Technology Pvt Ltd. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">SYSTEM STATUS: <span className="text-[#00E5FF]">OPTIMAL</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
