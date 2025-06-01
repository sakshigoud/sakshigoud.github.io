import { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
        
      setIsHovering(isClickable);
    };
    
    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  
  return (
    <>
      {/* Main cursor */}
      <div 
        className="hidden md:block fixed pointer-events-none z-50 w-8 h-8 rounded-full border-2 border-teal-400 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out mix-blend-difference"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          width: isHovering ? '50px' : '20px',
          height: isHovering ? '50px' : '20px',
          opacity: 0.8,
        }}
      ></div>
      
      {/* Cursor dot */}
      <div 
        className="hidden md:block fixed pointer-events-none z-50 w-2 h-2 bg-teal-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: 0.8,
        }}
      ></div>
    </>
  );
};

export default CursorEffect;