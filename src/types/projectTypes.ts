export type Tech =
  | "React"
  | "TypeScript"
  | "Node"
  | "PostgreSQL"
  | "React Native";

export type Project = {
  title: string;
  techStack: Tech[]; // Union
  description: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
};
