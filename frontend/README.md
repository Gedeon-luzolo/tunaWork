# 🚀 TunaWork - Plateforme Freelance Congolaise

![TunaWork Logo](https://img.shields.io/badge/TunaWork-Freelance%20Platform-blue?style=for-the-badge&logo=briefcase)
![Private](https://img.shields.io/badge/Status-Private%20Project-red?style=for-the-badge&logo=lock)

**TunaWork** est la première plateforme congolaise dédiée aux freelancers et aux entreprises. Nous connectons les talents locaux avec des opportunités professionnelles, favorisant l'économie numérique en République Démocratique du Congo.

> ⚠️ **Projet Privé** - Ce repository contient du code propriétaire. Accès restreint aux membres autorisés de l'équipe TunaWork.

## 🌟 Fonctionnalités Principales

### 🎯 **Pour les Freelancers**

- ✅ **Profils professionnels** avec portfolio intégré
- ✅ **Candidatures illimitées** (plan Premium)
- ✅ **Messagerie prioritaire** avec les clients
- ✅ **Paiements sécurisés** avec protection des fonds
- ✅ **Badge de vérification** pour les freelancers Premium
- ✅ **Statistiques détaillées** de performance
- ✅ **Notifications en temps réel**

### 🏢 **Pour les Clients**

- ✅ **Publication de projets** simplifiée
- ✅ **Recherche avancée** de freelancers
- ✅ **Système de notation** et avis
- ✅ **Gestion de projets** collaborative
- ✅ **Facturation automatisée**
- ✅ **Support client 24/7**

### 💰 **Plans Tarifaires**

| Plan           | Prix USD | Prix CDF   | Fonctionnalités                                       |
| -------------- | -------- | ---------- | ----------------------------------------------------- |
| **Gratuit**    | 0$       | 0 FC       | Profil basique, 5 candidatures/mois, Commission 10%   |
| **Premium**    | 15$      | 37,500 FC  | Profil avancé, Candidatures illimitées, Commission 5% |
| **Entreprise** | 50$      | 125,000 FC | Gestion d'équipe, API, Commission 3%                  |

## 🛠️ Technologies Utilisées

### **Frontend**

- ![Next.js](https://img.shields.io/badge/Next.js-15.3.0-black?style=flat&logo=next.js)
- ![React](https://img.shields.io/badge/React-18-blue?style=flat&logo=react)
- ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC?style=flat&logo=tailwind-css)
- ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-pink?style=flat&logo=framer)

### **Internationalisation**

- ![next-intl](https://img.shields.io/badge/next--intl-3.26.5-green?style=flat)
- 🇫🇷 **Français** (langue principale)
- 🇨🇩 **Lingala** (langue locale congolaise)

### **UI/UX**

- ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-black?style=flat)
- ![Lucide React](https://img.shields.io/badge/Lucide%20React-Icons-orange?style=flat)
- **Glassmorphism Design**
- **Responsive Design**
- **Dark Mode Support**

## 🎨 Sections de la Plateforme

### 🏠 **Page d'Accueil**

1. **🎯 Hero Section** - Présentation principale avec CTA
2. **🎥 Vidéo Section** - Démonstration de la plateforme
3. **👑 Carousel Freelancers Premium** - Showcase des talents
4. **ℹ️ Section About** - Présentation de TunaWork
5. **💬 Témoignages** - Avis clients et freelancers
6. **💰 Pricing** - Plans tarifaires avec toggle USD/CDF
7. **❓ FAQ** - Questions fréquentes
8. **📱 Modal App Mobile** - Promotion de l'application

### 📱 **Pages Spécialisées**

- **👥 Professionnels** - Liste des freelancers avec filtres
- **🔐 Authentification** - Connexion/Inscription
- **📰 Feed** - Fil d'actualité des projets
- **👤 Profils Freelancers** - Pages détaillées

## 🚀 Installation et Démarrage

### **Prérequis**

- Node.js 18+
- pnpm (recommandé) ou npm

### **Installation**

```bash
# Cloner le repository (accès privé requis)
git clone https://github.com/tunawork-private/tunawork.git
cd tunawork/frontend

# Installer les dépendances
pnpm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos configurations

# Démarrer le serveur de développement
pnpm dev
```

> 🔐 **Note** : L'accès au repository nécessite des permissions spéciales. Contactez l'équipe TunaWork pour obtenir l'accès.

### **Scripts Disponibles**

```bash
pnpm dev          # Serveur de développement
pnpm build        # Build de production
pnpm start        # Serveur de production
pnpm lint         # Vérification du code
pnpm type-check   # Vérification TypeScript
```

## 🌍 Internationalisation

### **Configuration**

- **Routing localisé** avec next-intl
- **Messages traduits** dans `/messages/`
- **URLs localisées** :
  - 🇫🇷 `/connexion` → 🇨🇩 `/kokota`
  - 🇫🇷 `/inscription` → 🇨🇩 `/komikoma`
  - 🇫🇷 `/professionnels` → 🇨🇩 `/basali-ya-mayele`

### **Ajout de Traductions**

```typescript
// messages/fr.json
{
  "navigation": {
    "home": "Accueil",
    "professionals": "Professionnels"
  }
}

// messages/ln.json
{
  "navigation": {
    "home": "Ndako",
    "professionals": "Basali ya mayele"
  }
}
```

## 📊 Statistiques de la Plateforme

- 📈 **2,500+** projets réalisés
- 👥 **1,200+** freelancers actifs
- ⭐ **98%** de satisfaction client
- 🕐 **24/7** support client

## 🎯 Fonctionnalités Avancées

### **🔒 Sécurité**

- Paiements sécurisés avec protection des fonds
- Système d'évaluation bidirectionnel
- Vérification des identités freelancers

### **📱 Responsive Design**

- Mobile-first approach
- Adaptation parfaite tablettes/desktop
- Navigation optimisée tactile

### **🎨 Design System**

- Glassmorphism moderne
- Animations fluides Framer Motion
- Palette de couleurs cohérente
- Composants réutilisables

### **⚡ Performance**

- Next.js App Router
- Optimisation des images
- Lazy loading des composants
- Bundle splitting automatique

## 🗂️ Structure du Projet

```
frontend/
├── app/                    # App Router Next.js
│   ├── [locale]/          # Routes internationalisées
│   │   ├── page.tsx       # Page d'accueil
│   │   ├── professionals/ # Page freelancers
│   │   └── (auth)/        # Pages authentification
│   └── globals.css        # Styles globaux
├── src/
│   ├── components/        # Composants React
│   │   ├── about/         # Section About
│   │   ├── auth/          # Authentification
│   │   ├── faq/           # FAQ
│   │   ├── hero/          # Hero section
│   │   ├── modals/        # Modales
│   │   ├── navigation/    # Navigation
│   │   ├── pricing/       # Tarification
│   │   ├── testimonials/  # Témoignages
│   │   └── ui/            # Composants UI base
│   ├── hooks/             # Hooks personnalisés
│   ├── i18n/              # Configuration i18n
│   └── lib/               # Utilitaires et données
├── messages/              # Traductions
│   ├── fr.json           # Français
│   └── ln.json           # Lingala
└── public/               # Assets statiques
```

## 🤝 Contribution

> 🔒 **Projet Privé** - Les contributions sont limitées aux membres autorisés de l'équipe TunaWork.

### **Pour les Membres de l'Équipe :**

1. **Créer** une branche feature (`git checkout -b feature/AmazingFeature`)
2. **Commit** les changements (`git commit -m 'Add AmazingFeature'`)
3. **Push** vers la branche (`git push origin feature/AmazingFeature`)
4. **Ouvrir** une Pull Request
5. **Code Review** obligatoire avant merge

### **Standards de Développement :**

- ✅ Tests unitaires requis
- ✅ Documentation mise à jour
- ✅ Respect des conventions de code
- ✅ Validation TypeScript sans erreurs

## 📝 Licence

**Propriétaire** - Ce projet est la propriété exclusive de TunaWork. Tous droits réservés.

> ⚠️ **Avertissement** : Ce code est confidentiel et propriétaire. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.

## � Sécurité et Confidentialité

### **Accès au Code**

- 🔒 **Repository privé** avec accès contrôlé
- 👥 **Équipe restreinte** de développeurs autorisés
- 🔑 **Authentification 2FA** obligatoire
- 📝 **Accord de confidentialité** signé par tous les membres

### **Variables d'Environnement**

- 🚫 **Jamais** commiter les fichiers `.env`
- 🔐 **Clés API** stockées de manière sécurisée
- 🌍 **Environnements** séparés (dev/staging/prod)
- 🔄 **Rotation** régulière des secrets

### **Bonnes Pratiques**

- ✅ **Code reviews** obligatoires
- ✅ **Tests de sécurité** automatisés
- ✅ **Audit** régulier des dépendances
- ✅ **Backup** sécurisé du code

## �📞 Contact

- **Email** : contact@tunawork.cd
- **Téléphone** : +243 123 456 789
- **Adresse** : Kinshasa, République Démocratique du Congo

## 🙏 Remerciements

- **Communauté congolaise** pour le soutien
- **Freelancers** qui font confiance à la plateforme
- **Clients** qui utilisent nos services
- **Équipe de développement** pour l'innovation

---

<div align="center">

**🇨🇩 Fait avec ❤️ pour la RDC**

[![TunaWork](https://img.shields.io/badge/TunaWork-2024-blue?style=for-the-badge)](https://tunawork.cd)

</div>
