import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export default function ProjectSection() {
  return (
    <div>
      {projects.map((proj) => (
        <ProjectCard key={proj.title} project={proj} />
      ))}
    </div>
  );
}
