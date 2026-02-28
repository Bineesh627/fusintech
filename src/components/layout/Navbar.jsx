import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import MagneticButton from '../ui/MagneticButton';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path, hash) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== path) {
      // Navigate to the other page first, then we let the browser handle the hash,
      // but setTimeout helps if the page is rendering
      navigate(path);
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Same page
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 pointer-events-none transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-8'}`}>
        <div className="max-w-4xl mx-auto px-4 w-full pointer-events-auto">
          <div className={`flex items-center justify-between border border-white/10 rounded-full p-2 pl-6 pr-2 shadow-2xl transition-all duration-500 ${scrolled ? 'bg-[#0A0C10]/95 backdrop-blur-xl' : 'glass-panel'}`}>
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 z-50 interactive-element">
              <span className="w-2 h-2 rounded-full bg-[#2D7FF9] shadow-[0_0_8px_#2D7FF9]"></span>
              <span className="text-white font-display font-bold tracking-widest uppercase text-sm">Fusintech</span>
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex gap-6 text-sm font-medium text-[#A0A0A0]">
                {/* Desktop Nav Items */}
                {[
                  { label: 'Home', path: '/', hash: '' },
                  { label: 'About', path: '/about', hash: 'about' },
                  { label: 'Innovations', path: '/', hash: 'innovations' }
                ].map((item) => {
                  let isActive = false;
                  
                  if (item.label === 'Home') {
                    // Home is only active if we are on '/' AND there is NO hash.
                    isActive = location.pathname === '/' && !location.hash;
                  } else if (item.label === 'Innovations') {
                    // Innovations is active if we are on '/' AND the hash is exactly '#innovations'
                    isActive = location.pathname === '/' && location.hash === '#innovations';
                  } else if (item.label === 'About') {
                    // About is active if we are on '/about'
                    isActive = location.pathname === '/about';
                  }

                  return (
                    <button 
                      key={item.label}
                      onClick={() => handleNavClick(item.path, item.hash)} 
                      className={`relative group hover:text-white transition-colors interactive-element bg-transparent outline-none py-1 ${isActive ? 'text-white' : ''}`}
                    >
                      {item.label}
                      {/* Animated Underline for Active/Hover State */}
                      <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </button>
                  );
                })}
              </div>
              
              <MagneticButton 
                variant="primary" 
                className="py-2.5 px-6 text-xs font-bold tracking-wider uppercase"
                onClick={() => handleNavClick('/contact', '')}
              >
                Contact
              </MagneticButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-white pr-2 z-50 interactive-element" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#050505]/95 backdrop-blur-2xl z-40 pointer-events-auto flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} lg:hidden`}>
          <div className="flex flex-col gap-8 text-center text-3xl font-display text-[#A0A0A0]">
            {[
              { label: 'Home', path: '/', hash: '', delay: 0 },
              { label: 'About Us', path: '/about', hash: 'about', delay: 100 },
              { label: 'Innovations', path: '/', hash: 'innovations', delay: 200 },
              { label: 'Contact', path: '/contact', hash: '', delay: 300 }
            ].map((item) => {
              let isActive = false;
                  
              if (item.label === 'Home') {
                isActive = location.pathname === '/' && !location.hash;
              } else if (item.label === 'Innovations') {
                isActive = location.pathname === '/' && location.hash === '#innovations';
              } else if (item.label === 'About Us') {
                isActive = location.pathname === '/about';
              } else if (item.label === 'Contact') {
                isActive = location.pathname === '/contact';
              }

              return (
                <button 
                  key={item.label}
                  onClick={() => handleNavClick(item.path, item.hash)} 
                  className={`relative group hover:text-white transition-all interactive-element bg-transparent outline-none w-fit mx-auto ${isActive ? 'text-white translate-x-2' : ''}`}
                  style={{transitionDelay: `${item.delay}ms`}}
                >
                  {item.label}
                  {/* Animated Underline for Mobile Active/Hover State */}
                  <span className={`absolute -bottom-2 left-0 w-full h-[3px] bg-[#00E5FF] shadow-[0_0_12px_#00E5FF] transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
