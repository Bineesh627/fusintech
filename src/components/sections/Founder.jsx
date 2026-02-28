import React from 'react';
import Reveal from '../ui/Reveal';
import TiltElement from '../ui/TiltElement';
import SpotlightCard from '../ui/SpotlightCard';

const Founder = () => {
  return (
    <section id="founder" className="pt-[120px] pb-24 px-6 bg-[#0A0C10] relative overflow-hidden">
      {/* Dynamic Glowing orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-[#2D7FF9]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-7 order-2 lg:order-1 relative z-10 space-y-8 pr-0 lg:pr-4">
            <Reveal direction="up">
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-[#00E5FF] leading-snug tracking-tight">
                The Unyielding Spirit of Fusintech
              </h2>
            </Reveal>
            
            <Reveal delay={200} direction="up">
              <div className="relative">
                <span className="absolute -top-3 -left-3 text-5xl text-white/20 font-serif leading-none opacity-50 block rotate-180">"</span>
                <p className="text-xl md:text-[1.4rem] font-medium text-white/90 italic leading-relaxed pl-6 relative z-10 font-display">
                  "Fusintech is more than a company—it's a living testament to what belief can achieve. Belief in technology. Belief in purpose."
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={400} direction="up">
              <div className="space-y-6 text-[#A0A0A0] text-base md:text-[1.05rem] leading-[1.8] font-light font-display">
                <p>
                  In the luminous dawn of its creation, a bold and visionary creator, Bineesh S., embarked on a transformative journey that would give birth to Fusintech. What began as a youthful dream soon evolved into a vibrant digital movement, driven by a belief in technology's power not just to innovate, but to uplift.
                </p>
                <p>
                  His journey, marked by thoughtful pauses and quiet resilience, echoes a deeper truth: that strength is often sculpted not by the absence of obstacles, but by the unwavering pursuit of vision despite them.
                </p>
              </div>
            </Reveal>
            
            {/* Signature Block */}
            <Reveal delay={600} direction="up" className="pt-6 flex items-center gap-6">
              <div className="w-24 h-12 flex items-center justify-center opacity-80">
                <svg viewBox="0 0 200 80" className="w-full h-full text-white/80 drop-shadow-md">
                  <path fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" 
                    d="M30,50 C50,20 20,20 40,20 C70,20 70,40 55,55 C40,70 20,45 40,35 C60,25 90,40 85,55 C80,70 100,25 110,40 C120,55 110,70 120,55 C130,40 140,20 150,40 C160,60 140,70 155,55 C170,40 160,20 175,30 C190,40 170,60 185,50" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white tracking-wider font-display">Bineesh S.</h4>
                <p className="text-[#00E5FF]/80 text-[13px] font-bold tracking-[0.2em] uppercase mt-1">Founder & CEO</p>
              </div>
            </Reveal>
          </div>

          {/* Right: Image Card */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative z-10 w-full">
            <Reveal direction="left">
              <TiltElement className="interactive-element w-full">
                <SpotlightCard className="aspect-[4/5] w-full max-w-md mx-auto relative group shadow-2xl rounded-2xl overflow-hidden border border-white/10 !p-0">
                  {/* Your Image Goes Here */}
                  <img 
                    src="/founder-image.jpg" // Place your image in the public folder as founder-image.jpg
                    alt="Bineesh S." 
                    className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105" 
                    onError={(e) => {
                      // Fallback image so it doesn't look broken while you haven't uploaded yours
                      e.target.onerror = null; 
                      e.target.src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"; 
                    }}
                  />
                  
                  {/* Subtle gradient overlay at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-transparent z-20 opacity-80 pointer-events-none" />
                  
                  {/* Scanning Line Effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#00E5FF]/50 shadow-[0_0_10px_#00E5FF] animate-[bounce_4s_infinite] opacity-50 z-30 pointer-events-none" />
                </SpotlightCard>
              </TiltElement>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
