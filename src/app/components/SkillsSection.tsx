'use client';

import { useState, useEffect } from 'react';
import { skillsData, Skill } from '@/mocks/skillsData';
import { AnimatePresence, motion } from 'framer-motion';
import { IconSearch, IconX } from '@tabler/icons-react';
import type { JSX } from 'react';


export default function SkillsSection() {
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(skillsData[0]?.category ?? null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSkillsData = skillsData.map((category) => ({
        ...category,
        skills: category.skills.filter((skill) =>
            skill.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
    }));

    const hasResults = filteredSkillsData.some((cat) => cat.skills.length > 0);

    useEffect(() => {
        const firstMatch = filteredSkillsData.find((cat) => cat.skills.length > 0);
        if (firstMatch) {
            setSelectedCategory(firstMatch.category);
        } else {
            setSelectedCategory(null);
        }
    }, [searchTerm]);

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-[var(--color-title)] text-2xl font-bold mb-6 text-center">Compétences</h2>

            {/* Search */}
            <div className="hidden md:flex items-center justify-center mb-8 relative max-w-md mx-auto">
                <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" size={18} />
                <input
                    type="text"
                    placeholder="Rechercher une compétence..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 bg-transparent text-[var(--color-text)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                />
            </div>

            {!hasResults && (
                <p className="text-center text-[var(--color-muted)] italic mb-10">
                    Aucune compétence ne correspond à votre recherche.
                </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Categories */}
                <div className="space-y-2">
                    {filteredSkillsData.map((category) => (
                        <button
                            key={category.category}
                            onClick={() => setSelectedCategory(category.category)}
                            className={`w-full text-left px-4 py-3 rounded border transition font-semibold hover:bg-[var(--color-accent)] hover:text-black ${selectedCategory === category.category
                                ? 'bg-[var(--color-accent)] text-black'
                                : 'border-[var(--color-border)] text-[var(--color-title)]'
                                }`}
                        >
                            {category.category}
                        </button>
                    ))}
                </div>

                {/* Skills */}
                <div className="md:col-span-2">
                    <AnimatePresence mode="wait">
                        {filteredSkillsData.map((category) => (
                            selectedCategory === category.category && (
                                <motion.div
                                    key={category.category}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -50, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                                >
                                    {category.skills.length > 0 ? (
                                        category.skills.map((skill, i) => (
                                            <motion.button
                                                key={skill.name}
                                                onClick={() => setSelectedSkill(skill)}
                                                className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-4 flex flex-col items-center justify-center hover:bg-[var(--color-accent)] hover:text-black transition"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.04, duration: 0.3 }}
                                            >
                                                <div className="mb-2">{skill.icon}</div>
                                                <span className="text-sm font-semibold">{skill.name}</span>
                                            </motion.button>
                                        ))
                                    ) : (
                                        <p className="text-[var(--color-muted)] italic col-span-full">
                                            Aucun résultat dans cette catégorie.
                                        </p>
                                    )}
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Modale */}
            <AnimatePresence>
                {selectedSkill && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-[var(--color-bg)] border border-[var(--color-border)] max-w-md w-full rounded-xl p-6 relative shadow-xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <button
                                onClick={() => setSelectedSkill(null)}
                                className="absolute top-4 right-4 text-[var(--color-text)] hover:text-red-500"
                            >
                                <IconX size={20} />
                            </button>
                            <div className="flex items-center gap-2 mb-4 text-[var(--color-title)] font-bold text-xl">
                                {selectedSkill.icon}
                                {selectedSkill.name}
                            </div>
                            <p className="text-[var(--color-text)] text-sm mb-4">
                                {selectedSkill.description}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}