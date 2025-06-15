
import React from 'react';
import { Sparkles, Moon, Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative py-16 text-center overflow-hidden">
      {/* Mystical background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-amber-900/20 to-red-900/30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzIyNzc0NSIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPC9zdmc+')] opacity-20"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-6 space-x-4">
          <Leaf className="w-8 h-8 text-emerald-400 animate-pulse" />
          <div className="text-center">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-amber-400 via-emerald-400 to-red-400 bg-clip-text text-transparent font-serif">
              Soul Bloom
            </h1>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              <Sparkles className="w-4 h-4 text-amber-400" />
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            </div>
          </div>
          <Moon className="w-8 h-8 text-amber-400 animate-pulse" />
        </div>
        
        <p className="text-xl text-emerald-200 font-light tracking-wide mb-4">
          ✧ Where cosmic energy meets earthly wisdom ✧
        </p>
        
        <div className="flex justify-center space-x-6 mt-8">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-300"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-600"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
