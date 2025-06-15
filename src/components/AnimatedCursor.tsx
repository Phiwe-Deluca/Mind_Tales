
import React, { useEffect, useState } from 'react';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      setTrail(prev => [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prev.slice(0, 8)
      ]);
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50 w-2 h-2 rounded-full bg-pink-400 animate-pulse"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: 1 - (index * 0.1),
            transform: `scale(${1 - (index * 0.1)})`,
          }}
        />
      ))}
      
      <div
        className="fixed pointer-events-none z-50 w-4 h-4 rounded-full border-2 border-pink-400 animate-pulse"
        style={{
          left: position.x - 8,
          top: position.y - 8,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
