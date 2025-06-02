'use client';

// import { useTheme } from '@/hooks/useTheme';
import { IconSun, IconMoon, IconSpiderFilled } from '@tabler/icons-react';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    const getIcon = () => {
        switch (theme) {
            case 'light':
                return <IconMoon size={20} />;
            case 'dark':
                return <IconSpiderFilled size={20} />;
            case 'hacker':
                return <IconSun size={20} />;
            default:
                return <IconSun size={20} />;
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded hover:bg-[var(--color-border)] transition cursor-pointer"
            title="Changer le thème"
        >
            {getIcon()}
        </button>
    );
}
