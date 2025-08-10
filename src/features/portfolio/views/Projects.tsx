"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Eye } from "lucide-react";
import { PROJECTS_DATA } from "@/shared/constants/projects";

const ProjectCardEnhanced = ({
  project,
  index,
}: {
  project: any;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative h-full overflow-hidden rounded-xl bg-[#1e4eae]/10 border border-[#546a7b]/30 backdrop-blur-sm">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              className="flex gap-4"
            >
              <button
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={() => {
                  window.open(project.deployedLink, "_blank");
                }}
              >
                <Eye className="w-5 h-5" />
              </button>
              {project.githubUrl && (
                <button
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  onClick={() => {
                    window.open(project.githubUrl, "_blank");
                  }}
                >
                  <Github className="w-5 h-5" />
                </button>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <motion.h3
            className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors"
            whileHover={{ x: 5 }}
          >
            {project.title}
          </motion.h3>

          <p className="text-[#9ea3b0] text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string, techIndex: number) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                className="px-3 py-1 bg-[#546a7b]/30 text-white text-xs rounded-full border border-[#546a7b]/50"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Project Date */}
          <div className="text-xs text-[#9ea3b0]">
            <span>{project.date}</span>
          </div>
        </div>

        {/* Subtle border effect */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 origin-left"
        />
      </div>
    </motion.div>
  );
};

export function Projects() {
  const [viewAll, setViewAll] = useState(false);

  const displayProjects = viewAll ? PROJECTS_DATA : PROJECTS_DATA.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f295c]/20 to-black" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h3 className="text-[#9ea3b0] text-lg font-medium mb-2">Portfolio</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat mb-4">
            Featured Projects
          </h2>
          <p className="text-[#9ea3b0] text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing modern mobile development
            techniques and cross-platform solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <ProjectCardEnhanced
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => {
              setViewAll((prev) => !prev);
            }}
          >
            {viewAll ? "Show Less" : "View All Projects"}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
