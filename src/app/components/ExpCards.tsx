'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconBriefcase, IconX } from '@tabler/icons-react';
import Link from 'next/link';

type Experience = {
    title: string;
    date: string;
    description: string;
};

const experiences: Experience[] = [
    {
        title: 'Chef de projet – Agapes Restauration',
        date: '2023 — 2025',
        description:
            'Gestion de projets digitaux, automatisations, support et pilotage des outils internes.',
    },
    {
        title: 'Développeur Frontend – Tech’ Talents',
        date: '2022 — 2023',
        description:
            'Maquettage et développement d’un site React pour une startup tech RH.',
    },
    {
        title: 'Développeur Fullstack – Projet Freelance',
        date: '2021 — 2022',
        description:
            'Conception et développement d’une plateforme de réservation pour un centre de sport.',
    },
];

export default function ExpCards() {
    const [selected, setSelected] = useState<Experience | null>(null);

    return (
        <section className="max-w-6xl mx-auto px-4 py-20 text-center">
            <h2 className="text-[var(--color-title)] text-3xl font-bold mb-12">Expériences récentes</h2>

            {/* Timeline stacked responsively */}
            <div className="grid gap-6 md:grid-cols-3">
                {experiences.slice(0, 3).map((exp, i) => (
                    <motion.div
                        key={i}
                        className="relative group bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-6 shadow-md flex flex-col justify-between text-left hover:shadow-xl transition duration-300 cursor-pointer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        onClick={() => setSelected(exp)}
                    >
                        <div>
                            <div className="flex items-center gap-2 text-[var(--color-title)] font-semibold text-lg mb-2">
                                <IconBriefcase size={20} />
                                <span>{exp.title}</span>
                            </div>
                            <p className="text-xs text-[var(--color-muted)] mb-3 uppercase tracking-wide font-medium">
                                {exp.date}
                            </p>
                            <p className="text-[var(--color-text)] text-sm leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
                <Link
                    href="/experiences"
                    className="inline-block text-sm font-medium px-5 py-3 bg-[var(--color-accent)] text-black rounded-full hover:bg-[var(--color-accent-hover)] transition"
                >
                    Toutes mes expériences →
                </Link>
            </div>

            {/* Modale */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-[var(--color-bg)] border border-[var(--color-border)] max-w-md w-full rounded-xl p-8 relative shadow-2xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-4 text-[var(--color-text)] hover:text-red-500"
                            >
                                <IconX size={22} />
                            </button>
                            <div className="flex items-center gap-2 mb-4 text-[var(--color-title)] font-bold text-xl">
                                <IconBriefcase size={22} />
                                {selected.title}
                            </div>
                            <p className="text-xs text-[var(--color-muted)] uppercase tracking-wide font-medium mb-2">
                                {selected.date}
                            </p>
                            <p className="text-[var(--color-text)] text-sm leading-relaxed">
                                {selected.description}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
