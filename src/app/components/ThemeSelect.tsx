'use client';

import { useTheme } from '@/hooks/useTheme';
import { IconSun, IconMoon, IconTerminal } from '@tabler/icons-react';
import { useState } from 'react';

export function ThemeSelect() {
    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);

    const themes = [
        { value: 'light', label: 'Light', icon: <IconSun size={18} /> },
        { value: 'dark', label: 'Dark', icon: <IconMoon size={18} /> },
        { value: 'hacker', label: 'Hacker', icon: <IconTerminal size={18} /> },
    ] as const;

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-2 bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-border)] px-3 py-2 rounded hover:bg-[var(--color-border)] transition cursor-pointer"
            >
                {
                    themes.find((t) => t.value === theme)?.icon
                }
                <span>{themes.find((t) => t.value === theme)?.label}</span>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-[var(--color-bg)] border border-[var(--color-border)] z-50">
                    <ul className="py-1">
                        {themes.map((t) => (
                            <li key={t.value}>
                                <button
                                    onClick={() => {
                                        setTheme(t.value);
                                        setOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-[var(--color-border)] transition ${theme === t.value ? 'font-semibold text-[var(--color-accent)]' : ''
                                        }`}
                                >
                                    {t.icon}
                                    {t.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
