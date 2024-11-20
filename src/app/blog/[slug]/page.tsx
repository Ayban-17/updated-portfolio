// src/app/blog/[slug]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
// import { BlogContent } from '@/components/blog/BlogContent';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { AuthorCard } from '@/components/blog/AuthorCard';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { useState, useEffect } from 'react';

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  slug: string;
}

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/${params.slug}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (params.slug) {
      fetchPost();
    }
  }, [params.slug]);

  if (isLoading || !post) {
    return <div>Loading...</div>;
  }

  return (
    <main className="pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Header */}
            <header className="mb-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4 ">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} read</span>
                </div>
              </motion.div>
            </header>

            {/* Blog Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none tracking-widest leading-loose flex flex-col gap-4 text-justify"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Buttons (Mobile) */}
            <div className="mt-8 lg:hidden">
              <ShareButtons />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Author Card */}
            <AuthorCard author={post.author} />

            {/* Table of Contents (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents />
            </div>

            {/* Share Buttons (Desktop) */}
            <div className="hidden lg:block">
              <ShareButtons orientation="vertical" />
            </div>
          </aside>
        </motion.article>

        {/* Related Posts */}
        <RelatedPosts />
      </div>
    </main>
  );
}