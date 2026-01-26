import IntroSection from "@/components/sections/IntroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import SkilsSection from "@/components/sections/SkilsSection";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col items-center gap-30 pb-32">
      <IntroSection />
      <AboutSection />
      <ExperienceSection />
      <SkilsSection />
      <EducationSection />
    </main>
  );
}
