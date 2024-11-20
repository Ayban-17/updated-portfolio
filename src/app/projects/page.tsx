// src/app/projects/page.tsx
// import { Projects } from '@/components/projects/Projects';
import { FloatingShapes } from '@/components/about/DesignElements';
import { ScrollProgress } from '@/components/about/ScrollProgress';
import { AnimatedBackground } from '@/components/about/AnimatedBackground';
import { Projects } from '@/components/projects/Projects';

export default function ProjectsPage() {
  return (
    <>
      <ScrollProgress />
      <AnimatedBackground />
      <FloatingShapes />
      
      <main className="min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Intro Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              My Projects ✨
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Check out some of my featured works. Each project is crafted with love and attention to detail.
            </p>
          </section>

          {/* Featured Projects */}
          <Projects/>
        </div>
      </main>
    </>
  );
}