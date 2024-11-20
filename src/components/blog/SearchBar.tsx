
// src/components/blog/SearchBar.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div 
      className={`relative max-w-2xl mx-auto mb-8 ${
        isFocused ? 'shadow-lg' : 'shadow'
      }`}
      animate={{ scale: isFocused ? 1.02 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <input
        type="text"
        placeholder="Search articles..."
        className="w-full px-6 py-4 rounded-full bg-white dark:bg-gray-800 border-2 border-transparent focus:border-blue-500 outline-none transition-all"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
        ⌘K
      </span>
    </motion.div>
  );
}
