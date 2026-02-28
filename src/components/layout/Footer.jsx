import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNav = (path, hash) => {
    navigate(path);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-[#050505] pt-16 sm:pt-24 pb-8 border-t border-white/5 px-4 sm:px-6 relative overflow-hidden flex flex-col justify-between min-h-[380px] sm:min-h-[420px]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#2D7FF9]/50 to-transparent z-20" />

      {/* Large background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[24vw] sm:text-[18vw] leading-none font-display font-black text-[#0A0A0A] tracking-tighter whitespace-nowrap">
          FUSINTECH
        </span>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16 mb-12 sm:mb-16 relative z-20 w-full mt-6 sm:mt-10">

        {/* Brand */}
        <div className="col-span-2 sm:col-span-2 lg:col-span-1">
          <Link to="/" className="text-xl sm:text-2xl font-display font-bold tracking-tight flex items-center gap-3 mb-4 sm:mb-5 interactive-element text-white">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#2D7FF9] to-[#00E5FF] flex items-center justify-center">
              <span className="text-white text-sm font-bold">F</span>
            </div>
            Fusintech
          </Link>
          <p className="text-[#A0A0A0] text-sm leading-relaxed mb-7">
            Building technology that makes online learning more interactive, responsive, and human.
          </p>
          <div className="flex gap-3">
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#2D7FF9] hover:border-transparent transition-all duration-300 interactive-element hover:-translate-y-1 text-white text-xs font-bold">in</a>
            <a href="#" aria-label="X / Twitter" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 interactive-element hover:-translate-y-1 text-white text-xs font-bold">X</a>
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="font-bold text-xs tracking-widest uppercase mb-6 text-white">Navigate</h4>
          <ul className="space-y-3 text-sm text-[#A0A0A0]">
            <li>
              <button onClick={() => handleNav('/', '')} className="hover:text-[#00E5FF] hover:translate-x-2 transition-all inline-block interactive-element bg-transparent outline-none text-left">
                Home
              </button>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#00E5FF] hover:translate-x-2 transition-all inline-block interactive-element">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/innovations" className="hover:text-[#00E5FF] hover:translate-x-2 transition-all inline-block interactive-element">
                Innovations
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#00E5FF] hover:translate-x-2 transition-all inline-block interactive-element">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Innovations */}
        <div>
          <h4 className="font-bold text-xs tracking-widest uppercase mb-6 text-white">EdTech Platform</h4>
          <ul className="space-y-3 text-sm text-[#A0A0A0]">
            <li><span className="cursor-default">Instant AI Clarification</span></li>
            <li><span className="cursor-default">Adaptive Pacing</span></li>
            <li><span className="cursor-default">Unbroken Learning Flow</span></li>
            <li>
              <Link to="/innovations" className="hover:text-[#00E5FF] hover:translate-x-2 transition-all inline-block interactive-element">
                Get Early Access →
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-xs tracking-widest uppercase mb-6 text-white">Company</h4>
          <ul className="space-y-3 text-sm text-[#A0A0A0]">
            <li>
              <button onClick={() => handleNav('/about', 'founder')} className="hover:text-white hover:translate-x-2 transition-all inline-block interactive-element bg-transparent outline-none text-left">
                Founder
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('/about', 'team')} className="hover:text-white hover:translate-x-2 transition-all inline-block interactive-element bg-transparent outline-none text-left">
                Our Team
              </button>
            </li>
            <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block interactive-element">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full relative border-t border-white/10 pt-6 mt-auto z-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-[10px] md:text-xs text-[#555555] font-mono tracking-[0.1em] uppercase gap-2">
          <p>© {new Date().getFullYear()} Fusin Technology Pvt Ltd. All Rights Reserved.</p>
          <p>System Status: <span className="text-[#00E5FF]">Operational</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
