"use client";

import { EXPERIENCE_DATA } from "@/shared/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExperienceItem as EXPERIENCE_ITEM_TYPE } from "@/features/portfolio/types";

const ExperienceItem = ({
  experience,
  index,
}: {
  experience: EXPERIENCE_ITEM_TYPE;
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
            {EXPERIENCE_DATA.map((experience, index) => (
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
