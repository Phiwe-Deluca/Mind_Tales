
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedBackground = () => {
  const { theme } = useTheme();

  const getThemeGradient = () => {
    const gradients = {
      happy: 'from-yellow-100 via-pink-100 to-orange-100',
      moody: 'from-indigo-100 via-purple-100 to-blue-100',
      vibey: 'from-cyan-100 via-green-100 to-teal-100',
      angsty: 'from-red-100 via-orange-100 to-pink-100',
    };
    return gradients[theme];
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 bg-gradient-to-br ${getThemeGradient()} opacity-50 animate-pulse`} />
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-200 rounded-full opacity-30 animate-bounce" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-bounce delay-1000" />
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-cyan-200 rounded-full opacity-30 animate-bounce delay-500" />
      
      {/* Sparkles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
