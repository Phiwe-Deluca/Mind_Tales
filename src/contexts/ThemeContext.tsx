
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'cosmic' | 'jungle' | 'mystic' | 'ancestral';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('cosmic');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme} transition-all duration-1000 min-h-screen`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
