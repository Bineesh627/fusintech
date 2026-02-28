import React from 'react';

/* ── Collaborator data ───────────────────────────────────────── */
const collaborators = [
  {
    name: 'Bhavniyags',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="rgba(255,255,255,0.08)" />
        <text x="14" y="19" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="serif">B</text>
      </svg>
    ),
  },
  {
    name: 'Zieo',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="rgba(255,255,255,0.08)" />
        <text x="14" y="19" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Z</text>
      </svg>
    ),
  },
  {
    name: 'The Buster',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <polygon points="14,3 25,25 3,25" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        <text x="14" y="21" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">TB</text>
      </svg>
    ),
  },
  {
    name: 'Palliative Care',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="14" fill="rgba(255,255,255,0.08)" />
        <path d="M14 7v14M7 14h14" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'NovaTech',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="rgba(45,127,249,0.15)" />
        <text x="14" y="19" textAnchor="middle" fill="#2D7FF9" fontSize="11" fontWeight="bold">NT</text>
      </svg>
    ),
  },
  {
    name: 'QuantumGrid',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="rgba(0,229,255,0.1)" />
        <rect x="7" y="7" width="6" height="6" rx="1" fill="rgba(0,229,255,0.5)" />
        <rect x="15" y="7" width="6" height="6" rx="1" fill="rgba(0,229,255,0.3)" />
        <rect x="7" y="15" width="6" height="6" rx="1" fill="rgba(0,229,255,0.3)" />
        <rect x="15" y="15" width="6" height="6" rx="1" fill="rgba(0,229,255,0.5)" />
      </svg>
    ),
  },
  {
    name: 'CyberSec Govt',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L4 7v8c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V7L14 3z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <text x="14" y="19" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">CSG</text>
      </svg>
    ),
  },
  {
    name: 'Global Defense',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <ellipse cx="14" cy="14" rx="5" ry="11" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="3" y1="14" x2="25" y2="14" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      </svg>
    ),
  },
];

/* ── Component ───────────────────────────────────────────────── */
const TrustStrip = () => {
  // Duplicate for seamless loop
  const items = [...collaborators, ...collaborators];

  return (
    <section className="py-16 border-y border-white/5 overflow-hidden relative">
      {/* ── Background layers ──────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060810] via-[#070910] to-[#060810] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#00E5FF]/4 rounded-full blur-[100px] pointer-events-none" />
      <style>{`
        @keyframes marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-rtl 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Heading */}
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2D7FF9] mb-2">
          Our Collaborators
        </h2>
        <p className="text-[#555] text-sm tracking-widest uppercase">Trusted by Industry Kings</p>
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#060810] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#060810] to-transparent z-10 pointer-events-none" />

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          {items.map((collab, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 mx-10 group cursor-default"
            >
              <div className="transition-transform duration-300 group-hover:scale-110 opacity-60 group-hover:opacity-100">
                {collab.icon}
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white/40 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                {collab.name}
              </span>
              {/* Divider dot */}
              <span className="ml-10 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#00E5FF]/50 transition-colors duration-300 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;

