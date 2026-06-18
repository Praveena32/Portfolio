import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
    theme: 'dark' | 'light';
    toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
        >
            <div className="toggle-track">
                <motion.div
                    className="toggle-thumb"
                    animate={{ x: theme === 'dark' ? 0 : 24 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                    {theme === 'dark' ? (
                        <Moon size={14} className="icon moon" />
                    ) : (
                        <Sun size={14} className="icon sun" />
                    )}
                </motion.div>
            </div>
        </motion.button>
    );
};

export default ThemeToggle;
