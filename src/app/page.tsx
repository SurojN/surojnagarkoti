import ShowcaseIntro from "./components/ShowcaseIntro";
import AboutMe from "./components/About";
import SkillsSection from "./components/skills";
import ProjectsSection from "./components/Projects";
import ExperienceTimeline from "./components/Experience";
import ContactSection from "./components/Contact";

export default function Home() {
  return (
    <>
      <ShowcaseIntro />
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceTimeline />
      <ContactSection />
    </>
  );
}
