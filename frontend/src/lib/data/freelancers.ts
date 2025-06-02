// Types pour les freelancers
export interface SocialNetwork {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface PremiumFreelancer {
  id: number;
  name: string;
  title: string;
  location: string;
  rating: number;
  completedProjects: number;
  hourlyRate: string;
  image: string;
  specialties: string[];
  socialNetworks: SocialNetwork[];
  isVerified: boolean;
  category: string;
  city: string;
  isOnline: boolean;
  responseTime: string;
  bio: string;
  skills: string[];
  languages: string[];
  joinedDate: string;
}

// Données des freelancers premium
export const premiumFreelancers: PremiumFreelancer[] = [
  {
    id: 1,
    name: "Marie Kongo",
    title: "Couturière Professionnelle",
    location: "Kinshasa, RDC",
    rating: 4.9,
    completedProjects: 127,
    hourlyRate: "15-25$/h",
    image: "/images/Image2.JPG",
    specialties: ["Robes de soirée", "Costumes"],
    socialNetworks: [
      { name: "Instagram", url: "#", icon: "📸", color: "bg-pink-500" },
      { name: "Facebook", url: "#", icon: "📘", color: "bg-blue-700" },
      { name: "WhatsApp", url: "#", icon: "💬", color: "bg-green-500" },
    ],
    isVerified: true,
    category: "Mode & Design",
    city: "Kinshasa",
    isOnline: true,
    responseTime: "< 2 heures",
    bio: "Couturière passionnée avec plus de 8 ans d'expérience dans la création de vêtements sur mesure.",
    skills: ["Couture", "Design", "Patronage", "Broderie"],
    languages: ["Français", "Lingala", "Anglais"],
    joinedDate: "Janvier 2022",
  },
  {
    id: 2,
    name: "Jean Mukendi",
    title: "Informaticien Expert",
    location: "Lubumbashi, RDC",
    rating: 5.0,
    completedProjects: 89,
    hourlyRate: "30-50$/h",
    image: "/api/placeholder/120/120",
    specialties: ["Réparation PC", "Développement"],
    socialNetworks: [
      { name: "LinkedIn", url: "#", icon: "💼", color: "bg-blue-600" },
      { name: "GitHub", url: "#", icon: "💻", color: "bg-gray-800" },
      { name: "WhatsApp", url: "#", icon: "💬", color: "bg-green-500" },
    ],
    isVerified: true,
    category: "Informatique",
    city: "Lubumbashi",
    isOnline: false,
    responseTime: "< 4 heures",
    bio: "Expert en informatique avec 10+ ans d'expérience en développement et réparation.",
    skills: ["JavaScript", "Python", "Réparation PC", "Réseaux"],
    languages: ["Français", "Swahili", "Anglais"],
    joinedDate: "Mars 2021",
  },
  {
    id: 3,
    name: "Grace Mbuyi",
    title: "Photographe Événementiel",
    location: "Goma, RDC",
    rating: 4.8,
    completedProjects: 156,
    hourlyRate: "20-40$/h",
    image: "/api/placeholder/120/120",
    specialties: ["Mariages", "Portraits"],
    socialNetworks: [
      { name: "Instagram", url: "#", icon: "📸", color: "bg-pink-500" },
      { name: "Facebook", url: "#", icon: "📘", color: "bg-blue-700" },
      { name: "WhatsApp", url: "#", icon: "💬", color: "bg-green-500" },
    ],
    isVerified: true,
  },
  {
    id: 4,
    name: "Patrick Kabila",
    title: "Mécanicien Auto",
    location: "Kinshasa, RDC",
    rating: 4.9,
    completedProjects: 73,
    hourlyRate: "25-35$/h",
    image: "/api/placeholder/120/120",
    specialties: ["Moteur", "Électricité auto"],
    socialNetworks: [
      { name: "Facebook", url: "#", icon: "📘", color: "bg-blue-700" },
      { name: "WhatsApp", url: "#", icon: "💬", color: "bg-green-500" },
      { name: "Telegram", url: "#", icon: "✈️", color: "bg-blue-400" },
    ],
    isVerified: true,
  },
  {
    id: 5,
    name: "Sylvie Tshala",
    title: "Femme de Ménage Pro",
    location: "Mbuji-Mayi, RDC",
    rating: 4.7,
    completedProjects: 94,
    hourlyRate: "10-15$/h",
    image: "/api/placeholder/120/120",
    specialties: ["Nettoyage bureau", "Maisons"],
    socialNetworks: [
      { name: "WhatsApp", url: "#", icon: "💬", color: "bg-green-500" },
      { name: "Facebook", url: "#", icon: "📘", color: "bg-blue-700" },
      { name: "Telegram", url: "#", icon: "✈️", color: "bg-blue-400" },
    ],
    isVerified: true,
  },
  {
    id: 6,
    name: "David Mwamba",
    title: "Chauffeur Privé",
    location: "Bukavu, RDC",
    rating: 5.0,
    completedProjects: 67,
    hourlyRate: "12-20$/h",
    image: "/api/placeholder/120/120",
    specialties: ["Transport VIP", "Livraisons"],
    socialNetworks: [
      { name: "WhatsApp", url: "#", icon: "💬", color: "bg-green-500" },
      { name: "Telegram", url: "#", icon: "✈️", color: "bg-blue-400" },
      { name: "Facebook", url: "#", icon: "📘", color: "bg-blue-700" },
    ],
    isVerified: true,
  },
  {
    id: 7,
    name: "Claudine Ilunga",
    title: "Lavandière Experte",
    location: "Kananga, RDC",
    rating: 4.6,
    completedProjects: 112,
    hourlyRate: "8-12$/h",
    image: "/api/placeholder/120/120",
    specialties: ["Pressing", "Repassage"],
    socialNetworks: [
      { name: "WhatsApp", url: "#", icon: "💬", color: "bg-green-500" },
      { name: "Facebook", url: "#", icon: "📘", color: "bg-blue-700" },
      { name: "Telegram", url: "#", icon: "✈️", color: "bg-blue-400" },
    ],
    isVerified: true,
  },
  {
    id: 8,
    name: "Emmanuel Kasongo",
    title: "Électricien Certifié",
    location: "Kisangani, RDC",
    rating: 4.8,
    completedProjects: 85,
    hourlyRate: "18-28$/h",
    image: "/api/placeholder/120/120",
    specialties: ["Installation", "Dépannage"],
    socialNetworks: [
      { name: "WhatsApp", url: "#", icon: "💬", color: "bg-green-500" },
      { name: "Facebook", url: "#", icon: "📘", color: "bg-blue-700" },
      { name: "LinkedIn", url: "#", icon: "💼", color: "bg-blue-600" },
    ],
    isVerified: true,
  },
];
