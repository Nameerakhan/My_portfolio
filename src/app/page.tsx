import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import PageTransition from "./components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Projects />
      <Resume />
      <Experience />
      <Skills />
      <Contact />
    </PageTransition>
  );
}
