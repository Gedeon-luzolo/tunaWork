// Types pour la section vidéo
export interface VideoData {
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
  stats: {
    views: string;
    likes: string;
    shares: string;
  };
}

export interface VideoFeature {
  icon: string;
  title: string;
  description: string;
}

// Données de la vidéo publicitaire
export const videoData: VideoData = {
  title: "Découvrez TunaWork en Action",
  subtitle: "La révolution du freelancing en RDC",
  description:
    "Regardez comment TunaWork transforme la façon dont les freelancers congolais trouvent des opportunités et comment les entreprises accèdent aux meilleurs talents locaux.",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // URL d'exemple
  thumbnailUrl: "/api/placeholder/800/450",
  duration: "2:30",
  stats: {
    views: "125K",
    likes: "8.2K",
    shares: "1.5K",
  },
};

// Fonctionnalités mises en avant dans la vidéo
export const videoFeatures: VideoFeature[] = [
  {
    icon: "🎯",
    title: "Matching Intelligent",
    description:
      "Notre algorithme connecte automatiquement les bons freelancers aux bons projets",
  },
  {
    icon: "💳",
    title: "Paiements Sécurisés",
    description:
      "Système de paiement intégré avec Mobile Money et cartes bancaires",
  },
  {
    icon: "🚀",
    title: "Croissance Rapide",
    description:
      "Plus de 1000 freelancers actifs et 500 entreprises partenaires",
  },
  {
    icon: "🌍",
    title: "Impact Local",
    description:
      "Créer des opportunités d'emploi et stimuler l'économie numérique en RDC",
  },
];
