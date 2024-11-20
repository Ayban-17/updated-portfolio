// src/components/blog/FeaturedPost.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function FeaturedPost() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 p-1"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-video md:aspect-auto relative">
            <Image
              src="https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg"
              alt="Featured post"
              width={800}
              height={400}
              className="w-full h-full object-cover rounded-lg"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="p-8">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4">
              Featured
            </span>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Building Modern Web Applications: A Complete Guide
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Learn how to build scalable web applications using Next.js, TypeScript, and modern best practices.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg"
                alt="Author"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
                priority
              />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Your Name</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Nov 16, 2024 • 10 min read</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
