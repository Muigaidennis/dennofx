import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useUIStore } from '@/store/uiStore';
import Button from './Button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useUIStore();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="p-2"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </Button>
  );
};

export default ThemeToggle;
