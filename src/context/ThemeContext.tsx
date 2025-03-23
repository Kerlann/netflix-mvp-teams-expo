import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';

// Define theme colors
export const Colors = {
  dark: {
    background: '#000000',
    card: '#121212',
    text: '#FFFFFF',
    secondaryText: '#AAAAAA',
    accent: '#E50914', // Netflix red
    tabBar: '#121212',
    border: '#222222',
  },
  light: {
    background: '#F5F5F5',
    card: '#FFFFFF',
    text: '#000000',
    secondaryText: '#555555',
    accent: '#E50914', // Netflix red
    tabBar: '#FFFFFF',
    border: '#DDDDDD',
  },
};

// Theme context type
type ThemeType = {
  dark: boolean;
  colors: typeof Colors.dark | typeof Colors.light;
  toggleTheme: () => void;
};

// Create context
const ThemeContext = createContext<ThemeType | undefined>(undefined);

// Provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const deviceColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(deviceColorScheme === 'dark');
  
  // Toggle theme function
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };
  
  // The theme value
  const theme = {
    dark: isDark,
    colors: isDark ? Colors.dark : Colors.light,
    toggleTheme,
  };
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = (): ThemeType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
