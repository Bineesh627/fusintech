import React from 'react';
import Reveal from '../ui/Reveal';
import bineeshImg from '../../assets/bineesh.jpeg';

const teamMembers = [
  {
    name: 'Bineesh S.',
    role: 'Founder & CEO',
    description: 'Visionary leader with a passion for socially impactful technology and inclusive innovation.',
    image: bineeshImg,
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 px-6 relative border-t border-white/5 overflow-hidden">
      {/* ── Background layers ─────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#060A09] via-[#050505] to-[#060810] pointer-events-none" />
      {/* Teal top-left orb */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[400px] bg-[#10B981]/8 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      {/* Blue bottom-right orb */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2D7FF9]/8 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '11s', animationDelay: '3s' }} />
      {/* Dot-grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.15) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      {/* Top glow line */}
      <div className="absolute top-0 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-[#10B981]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <Reveal direction="up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-[#00E5FF]">
              Our Team
            </h2>
            <p className="text-[#A0A0A0] text-lg font-display tracking-wide">
              The brilliant minds behind our technology
            </p>
          </Reveal>
        </div>

        {/* Team Grid */}
        <div className={`grid gap-8 relative z-10 ${
          teamMembers.length === 1
            ? 'grid-cols-1 max-w-sm mx-auto'
            : teamMembers.length === 2
            ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {teamMembers.map((member, index) => (
            <Reveal key={index} delay={index * 150} direction="up">
              <div className="bg-[#0A0C10] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00E5FF]/30 transition-colors duration-500 group flex flex-col h-full">
                {/* Image Container */}
                <div className="p-4 pb-0">
                  <div className="aspect-[4/5] w-full rounded-xl overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Inner glowing accent */}
                    <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none group-hover:border-[#00E5FF]/20 transition-colors duration-500" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-1 font-display group-hover:text-[#00E5FF] transition-colors">{member.name}</h3>
                  <p className="text-[#00E5FF] text-xs tracking-widest uppercase font-semibold mb-4">{member.role}</p>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed font-light mt-auto">
                    {member.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
