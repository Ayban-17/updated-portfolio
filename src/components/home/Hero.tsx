'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Camera, Code, Layout, Palette } from 'lucide-react';



export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"];

  useEffect(() => {
    setIsClient(true);
    
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Simple loading state
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
            Ayban
          </span>
        </h1>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-400/30 dark:bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
          }}
          transition={{ type: "spring", damping: 50 }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/30 dark:bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.05,
            y: mousePosition.y * -0.05,
          }}
          transition={{ type: "spring", damping: 50 }}
        />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="mb-6 inline-block"
          >
            <span className="text-xl bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
              Hello World! I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              Ayban
            </span>
          </motion.h1>

          {/* Animated Role Text */}
          <motion.div
            className="h-12 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.h2
              key={currentRoleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300"
            >
              {roles[currentRoleIndex]}
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            🚀 Transforming ideas into elegant digital experiences. Specializing in creating 
            modern web solutions that combine beautiful design with powerful functionality.
          </motion.p>

          {/* Tech Stack */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800/50 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Skill Cards */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: <Code className="w-6 h-6" />, label: "Clean Code", desc: "Writing elegant solutions" },
              { icon: <Layout className="w-6 h-6" />, label: "Responsive", desc: "Mobile-first approach" },
              { icon: <Palette className="w-6 h-6" />, label: "UI/UX", desc: "Beautiful interfaces" },
              { icon: <Camera className="w-6 h-6" />, label: "Creative", desc: "Unique solutions" }
            ].map((skill, index) => (
              <motion.div
                key={skill.label}
                className="p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl hover:transform hover:scale-105 transition-all"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-2">{skill.icon}</div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">{skill.label}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {[
              { label: "Years Experience", value: "5+" },
              { label: "Projects Completed", value: "50+" },
              { label: "Happy Clients", value: "30+" },
              { label: "Coffee Cups", value: "∞" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-4 bg-white/30 dark:bg-gray-800/30 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
              >
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="/projects"
              className="px-8 py-3 rounded-full font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work ✨
            </motion.a>
            <motion.a
              href="/contact"
              className="px-8 py-3 rounded-full font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect 👋
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}