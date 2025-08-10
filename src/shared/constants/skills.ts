// Skills constants
export const SKILLS_DATA = [
  { name: "HTML5", icon: "5" },
  { name: "CSS3", icon: "3" },
  { name: "SASS", icon: "~" },
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "⚛" },
  { name: "Next.js", icon: "N" },
  { name: "Flutter", icon: "F" },
  { name: "NestJS", icon: "⬡" },
  { name: "MongoDB", icon: "🍃" },
  { name: "GraphQL", icon: "◆" },
  { name: "Firebase", icon: "●" },
  { name: "Git", icon: "📚" },
] as const;

export const SKILL_CATEGORIES = {
  frontend: ["HTML5", "CSS3", "SASS", "JavaScript", "TypeScript", "React", "Next.js"],
  mobile: ["Flutter"],
  backend: ["NestJS", "MongoDB", "GraphQL", "Firebase"],
  tools: ["Git"],
} as const;
