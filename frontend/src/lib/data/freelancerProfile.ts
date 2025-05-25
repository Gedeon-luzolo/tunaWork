// Types pour le profil détaillé du freelancer
export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies?: string[];
  projectUrl?: string;
  completedDate: string;
}

export interface Review {
  id: number;
  clientName: string;
  clientAvatar: string;
  rating: number;
  comment: string;
  projectTitle: string;
  date: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  icon: string;
}

export interface WorkExperience {
  id: number;
  position: string;
  company: string;
  duration: string;
  description: string;
  current: boolean;
}

export interface FreelancerProfile {
  id: number;
  name: string;
  title: string;
  location: string;
  avatar: string;
  coverImage: string;
  rating: number;
  totalReviews: number;
  completedProjects: number;
  responseTime: string;
  hourlyRate: string;
  availability: string;
  languages: string[];
  joinedDate: string;
  isVerified: boolean;
  isOnline: boolean;
  
  // Détails étendus
  bio: string;
  skills: string[];
  specialties: string[];
  socialNetworks: Array<{
    name: string;
    url: string;
    icon: string;
    color: string;
  }>;
  
  // Portfolio
  portfolio: PortfolioItem[];
  
  // Avis clients
  reviews: Review[];
  
  // Certifications
  certifications: Certification[];
  
  // Expérience professionnelle
  workExperience: WorkExperience[];
  
  // Statistiques
  stats: {
    totalEarnings: string;
    repeatClients: number;
    onTimeDelivery: number;
    budgetAccuracy: number;
  };
}

// Exemple de profil complet
export const freelancerProfileExample: FreelancerProfile = {
  id: 1,
  name: "Marie Kongo",
  title: "Couturière Professionnelle & Designer de Mode",
  location: "Kinshasa, République Démocratique du Congo",
  avatar: "/api/placeholder/150/150",
  coverImage: "/api/placeholder/800/300",
  rating: 4.9,
  totalReviews: 127,
  completedProjects: 89,
  responseTime: "< 2 heures",
  hourlyRate: "15-25$/h",
  availability: "Disponible maintenant",
  languages: ["Français", "Lingala", "Anglais"],
  joinedDate: "Janvier 2022",
  isVerified: true,
  isOnline: true,
  
  bio: "Couturière passionnée avec plus de 8 ans d'expérience dans la création de vêtements sur mesure. Spécialisée dans les robes de soirée, costumes d'affaires et tenues traditionnelles congolaises. Je combine techniques traditionnelles et tendances modernes pour créer des pièces uniques qui reflètent la personnalité de mes clients.",
  
  skills: [
    "Couture sur mesure",
    "Design de mode",
    "Patronage",
    "Broderie",
    "Retouches",
    "Stylisme",
    "Tenues traditionnelles",
    "Mode africaine"
  ],
  
  specialties: ["Robes de soirée", "Costumes d'affaires", "Tenues de mariage", "Mode africaine"],
  
  socialNetworks: [
    { name: "Instagram", url: "#", icon: "📸", color: "bg-pink-500" },
    { name: "Facebook", url: "#", icon: "📘", color: "bg-blue-700" },
    { name: "WhatsApp", url: "#", icon: "💬", color: "bg-green-500" },
  ],
  
  portfolio: [
    {
      id: 1,
      title: "Collection Robes de Soirée 2024",
      description: "Série de robes élégantes pour événements spéciaux, inspirées des motifs traditionnels congolais.",
      image: "/api/placeholder/400/300",
      category: "Mode",
      completedDate: "Mars 2024"
    },
    {
      id: 2,
      title: "Costumes d'Affaires Premium",
      description: "Costumes sur mesure pour professionnels, alliant élégance et confort.",
      image: "/api/placeholder/400/300",
      category: "Professionnel",
      completedDate: "Février 2024"
    },
    {
      id: 3,
      title: "Tenues de Mariage Traditionnelles",
      description: "Créations uniques pour mariages, mélangeant tradition et modernité.",
      image: "/api/placeholder/400/300",
      category: "Mariage",
      completedDate: "Janvier 2024"
    },
    {
      id: 4,
      title: "Collection Wax Moderne",
      description: "Vêtements contemporains utilisant des tissus wax authentiques.",
      image: "/api/placeholder/400/300",
      category: "Traditionnel",
      completedDate: "Décembre 2023"
    }
  ],
  
  reviews: [
    {
      id: 1,
      clientName: "Sarah Mukendi",
      clientAvatar: "/api/placeholder/50/50",
      rating: 5,
      comment: "Travail exceptionnel ! Marie a créé une robe de soirée magnifique qui correspondait parfaitement à mes attentes. Très professionnelle et à l'écoute.",
      projectTitle: "Robe de soirée sur mesure",
      date: "Il y a 2 semaines"
    },
    {
      id: 2,
      clientName: "Jean-Claude Kabila",
      clientAvatar: "/api/placeholder/50/50",
      rating: 5,
      comment: "Excellent travail sur mes costumes d'affaires. Qualité irréprochable et livraison dans les délais. Je recommande vivement !",
      projectTitle: "3 costumes d'affaires",
      date: "Il y a 1 mois"
    },
    {
      id: 3,
      clientName: "Grace Tshala",
      clientAvatar: "/api/placeholder/50/50",
      rating: 4,
      comment: "Très satisfaite de ma robe de mariage. Marie a su capturer ma vision et la transformer en réalité. Merci !",
      projectTitle: "Robe de mariage traditionnelle",
      date: "Il y a 2 mois"
    }
  ],
  
  certifications: [
    {
      id: 1,
      name: "Certificat de Couture Professionnelle",
      issuer: "Institut de Mode de Kinshasa",
      date: "2020",
      icon: "🏆"
    },
    {
      id: 2,
      name: "Formation en Design de Mode",
      issuer: "École des Beaux-Arts",
      date: "2019",
      icon: "🎨"
    },
    {
      id: 3,
      name: "Spécialisation Mode Africaine",
      issuer: "Centre Culturel Congolais",
      date: "2021",
      icon: "🌍"
    }
  ],
  
  workExperience: [
    {
      id: 1,
      position: "Couturière Indépendante",
      company: "Atelier Marie Kongo",
      duration: "2022 - Présent",
      description: "Création de vêtements sur mesure pour clientèle privée et entreprises.",
      current: true
    },
    {
      id: 2,
      position: "Styliste Senior",
      company: "Maison de Couture Élégance",
      duration: "2019 - 2022",
      description: "Conception et réalisation de collections pour boutique haut de gamme.",
      current: false
    },
    {
      id: 3,
      position: "Assistante Couturière",
      company: "Atelier Traditionnel Kongo",
      duration: "2016 - 2019",
      description: "Apprentissage des techniques traditionnelles et modernes de couture.",
      current: false
    }
  ],
  
  stats: {
    totalEarnings: "25,000$+",
    repeatClients: 78,
    onTimeDelivery: 98,
    budgetAccuracy: 95
  }
};
