'use client';
import { motion } from 'framer-motion';
// src/components/about/AnimatedDivider.tsx
export function AnimatedDivider() {
    return (
      <div className="flex items-center justify-center my-16">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          className="h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent max-w-md"
        />
        <div className="mx-4 text-2xl">✨</div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          className="h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent max-w-md"
        />
      </div>
    );
  }