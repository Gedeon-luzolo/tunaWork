// Types pour le footer
export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  color: string;
}

// Données du footer
export const footerSections: FooterSection[] = [
  {
    title: "Plateforme",
    links: [
      { label: "Comment ça marche", href: "/how-it-works" },
      { label: "Trouver des freelancers", href: "/freelancers" },
      { label: "Publier un projet", href: "/post-project" },
      { label: "Tarifs", href: "/pricing" },
      { label: "Success Stories", href: "/success-stories" }
    ]
  },
  {
    title: "Freelancers",
    links: [
      { label: "Devenir freelancer", href: "/become-freelancer" },
      { label: "Ressources", href: "/resources" },
      { label: "Communauté", href: "/community" },
      { label: "Formation", href: "/training" },
      { label: "Outils", href: "/tools" }
    ]
  },
  {
    title: "Entreprises",
    links: [
      { label: "TunaWork Business", href: "/business" },
      { label: "Solutions Entreprise", href: "/enterprise" },
      { label: "API", href: "/api" },
      { label: "Partenariats", href: "/partnerships" },
      { label: "Recrutement", href: "/hiring" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Centre d'aide", href: "/help" },
      { label: "FAQ", href: "/faq" },
      { label: "Contactez-nous", href: "/contact" },
      { label: "Signaler un problème", href: "/report" },
      { label: "Statut du service", href: "/status", external: true }
    ]
  },
  {
    title: "Légal",
    links: [
      { label: "Conditions d'utilisation", href: "/terms" },
      { label: "Politique de confidentialité", href: "/privacy" },
      { label: "Politique de cookies", href: "/cookies" },
      { label: "Mentions légales", href: "/legal" },
      { label: "Propriété intellectuelle", href: "/ip" }
    ]
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://facebook.com/tunawork",
    icon: "📘",
    color: "hover:text-blue-600"
  },
  {
    name: "Twitter",
    href: "https://twitter.com/tunawork",
    icon: "🐦",
    color: "hover:text-blue-400"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/tunawork",
    icon: "💼",
    color: "hover:text-blue-700"
  },
  {
    name: "Instagram",
    href: "https://instagram.com/tunawork",
    icon: "📸",
    color: "hover:text-pink-500"
  },
  {
    name: "YouTube",
    href: "https://youtube.com/tunawork",
    icon: "📺",
    color: "hover:text-red-500"
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/243123456789",
    icon: "💬",
    color: "hover:text-green-500"
  }
];

export const footerInfo = {
  companyName: "TunaWork",
  description: "La première plateforme freelance congolaise connectant les talents locaux avec les opportunités mondiales.",
  address: "Kinshasa, République Démocratique du Congo",
  email: "contact@tunawork.cd",
  phone: "+243 123 456 789",
  copyright: "© 2024 TunaWork. Tous droits réservés.",
  madeWith: "Fait avec ❤️ en RDC"
};
