import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Hide cursor on touch/mobile devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'button' || e.target.tagName.toLowerCase() === 'a' || e.target.closest('.interactive-element')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Inner Dot */}
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-[#00E5FF] rounded-full pointer-events-none z-[9999] mix-blend-screen transition-transform duration-75"
        style={{ transform: `translate3d(${mousePos.x - 6}px, ${mousePos.y - 6}px, 0) scale(${isHovering ? 0 : 1})` }}
      />
      {/* Outer Ring */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-12 h-12 border border-[#2D7FF9] rounded-full pointer-events-none z-[9998] mix-blend-screen transition-all duration-300 ease-out flex items-center justify-center"
        style={{ 
          marginLeft: '-24px', 
          marginTop: '-24px',
          backgroundColor: isHovering ? 'rgba(45,127,249,0.1)' : 'transparent',
          transform: `scale(${isHovering ? 1.5 : 1})`
        }}
      />
    </>
  );
};

export default CustomCursor;

