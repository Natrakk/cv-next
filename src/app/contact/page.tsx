'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Message envoyé ! 🚀');
        // Tu peux ensuite envoyer à une API ou service email ici
    };

    return (
        <section className="max-w-3xl mx-auto py-12 px-4">
            <h1 className="text-[var(--color-title)] text-3xl font-bold mb-6 text-center">Contact</h1>
            <p className="text-[var(--color-text)] text-center mb-10">
                Tu peux me laisser un message ici. Je reviendrai vers toi rapidement !
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block mb-1 text-sm text-[var(--color-muted)]">Nom</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-[var(--color-border)] px-4 py-2 rounded text-[var(--color-text)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                        placeholder="Pierre Vandevelde"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1 text-sm text-[var(--color-muted)]">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-[var(--color-border)] px-4 py-2 rounded text-[var(--color-text)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                        placeholder="adresse@email.com"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block mb-1 text-sm text-[var(--color-muted)]">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows={5}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-[var(--color-border)] px-4 py-2 rounded text-[var(--color-text)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                        placeholder="Écris ton message ici..."
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[var(--color-accent)] text-black font-semibold px-6 py-2 rounded hover:bg-[var(--color-accent-hover)] transition"
                >
                    Envoyer le message
                </button>
            </form>
        </section>
    );
}
