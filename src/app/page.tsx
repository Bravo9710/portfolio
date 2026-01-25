import IntroSection from "@/components/sections/IntroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

export default function Home() {
  return (
    <main className="flex mx-auto flex-col items-center gap-8 ">
      <IntroSection />
      <AboutSection />
      <ExperienceSection />
    </main>
  );
}
