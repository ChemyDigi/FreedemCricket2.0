import CoachDetails from "@/components/Profile/CoachDetails";

interface ProfileProps {
  params: Promise<{ id: string }>;
}

export default async function Profile({ params }: ProfileProps) {
  const { id } = await params;
  return <CoachDetails id={id} />;
}