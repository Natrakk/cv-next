'use client';

import Link from 'next/link';
import { useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { ThemeSelect } from './ThemeSelect';

const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/experiences', label: 'Expériences' },
    { href: '/projects', label: 'Projets' },
    { href: '/sandbox', label: 'Sandbox' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[var(--bg)] shadow text-[var(--text)]">
            <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold hover:text-[var(--text-hover)] transition">
                    Pierre Vandevelde
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 text-sm items-center h-18">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-[var(--text-muted)] hover:text-[var(--text-hover)] transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <ThemeSelect />
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-[var(--text-muted)] hover:text-[var(--text-hover)]"
                >
                    {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-[var(--bg)] border-t border-gray-700 px-4 pb-6 relative">
                    {/* Theme selector mobile position top right */}
                    <div className="absolute top-4 right-4 z-10">
                        <ThemeSelect />
                    </div>

                    <ul className="flex flex-col gap-4 pt-12 text-sm">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-[var(--text-muted)] hover:text-[var(--text-hover)] transition w-fit"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
