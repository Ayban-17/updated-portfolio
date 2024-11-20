// src/components/projects/Projects.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type Project = {
  id: string;
  name: string;
  desc: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  category?: string; // Made optional since it's not in your data
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "ueowkf",
      name: "Landing Page Gallery",
      desc: "I have proficiently crafted a front-end application using the technologies of React, TypeScript, and Tailwind CSS. This application is meticulously designed to offer a seamless and responsive user experience across various devices, including mobile, tablet, and desktop platforms.",
      image: "/assets/projects/gallery.png",
      liveUrl: "https://landing-pages-designs.netlify.app/",
      repoUrl: "https://github.com/Ayban-17/landing-pages-designs",
      category: "Next Js"
    },
    {
      id: "lux2", 
      name: "Luxury",
      desc: "Luxurious aesthetics with premium feel and sophisticated interactions, ideal for high-end brands and services that want to convey elegance and exclusivity.",
      image: "/assets/projects/luxe.png",
      liveUrl: "/luxury",
      repoUrl: "/luxury", 
      category: "Next Js"
    },
    {
      id: "mod3",
      name: "Modern",
      desc: "Dynamic layouts with immersive animations and modern components, designed for contemporary websites that want to showcase innovation and creativity.",
      image: "/assets/projects/modern.png",
      liveUrl: "/modern",
      repoUrl: "/modern",
      category: "Next Js"
    },
    {
      id: "min1",
      name: "Minimalist",
      desc: "Clean, minimalist aesthetic with bold typography and smooth interactions, perfect for modern and sleek web applications that prioritize simplicity and user experience.",
      image: "/assets/projects/minimalist.png", 
      liveUrl: "/minimalist",
      repoUrl: "/minimalist",
      category: "Next Js"
    },
    {
      id: "buife",
      name: "GPT 3 Front End Application",
      desc: "I have proficiently crafted a front-end application using the technologies of React, TypeScript, and Tailwind CSS. This application is meticulously designed to offer a seamless and responsive user experience across various devices, including mobile, tablet, and desktop platforms.",
      image: "/assets/projects/gpt3.png",
      liveUrl: "https://gpt-3-front-end-app.netlify.app/",
      repoUrl: "https://github.com/Ayban-17/gpt-3-front-end-Application",
      category: "React JS"
    },
    {
      id: "njicbwv",
      name: "Space Tourism",
      desc: "Space Tourism is a modern, visually captivating website that I created as part of a Front-end Mentor challenge. It features an animated hero section, informative content with images, and a fully responsive layout.",
      image: "/assets/projects/space-tourism.png",
      liveUrl: "https://ayban-17.github.io/space-tourism/",
      repoUrl: "https://github.com/Ayban-17/space-tourism",
      category: "HTML CSS JS"
    },
    {
      id: "buvker",
      name: "Youtube Clone",
      desc: "The YouTube Clone project was undertaken as a challenge to test and showcase my web development skills. It serves as a testament to my web development proficiency, demonstrating my experience in implementing complex features.",
      image: "/assets/projects/youtube.png",
      liveUrl: "https://ayban-17.github.io/YouTube-Clone/",
      repoUrl: "https://github.com/Ayban-17/YouTube-Clone",
      category: "HTML CSS JS"
    },
    {
      id: "buvikfe",
      name: "BulSU Archive",
      desc: "This is a functional frontend for BulSU Archive website using HTML, CSS, and JavaScript. Website features an intuitive and user-friendly interface, responsive design, and dynamic search functionality.",
      image: "/assets/projects/bulsu.png",
      liveUrl: "https://ayban-17.github.io/BulSU-Archive-funtional-frontend-Javscript-html-css/",
      repoUrl: "https://github.com/Ayban-17/BulSU-Archive-funtional-frontend-Javscript-html-css",
      category: "HTML CSS JS"
    },
    // {
    //   id: "bhjefcve",
    //   name: "Mern Family App",
    //   desc: "The MERN Family App is a comprehensive project in which I developed a full-stack application, leveraging the power of MongoDB, Express, React, and Node.js. I successfully implemented CRUD functionality, making it a highly functional web application.",
    //   image: "/assets/projects/mern.png",
    //   liveUrl: "https://mern-family-app.vercel.app/",
    //   repoUrl: "https://github.com/Ayban-17/MERN-family-app",
    //   category: "Full Stack"
    // },
    {
      id: "bviev",
      name: "Animenia",
      desc: "Animenia represents my first foray into React development. This project caters to anime enthusiasts by providing a platform that displays comprehensive anime information and captivating poster images, sourced through the Kitsu anime API.",
      image: "/assets/projects/animenia.png",
      liveUrl: "https://b8vz5k.csb.app/",
      repoUrl: "https://codesandbox.io/s/animenia-b8vz5k",
      category: "React JS"
    },
    
  ];

  // Get unique categories from projects
  const categories = ['All', ...new Set(projects.map(project => project.category || '').filter(Boolean))];

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <div>
      {/* Category Filter */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all
              ${activeCategory === category 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="group relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl"
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            {/* Project Image */}
            <div className="aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                width={500}
                height={500}
              />
            </div>

            {/* Project Info Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: hoveredProject === project.id ? 1 : 0.6
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: hoveredProject === project.id ? 0 : 20,
                  opacity: hoveredProject === project.id ? 1 : 0
                }}
              >
                {project.name}
              </motion.h3>
              
              <motion.p 
                className="text-gray-200 mb-4 line-clamp-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: hoveredProject === project.id ? 0 : 20,
                  opacity: hoveredProject === project.id ? 1 : 0
                }}
                transition={{ delay: 0.1 }}
              >
                {project.desc}
              </motion.p>

              {/* Category Tag */}
              {project.category && (
                <motion.span 
                  className="px-3 py-1 text-sm rounded-full bg-blue-500/80 text-white inline-block mb-4 w-fit"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: hoveredProject === project.id ? 0 : 20,
                    opacity: hoveredProject === project.id ? 1 : 0
                  }}
                  transition={{ delay: 0.2 }}
                >
                  {project.category}
                </motion.span>
              )}

              {/* Project Links */}
              <motion.div 
                className="flex gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: hoveredProject === project.id ? 0 : 20,
                  opacity: hoveredProject === project.id ? 1 : 0
                }}
                transition={{ delay: 0.3 }}
              >
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors"
                >
                  Live Demo
                </a>
                <a 
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gray-700 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  View Code
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}