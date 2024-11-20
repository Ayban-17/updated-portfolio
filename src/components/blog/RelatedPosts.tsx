// src/components/blog/RelatedPosts.tsx
'use client';
import { motion } from 'framer-motion';

export function RelatedPosts() {
  const relatedPosts = [
    {
      id: 1,
      title: "Getting Started with TypeScript",
      excerpt: "Learn the basics of TypeScript and how to use it in your projects.",
      image: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg",
      category: "TypeScript",
      readTime: "5 min",
      date: "Nov 15, 2024"
    },
    {
      id: 2,
      title: "React Best Practices 2024",
      excerpt: "Modern React patterns and best practices for clean, scalable code.",
      image: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg",
      category: "React",
      readTime: "8 min",
      date: "Nov 14, 2024"
    },
    {
      id: 3,
      title: "Introduction to Next.js 14",
      excerpt: "Discover what's new in Next.js 14 and how to leverage its features.",
      image: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg",
      category: "Next.js",
      readTime: "6 min",
      date: "Nov 13, 2024"
    }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">More Articles You Might Like ✨</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {relatedPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            {/* Card Container */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Tag */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Metadata */}
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} read</span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity"
        >
          View All Posts
        </motion.button>
      </div>
    </section>
  );
}