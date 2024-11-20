// src/app/blog/page.tsx
import { BlogGrid } from '@/components/blog/BlogGrid';
import { FeaturedPost } from '@/components/blog/FeaturedPost';
import { Categories } from '@/components/blog/Categories';
import { SearchBar } from '@/components/blog/SearchBar';
import { FloatingShapes } from '@/components/about/DesignElements';
import { ScrollProgress } from '@/components/about/ScrollProgress';
import { AnimatedBackground } from '@/components/about/AnimatedBackground';

export default function BlogPage() {
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
              My Blog ✍️
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Thoughts, learnings, and tutorials about web development, design, and tech.
            </p>
          </section>

          {/* Search and Categories */}
          <div className="mb-16">
            <SearchBar />
            <Categories />
          </div>

          {/* Featured Post */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
            <FeaturedPost />
          </section>

          {/* All Posts */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Latest Posts</h2>
            <BlogGrid />
          </section>
        </div>
      </main>
    </>
  );
}