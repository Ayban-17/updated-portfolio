// src/components/blog/BlogGrid.tsx
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
}

export function BlogGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        const data = await response.json();
        setPosts(data.posts || []); // Use empty array as fallback
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]); // Set empty array on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Don't render anything until we're on the client
  if (!isClient) return null;

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl mb-4" />
            <div className="bg-gray-200 dark:bg-gray-700 h-4 w-20 rounded mb-2" />
            <div className="bg-gray-200 dark:bg-gray-700 h-8 rounded mb-4" />
            <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-2/3" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <Link href={`/blog/${post.slug}`} key={post.id}>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Cover Image with Overlay */}
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>

            <div className="p-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4">
                {post.category}
              </span>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {post.date} • {post.readTime} read
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        </Link>
      ))}
    </div>
  );
}