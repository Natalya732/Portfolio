// App-wide constants
export const APP_CONFIG = {
  name: "Portfolio",
  description:
    "A modern portfolio built with Next.js, TypeScript, and Tailwind CSS",
  version: "1.0.0",
} as const;

// Re-export all constants
export * from "./navigation";
export * from "./skills";
export * from "./contact";
export * from "./content";
export * from "./experience";
