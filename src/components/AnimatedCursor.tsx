
import React, { useEffect, useState } from 'react';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      setTrail(prev => [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prev.slice(0, 12)
      ]);
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      {/* Floating petals trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50 animate-pulse"
          style={{
            left: point.x - 6,
            top: point.y - 6,
            opacity: 1 - (index * 0.08),
            transform: `scale(${1 - (index * 0.07)}) rotate(${index * 15}deg)`,
          }}
        >
          <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-emerald-400 rounded-full opacity-70"></div>
        </div>
      ))}
      
      {/* Main cursor glow */}
      <div
        className="fixed pointer-events-none z-50 w-8 h-8 rounded-full border-2 border-amber-400/60 bg-amber-400/10 backdrop-blur-sm"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)',
        }}
      />
    </>
  );
};

export default AnimatedCursor;
