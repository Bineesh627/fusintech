import React from 'react';
import Reveal from '../ui/Reveal';

const teamMembers = [
  {
    name: 'Bineesh S.',
    role: 'Founder & CEO',
    description: 'Visionary leader with a passion for socially impactful technology and inclusive innovation.',
    image: '/founder-image.jpg', // Reusing the same image placeholder
  },
  {
    name: 'Sajid Kuzhiyengal',
    role: 'Managing Director',
    description: 'Brings 22+ years of business leadership and a forward-thinking approach to technology.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Mohammed Ashik',
    role: 'Senior Developer',
    description: 'Full-stack developer specializing in accessible user interfaces and robust architectures.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 px-6 bg-[#050505] relative border-t border-white/5 overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
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
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400"; 
                      }}
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
