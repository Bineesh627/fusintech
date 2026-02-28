import React, { useState, useRef } from 'react';

const MagneticButton = ({ children, variant = 'primary', className = '', onClick }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3; // Increased magnetism
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const baseStyle = "relative px-8 py-3.5 rounded-full overflow-hidden transition-all duration-300 font-medium tracking-wide border flex items-center justify-center gap-2 group cursor-none";
  const variants = {
    primary: "bg-[#2D7FF9] border-[#2D7FF9] text-white shadow-[0_0_20px_rgba(45,127,249,0.2)] hover:shadow-[0_0_40px_rgba(45,127,249,0.6)]",
    outline: "bg-transparent border-white/20 text-white hover:border-[#2D7FF9] hover:bg-[#2D7FF9]/10"
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      className={`${baseStyle} ${variants[variant]} ${className} interactive-element`}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out_infinite]" />
      <span className="relative z-10 flex items-center gap-2 pointer-events-none">{children}</span>
    </button>
  );
};

export default MagneticButton;
