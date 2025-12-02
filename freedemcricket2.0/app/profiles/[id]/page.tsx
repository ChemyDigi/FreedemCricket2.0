import CoachDetails from "@/components/Profile/CoachDetails";
import MoreCoachesSection from "@/components/Profile/Exploremore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
interface ProfileProps {
  params: Promise<{ id: string }>;
}

export default async function Profile({ params }: ProfileProps) {
  const { id } = await params;

  return (
    <>
    <Navbar/>
      <CoachDetails id={id} />

      {/* This will now exclude the current profile */}
      <MoreCoachesSection excludeId={id} />
      <Footer/>
    </>
  );
}
