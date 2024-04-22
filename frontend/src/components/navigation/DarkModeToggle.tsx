import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import ThemeContext from '../../contexts/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';

function DarkModleToggle() {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    function handleToggle() {
        const mode  = !darkMode;

        setDarkMode(mode);
        document.documentElement.setAttribute(
            'data-bs-theme', mode ? 'dark' : 'light'
        );
    }
    
    return (
        <Button
            title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            variant={darkMode ? 'dark' : 'outline-dark' }
            className='rounded-circle' 
            onClick={handleToggle}
        >
            {darkMode ? (
                <FontAwesomeIcon icon={faSun} />
            ) : ( 
                <FontAwesomeIcon icon={faMoon} /> 
            )}
        </Button>
    )
}

export default DarkModleToggle;