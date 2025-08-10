"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const SkillIcon = ({ 
  name, 
  icon, 
  index 
}: { 
  name: string; 
  icon: string; 
  index: number; 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.1, 
        y: -10,
        rotate: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Skill Icon */}
      <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center bg-transparent hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
        <span className="text-white text-lg font-medium">{icon}</span>
      </div>
      
      {/* Tooltip - Positioned above the icon */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          y: isHovered ? 0 : -10, 
          scale: isHovered ? 1 : 0.8 
        }}
        transition={{ duration: 0.2 }}
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-black px-3 py-2 rounded-lg shadow-lg font-medium text-sm whitespace-nowrap z-10"
      >
        {name}
        {/* Tooltip arrow pointing down */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
      </motion.div>
    </motion.div>
  );
};

const SkillsGrid = () => {
  const skills = [
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
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 max-w-4xl mx-auto"
    >
      {skills.map((skill, index) => (
        <SkillIcon
          key={skill.name}
          name={skill.name}
          icon={skill.icon}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f295c]/20 to-black" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h3 className="text-[#9ea3b0] text-lg font-medium mb-2">Skills</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-montserrat">
            What I Know
          </h2>
        </motion.div>

        <SkillsGrid />
      </motion.div>
    </section>
  );
}
