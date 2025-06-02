'use client';

import { useEffect, useState } from 'react';

export function useTheme() {
    const [theme, setTheme] = useState<'light' | 'dark' | 'hacker'>('dark');

    useEffect(() => {
        // Init depuis localStorage
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'hacker' | null;
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.remove('light', 'dark', 'hacker');
            document.documentElement.classList.add(storedTheme);
        }
    }, []);

    const updateTheme = (newTheme: 'light' | 'dark' | 'hacker') => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.remove('light', 'dark', 'hacker');
        document.documentElement.classList.add(newTheme);
    };

    return {
        theme,
        setTheme: updateTheme,
    };
}
