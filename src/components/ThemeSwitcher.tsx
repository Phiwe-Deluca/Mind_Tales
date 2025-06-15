
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Zap, Skull } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: 'happy', icon: Sun, color: 'bg-yellow-400', label: 'Happy' },
    { name: 'moody', icon: Moon, color: 'bg-indigo-400', label: 'Moody' },
    { name: 'vibey', icon: Zap, color: 'bg-cyan-400', label: 'Vibey' },
    { name: 'angsty', icon: Skull, color: 'bg-red-400', label: 'Angsty' },
  ];

  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-2">
      {themes.map(({ name, icon: Icon, color, label }) => (
        <button
          key={name}
          onClick={() => setTheme(name as any)}
          className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
            theme === name 
              ? `${color} text-white shadow-lg` 
              : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white'
          }`}
          title={label}
        >
          <Icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
