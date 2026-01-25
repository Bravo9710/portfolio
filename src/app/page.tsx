import IntroSection from "@/components/sections/IntroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Footer from "@/components/sections/Footer";
import EducationSection from "@/components/sections/EducationSection";

export default function Home() {
  return (
    <>
      <main className="mx-auto flex flex-col items-center gap-30">
        <IntroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
      </main>
      <Footer />
    </>
  );
}
