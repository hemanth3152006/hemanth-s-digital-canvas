import { useEffect, useRef } from 'react';

const InteractiveCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBlurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }

      if (cursorBlurRef.current) {
        setTimeout(() => {
          if (cursorBlurRef.current) {
            cursorBlurRef.current.style.left = e.clientX + 'px';
            cursorBlurRef.current.style.top = e.clientY + 'px';
          }
        }, 100);
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-primary rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          boxShadow: '0 0 20px hsl(185, 80%, 50%), 0 0 40px hsl(185, 80%, 50% / 0.5)',
          transition: 'opacity 0.2s ease',
        }}
      />
      
      {/* Blur Cursor Trail */}
      <div
        ref={cursorBlurRef}
        className="fixed w-8 h-8 rounded-full pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          background: 'radial-gradient(circle, hsl(185, 80%, 50% / 0.2), transparent 70%)',
          filter: 'blur(15px)',
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  );
};

export default InteractiveCursor;
