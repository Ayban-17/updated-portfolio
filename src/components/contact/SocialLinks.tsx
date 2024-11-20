
// src/components/contact/SocialLinks.tsx
'use client';
import { motion } from 'framer-motion';

const socials = [
  { name: 'GitHub', icon: '🐱', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com/yourusername' },
  { name: 'Instagram', icon: '📸', url: 'https://instagram.com/yourusername' }
];

export function SocialLinks() {
  return (
    <section className="mt-20 text-center">
      <h2 className="text-2xl font-bold mb-8">Or connect with me on social media ✨</h2>
      <div className="flex justify-center gap-6">
        {socials.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl"
          >
            <span className="text-2xl">{social.icon}</span>
            <span className="sr-only">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}