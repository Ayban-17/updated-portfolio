// src/components/contact/ContactInfo.tsx
'use client';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: "📧",
    title: "Email",
    details: "hello@yourdomain.com",
    description: "Feel free to email me anytime!"
  },
  {
    icon: "📍",
    title: "Location",
    details: "Manila, Philippines",
    description: "Available for remote work"
  },
  {
    icon: "⏰",
    title: "Working Hours",
    details: "Mon - Fri, 9AM - 6PM PHT",
    description: "Will reply within 24 hours"
  }
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {contactInfo.map((info, index) => (
        <motion.div
          key={info.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl"
        >
          <span className="text-4xl mb-4 block">{info.icon}</span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {info.title}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
            {info.details}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {info.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
