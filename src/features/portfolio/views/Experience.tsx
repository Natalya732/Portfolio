"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
  company: string;
  title: string;
  period: string;
  location: string;
  achievements: string[];
}

const ExperienceItem = ({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="flex flex-col mb-12"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        className="text-xl font-bold text-white mb-2"
      >
        {experience.company}
      </motion.h3>

      {/* Job title and period */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        className="mb-4"
      >
        <h4 className="text-lg font-semibold text-white mb-1">
          {experience.title}
        </h4>
        <p className="text-[#9ea3b0] text-sm">
          {experience.period} · {experience.location}
        </p>
      </motion.div>

      {/* Separator line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
        className="w-full h-px bg-[#546a7b] mb-4"
      />

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
        className="space-y-3"
      >
        {experience.achievements.map((achievement, achievementIndex) => (
          <motion.div
            key={achievementIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.2 + 0.6 + achievementIndex * 0.1,
            }}
            className="flex items-start gap-3"
          >
            <div className="w-2 h-2 bg-[#546a7b] rounded-full mt-2 flex-shrink-0" />
            <p className="text-[#9ea3b0] text-sm leading-relaxed">
              {achievement}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const gradientProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const experiences: ExperienceItem[] = [
    {
      company: "Lassod Consulting Limited",
      title: "Mobile Engineer (Remote)",
      period: "Mar 2022 - Present",
      location: "UK",
      achievements: [
        "As a Flutter Engineer, I played a pivotal role in the development of the Oyoyo Events Application, a platform connecting vendors and clients in the event planning industry.",
        "Successfully integrated Google Maps into the Oyoyo Events Application. This enhancement enables users to seamlessly discover events near their location or any specified search area",
        "Established robust CI/CD pipelines using Codemagic, streamlining the testing and production release processes for the mobile projects. This implementation resulted in increased efficiency, ensuring a smooth and automated workflow for testing and deploying updates, ultimately contributing to the projects' overall success.",
        "Took pride in crafting pixel-perfect UI designs for various projects. Ensured an aesthetically pleasing and seamless user interface, contributing to an enhanced overall user experience.",
      ],
    },
    {
      company: "Freelance Developer",
      title: "Full Stack Developer",
      period: "Jan 2021 - Feb 2022",
      location: "Remote",
      achievements: [
        "Developed and maintained multiple client websites using modern web technologies including React, Next.js, and Node.js.",
        "Implemented responsive design principles ensuring optimal user experience across all devices and screen sizes.",
        "Collaborated with clients to understand requirements and deliver custom solutions that meet their business needs.",
        "Optimized website performance and SEO, resulting in improved search engine rankings and faster loading times.",
      ],
    },
    {
      company: "Tech Startup",
      title: "Junior Developer",
      period: "Jun 2020 - Dec 2020",
      location: "Local",
      achievements: [
        "Assisted in the development of mobile applications using Flutter and Dart programming language.",
        "Participated in code reviews and contributed to improving code quality and best practices.",
        "Worked closely with senior developers to learn advanced programming concepts and methodologies.",
        "Helped maintain and debug existing applications, ensuring smooth operation and user satisfaction.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f295c]/20 to-black" />

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h3 className="text-[#9ea3b0] text-lg font-medium mb-2">
            Experience
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat">
            Work History
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#546a7b] opacity-30" />

          {/* Gradient progress line */}
          <motion.div
            style={{ scaleY: gradientProgress }}
            className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 origin-top"
          />

          {/* Experience items */}
          <div className="space-y-0 ml-10">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.company}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
