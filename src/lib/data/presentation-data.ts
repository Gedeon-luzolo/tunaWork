import {
  ImageIcon,
  Smartphone,
  TrendingUp,
  Users,
  Search,
  MessageSquare,
  Star,
  Activity,
  Shield,
  Heart,
  Award,
} from "lucide-react";

export const marketData = [
  {
    category: "IT & Digital",
    market: "$420M",
    growth: "+35%",
    icon: Smartphone,
  },
  {
    category: "Design & Créatif",
    market: "$280M",
    growth: "+28%",
    icon: ImageIcon,
  },
  {
    category: "Marketing",
    market: "$350M",
    growth: "+32%",
    icon: TrendingUp,
  },
  {
    category: "Services Pro",
    market: "$650M",
    growth: "+22%",
    icon: Users,
  },
];

export const featuresData = [
  {
    icon: Search,
    title: "Recherche Avancée",
    description:
      "Recherche par compétences, localisation, tarifs et disponibilité avec filtres personnalisés.",
  },
  {
    icon: MessageSquare,
    title: "Messagerie Intégrée",
    description:
      "Chat en temps réel pour faciliter la communication. Partage de fichiers et suivi des conversations.",
  },
  {
    icon: Star,
    title: "Système d'Avis",
    description:
      "Évaluations et commentaires détaillés après chaque mission. Notation sur plusieurs critères.",
  },
  {
    icon: ImageIcon,
    title: "Portfolio",
    description:
      "Espace personnalisé pour présenter les réalisations. Galerie de projets avec témoignages.",
  },
  {
    icon: Activity,
    title: "Fil d'Actualités",
    description:
      "Publications des travaux récents et mises à jour de statut. Suivi des freelancers.",
  },
  {
    icon: Shield,
    title: "Protection Transactions",
    description:
      "Système d'escrow pour sécuriser les paiements. Libération des fonds après validation.",
  },
];

export const revenueData = [
  { name: "Commission sur transactions", value: 60, color: "#3B82F6" },
  { name: "Abonnements premium", value: 25, color: "#8B5CF6" },
  { name: "Services à valeur ajoutée", value: 10, color: "#EC4899" },
  { name: "Publicités ciblées", value: 5, color: "#F59E0B" },
];

export  const financialData = [
  { name: "Année 1", value: 6 },
  { name: "Année 2", value: 18 },
  { name: "Année 3", value: 36 },
  { name: "Année 4", value: 60 },
];

export const funding = [
  {
    tier: "Partenaire Fondateur",
    amount: "$50K+",
    equity: "5-15%",
    icon: Award,
    benefits: "Conseil d'administration, décisions stratégiques",
    priority: "VIP",
  },
  {
    tier: "Investisseur Principal",
    amount: "$20K+",
    equity: "2-5%",
    icon: TrendingUp,
    benefits: "Rapports mensuels, accès privilégié",
    priority: "Premium",
  },
  {
    tier: "Investisseur Actif",
    amount: "$10K+",
    equity: "1-2%",
    icon: Users,
    benefits: "Rapports trimestriels, événements",
    priority: "Standard",
  },
  {
    tier: "Soutien Initial",
    amount: "$4K+",
    equity: "0.5-1%",
    icon: Heart,
    benefits: "Reconnaissance, mises à jour",
    priority: "Base",
  },
];
