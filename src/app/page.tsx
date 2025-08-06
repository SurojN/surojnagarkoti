import ShowcaseIntro from "./components/ShowcaseIntro";
import AboutMe from "./components/About";
import SkillsSection from "./components/skills";
import ProjectsSection from "./components/Projects";
import ExperienceTimeline from "./components/Experience";
import ContactSection from "./components/Contact";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-7 md:p-10">
        <ShowcaseIntro />
        <AboutMe />
      </div>
      <SkillsSection />
      <ProjectsSection />
      <ExperienceTimeline />
      <ContactSection />
    </>
  );
}
