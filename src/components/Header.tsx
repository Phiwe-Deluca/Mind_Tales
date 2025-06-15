
import React from 'react';
import { Sparkles, Heart, Star } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative py-12 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20 animate-pulse"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-4 space-x-2">
          <Sparkles className="w-8 h-8 text-pink-400 animate-bounce" />
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent pixelated-font">
            ✧･ﾟ: *✧･ﾟ:* MOOD DIARY *:･ﾟ✧*:･ﾟ✧
          </h1>
          <Star className="w-8 h-8 text-cyan-400 animate-spin" />
        </div>
        
        <p className="text-xl text-purple-300 font-medium magazine-font">
          where feelings become art ✨
        </p>
        
        <div className="flex justify-center space-x-4 mt-6">
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-75"></div>
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
