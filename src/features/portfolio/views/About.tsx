"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          // transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h3
            className="text-[#9ea3b0] text-lg font-medium mb-2"
            // whileHover={{
            //   rotate: 2,
            //   scale: 1.05,
            //   transition: { duration: 0.3 }
            // }}
          >
            Introduction
          </h3>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white font-montserrat"
            whileHover={{
              rotate: -1,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            About me
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
              I'm a passionate Flutter developer with 4 years of experience
              building high-performance, cross-platform mobile applications. I
              specialize in creating smooth, scalable, and user-friendly apps,
              from concept to deployment. Over the past year, I've also expanded
              into web development using Next.js, gaining solid experience in
              building responsive, modern frontend interfaces.
            </p>
            <p className="text-[#9ea3b0] text-lg leading-relaxed">
              I thrive in fast-paced environments, whether working solo or
              collaborating with teams, and I'm driven by clean code, great UX,
              and continuous learning. Whether it's launching a new product,
              optimizing existing codebases, or integrating with complex APIs, I
              bring a detail-oriented mindset and a problem-solving attitude to
              every project.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
