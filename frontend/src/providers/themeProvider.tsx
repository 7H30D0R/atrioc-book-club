
// themeProvider.tsx
import React, { useState, ReactNode, FunctionComponent } from 'react';
import ThemeContext, { ThemeContextType } from '../contexts/themeContext';

type ThemeProviderProps = {
	children: ReactNode;
};

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [compactMode, setCompactMode] = useState(false);

    const themeProviderValue: ThemeContextType = {
        darkMode,
        setDarkMode,
        compactMode,
        setCompactMode
    };

    return (
        <ThemeContext.Provider value={themeProviderValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;