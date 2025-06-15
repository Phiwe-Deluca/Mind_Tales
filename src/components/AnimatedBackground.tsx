
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedBackground = () => {
  const { theme } = useTheme();

  const getThemeElements = () => {
    switch (theme) {
      case 'cosmic':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-indigo-900/20" />
            {/* Floating cosmic elements */}
            <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-purple-400/20 rounded-full animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-pink-400/20 rounded-full animate-bounce" />
          </>
        );
      case 'jungle':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-green-900/20 to-teal-900/20" />
            {/* Vine and leaf elements */}
            <img 
              src="/lovable-uploads/9e249634-2bdd-45ea-9112-41450e654ecd.png" 
              alt="mystical vine" 
              className="absolute top-0 left-0 w-64 h-auto opacity-30 animate-float"
            />
            <img 
              src="/lovable-uploads/65f817e7-85d2-4aa8-9ef4-1ea8453fca1f.png" 
              alt="hanging branch" 
              className="absolute top-0 right-0 w-80 h-auto opacity-25 animate-float"
            />
          </>
        );
      case 'mystic':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-yellow-900/20" />
            {/* Mystical elements */}
            <img 
              src="/lovable-uploads/83145c18-a3b6-41c7-b8a2-9f7d4452cb2c.png" 
              alt="mystical lanterns" 
              className="absolute top-1/4 right-1/4 w-32 h-auto opacity-40 animate-float"
            />
            <img 
              src="/lovable-uploads/465a52c4-6871-43bb-b745-76d425bbd857.png" 
              alt="butterfly spirit" 
              className="absolute bottom-1/3 left-1/3 w-24 h-auto opacity-50 animate-bounce"
            />
          </>
        );
      case 'ancestral':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-amber-900/20 to-orange-900/20" />
            {/* Leopard print pattern overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url(/lovable-uploads/aac5c218-ad61-48db-ac5c-093d5f8be63d.png)`,
                backgroundSize: '200px',
                backgroundRepeat: 'repeat',
              }}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {getThemeElements()}
      
      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      
      {/* Floating sparkles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-40 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
