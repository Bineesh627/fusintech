import React, { useState, useEffect, useRef } from 'react';
import { Brain, Zap, BookOpen, Cpu, ArrowRight, Sparkles, GraduationCap, Bot, BarChart3, MessageCircle, Focus, Layers } from 'lucide-react';

// ─── Floating Particle ──────────────────────────────────────────────
const Particle = ({ style }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={style}
  />
);

// ─── Animated Counter ────────────────────────────────────────────────
const Counter = ({ target, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1800;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#2D7FF9]">
        {count}{suffix}
      </div>
      <div className="text-[#A0A0A0] text-sm mt-2 font-display tracking-wide uppercase">{label}</div>
    </div>
  );
};

// ─── Feature Card ────────────────────────────────────────────────────
const FeatureCard = ({ icon: Icon, title, description, color, delay }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative border border-white/5 rounded-2xl p-6 transition-all duration-500 cursor-default group overflow-hidden"
      style={{
        background: hovered
          ? `linear-gradient(135deg, rgba(${color},0.08) 0%, rgba(10,12,16,0.95) 100%)`
          : 'rgba(10,12,16,0.8)',
        borderColor: hovered ? `rgba(${color},0.3)` : 'rgba(255,255,255,0.05)',
        animationDelay: `${delay}ms`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 40px rgba(${color},0.1)` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow spot */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none"
        style={{ background: `rgba(${color},0.15)`, opacity: hovered ? 1 : 0 }}
      />

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
        style={{ background: `rgba(${color},0.15)`, border: `1px solid rgba(${color},0.3)` }}
      >
        <Icon size={22} style={{ color: `rgb(${color})` }} />
      </div>

      <h3 className="text-white font-display font-bold text-lg mb-2 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-[#A0A0A0] text-sm leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
};

// ─── Main Page ───────────────────────────────────────────────────────
const InnovationsPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [emailValue, setEmailValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValue.trim()) {
      setSubmitted(true);
      setEmailValue('');
    }
  };

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    style: {
      width: `${Math.random() * 4 + 1}px`,
      height: `${Math.random() * 4 + 1}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      background: i % 3 === 0 ? '#00E5FF' : i % 3 === 1 ? '#2D7FF9' : '#7C3AED',
      opacity: Math.random() * 0.4 + 0.1,
      animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 4}s`,
    },
  }));

  const features = [
    {
      icon: MessageCircle,
      title: 'Instant Clarification',
      description: 'Stuck mid-lesson? Ask naturally the AI answers your specific confusion immediately without pulling you away from the content.',
      color: '0,229,255',
      delay: 0,
    },
    {
      icon: Brain,
      title: 'Adaptive Pacing',
      description: 'Lessons respond to your understanding in real time, moving faster where you\'re strong and slowing down where you need it.',
      color: '45,127,249',
      delay: 100,
    },
    {
      icon: Focus,
      title: 'Unbroken Flow',
      description: 'No more pausing to search another site. Everything you need to understand a concept exists within the same session.',
      color: '124,58,237',
      delay: 200,
    },
    {
      icon: Bot,
      title: 'AI-Guided Experience',
      description: 'Rather than passive content consumption, the system creates an environment where learning feels guided and responsive throughout.',
      color: '16,185,129',
      delay: 300,
    },
    {
      icon: BarChart3,
      title: 'Deeper Understanding',
      description: 'Interactive clarification builds real comprehension not just completion. Learners finish sessions with genuine confidence.',
      color: '251,146,60',
      delay: 400,
    },
    {
      icon: BookOpen,
      title: 'Smarter Study Process',
      description: 'A smoother, more focused study process that reduces frustration and keeps learners engaged from start to finish.',
      color: '236,72,153',
      delay: 500,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes scan {
          0% { top: -2px; opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor-blink { animation: blink 1s step-end infinite; }
        .scan-line {
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00E5FF, transparent);
          animation: scan 3s linear infinite;
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col px-6 pt-30">
        {/* Dynamic cursor glow */}
        <div
          className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 transition-all duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)',
            left: mousePos.x - 250,
            top: mousePos.y - 250,
          }}
        />

        {/* Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#2D7FF9]/8 blur-[140px] pointer-events-none" style={{ animation: 'pulse-glow 6s ease-in-out infinite' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/8 blur-[120px] pointer-events-none" style={{ animation: 'pulse-glow 8s ease-in-out infinite 2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#00E5FF]/5 blur-[100px] pointer-events-none" />

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p) => <Particle key={p.id} style={p.style} />)}
        </div>

        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Content — centred in the remaining space */}
        <div className="relative z-10 text-center max-w-5xl mx-auto w-full flex-1 flex flex-col items-center justify-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Sparkles size={14} className="text-[#00E5FF]" />
            <span className="text-[#00E5FF] text-xs font-bold tracking-widest uppercase">Coming Soon</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] cursor-blink" />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-6">
            <span className="block text-white">The Future of</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] via-[#2D7FF9] to-[#7C3AED]">
              Learning is AI
            </span>
          </h1>

          <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            Most online courses make you pause, rewind, and search elsewhere when you're confused.
            We're building something that <span className="text-white font-medium">responds to you in real time</span> keeping your focus intact and learning flowing.
          </p>

          {/* CTA — Notify Me */}
          <div className="max-w-md w-full mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex gap-2 p-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                <input
                  type="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-transparent text-white text-sm placeholder:text-[#555] outline-none pl-4 font-light"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#00E5FF] to-[#2D7FF9] text-black text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-full hover:shadow-[0_0_24px_rgba(0,229,255,0.4)] transition-all duration-300 hover:scale-105 shrink-0"
                >
                  Notify Me <ArrowRight size={14} />
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 p-4 bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded-full">
                <Zap size={16} className="text-[#00E5FF]" />
                <span className="text-[#00E5FF] text-sm font-semibold">You're on the list! We'll reach out soon.</span>
              </div>
            )}
            <p className="text-[#555] text-xs mt-3">Be the first to get early access. No spam, ever.</p>
          </div>
        </div>


      </section>

      {/* ── PROBLEM STATEMENT ─────────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Layers size={16} className="text-[#7C3AED]" />
              <span className="text-[#7C3AED] text-xs font-bold tracking-widest uppercase">The Problem</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Learning Shouldn't Feel Like{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#2D7FF9]">Searching in the Dark</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Today, most online learning platforms rely on predefined video content. When a learner gets confused mid-lesson,
              they must pause, search elsewhere, or rewatch breaking concentration and reducing efficiency.
            </p>
          </div>

          {/* Problem vs Solution comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Problem side */}
            <div className="relative border border-red-500/10 bg-red-500/5 rounded-2xl p-8">
              <div className="absolute top-4 right-4 text-xs text-red-400/60 font-mono uppercase tracking-widest">Today</div>
              <h3 className="text-white font-display font-bold text-xl mb-6">Passive Consumption</h3>
              <ul className="space-y-4">
                {[
                  'Confusing moments force you to pause and leave',
                  'Answers require switching between multiple platforms',
                  'Content moves at a fixed pace not yours',
                  'Rewatching wastes time without improving clarity',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#A0A0A0] text-sm">
                    <span className="mt-1 w-4 h-4 rounded-full border border-red-500/30 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution side */}
            <div className="relative border border-[#00E5FF]/10 bg-[#00E5FF]/5 rounded-2xl p-8">
              <div className="absolute top-4 right-4 text-xs text-[#00E5FF]/60 font-mono uppercase tracking-widest">Fusintech</div>
              <h3 className="text-white font-display font-bold text-xl mb-6">Guided & Responsive</h3>
              <ul className="space-y-4">
                {[
                  'Instant clarification exactly when confusion occurs',
                  'Everything you need, within one focused environment',
                  'Lessons adapt in real time to your understanding',
                  'Stay in flow no context switching required',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#A0A0A0] text-sm">
                    <span className="mt-1 w-4 h-4 rounded-full border border-[#00E5FF]/30 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]/60" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D7FF9]/5 via-transparent to-[#7C3AED]/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <Counter target={3} suffix="x" label="Faster Clarification" />
          <Counter target={80} suffix="%" label="Less Platform Switching" />
          <Counter target={100} suffix="%" label="Personalised Pace" />
          <Counter target={24} suffix="/7" label="AI Always On" />
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Cpu size={16} className="text-[#00E5FF]" />
              <span className="text-[#00E5FF] text-xs font-bold tracking-widest uppercase">What Learners Get</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Built Around <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#2D7FF9]">Your Understanding.</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto font-light">
              The goal isn't more content it's better delivery. Every feature improves
              how content is <span className="text-white">experienced</span>, not just consumed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feat) => (
              <FeatureCard key={feat.title} {...feat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE TERMINAL ──────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative border border-white/10 rounded-2xl overflow-hidden bg-[#0A0C10] shadow-2xl">
            {/* Scan line */}
            <div className="scan-line" />

            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0D1117]">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              <span className="text-[#555] text-xs ml-3 font-mono">fusintech-ai ~ edtech-preview</span>
            </div>

            {/* Terminal body */}
            <div className="p-6 font-mono text-sm space-y-3">
              <div>
                <span className="text-[#00E5FF]">fusintech</span>
                <span className="text-[#555]">@ai</span>
                <span className="text-white">:~$ </span>
                <span className="text-[#A0A0A0]">initialize learning-engine --mode=adaptive</span>
              </div>
              <div className="text-green-400">✓ AI engine initialized successfully</div>
              <div className="text-[#555]">→ Analyzing learner profile...</div>
              <div className="text-[#555]">→ Building personalized curriculum...</div>
              <div className="text-[#00E5FF]">→ Curriculum ready. 147 modules queued.</div>
              <div className="mt-2">
                <span className="text-[#00E5FF]">fusintech</span>
                <span className="text-[#555]">@ai</span>
                <span className="text-white">:~$ </span>
                <span className="text-[#A0A0A0]">status --verbose</span>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-xs pl-2 mt-1">
                <div><span className="text-[#555]">Platform:</span> <span className="text-white">Fusintech EdTech</span></div>
                <div><span className="text-[#555]">Status:</span> <span className="text-yellow-400">Under Development</span></div>
                <div><span className="text-[#555]">AI Model:</span> <span className="text-white">Proprietary LLM v1</span></div>
                <div><span className="text-[#555]">Launch:</span> <span className="text-white">2025 Q3 (est.)</span></div>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-[#00E5FF]">fusintech</span>
                <span className="text-[#555]">@ai</span>
                <span className="text-white">:~$ </span>
                <span className="text-white cursor-blink">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="py-32 px-6 text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2D7FF9]/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <GraduationCap size={48} className="text-[#00E5FF] mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Learning that actually <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#7C3AED]">listens to you.</span>
          </h2>
          <p className="text-[#A0A0A0] text-lg mb-10 font-light">
            Be the first to experience a platform where curiosity is never interrupted join our early access waitlist.
          </p>

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00E5FF] to-[#2D7FF9] text-black font-bold tracking-wider uppercase text-sm px-8 py-4 rounded-full hover:shadow-[0_0_40px_rgba(0,229,255,0.35)] transition-all duration-300 hover:scale-105"
          >
            <Zap size={16} /> Get Early Access
          </a>
        </div>
      </section>
    </div>
  );
};

export default InnovationsPage;
