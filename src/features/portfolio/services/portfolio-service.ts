import { Project, Skill, Experience } from "../types";

// Mock data - in a real app, this would come from an API
export const mockProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js and Stripe",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://ecommerce.example.com",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "/projects/task-app.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/example/task-app",
    featured: true,
  },
];

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
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockProjects), 500);
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
