import React from "react";
import Header from "../components/header/Header";
import PresentationCard from "../components/intro-card/PresentationCard";
import ProjectSection from "../components/project-section/ProjectSection";

export const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <PresentationCard />
      <ProjectSection />
    </div>
  );
};
