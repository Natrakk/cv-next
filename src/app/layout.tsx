import './globals.css';
import { ReactNode } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Pierre Vandevelde – CV',
  description: 'Site CV de Pierre Vandevelde, gestion de projet & développement',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" data-theme="light">
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-bold flex flex-col">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
