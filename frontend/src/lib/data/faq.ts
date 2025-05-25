// Types pour les FAQ
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

// Catégories FAQ
export const faqCategories: FAQCategory[] = [
  {
    id: "general",
    name: "Général",
    icon: "❓",
    color: "bg-blue-500"
  },
  {
    id: "freelancers",
    name: "Freelancers",
    icon: "👨‍💼",
    color: "bg-green-500"
  },
  {
    id: "clients",
    name: "Clients",
    icon: "🏢",
    color: "bg-purple-500"
  },
  {
    id: "payments",
    name: "Paiements",
    icon: "💳",
    color: "bg-orange-500"
  },
  {
    id: "security",
    name: "Sécurité",
    icon: "🔒",
    color: "bg-red-500"
  }
];

// Questions fréquemment posées
export const faqItems: FAQItem[] = [
  // Général
  {
    id: 1,
    question: "Qu'est-ce que TunaWork ?",
    answer: "TunaWork est une plateforme congolaise qui connecte les freelancers talentueux avec les clients à la recherche de services professionnels. Nous facilitons la collaboration entre les professionnels indépendants et les entreprises en RDC et à l'international.",
    category: "general"
  },
  {
    id: 2,
    question: "Comment fonctionne TunaWork ?",
    answer: "C'est simple ! Les clients publient leurs projets, les freelancers soumettent leurs propositions, et les clients choisissent le meilleur candidat. Une fois le projet terminé, le paiement est effectué de manière sécurisée via notre plateforme.",
    category: "general"
  },
  {
    id: 3,
    question: "TunaWork est-il gratuit ?",
    answer: "L'inscription et la navigation sur TunaWork sont entièrement gratuites. Nous prélevons une petite commission uniquement sur les projets réalisés avec succès pour maintenir et améliorer notre plateforme.",
    category: "general"
  },
  {
    id: 4,
    question: "Dans quelles villes TunaWork est-il disponible ?",
    answer: "TunaWork est disponible dans toute la République Démocratique du Congo, avec une présence forte à Kinshasa, Lubumbashi, Goma, Bukavu, Mbuji-Mayi, Kisangani et Kananga. Nous nous étendons continuellement.",
    category: "general"
  },

  // Freelancers
  {
    id: 5,
    question: "Comment devenir freelancer sur TunaWork ?",
    answer: "Créez votre profil en quelques minutes, ajoutez vos compétences, votre portfolio et vos tarifs. Notre équipe vérifiera votre profil sous 24h. Une fois approuvé, vous pourrez commencer à postuler aux projets.",
    category: "freelancers"
  },
  {
    id: 6,
    question: "Quels types de services puis-je proposer ?",
    answer: "Tous les services professionnels sont les bienvenus : développement web, design, marketing digital, rédaction, traduction, photographie, couture, mécanique, électricité, nettoyage, transport, et bien plus encore !",
    category: "freelancers"
  },
  {
    id: 7,
    question: "Comment fixer mes tarifs ?",
    answer: "Vous êtes libre de fixer vos tarifs selon votre expérience et le marché. Nous recommandons de consulter les profils similaires pour rester compétitif. Vous pouvez proposer des tarifs horaires ou forfaitaires.",
    category: "freelancers"
  },
  {
    id: 8,
    question: "Comment améliorer ma visibilité ?",
    answer: "Complétez votre profil à 100%, ajoutez un portfolio attractif, collectez des avis positifs, répondez rapidement aux messages et maintenez un taux de réussite élevé. Les freelancers actifs sont mieux classés.",
    category: "freelancers"
  },

  // Clients
  {
    id: 9,
    question: "Comment publier un projet ?",
    answer: "Cliquez sur 'Publier un projet', décrivez vos besoins, définissez votre budget et délai. Les freelancers qualifiés vous enverront leurs propositions. Vous pourrez ensuite choisir le candidat idéal.",
    category: "clients"
  },
  {
    id: 10,
    question: "Comment choisir le bon freelancer ?",
    answer: "Examinez les portfolios, lisez les avis clients, vérifiez les compétences et l'expérience. N'hésitez pas à poser des questions avant de faire votre choix. Les freelancers vérifiés sont recommandés.",
    category: "clients"
  },
  {
    id: 11,
    question: "Que faire si je ne suis pas satisfait du travail ?",
    answer: "Nous offrons une garantie satisfaction. Contactez notre support pour médiation. Si le problème persiste, nous pouvons organiser un remboursement partiel ou total selon les termes du projet.",
    category: "clients"
  },
  {
    id: 12,
    question: "Puis-je modifier mon projet après publication ?",
    answer: "Oui, vous pouvez modifier la description, le budget ou le délai avant d'accepter une proposition. Une fois le projet commencé, les modifications doivent être convenues avec le freelancer.",
    category: "clients"
  },

  // Paiements
  {
    id: 13,
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons les cartes bancaires, Mobile Money (Orange Money, Airtel Money, M-Pesa), virements bancaires, et les portefeuilles électroniques. Les paiements sont sécurisés et cryptés.",
    category: "payments"
  },
  {
    id: 14,
    question: "Quand le freelancer est-il payé ?",
    answer: "Le paiement est libéré automatiquement une fois que vous validez la livraison du projet. En cas de litige, les fonds restent en sécurité jusqu'à résolution. Les freelancers reçoivent leur paiement sous 24-48h.",
    category: "payments"
  },
  {
    id: 15,
    question: "Y a-t-il des frais cachés ?",
    answer: "Non, tous nos frais sont transparents. Les clients paient le montant convenu plus les frais de traitement (3-5%). Les freelancers reçoivent 85-90% du montant selon leur niveau de certification.",
    category: "payments"
  },
  {
    id: 16,
    question: "Puis-je demander un remboursement ?",
    answer: "Oui, si le freelancer ne livre pas le travail convenu ou si la qualité ne correspond pas aux attentes. Notre équipe examine chaque demande de remboursement dans les 48h.",
    category: "payments"
  },

  // Sécurité
  {
    id: 17,
    question: "Mes données personnelles sont-elles sécurisées ?",
    answer: "Absolument ! Nous utilisons un cryptage SSL 256-bit et respectons les standards internationaux de protection des données. Vos informations personnelles et financières sont protégées.",
    category: "security"
  },
  {
    id: 18,
    question: "Comment vérifiez-vous les freelancers ?",
    answer: "Nous vérifions l'identité, les compétences et l'expérience de chaque freelancer. Les profils vérifiés portent un badge spécial. Nous effectuons également des contrôles de qualité réguliers.",
    category: "security"
  },
  {
    id: 19,
    question: "Que faire en cas de fraude ?",
    answer: "Signalez immédiatement tout comportement suspect à notre équipe de sécurité. Nous enquêtons rapidement et prenons les mesures appropriées, incluant la suspension de comptes et le remboursement si nécessaire.",
    category: "security"
  },
  {
    id: 20,
    question: "Comment protéger mon projet confidentiel ?",
    answer: "Tous les freelancers signent un accord de confidentialité automatique. Vous pouvez également demander un NDA personnalisé pour les projets sensibles. Nous prenons la confidentialité très au sérieux.",
    category: "security"
  }
];
