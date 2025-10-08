import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import '@/styles/ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          {theme === 'light' ? (
            <Sun size={16} />
          ) : (
            <Moon size={16} />
          )}
        </div>
      </div>
    </button>
  );
}

