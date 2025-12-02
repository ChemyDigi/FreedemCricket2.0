import IntroCoach from "@/components/Profile/IntroCoach";
import CoachSection from "@/components/Profile/CoachSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Profile() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar/>
      <IntroCoach />
      <CoachSection/>
      <Footer/>
    </main>
  );
}
