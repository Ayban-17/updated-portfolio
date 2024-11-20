// src/app/admin/blog/new/page.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BlogEditor } from '@/components/admin/BlogEditor';
import { useRouter } from 'next/navigation';

interface BlogPost {
  title: string;
  category: string;
  content: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  }
}

export default function NewBlogPost() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [readTime, setReadTime] = useState('');
  const [isPublishing, setIsPublishing] = useState(false);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-');
  };

  const handlePublish = async () => {
    if (!title || !category || !content || !excerpt || !coverImage || !readTime) {
      alert('Please fill in all fields!');
      return;
    }

    try {
      setIsPublishing(true);

      const newPost: BlogPost = {
        title,
        category,
        content,
        excerpt,
        slug: generateSlug(title),
        coverImage,
        readTime,
        author: {
          name: "Your Name", // You can make this dynamic later
          role: "Web Developer",
          avatar: "https://www.skyadesigns.co.uk/wp-content/uploads/2023/05/5-best-tools-for-web-designers-in-2023.jpg"
        }
      };

      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) throw new Error('Failed to publish post');

      router.push('/blog');
      router.refresh();
    } catch (error) {
      console.error('Error publishing post:', error);
      alert('Failed to publish post. Please try again.');
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <main className="pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">New Blog Post</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePublish}
            disabled={isPublishing}
            className={`px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors ${
              isPublishing ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isPublishing ? 'Publishing...' : 'Publish'}
          </motion.button>
        </div>

        <div className="space-y-6">
          {/* Cover Image URL */}
          <div>
            <label className="block text-sm font-medium mb-2">Cover Image URL</label>
            <input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="Enter image URL"
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            />
          </div>

          {/* Title Input */}
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post Title"
              className="w-full text-4xl font-bold bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2"
            />
          </div>

          {/* Category & Read Time */}
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="Read Time (e.g., 5 min)"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Write a brief excerpt..."
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Editor */}
          <BlogEditor 
            initialContent={content} 
            onUpdate={(newContent) => setContent(newContent)} 
          />
        </div>
      </div>
    </main>
  );
}