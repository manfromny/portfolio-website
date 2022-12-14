import React, { Fragment } from "react";
import FirstSection from "./FirstSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

function Home() {
  return (
    <div
      className="flex flex-col h-[100dvh] pt-[3rem] my-0 overflow-y-scroll 
    hide-scrollbar scroll-smooth snap-center snap-y snap-mandatory"
    >
      <FirstSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default Home;
