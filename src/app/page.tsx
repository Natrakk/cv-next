import ExpCards from "./components/ExpCards";
import SkillsSection from "./components/SkillsSection";

export default function HomePage() {
  return (
    <section className="text-[var(--color-text)]">
      <section className="mt-20 text-center">
        <SkillsSection />
      </section>
      <section className="mt-20 text-center">
        <ExpCards />
      </section>
      <section className="mt-20 text-center">
        <h2 className="text-[var(--color-title)] text-2xl font-bold mb-6">Projets</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="border border-gray-700 rounded-lg p-4 text-left">
            <h3 className="font-semibold text-[var(--color-text)]">Système de réservation de padel</h3>
            <p className="text-[var(--color-muted)] text-sm">Next.js + Firebase</p>
            <p className="mt-2">Création d&apos;une app de réservation avec persistance et login.</p>
          </div>
          <div className="border border-gray-700 rounded-lg p-4 text-left">
            <h3 className="font-semibold text-[var(--color-text)]">Automatisation Google Workspace</h3>
            <p className="text-[var(--color-muted)] text-sm">Python + MySQL</p>
            <p className="mt-2">Scripts pour synchroniser et nettoyer les comptes utilisateurs Google Admin.</p>
          </div>
        </div>
      </section>
      <section className="mt-20 text-center">
        <h2 className="text-[var(--color-title)] text-2xl font-bold mb-6">Un projet ? Une opportunité ?</h2>
        <p className="text-[var(--color-text)] mb-4">
          Je suis disponible pour discuter de collaborations ou missions freelance.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[var(--color-accent)] text-black px-6 py-3 rounded hover:bg-[var(--color-accent-hover)] transition font-semibold"
        >
          Me contacter
        </a>
      </section>
    </section>
  );
}
