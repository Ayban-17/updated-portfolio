// src/components/about/ExperienceTimeline.tsx
'use client';
import { motion } from 'framer-motion';

export function ExperienceTimeline() {
  const experiences = [
    {
      role: "Technical Suppoert Specialist / Tier Two Head",
      company: "xFusion",
      period: "2022 - Present",
      description: "Provide design solutions for clients, and manage a team of developers to build and maintain product implementations."
    },
    {
      role: "Duda Widget Developer / Frontend Developer / SEO Specialist",
      company: "Webact",
      period: "2023 - 2024",
      description: "Building and maintaining the Duda Widget, a platform for creating and managing widgets for websites. Freelancing for a startup."
    },
    {
      role: "Junior Full Stack Developer",
      company: "Prostrive BV",
      period: "June 2023 - November 2020",
      description: "Started my journey in web development, working on various frontend projects."
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400"
          >
            <div className="absolute w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full -left-[9px] top-0" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {exp.role}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              {exp.company} • {exp.period}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}