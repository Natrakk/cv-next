import {
    IconBrandNextjs,
    IconBrandReact,
    IconBrandTypescript,
    IconBrandTailwind,
    IconBrandNodejs,
    IconBrandPython,
    IconDatabase,
    IconBrandFigma,
    IconCode,
} from '@tabler/icons-react';

export type Skill = {
    name: string;
    icon: JSX.Element;
    description: string;
    projectLink?: string;
};

export type SkillCategory = {
    category: string;
    skills: Skill[];
};

export const skillsData: SkillCategory[] = [
    {
        category: 'Développement Web',
        skills: [
            {
                name: 'Next.js',
                icon: <IconBrandNextjs size={28} />,
                description:
                    'Développement d’applications fullstack avec SSR, App Router, gestion des routes dynamiques et API.',
                projectLink: '/projects/reservation-padel',
            },
            {
                name: 'React',
                icon: <IconBrandReact size={28} />,
                description:
                    'Création de composants réutilisables, logique avec hooks, communication via props et context.',
                projectLink: '/projects/tech-talents',
            },
            {
                name: 'TypeScript',
                icon: <IconBrandTypescript size={28} />,
                description:
                    'Ajout de typage strict sur les composants, gestion des types d’API, props et models.',
            },
            {
                name: 'Node.js',
                icon: <IconBrandNodejs size={28} />,
                description:
                    'Création d’API REST simples avec Express.js, traitement de données, scripts backend.',
            },
            {
                name: 'Python',
                icon: <IconBrandPython size={28} />,
                description:
                    'Automatisations d’administration Google, gestion de CSV, insertion dans des bases MySQL.',
                projectLink: '/projects/synchronisation-google',
            },
            {
                name: 'MySQL',
                icon: <IconDatabase size={28} />,
                description:
                    'Requêtes SQL avancées, vues, gestion des utilisateurs, intégration avec scripts Python.',
            },
        ],
    },
    {
        category: 'UI / Design',
        skills: [
            {
                name: 'Tailwind CSS',
                icon: <IconBrandTailwind size={28} />,
                description:
                    'Stylisation avec classes utilitaires, mise en page responsive, dark mode, animations CSS.',
            },
            {
                name: 'Figma',
                icon: <IconBrandFigma size={28} />,
                description:
                    'Création de maquettes, prototypage, export de composants pour intégration frontend.',
            },
        ],
    },
    {
        category: 'Autres compétences',
        skills: [
            {
                name: 'Code Review',
                icon: <IconCode size={28} />,
                description:
                    'Relecture de code, amélioration continue, application des bonnes pratiques et clean code.',
            },
        ],
    },
];
