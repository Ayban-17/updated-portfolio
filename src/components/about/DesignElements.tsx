// src/components/about/DesignElements.tsx
'use client';
import { motion } from 'framer-motion';

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.2, 0.4],
          y: [-20, 20, -20],
          x: [-10, 10, -10]
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.1, 0.3],
          y: [20, -20, 20],
          x: [10, -10, 10]
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.2, 0.1, 0.2],
          scale: [1, 1.2, 1]
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 dark:bg-pink-900/20 rounded-full blur-3xl"
      />

      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-3 h-3 bg-yellow-400 rounded-full" />
      <div className="absolute top-60 right-40 w-2 h-2 bg-blue-400 rounded-full" />
      <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-purple-400 rounded-full" />
    </div>
  );
}