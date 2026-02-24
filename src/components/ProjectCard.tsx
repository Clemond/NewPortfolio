import React from "react";
import type { Project } from "../types/projectTypes";

type Props = {
  project: Project;
};

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="font-bold text-xl">{project.title}</h2>
      <p>{project.description}</p>
      <p>Tech: {project.techStack.join(", ")}</p>
      <a href={project.githubUrl} target="_blank">
        GitHub
      </a>
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank">
          Live
        </a>
      )}
    </div>
  );
};
