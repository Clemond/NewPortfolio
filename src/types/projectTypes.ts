export type Tech =
  | "React"
  | "TypeScript"
  | "javaScript"
  | "Node"
  | "PostgreSQL"
  | "React Native"
  | "SwiftUI"
  | "Firebase"
  | "Expo"
  | "NativeWind";

export type Project = {
  title: string;
  techStack: Tech[];
  description: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
};
