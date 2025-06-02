# TunaWork - Présentation Interactive

Une présentation moderne et interactive pour TunaWork, une plateforme SaaS innovante qui vise à digitaliser le marché des services freelance en République Démocratique du Congo.

## 🚀 Aperçu du Projet

TunaWork est une solution complète qui connecte les freelancers et les clients dans un écosystème sécurisé et transparent. Cette présentation interactive présente le projet, ses fonctionnalités, son modèle économique et ses projections financières.

### ✨ Fonctionnalités de la Présentation

- **Interface moderne** avec design glassmorphisme et animations fluides
- **Navigation intuitive** avec slides interactives
- **Graphiques dynamiques** utilisant Recharts pour les données financières
- **Design responsive** optimisé pour desktop et mobile
- **Transitions élégantes** avec Framer Motion
- **Navigation par swipe** avec Swiper.js

## 🛠️ Technologies Utilisées

- **Framework**: [Next.js 15](https://nextjs.org) avec App Router
- **Langage**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Slides**: [Swiper.js](https://swiperjs.com/)
- **Graphiques**: [Recharts](https://recharts.org/)
- **Icônes**: [Lucide React](https://lucide.dev/)
- **UI Components**: Radix UI + shadcn/ui

## 📋 Structure du Projet

```
src/
├── components/
│   ├── slides/           # Composants des slides individuelles
│   ├── navigation/       # Composants de navigation
│   └── ui/              # Composants UI réutilisables
├── lib/
│   └── data/            # Données de la présentation
└── app/                 # Pages Next.js (App Router)
```

## 🎯 Slides Incluses

1. **Hero** - Page d'accueil avec présentation du projet
2. **Problématique** - Analyse du marché informel en RDC
3. **Solution** - Présentation de la plateforme TunaWork
4. **Marché** - Taille et opportunités du marché
5. **Fonctionnalités** - Caractéristiques clés de la plateforme
6. **Modèle de Revenus** - Sources de revenus diversifiées
7. **Projections Financières** - Croissance et métriques
8. **Financement** - Opportunités d'investissement
9. **Impact** - Impact social et économique
10. **Mission** - Vision et objectifs
11. **Contact** - Informations de contact

## 🚀 Installation et Démarrage

### Prérequis

- Node.js 18+
- npm, yarn, pnpm ou bun

### Installation

```bash
# Cloner le repository
git clone <repository-url>
cd tunawork

# Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de Production

```bash
# Créer le build de production
npm run build

# Lancer en mode production
npm run start
```

## 🎨 Personnalisation

### Couleurs et Thème

Le projet utilise un thème bleu moderne défini dans `app/globals.css`. Les couleurs principales peuvent être modifiées dans les variables CSS custom.

### Données de Présentation

Les données sont centralisées dans `src/lib/data/presentation-data.ts` et peuvent être facilement modifiées :

- Données du marché
- Fonctionnalités
- Revenus et projections financières
- Informations de financement

### Ajout de Nouvelles Slides

1. Créer un nouveau composant dans `src/components/slides/`
2. L'ajouter aux imports dans `src/components/slides/index.ts`
3. L'inclure dans `app/page.tsx`

## 📱 Navigation

- **Desktop**: Navigation par clavier (flèches), molette de souris, ou boutons
- **Mobile**: Navigation par swipe tactile
- **Menu latéral**: Navigation directe vers n'importe quelle slide

## 🔧 Scripts Disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linting ESLint
```

## 📊 Performances

- **Optimisations Next.js** : Images, fonts, et bundle automatiquement optimisés
- **Lazy loading** : Chargement différé des composants
- **Animations optimisées** : Utilisation de Framer Motion pour des animations fluides
- **Bundle splitting** : Code splitting automatique

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📞 Contact

Pour toute question concernant ce projet ou TunaWork :

- **Email**: luzologedeon340@gmail.com
- **LinkedIn**: [TunaWork](https://linkedin.com/company/tunawork)
- **Site Web**: [www.portfolio-gedeon.vercel.app](https://portfolio-gedeon.vercel.app)

---

Développé avec ❤️ pour révolutionner le marché des services freelance en RDC.
