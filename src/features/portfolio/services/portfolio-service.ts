import { Project, Skill, Experience } from "../types";
import { PROJECTS_DATA } from "@/shared/constants/projects";

// Mock data - in a real app, this would come from an API
export const mockSkills: Skill[] = [
  {
    id: "1",
    name: "React",
    category: "frontend",
    proficiency: 90,
  },
  {
    id: "2",
    name: "TypeScript",
    category: "frontend",
    proficiency: 85,
  },
  {
    id: "3",
    name: "Node.js",
    category: "backend",
    proficiency: 80,
  },
];

export const mockExperience: Experience[] = [
  {
    id: "1",
    company: "Tech Corp",
    position: "Senior Frontend Developer",
    startDate: "2022-01",
    endDate: "2024-01",
    description: "Led frontend development for multiple web applications",
    technologies: ["React", "TypeScript", "Next.js"],
  },
];

export class PortfolioService {
  static async getProjects(): Promise<Project[]> {
    // Use the constants data instead of mock data
    return new Promise((resolve) => {
      setTimeout(() => resolve(PROJECTS_DATA as Project[]), 500);
    });
  }

  static async getSkills(): Promise<Skill[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockSkills), 300);
    });
  }

  static async getExperience(): Promise<Experience[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockExperience), 400);
    });
  }
}
