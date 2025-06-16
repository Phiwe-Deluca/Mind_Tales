
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
            {/* Abstract jungle elements */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-emerald-400/10 rounded-full animate-float" />
            <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-green-400/15 rounded-full animate-pulse" />
          </>
        );
      case 'mystic':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-yellow-900/20" />
            {/* Mystical elements */}
            <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-amber-400/15 rounded-full animate-float" />
            <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-orange-400/20 rounded-full animate-bounce" />
          </>
        );
      case 'ancestral':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-amber-900/20 to-orange-900/20" />
            {/* Abstract ancestral elements */}
            <div className="absolute top-1/3 left-1/5 w-36 h-36 bg-red-400/15 rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-44 h-44 bg-amber-400/10 rounded-full animate-float" />
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
