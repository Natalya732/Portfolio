// Skills constants
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiGraphql,
  SiFirebase,
  SiGit,
  SiTailwindcss,
  SiSupabase,
} from "react-icons/si";

export const SKILLS_DATA = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "SASS", icon: SiSass },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Supabase", icon: SiSupabase },
  { name: "MongoDB", icon: SiMongodb },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Firebase", icon: SiFirebase },
  { name: "Git", icon: SiGit },
] as const;

export const SKILL_CATEGORIES = {
  frontend: [
    "HTML5",
    "CSS3",
    "SASS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
  ],
  mobile: ["Flutter"],
  backend: ["NestJS", "MongoDB", "GraphQL", "Firebase"],
  tools: ["Git"],
} as const;
