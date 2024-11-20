// src/app/api/blog/route.ts
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
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

interface BlogData {
  posts: BlogPost[];
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src/data/blogPosts.json');
    const fileExists = await fs.stat(filePath).catch(() => false);

    // If file doesn't exist, create it with initial structure
    if (!fileExists) {
      const initialData: BlogData = {
        posts: []
      };
      await fs.writeFile(filePath, JSON.stringify(initialData, null, 2));
      return NextResponse.json(initialData);
    }

    const data = await fs.readFile(filePath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return NextResponse.json({ posts: [] });
  }
}

export async function POST(request: Request) {
  try {
    const filePath = path.join(process.cwd(), 'src/data/blogPosts.json');
    let blogData: BlogData;

    // Check if file exists and read it
    try {
      const fileContent = await fs.readFile(filePath, 'utf8');
      blogData = JSON.parse(fileContent);
      
      // Ensure posts array exists
      if (!Array.isArray(blogData.posts)) {
        blogData.posts = [];
      }
    } catch {
      // If file doesn't exist or is invalid, create new data structure
      blogData = { posts: [] };
    }

    const newPost = await request.json();
    
    // Add new post with generated id and date
    const postWithMetadata: BlogPost = {
      id: Date.now().toString(),
      ...newPost,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    };

    // Add new post to the beginning of the array
    blogData.posts = [postWithMetadata, ...blogData.posts];

    // Save back to file
    await fs.writeFile(filePath, JSON.stringify(blogData, null, 2));
    
    return NextResponse.json(postWithMetadata);
  } catch (error) {
    console.error('Error saving blog post:', error);
    return NextResponse.json(
      { error: 'Failed to save post' }, 
      { status: 500 }
    );
  }
}