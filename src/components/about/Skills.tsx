
// src/components/about/Skills.tsx
'use client';
import { motion } from 'framer-motion';

export function Skills() {
  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    "Tools & Others": ["Git", "Docker", "AWS", "Figma"]
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, categorySkills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}