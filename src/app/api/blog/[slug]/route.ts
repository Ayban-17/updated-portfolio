// src/app/api/blog/[slug]/route.ts
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const filePath = path.join(process.cwd(), 'src/data/blogPosts.json');
    const data = await fs.readFile(filePath, 'utf8');
    const { posts } = JSON.parse(data);
    
    const post = posts.find((p: any) => p.slug === params.slug);
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' }, 
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch post' }, 
      { status: 500 }
    );
  }
}