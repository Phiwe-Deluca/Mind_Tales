
import React from 'react';
import { Eye, Heart, Crown, Gem, Star } from 'lucide-react';

const GildedElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Ritual altar symmetry - floating cutout icons */}
      <div className="absolute top-20 left-10 transform rotate-12 opacity-60">
        <Eye className="w-12 h-12 text-amber-400 drop-shadow-lg animate-pulse" />
      </div>
      
      <div className="absolute top-32 right-16 transform -rotate-6 opacity-70">
        <Crown className="w-10 h-10 text-rose-400 drop-shadow-lg animate-float" />
      </div>
      
      <div className="absolute bottom-40 left-20 transform rotate-45 opacity-50">
        <Gem className="w-8 h-8 text-emerald-400 drop-shadow-lg animate-bounce" />
      </div>
      
      <div className="absolute bottom-60 right-24 transform -rotate-12 opacity-60">
        <Heart className="w-14 h-14 text-red-400 drop-shadow-lg animate-pulse" />
      </div>
      
      <div className="absolute top-1/2 left-8 transform rotate-30 opacity-40">
        <Star className="w-6 h-6 text-amber-300 drop-shadow-lg animate-float" />
      </div>
      
      {/* Smoke-like gradient streams */}
      <div className="absolute top-0 left-1/4 w-1 h-32 bg-gradient-to-b from-amber-400/30 to-transparent animate-pulse" />
      <div className="absolute top-0 right-1/3 w-1 h-24 bg-gradient-to-b from-red-400/20 to-transparent animate-pulse delay-500" />
      
      {/* Mystical connecting lines */}
      <div className="absolute top-1/3 left-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent rotate-45" />
      <div className="absolute bottom-1/3 right-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-400/30 to-transparent -rotate-12" />
    </div>
  );
};

export default GildedElements;
