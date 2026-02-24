import React from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {projects.map((proj) => (
        <ProjectCard key={proj.title} project={proj} />
      ))}
    </div>
  );
};
