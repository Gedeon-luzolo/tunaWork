import { FreelancerDetailedProfile } from "@/src/components/profile/FreelancerDetailedProfile";
import { freelancerProfileExample } from "@/src/lib/data/freelancerProfile";
import { notFound } from "next/navigation";

interface FreelancerPageProps {
  params: Promise<{
    id: string;
    locale: string;
  }>;
}

export default async function FreelancerPage({ params }: FreelancerPageProps) {
  const { id } = await params;

  // Pour l'instant, nous utilisons l'exemple de profil
  // Dans une vraie application, vous récupéreriez le profil depuis une API
  const profile = freelancerProfileExample;

  // Vérifier si le profil existe (simulation)
  if (parseInt(id) !== profile.id) {
    notFound();
  }

  return <FreelancerDetailedProfile profile={profile} />;
}
