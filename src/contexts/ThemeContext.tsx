import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeType, Theme } from '../types/theme';

interface ThemeContextType {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes: Record<ThemeType, Theme> = {
  theme1: {
    name: 'theme1',
    displayName: 'Theme 1',
    colors: {
      primary: '#3B82F6',
      secondary: '#6B7280',
      background: '#FFFFFF',
      surface: '#F9FAFB',
      text: '#1F2937',
      textSecondary: '#6B7280',
      accent: '#10B981',
      border: '#E5E7EB',
    },
    fonts: {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
    },
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
    },
    layout: {
      type: 'minimalist',
    },
  },
  theme2: {
    name: 'theme2',
    displayName: 'Theme 2',
    colors: {
      primary: '#8B5CF6',
      secondary: '#A78BFA',
      background: '#1F2937',
      surface: '#374151',
      text: '#F9FAFB',
      textSecondary: '#D1D5DB',
      accent: '#F59E0B',
      border: '#4B5563',
    },
    fonts: {
      heading: 'Georgia, serif',
      body: 'Georgia, serif',
    },
    spacing: {
      xs: '0.75rem',
      sm: '1.25rem',
      md: '2rem',
      lg: '2.5rem',
      xl: '3.5rem',
    },
    layout: {
      type: 'sidebar',
      sidebarWidth: '250px',
    },
  },
  theme3: {
    name: 'theme3',
    displayName: 'Theme 3',
    colors: {
      primary: '#EC4899',
      secondary: '#F472B6',
      background: '#FDF2F8',
      surface: '#FFFFFF',
      text: '#831843',
      textSecondary: '#BE185D',
      accent: '#06B6D4',
      border: '#FBCFE8',
    },
    fonts: {
      heading: 'Pacifico, cursive',
      body: 'Comic Sans MS, cursive',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.75rem',
      md: '1.25rem',
      lg: '1.75rem',
      xl: '2.5rem',
    },
    layout: {
      type: 'card-grid',
    },
  },
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('theme1');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
    
    // Apply theme to document for CSS custom properties
    const themeData = themes[theme];
    const root = document.documentElement;
    
    Object.entries(themeData.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
    Object.entries(themeData.fonts).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value);
    });
    
    Object.entries(themeData.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });
  };

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  const value: ThemeContextType = {
    currentTheme,
    setTheme,
    theme: themes[currentTheme],
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 