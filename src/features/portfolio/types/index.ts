export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "other";
  proficiency: number; // 1-100
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
