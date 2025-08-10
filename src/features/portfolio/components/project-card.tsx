import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 group">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl text-white group-hover:text-gray-200 transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col pt-0">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="bg-gray-800 border-gray-700 text-gray-300 text-xs px-2 py-1"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          {project.githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button 
              size="sm" 
              asChild
              className="bg-white text-black hover:bg-gray-200"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
