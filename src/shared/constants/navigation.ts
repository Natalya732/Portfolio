// Navigation constants
export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;

export const NAVIGATION = {
  home: "/",
  about: "/about",
  projects: "/projects",
  contact: "/contact",
} as const;

export const SECTION_IDS = {
  home: "home",
  about: "about",
  skills: "skills",
  experience: "experience",
  projects: "projects",
  contact: "contact",
} as const;
