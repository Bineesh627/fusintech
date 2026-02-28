import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        w-11 h-11 rounded-full
        bg-[#2D7FF9]/20 border border-[#2D7FF9]/40
        backdrop-blur-md
        flex items-center justify-center
        text-[#00E5FF]
        shadow-[0_0_20px_rgba(45,127,249,0.3)]
        hover:bg-[#2D7FF9]/40 hover:shadow-[0_0_30px_rgba(45,127,249,0.6)] hover:border-[#2D7FF9]/80
        hover:-translate-y-1
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <ChevronUp size={20} strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTop;
