'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconMapPin } from '@tabler/icons-react';

const experiences = [
    {
        title: 'Chef de projet digital',
        company: 'Agapes Restauration',
        date: '2023 — 2025',
        description: `Gestion de projets digitaux, automatisation d’outils internes, coordination d'équipes techniques.`,
    },
    {
        title: 'Développeur Frontend',
        company: 'Tech\' Talents',
        date: '2022 — 2023',
        description: `Conception et développement d'un site React JS. Intégration des maquettes et optimisation responsive.`,
    },
    {
        title: 'Assistant marketing digital',
        company: 'Startup RH',
        date: '2020 — 2021',
        description: `Création de contenus, gestion des réseaux sociaux, campagnes emailing, SEO.`
    },
];

export default function ExperiencesPage() {
    const [timelineView, setTimelineView] = useState(true);

    return (
        <section className="max-w-4xl mx-auto py-12 px-4">
            <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
                <h1 className="text-[var(--color-title)] text-3xl font-bold">Mon parcours professionnel</h1>
                <div className="flex gap-4 items-center">
                    <button
                        onClick={() => setTimelineView(!timelineView)}
                        className="text-sm border border-[var(--color-accent)] px-4 py-2 rounded hover:bg-[var(--color-accent)] hover:text-black transition"
                    >
                        Affichage : {timelineView ? 'Timeline' : 'Liste'}
                    </button>
                    <a
                        href="/cv-pierre-vandevelde.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm bg-[var(--color-accent)] text-black px-4 py-2 rounded font-medium hover:bg-[var(--color-accent-hover)] transition"
                    >
                        Télécharger mon CV
                    </a>
                </div>
            </div>

            {timelineView ? (
                <ol className="relative border-l border-[var(--color-border)]">
                    {experiences.map((exp, index) => (
                        <motion.li
                            key={index}
                            className="mb-10 ml-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <span className="absolute -left-2.5 flex items-center justify-center w-5 h-5 bg-[var(--color-accent)] rounded-full">
                                <IconMapPin size={12} className="text-black" />
                            </span>
                            <h3 className="text-xl font-semibold text-[var(--color-text)]">{exp.title}</h3>
                            <span className="block text-sm text-[var(--color-muted)] font-medium">{exp.company} · {exp.date}</span>
                            <p className="text-[var(--color-text)] mt-2 text-sm">{exp.description}</p>
                        </motion.li>
                    ))}
                </ol>
            ) : (
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="p-4 border border-[var(--color-border)] rounded"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 text-[var(--color-title)] font-semibold mb-1">
                                <IconMapPin size={18} />
                                {exp.title}
                            </div>
                            <p className="text-sm text-[var(--color-muted)] mb-1">
                                {exp.company} · {exp.date}
                            </p>
                            <p className="text-sm text-[var(--color-text)]">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
}
