export default function Footer() {
    return (
        <footer className="border-t border-gray-300 mt-12 py-6 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Pierre Vandevelde — Tous droits réservés.</p>
            <p className="mt-2">
                Propulsé par <span className="text-yellow-400 font-semibold">Next.js</span> & Tailwind CSS.
            </p>
        </footer>
    );
}
