import ShowcaseIntro from "./components/ShowcaseIntro";
import AboutMe from "./components/About";
import SkillsSection from "./components/skills";
import ProjectsSection from "./components/Projects";
import ExperienceTimeline from "./components/Experience";
import ContactSection from "./components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-7 md:p-10">
        <ShowcaseIntro />
        <AboutMe />
      </div>
      <Link href="/4d">
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
          ✨ Enter 4D Mode
        </button>
      </Link>
      <SkillsSection />
      <ProjectsSection />
      <ExperienceTimeline />
      <ContactSection />
    </>
  );
}
