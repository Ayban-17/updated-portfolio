
// src/components/blog/Categories.tsx
'use client';
import { motion } from 'framer-motion';

export function Categories() {
  const categories = ['All', 'React', 'Next.js', 'TypeScript', 'UI/UX', 'Career'];

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          className="px-6 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-500 hover:text-white transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
}