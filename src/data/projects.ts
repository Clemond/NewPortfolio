import type { Project } from "../types/projectTypes";

export const projects: Project[] = [
  {
    title: "GigRadar",
    techStack: ["React Native", "TypeScript"],
    description:
      "GigRadar is a mobile app built with React Native (Expo), TypeScript, and Firebase. It helps users find upcoming live music events based on their current location or a selected city.",
    githubUrl: "https://github.com/Clemond/GigRadar",
    featured: true
  },
  {
    title: "Deck21",
    techStack: ["React Native", "Node"],
    description:
      "A mobile version of the classic Blackjack card game, built with React Native. Play against the dealer, use hit or stand strategies, and try to reach 21 without going bust!",
    githubUrl: "https://github.com/Clemond/Deck21",
    featured: false
  }
];
