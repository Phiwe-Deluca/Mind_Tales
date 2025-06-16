
import React from 'react';
import { Sparkles, Moon, Leaf, Crown, Gem } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { theme } = useTheme();
  
  const getThemeTitle = () => {
    switch (theme) {
      case 'gilded':
        return 'Gilded Jungle';
      default:
        return 'Soul Bloom';
    }
  };
  
  const getThemeSubtitle = () => {
    switch (theme) {
      case 'gilded':
        return '✧ Where sacred meets seductive, glam meets spirit ✧';
      default:
        return '✧ Where cosmic energy meets earthly wisdom ✧';
    }
  };

  return (
    <header className="relative py-16 text-center overflow-hidden">
      {/* Mystical background layers */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${theme === 'gilded' ? 'bg-gradient-to-br from-emerald-900/40 via-red-900/30 to-amber-900/40' : 'bg-gradient-to-br from-emerald-900/30 via-amber-900/20 to-red-900/30'}`}></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzIyNzc0NSIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPC9zdmc+')] opacity-20"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-6 space-x-4">
          {theme === 'gilded' ? <Gem className="w-8 h-8 text-amber-400 animate-pulse" /> : <Leaf className="w-8 h-8 text-emerald-400 animate-pulse" />}
          <div className="text-center">
            <h1 className={`text-7xl font-bold ${theme === 'gilded' ? 'bg-gradient-to-r from-amber-400 via-rose-400 to-red-400' : 'bg-gradient-to-r from-amber-400 via-emerald-400 to-red-400'} bg-clip-text text-transparent font-serif`}>
              {getThemeTitle()}
            </h1>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <div className={`w-12 h-0.5 ${theme === 'gilded' ? 'bg-gradient-to-r from-transparent via-rose-400 to-transparent' : 'bg-gradient-to-r from-transparent via-amber-400 to-transparent'}`}></div>
              {theme === 'gilded' ? <Crown className="w-4 h-4 text-amber-400" /> : <Sparkles className="w-4 h-4 text-amber-400" />}
              <div className={`w-12 h-0.5 ${theme === 'gilded' ? 'bg-gradient-to-r from-transparent via-rose-400 to-transparent' : 'bg-gradient-to-r from-transparent via-amber-400 to-transparent'}`}></div>
            </div>
          </div>
          {theme === 'gilded' ? <Crown className="w-8 h-8 text-rose-400 animate-pulse" /> : <Moon className="w-8 h-8 text-amber-400 animate-pulse" />}
        </div>
        
        <p className={`text-xl ${theme === 'gilded' ? 'text-amber-200' : 'text-emerald-200'} font-light tracking-wide mb-4`}>
          {getThemeSubtitle()}
        </p>
        
        <div className="flex justify-center space-x-6 mt-8">
          <div className={`w-2 h-2 ${theme === 'gilded' ? 'bg-amber-400' : 'bg-emerald-400'} rounded-full animate-pulse`}></div>
          <div className={`w-2 h-2 ${theme === 'gilded' ? 'bg-rose-400' : 'bg-amber-400'} rounded-full animate-pulse delay-300`}></div>
          <div className={`w-2 h-2 ${theme === 'gilded' ? 'bg-red-400' : 'bg-red-400'} rounded-full animate-pulse delay-600`}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
