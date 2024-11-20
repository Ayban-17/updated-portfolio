// src/app/about/page.tsx
import { AnimatedBackground } from '@/components/about/AnimatedBackground';
import { AnimatedDivider } from '@/components/about/AnimatedDivider';
import { FloatingShapes } from '@/components/about/DesignElements';
import { ExperienceTimeline } from '@/components/about/ExperienceTimeline';
import { ScrollProgress } from '@/components/about/ScrollProgress';
import { Skills } from '@/components/about/Skills';
// import { Achievements } from '@/components/about/Achievements';
// import { PersonalInterests } from '@/components/about/PersonalInterests';
// import { Education } from '@/components/about/Education';
// import { Certifications } from '@/components/about/Certifications';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 pb-16 overflow-hidden">
        <ScrollProgress/>
        <AnimatedBackground/>
        <FloatingShapes/>
      {/* Fancy Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-200 dark:bg-pink-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Upgraded Intro Section */}
        <section className="text-center mb-20 relative">
          <span className="inline-block animate-bounce mb-4">👋</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Nice to Meet You!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building digital experiences since <span className="font-semibold text-blue-600 dark:text-blue-400">2020</span>. 
            Based in <span className="font-semibold text-purple-600 dark:text-purple-400">Manila, Philippines</span>, 
            crafting web solutions that combine creativity with functionality.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { number: "5+", label: "Years of Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "20+", label: "Happy Clients" },
              { number: "∞", label: "Cups of Coffee" }
            ].map((stat) => (
              <div key={stat.label} 
                className="p-4 rounded-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm
                         transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
        <AnimatedDivider/>
        {/* Current Status Section */}
        <section className="mb-20">
          <div className="p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              🎯 Currently...
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Working on</h3>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Building awesome portfolio projects</li>
                  <li>• Learning AWS Cloud Architecture</li>
                  <li>• Contributing to open source</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-purple-600 dark:text-purple-400">Learning</h3>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Web3 Development</li>
                  <li>• Cloud Native Architecture</li>
                  <li>• UI/UX Best Practices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <AnimatedDivider/>
        {/* Experience Timeline */}
        <ExperienceTimeline />
        <AnimatedDivider/>
        {/* Skills Section */}
        <Skills />
      </div>
    </main>
  );
}