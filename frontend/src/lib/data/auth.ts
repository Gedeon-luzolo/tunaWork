// Types pour l'authentification
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: 'freelancer' | 'client';
  acceptTerms: boolean;
  acceptNewsletter: boolean;
}

export interface AuthError {
  field?: string;
  message: string;
}

// Options de type d'utilisateur
export const userTypeOptions = [
  {
    id: 'freelancer' as const,
    title: 'Je suis freelancer',
    description: 'Je veux proposer mes services et trouver des clients',
    icon: '👨‍💼',
    benefits: [
      'Créer votre profil professionnel',
      'Recevoir des propositions de projets',
      'Gérer vos missions et paiements',
      'Accéder à la communauté freelance'
    ]
  },
  {
    id: 'client' as const,
    title: 'Je suis client',
    description: 'Je veux trouver des freelancers pour mes projets',
    icon: '🏢',
    benefits: [
      'Publier vos projets gratuitement',
      'Accéder à des milliers de freelancers',
      'Gérer vos collaborations',
      'Paiements sécurisés'
    ]
  }
];

// Messages d'erreur
export const authErrors = {
  email: {
    required: 'L\'adresse email est requise',
    invalid: 'Veuillez entrer une adresse email valide',
    exists: 'Cette adresse email est déjà utilisée'
  },
  password: {
    required: 'Le mot de passe est requis',
    minLength: 'Le mot de passe doit contenir au moins 8 caractères',
    weak: 'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre'
  },
  confirmPassword: {
    required: 'Veuillez confirmer votre mot de passe',
    mismatch: 'Les mots de passe ne correspondent pas'
  },
  firstName: {
    required: 'Le prénom est requis',
    minLength: 'Le prénom doit contenir au moins 2 caractères'
  },
  lastName: {
    required: 'Le nom est requis',
    minLength: 'Le nom doit contenir au moins 2 caractères'
  },
  userType: {
    required: 'Veuillez sélectionner votre type de profil'
  },
  terms: {
    required: 'Vous devez accepter les conditions d\'utilisation'
  },
  general: {
    invalidCredentials: 'Email ou mot de passe incorrect',
    serverError: 'Une erreur est survenue. Veuillez réessayer.',
    networkError: 'Problème de connexion. Vérifiez votre connexion internet.'
  }
};

// Validation des champs
export const validateEmail = (email: string): string | null => {
  if (!email) return authErrors.email.required;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return authErrors.email.invalid;
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return authErrors.password.required;
  if (password.length < 8) return authErrors.password.minLength;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
  if (!passwordRegex.test(password)) return authErrors.password.weak;
  return null;
};

export const validateConfirmPassword = (password: string, confirmPassword: string): string | null => {
  if (!confirmPassword) return authErrors.confirmPassword.required;
  if (password !== confirmPassword) return authErrors.confirmPassword.mismatch;
  return null;
};

export const validateName = (name: string, fieldName: 'firstName' | 'lastName'): string | null => {
  if (!name) return authErrors[fieldName].required;
  if (name.length < 2) return authErrors[fieldName].minLength;
  return null;
};
