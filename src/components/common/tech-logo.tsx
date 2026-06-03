"use client";

import type { IconType } from "react-icons";
import {
  SiAndroid,
  SiCss,
  SiExpress,
  SiFirebase,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVscodium,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, IconType> = {
  "react-native": SiReact,
  android: SiAndroid,
  figma: SiFigma,
  firebase: SiFirebase,
  "firebase-db": SiFirebase,
  api: TbApi,
  react: SiReact,
  nextjs: SiNextdotjs,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html5: SiHtml5,
  css3: SiCss,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  rest: TbApi,
  mongodb: SiMongodb,
  supabase: SiSupabase,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  vscode: SiVscodium,
};

/** Official brand colors for recognizable logos */
const BRAND_COLORS: Record<string, string> = {
  "react-native": "#61DAFB",
  android: "#3DDC84",
  figma: "#F24E1E",
  firebase: "#FFCA28",
  "firebase-db": "#FFCA28",
  react: "#61DAFB",
  nextjs: "#ffffff",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  html5: "#E34F26",
  css3: "#1572B6",
  tailwind: "#38BDF8",
  nodejs: "#339933",
  express: "#ffffff",
  mongodb: "#47A248",
  supabase: "#3FCF8E",
  git: "#F05032",
  github: "#ffffff",
  postman: "#FF6C37",
  vscode: "#007ACC",
  api: "#38bdf8",
  rest: "#38bdf8",
};

interface TechLogoProps {
  icon: string;
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function TechLogo({ icon, name, size = "md", className }: TechLogoProps) {
  const Icon = ICON_MAP[icon] ?? SiReact;
  const color = BRAND_COLORS[icon] ?? "#38bdf8";

  const sizeClass = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }[size];

  return (
    <Icon
      className={cn(sizeClass, className)}
      style={{ color }}
      aria-label={`${name} logo`}
      role="img"
    />
  );
}
