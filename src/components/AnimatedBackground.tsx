
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedBackground = () => {
  const { theme } = useTheme();

  const getThemeElements = () => {
    switch (theme) {
      case 'gilded':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-red-900/30 to-amber-900/40" />
            
            {/* Leopard print overlay */}
            <div 
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, #d97706 12px, transparent 13px),
                                  radial-gradient(circle at 40% 40%, #dc2626 8px, transparent 9px),
                                  radial-gradient(circle at 90% 10%, #d97706 10px, transparent 11px),
                                  radial-gradient(circle at 70% 80%, #dc2626 15px, transparent 16px),
                                  radial-gradient(circle at 10% 90%, #d97706 6px, transparent 7px)`,
                backgroundSize: '150px 150px',
              }}
            />
            
            {/* Floating ritual elements */}
            <div className="absolute top-1/5 left-1/6 w-20 h-20 bg-amber-400/20 rounded-full animate-float border-2 border-amber-400/30" />
            <div className="absolute bottom-1/4 right-1/5 w-16 h-16 bg-red-400/25 rounded-full animate-pulse border border-red-400/40" />
            <div className="absolute top-2/3 left-1/3 w-12 h-12 bg-emerald-400/20 rotate-45 animate-bounce" />
            
            {/* Golden sparkle effects */}
            <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-40 animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-50 animate-float" />
          </>
        );
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
      
      {/* Enhanced shimmer overlay for gilded theme */}
      <div className={`absolute inset-0 ${theme === 'gilded' ? 'bg-gradient-to-r from-transparent via-amber-400/10 to-transparent' : 'bg-gradient-to-r from-transparent via-white/5 to-transparent'} animate-pulse`} />
      
      {/* Floating sparkles - more golden for gilded theme */}
      {Array.from({ length: theme === 'gilded' ? 40 : 30 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 ${theme === 'gilded' ? 'bg-amber-400' : 'bg-amber-400'} rounded-full opacity-40 animate-pulse`}
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
