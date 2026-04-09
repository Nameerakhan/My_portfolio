import Hero from "./components/Hero";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import WhatIDo from "./components/WhatIDo";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import PageTransition from "./components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <CurrentlyBuilding />
      <WhatIDo />
      <Projects />
      <Resume />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </PageTransition>
  );
}
