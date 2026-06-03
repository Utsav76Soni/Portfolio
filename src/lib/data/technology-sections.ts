import type { TechnologySection } from "@/types";

export const TECHNOLOGY_SECTIONS: TechnologySection[] = [
  {
    id: "mobile",
    title: "Mobile Development",
    technologies: [
      { name: "React Native", icon: "react-native" },
      { name: "Android", icon: "android" },
      { name: "Mobile UI/UX", icon: "figma" },
      { name: "Push Notifications", icon: "firebase" },
      { name: "API Integration", icon: "api" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    technologies: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    technologies: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "REST APIs", icon: "rest" },
    ],
  },
  {
    id: "database",
    title: "Database",
    technologies: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase-db" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    technologies: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];
