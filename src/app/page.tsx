import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/effects/loading-screen";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { MouseGradient } from "@/components/effects/mouse-gradient";
import { PageTransition } from "@/components/effects/page-transition";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { AboutSection } from "@/components/sections/about/about-section";
import { SkillsSection } from "@/components/sections/skills/skills-section";
import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { WhyWorkSection } from "@/components/sections/why-work/why-work-section";
import { ContactSection } from "@/components/sections/contact/contact-section";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <MouseGradient />
      <Header />
      <main>
        <PageTransition>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <WhyWorkSection />
          <ContactSection />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
