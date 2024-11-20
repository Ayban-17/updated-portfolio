// prisma/seed.ts
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // Delete existing data (optional)
  await prisma.stat.deleteMany()
  await prisma.skill.deleteMany()
  await prisma.techStack.deleteMany()
  await prisma.heroContent.deleteMany()

  await seedBlog();

  // Create new hero content
  const hero = await prisma.heroContent.create({
    data: {
      name: "Ayban",
      roles: ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"],
      description: "🚀 Transforming ideas into elegant digital experiences. Specializing in creating modern web solutions that combine beautiful design with powerful functionality.",
      techStack: {
        create: [
          { name: "React" },
          { name: "TypeScript" },
          { name: "Next.js" },
          { name: "Node.js" },
          { name: "Tailwind" }
        ]
      },
      skills: {
        create: [
          {
            icon: "Code",
            label: "Clean Code",
            description: "Writing elegant solutions"
          },
          {
            icon: "Layout",
            label: "Responsive",
            description: "Mobile-first approach"
          },
          {
            icon: "Palette",
            label: "UI/UX",
            description: "Beautiful interfaces"
          },
          {
            icon: "Camera",
            label: "Creative",
            description: "Unique solutions"
          }
        ]
      },
      stats: {
        create: [
          { label: "Years Experience", value: "5+" },
          { label: "Projects Completed", value: "50+" },
          { label: "Happy Clients", value: "30+" },
          { label: "Coffee Cups", value: "∞" }
        ]
      }
    }
  })

  // Add this to your existing seed.ts

  // Create author first
  const author = await prisma.author.create({
    data: {
      name: "Ayban",
      bio: "Full Stack Developer & UI/UX Enthusiast",
      avatarUrl: "https://your-avatar-url.com",
    },
  });

  // Create blog posts
  const blogPosts = await prisma.blogPost.create({
    data: {
      title: "Understanding React Server Components",
      slug: "understanding-react-server-components",
      excerpt: "Deep dive into React Server Components and how they transform web development.",
      content: `
        # Understanding React Server Components
        
        React Server Components are a game-changing addition to the React ecosystem...
        
        ## What are Server Components?
        
        Server Components allow us to render components on the server...
        
        ## Benefits of Server Components
        
        1. Improved Performance
        2. Reduced Bundle Size
        3. Better SEO
        
        [Rest of your blog content...]
      `,
      category: "React",
      tags: ["React", "Next.js", "Web Development"],
      readTime: "5 min",
      published: true,
      publishedAt: new Date(),
      authorId: author.id,
      coverImage: "https://your-cover-image.com",
    },
  });

  console.log('Seeded database with hero content:', hero)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })



  async function seedBlog() {
    try {
      // Create author first
      const author = await prisma.author.create({
        data: {
          name: "Ayban",
          bio: "Full Stack Developer & UI/UX Enthusiast. Passionate about creating beautiful, functional web experiences.",
          avatarUrl: "https://avatars.githubusercontent.com/u/1234567",
        },
      });
  
      // Blog posts data
      const posts = [
        {
          title: "Getting Started with Next.js 14",
          slug: "getting-started-with-nextjs-14",
          excerpt: "Explore the latest features of Next.js 14 and learn how to build modern web applications with improved performance and developer experience.",
          content: `# Getting Started with Next.js 14
  
  Next.js 14 brings revolutionary changes to web development...
  
  ## Key Features
  - App Router
  - Server Components
  - Improved Performance
  - Enhanced Developer Experience
  
  ## Getting Started
  First, create a new Next.js project...`,
          category: "Next.js",
          tags: ["Next.js", "React", "Web Development"],
          readTime: "5 min",
          published: true,
          publishedAt: new Date('2024-01-15'),
          coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        },
        {
          title: "Mastering TypeScript: Best Practices for 2024",
          slug: "mastering-typescript-best-practices-2024",
          excerpt: "Level up your TypeScript game with these modern best practices and advanced techniques for building type-safe applications.",
          content: `# Mastering TypeScript in 2024
  
  TypeScript continues to evolve and improve...
  
  ## Advanced Types
  - Utility Types
  - Conditional Types
  - Template Literal Types
  
  ## Best Practices
  1. Strict Mode
  2. Type Inference
  3. Error Handling`,
          category: "TypeScript",
          tags: ["TypeScript", "JavaScript", "Programming"],
          readTime: "7 min",
          published: true,
          publishedAt: new Date('2024-02-01'),
          coverImage: "https://images.unsplash.com/photo-1626301688449-1fa324d15bca",
        },
        {
          title: "Building Beautiful UIs with Tailwind CSS",
          slug: "building-beautiful-uis-with-tailwind",
          excerpt: "Discover how to create stunning user interfaces using Tailwind CSS, from basic styling to advanced customization.",
          content: `# Building with Tailwind CSS
  
  Learn how to leverage Tailwind's utility-first approach...
  
  ## Why Tailwind?
  - Utility-First
  - Customization
  - Performance
  
  ## Advanced Techniques
  - Custom Plugins
  - Theme Configuration
  - Responsive Design`,
          category: "CSS",
          tags: ["Tailwind", "CSS", "UI Design"],
          readTime: "6 min",
          published: true,
          publishedAt: new Date('2024-02-15'),
          coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
        },
        {
          title: "React Server Components Explained",
          slug: "react-server-components-explained",
          excerpt: "A deep dive into React Server Components and how they're changing the way we build React applications.",
          content: `# Understanding React Server Components
  
  Server Components represent a paradigm shift...
  
  ## Core Concepts
  - Server vs Client Components
  - Data Fetching
  - Component Composition
  
  ## Implementation
  Step-by-step guide...`,
          category: "React",
          tags: ["React", "Server Components", "Web Development"],
          readTime: "8 min",
          published: true,
          publishedAt: new Date('2024-03-01'),
          coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
        },
        {
          title: "Modern State Management in React",
          slug: "modern-state-management-react",
          excerpt: "Explore different approaches to state management in React, from useState to Zustand and everything in between.",
          content: `# Modern State Management
  
  State management has evolved significantly...
  
  ## Popular Solutions
  - useState & useReducer
  - Context API
  - Zustand
  - Jotai
  
  ## Best Practices
  Guidelines for choosing...`,
          category: "React",
          tags: ["React", "State Management", "JavaScript"],
          readTime: "6 min",
          published: true,
          publishedAt: new Date('2024-03-15'),
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        }
      ];
  
      // Create all blog posts
      for (const post of posts) {
        await prisma.blogPost.create({
          data: {
            ...post,
            authorId: author.id
          },
        });
      }
  
      console.log('Blog posts seeded successfully! 🌱');
    } catch (error) {
      console.error('Error seeding blog:', error);
      throw error;
    }
  }

  
