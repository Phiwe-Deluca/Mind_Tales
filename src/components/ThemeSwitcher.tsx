
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, TreePine, Zap, Crown } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: 'cosmic', icon: Sun, color: 'bg-gradient-to-br from-purple-500 to-pink-500', label: 'Cosmic' },
    { name: 'jungle', icon: TreePine, color: 'bg-gradient-to-br from-emerald-500 to-green-600', label: 'Jungle' },
    { name: 'mystic', icon: Zap, color: 'bg-gradient-to-br from-amber-500 to-orange-500', label: 'Mystic' },
    { name: 'ancestral', icon: Crown, color: 'bg-gradient-to-br from-red-600 to-amber-600', label: 'Ancestral' },
  ];

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col space-y-3">
      {themes.map(({ name, icon: Icon, color, label }) => (
        <button
          key={name}
          onClick={() => setTheme(name as any)}
          className={`p-4 rounded-full transition-all duration-500 transform hover:scale-110 backdrop-blur-md border border-white/20 ${
            theme === name 
              ? `${color} text-white shadow-2xl shadow-amber-500/25 scale-110` 
              : 'bg-black/30 text-amber-200/80 hover:bg-black/50'
          }`}
          title={label}
        >
          <Icon className="w-6 h-6" />
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
