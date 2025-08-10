"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SECTION_TITLES } from "@/shared/constants/content";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-[#9ea3b0] text-lg font-medium mb-2">
            {SECTION_TITLES.about.subtitle}
          </h3>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white font-montserrat"
            whileHover={{
              rotate: -1,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            {SECTION_TITLES.about.title}
          </motion.h2>
        </motion.div>

        {/* Content Section - Two Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Profile Image - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center lg:justify-center"
          >
            <motion.div
              className="relative w-90 h-96 rounded-lg overflow-hidden"
              whileHover={{
                rotate: -3,
                scale: 1.06,
                transition: { duration: 0.4 },
              }}
            >
              <Image
                src="/images/user.jpg"
                alt="Nikita"
                fill
                className="object-cover"
                style={{ backgroundColor: "#ff6b35" }}
              />
            </motion.div>
          </motion.div>

          {/* Text Content - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{
              rotate: 2,
              scale: 1.05,
              transition: { duration: 0.4 },
            }}
            className="space-y-6"
          >
            <p className="text-[#9ea3b0] text-lg leading-relaxed">
              I’m a passionate React developer with 3.5 years of experience
              building high-performance, scalable web applications. I specialize
              in creating responsive, user-friendly interfaces using React and
              Next.js, taking projects from concept to deployment with a strong
              focus on clean code, performance optimization, and great user
              experience.
            </p>
            <p className="text-[#9ea3b0] text-lg leading-relaxed">
              Alongside React and Next.js, I work with modern
              backend-as-a-service platforms like Firebase and Supabase to
              deliver robust, real-time, and secure applications. My expertise
              spans across frontend development and full-stack integration,
              enabling me to bring complete solutions to life.
            </p>
            <p className="text-[#9ea3b0] text-lg leading-relaxed">
              Beyond coding, I love exploring new technologies, contributing to
              open-source projects, and sharing knowledge with the developer
              community. I believe in continuous learning and pushing the
              boundaries of what’s possible in web development.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
