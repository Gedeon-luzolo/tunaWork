// Types pour le fil d'actualité
export interface PostAuthor {
  id: number;
  name: string;
  title: string;
  avatar: string;
  isVerified: boolean;
  location: string;
}

export interface PostMedia {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  alt?: string;
}

export interface PostComment {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
}

export interface Post {
  id: number;
  author: PostAuthor;
  content: string;
  media?: PostMedia[];
  timestamp: string;
  likes: number;
  comments: PostComment[];
  shares: number;
  isLiked: boolean;
  tags: string[];
  type: 'project' | 'achievement' | 'tip' | 'announcement';
}

// Données d'exemple des publications
export const feedPosts: Post[] = [
  {
    id: 1,
    author: {
      id: 1,
      name: "Marie Kongo",
      title: "Couturière Professionnelle",
      avatar: "/api/placeholder/50/50",
      isVerified: true,
      location: "Kinshasa, RDC"
    },
    content: "Fière de partager ma dernière création ! Une robe de soirée inspirée des motifs traditionnels congolais. Chaque détail a été pensé pour allier élégance moderne et héritage culturel. 🌟 #ModeAfricaine #Couture #TraditionModerne",
    media: [
      {
        type: 'image',
        url: "/api/placeholder/600/400",
        alt: "Robe de soirée avec motifs traditionnels"
      }
    ],
    timestamp: "Il y a 2 heures",
    likes: 47,
    comments: [
      {
        id: 1,
        author: {
          name: "Sarah M.",
          avatar: "/api/placeholder/30/30"
        },
        content: "Magnifique travail ! Où puis-je commander une robe similaire ?",
        timestamp: "Il y a 1 heure"
      },
      {
        id: 2,
        author: {
          name: "Jean K.",
          avatar: "/api/placeholder/30/30"
        },
        content: "Bravo Marie ! Tu honores notre culture 👏",
        timestamp: "Il y a 30 min"
      }
    ],
    shares: 12,
    isLiked: false,
    tags: ["Mode", "Couture", "Tradition"],
    type: "project"
  },
  {
    id: 2,
    author: {
      id: 2,
      name: "Jean Mukendi",
      title: "Développeur Full-Stack",
      avatar: "/api/placeholder/50/50",
      isVerified: true,
      location: "Lubumbashi, RDC"
    },
    content: "🎉 Célébration ! Je viens de terminer ma 100ème mission sur TunaWork ! Merci à tous mes clients pour leur confiance. Voici quelques conseils pour réussir en tant que développeur freelance en RDC :\n\n1. Toujours livrer à temps\n2. Communiquer clairement\n3. Se former continuellement\n4. Construire des relations durables\n\n#Freelance #Développement #Milestone",
    timestamp: "Il y a 4 heures",
    likes: 89,
    comments: [
      {
        id: 3,
        author: {
          name: "Grace T.",
          avatar: "/api/placeholder/30/30"
        },
        content: "Félicitations Jean ! Tes conseils sont précieux 🙌",
        timestamp: "Il y a 2 heures"
      }
    ],
    shares: 23,
    isLiked: true,
    tags: ["Développement", "Conseils", "Milestone"],
    type: "achievement"
  },
  {
    id: 3,
    author: {
      id: 3,
      name: "Grace Mbuyi",
      title: "Photographe Événementiel",
      avatar: "/api/placeholder/50/50",
      isVerified: true,
      location: "Goma, RDC"
    },
    content: "Séance photo de mariage magique ce weekend ! Capturer ces moments précieux est ma passion. Voici quelques clichés de cette belle cérémonie traditionnelle. 📸✨",
    media: [
      {
        type: 'image',
        url: "/api/placeholder/600/400",
        alt: "Photos de mariage traditionnel"
      },
      {
        type: 'image',
        url: "/api/placeholder/600/400",
        alt: "Couple en tenue traditionnelle"
      }
    ],
    timestamp: "Il y a 6 heures",
    likes: 156,
    comments: [
      {
        id: 4,
        author: {
          name: "Patrick K.",
          avatar: "/api/placeholder/30/30"
        },
        content: "Superbes photos ! Tu as un œil artistique exceptionnel",
        timestamp: "Il y a 3 heures"
      }
    ],
    shares: 34,
    isLiked: false,
    tags: ["Photographie", "Mariage", "Tradition"],
    type: "project"
  },
  {
    id: 4,
    author: {
      id: 4,
      name: "Patrick Kabila",
      title: "Mécanicien Auto Expert",
      avatar: "/api/placeholder/50/50",
      isVerified: true,
      location: "Kinshasa, RDC"
    },
    content: "💡 Astuce du jour : Comment prolonger la vie de votre batterie de voiture ?\n\n🔧 Vérifiez régulièrement les bornes\n🔧 Évitez les décharges complètes\n🔧 Nettoyez les connexions\n🔧 Testez la charge tous les 3 mois\n\nUn entretien préventif vous évite des pannes coûteuses ! #MécaniqueAuto #Conseils #Entretien",
    timestamp: "Il y a 8 heures",
    likes: 73,
    comments: [
      {
        id: 5,
        author: {
          name: "David M.",
          avatar: "/api/placeholder/30/30"
        },
        content: "Merci pour ces conseils pratiques ! 👍",
        timestamp: "Il y a 5 heures"
      }
    ],
    shares: 18,
    isLiked: true,
    tags: ["Mécanique", "Conseils", "Entretien"],
    type: "tip"
  },
  {
    id: 5,
    author: {
      id: 5,
      name: "Sylvie Tshala",
      title: "Experte en Nettoyage",
      avatar: "/api/placeholder/50/50",
      isVerified: false,
      location: "Mbuji-Mayi, RDC"
    },
    content: "Nouveau service disponible ! Je propose maintenant des formations en techniques de nettoyage professionnel. Parfait pour ceux qui veulent se lancer dans ce secteur porteur. 🧽✨\n\nFormation de 3 jours incluant :\n- Techniques de base\n- Produits écologiques\n- Gestion clientèle\n- Tarification\n\nContactez-moi pour plus d'infos ! #Formation #Nettoyage #Entrepreneuriat",
    timestamp: "Il y a 12 heures",
    likes: 42,
    comments: [
      {
        id: 6,
        author: {
          name: "Claudine I.",
          avatar: "/api/placeholder/30/30"
        },
        content: "Excellente initiative ! Je suis intéressée",
        timestamp: "Il y a 8 heures"
      }
    ],
    shares: 15,
    isLiked: false,
    tags: ["Formation", "Nettoyage", "Business"],
    type: "announcement"
  },
  {
    id: 6,
    author: {
      id: 6,
      name: "David Mwamba",
      title: "Chauffeur Privé VIP",
      avatar: "/api/placeholder/50/50",
      isVerified: true,
      location: "Bukavu, RDC"
    },
    content: "Service de transport pour événement corporate réussi ! 🚗 Fier d'avoir assuré le transport de 50 participants pour une conférence internationale. Ponctualité et professionnalisme sont mes maîtres-mots. #Transport #Professionnel #Service",
    media: [
      {
        type: 'image',
        url: "/api/placeholder/600/400",
        alt: "Flotte de véhicules professionnels"
      }
    ],
    timestamp: "Il y a 1 jour",
    likes: 67,
    comments: [
      {
        id: 7,
        author: {
          name: "Emmanuel K.",
          avatar: "/api/placeholder/30/30"
        },
        content: "Service impeccable comme toujours ! 👌",
        timestamp: "Il y a 18 heures"
      }
    ],
    shares: 9,
    isLiked: false,
    tags: ["Transport", "Corporate", "Service"],
    type: "project"
  }
];
