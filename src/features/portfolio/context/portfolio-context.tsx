"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Project, Skill, Experience } from "../types";
import { PortfolioService } from "../services/portfolio-service";

interface PortfolioContextType {
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [projectsData, skillsData, experienceData] = await Promise.all([
        PortfolioService.getProjects(),
        PortfolioService.getSkills(),
        PortfolioService.getExperience(),
      ]);

      setProjects(projectsData);
      setSkills(skillsData);
      setExperience(experienceData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load portfolio data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const refreshData = async () => {
    await loadData();
  };

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        skills,
        experience,
        loading,
        error,
        refreshData,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
