import React, {useEffect, useState} from 'react';

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('dark-mode');
        if (savedMode) {
            setIsDark(savedMode === 'true')
        }
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }

        localStorage.setItem('dark-mode', String(isDark));
    }, [isDark]);

    return (
        <button onClick={() => setIsDark(prev => !prev)}>
            Toggle Dark Mode
        </button>
    );
};

export default DarkModeToggle;