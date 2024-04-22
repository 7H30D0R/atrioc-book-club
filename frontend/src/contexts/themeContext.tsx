// themeContext.tsx
import React from 'react';

export type ThemeContextType = {
	darkMode: boolean;
    compactMode: boolean;
    setDarkMode: (mode: boolean) => void;
    setCompactMode: (mode: boolean) => void;
};

const ThemeContext = React.createContext<ThemeContextType>({
	darkMode: false,
	compactMode: false,
    setDarkMode: () => {},
    setCompactMode: () => {}
});

export default ThemeContext;