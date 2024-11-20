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
      category: "Frontend"
    },
    {
      id: "buife",
      name: "GPT 3 Front End Application",
      desc: "I have proficiently crafted a front-end application using the technologies of React, TypeScript, and Tailwind CSS. This application is meticulously designed to offer a seamless and responsive user experience across various devices, including mobile, tablet, and desktop platforms.",
      image: "/assets/projects/gpt3.png",
      liveUrl: "https://gpt-3-front-end-app.netlify.app/",
      repoUrl: "https://github.com/Ayban-17/gpt-3-front-end-Application",
      category: "Frontend"
    },
    {
      id: "njicbwv",
      name: "Space Tourism",
      desc: "Space Tourism is a modern, visually captivating website that I created as part of a Front-end Mentor challenge. It features an animated hero section, informative content with images, and a fully responsive layout.",
      image: "/assets/projects/space-tourism.png",
      liveUrl: "https://ayban-17.github.io/space-tourism/",
      repoUrl: "https://github.com/Ayban-17/space-tourism",
      category: "Frontend"
    },
    {
      id: "buvker",
      name: "Youtube Clone",
      desc: "The YouTube Clone project was undertaken as a challenge to test and showcase my web development skills. It serves as a testament to my web development proficiency, demonstrating my experience in implementing complex features.",
      image: "/assets/projects/youtube.png",
      liveUrl: "https://ayban-17.github.io/YouTube-Clone/",
      repoUrl: "https://github.com/Ayban-17/YouTube-Clone",
      category: "Frontend"
    },
    {
      id: "buvikfe",
      name: "BulSU Archive",
      desc: "This is a functional frontend for BulSU Archive website using HTML, CSS, and JavaScript. Website features an intuitive and user-friendly interface, responsive design, and dynamic search functionality.",
      image: "/assets/projects/bulsu.png",
      liveUrl: "https://ayban-17.github.io/BulSU-Archive-funtional-frontend-Javscript-html-css/",
      repoUrl: "https://github.com/Ayban-17/BulSU-Archive-funtional-frontend-Javscript-html-css",
      category: "Frontend"
    },
    {
      id: "bhjefcve",
      name: "Mern Family App",
      desc: "The MERN Family App is a comprehensive project in which I developed a full-stack application, leveraging the power of MongoDB, Express, React, and Node.js. I successfully implemented CRUD functionality, making it a highly functional web application.",
      image: "/assets/projects/mern.png",
      liveUrl: "https://mern-family-app.vercel.app/",
      repoUrl: "https://github.com/Ayban-17/MERN-family-app",
      category: "Full Stack"
    },
    {
      id: "bviev",
      name: "Animenia",
      desc: "Animenia represents my first foray into React development. This project caters to anime enthusiasts by providing a platform that displays comprehensive anime information and captivating poster images, sourced through the Kitsu anime API.",
      image: "/assets/projects/animenia.png",
      liveUrl: "https://b8vz5k.csb.app/",
      repoUrl: "https://codesandbox.io/s/animenia-b8vz5k",
      category: "Frontend"
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

// src/components/projects/Projects.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import { useState } from 'react';

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   tech: string[];
//   image: string;
//   liveUrl?: string;
//   githubUrl?: string;
//   categories: string[]; // Changed from single category to array
// };

// export function Projects() {
//   const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']); // Changed to array
//   const [hoveredProject, setHoveredProject] = useState<number | null>(null);

//   const projects: Project[] = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce platform with real-time inventory management, user authentication, payment processing, and order tracking. Features include dynamic product filtering, cart management, and admin dashboard.",
//       tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe", "PostgreSQL"],
//       image: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg",
//       liveUrl: "https://example.com",
//       githubUrl: "https://github.com",
//       categories: ["Full Stack", "E-commerce", "Web App"]
//     },
//     {
//       id: 2,
//       title: "Analytics Dashboard",
//       description: "Real-time analytics dashboard featuring interactive data visualizations, customizable widgets, and automated reporting tools. Includes user behavior tracking and performance metrics.",
//       tech: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io"],
//       image: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg",
//       githubUrl: "https://github.com",
//       categories: ["Frontend", "Data Visualization", "Web App"]
//     },
//     {
//       id: 3,
//       title: "Task Management System",
//       description: "Collaborative project management tool with real-time updates, task assignment, progress tracking, and team communication features. Includes calendar integration and file sharing.",
//       tech: ["React", "Redux", "Express", "MongoDB", "WebSocket"],
//       image: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg",
//       liveUrl: "https://example.com",
//       githubUrl: "https://github.com",
//       categories: ["Full Stack", "Productivity", "Web App"]
//     },
//     {
//       id: 4,
//       title: "AI Image Generator",
//       description: "Web application that uses machine learning to generate and manipulate images. Features include style transfer, image enhancement, and custom filter creation.",
//       tech: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
//       image: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg",
//       liveUrl: "https://example.com",
//       categories: ["AI/ML", "Full Stack", "Image Processing"]
//     },
//     {
//       id: 5,
//       title: "Social Media Mobile App",
//       description: "Cross-platform mobile application for social networking, featuring real-time messaging, media sharing, and location-based friend discovery.",
//       tech: ["React Native", "Firebase", "Redux", "TypeScript"],
//       image: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg",
//       githubUrl: "https://github.com",
//       categories: ["Mobile", "Social Network", "Cross-platform"]
//     },
//     {
//       id: 6,
//       title: "Personal Finance Tracker",
//       description: "Budgeting and expense tracking application with bank integration, custom budget categories, and visual expense analysis. Features automated categorization and bill reminders.",
//       tech: ["Vue.js", "Node.js", "PostgreSQL", "Plaid API"],
//       image: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg",
//       liveUrl: "https://example.com",
//       githubUrl: "https://github.com",
//       categories: ["Full Stack", "Finance", "Web App"]
//     },
//     {
//       id: 7,
//       title: "Fitness Tracking App",
//       description: "Mobile fitness application for workout planning, progress tracking, and social fitness challenges. Includes integration with wearable devices and nutrition tracking.",
//       tech: ["Flutter", "Firebase", "Google Fit API", "Node.js"],
//       image: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg",
//       categories: ["Mobile", "Health & Fitness", "Cross-platform"]
//     },
//     {
//       id: 8,
//       title: "Real Estate Platform",
//       description: "Property listing and management platform with virtual tours, automated valuation, and agent-client communication tools. Features interactive maps and neighborhood analytics.",
//       tech: ["Next.js", "Three.js", "Express", "MongoDB", "Google Maps API"],
//       image: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg",
//       liveUrl: "https://example.com",
//       categories: ["Full Stack", "Real Estate", "3D/VR"]
//     },
//     {
//       id: 9,
//       title: "Learning Management System",
//       description: "Educational platform featuring course creation, student progress tracking, and interactive learning materials. Includes video conferencing and assignment grading.",
//       tech: ["React", "Node.js", "PostgreSQL", "WebRTC", "AWS"],
//       image: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg",
//       githubUrl: "https://github.com",
//       categories: ["Full Stack", "Education", "Web App"]
//     },
//     {
//       id: 10,
//       title: "Weather Forecasting App",
//       description: "Weather application with real-time updates, radar maps, and severe weather alerts. Features location-based forecasts and historical weather data analysis.",
//       tech: ["React Native", "Node.js", "Weather API", "GIS"],
//       image: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg",
//       liveUrl: "https://example.com",
//       categories: ["Mobile", "Weather", "Data Visualization"]
//     },
//     {
//       id: 11,
//       title: "Smart Home Controller",
//       description: "IoT platform for managing smart home devices with automation rules, energy monitoring, and voice control integration. Features real-time device status and scene creation.",
//       tech: ["React", "Node.js", "MQTT", "WebSocket", "MongoDB"],
//       image: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg",
//       githubUrl: "https://github.com",
//       categories: ["IoT", "Full Stack", "Home Automation"]
//     },
//     {
//       id: 12,
//       title: "Music Streaming Service",
//       description: "Audio streaming platform with playlist management, social sharing, and artist analytics. Features offline playback and personalized recommendations.",
//       tech: ["React", "Redux", "Node.js", "PostgreSQL", "AWS S3"],
//       image: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg",
//       liveUrl: "https://example.com",
//       categories: ["Full Stack", "Entertainment", "Streaming"]
//     }
//   ];

//   // Get unique categories from all projects
//   const availableCategories = ['All', ...Array.from(new Set(projects.flatMap(project => project.categories)))];

//   // Handle category selection
//   const toggleCategory = (category: string) => {
//     if (category === 'All') {
//       setSelectedCategories(['All']);
//       return;
//     }

//     setSelectedCategories(prev => {
//       const newSelection = prev.filter(c => c !== 'All');
//       if (newSelection.includes(category)) {
//         const result = newSelection.filter(c => c !== category);
//         return result.length === 0 ? ['All'] : result;
//       } else {
//         return [...newSelection, category];
//       }
//     });
//   };

//   // Filter projects based on selected categories
//   const filteredProjects = projects.filter(project => 
//     selectedCategories.includes('All') || 
//     project.categories.some(category => selectedCategories.includes(category))
//   );

//   return (
//     <div>
//       {/* Category Filter */}
//       <motion.div 
//         className="flex flex-wrap justify-center gap-4 mb-12"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         {availableCategories.map((category) => (
//           <motion.button
//             key={category}
//             onClick={() => toggleCategory(category)}
//             className={`px-6 py-2 rounded-full text-sm font-medium transition-all
//               ${selectedCategories.includes(category)
//                 ? 'bg-blue-500 text-white' 
//                 : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
//               }`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {category}
//           </motion.button>
//         ))}
//       </motion.div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {filteredProjects.map((project) => (
//           <motion.div
//             key={project.id}
//             layoutId={`project-${project.id}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             className="group relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl"
//             onHoverStart={() => setHoveredProject(project.id)}
//             onHoverEnd={() => setHoveredProject(null)}
//           >
//             {/* Project Image */}
//             <div className="aspect-video overflow-hidden">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//             </div>

//             {/* Project Info Overlay */}
//             <motion.div 
//               className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end"
//               initial={{ opacity: 0 }}
//               animate={{ 
//                 opacity: hoveredProject === project.id ? 1 : 0.6
//               }}
//               transition={{ duration: 0.2 }}
//             >
//               <motion.h3 
//                 className="text-2xl font-bold text-white mb-2"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ 
//                   y: hoveredProject === project.id ? 0 : 20,
//                   opacity: hoveredProject === project.id ? 1 : 0
//                 }}
//               >
//                 {project.title}
//               </motion.h3>
              
//               {/* Categories */}
//               <motion.div 
//                 className="flex flex-wrap gap-2 mb-2"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ 
//                   y: hoveredProject === project.id ? 0 : 20,
//                   opacity: hoveredProject === project.id ? 1 : 0
//                 }}
//                 transition={{ delay: 0.1 }}
//               >
//                 {project.categories.map((category) => (
//                   <span 
//                     key={category}
//                     className="px-2 py-1 text-xs rounded-full bg-purple-500/80 text-white"
//                   >
//                     {category}
//                   </span>
//                 ))}
//               </motion.div>
              
//               <motion.p 
//                 className="text-gray-200 mb-4"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ 
//                   y: hoveredProject === project.id ? 0 : 20,
//                   opacity: hoveredProject === project.id ? 1 : 0
//                 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 {project.description}
//               </motion.p>

//               {/* Tech Stack */}
//               <motion.div 
//                 className="flex flex-wrap gap-2 mb-4"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ 
//                   y: hoveredProject === project.id ? 0 : 20,
//                   opacity: hoveredProject === project.id ? 1 : 0
//                 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 {project.tech.map((tech) => (
//                   <span 
//                     key={tech}
//                     className="px-2 py-1 text-xs rounded-full bg-blue-500/80 text-white"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </motion.div>

//               {/* Project Links */}
//               <motion.div 
//                 className="flex gap-4"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ 
//                   y: hoveredProject === project.id ? 0 : 20,
//                   opacity: hoveredProject === project.id ? 1 : 0
//                 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 {project.liveUrl && (
//                   <a 
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors"
//                   >
//                     Live Demo
//                   </a>
//                 )}
//                 {project.githubUrl && (
//                   <a 
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 rounded-lg bg-gray-700 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
//                   >
//                     View Code
//                   </a>
//                 )}
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }