import { NextRequest, NextResponse } from 'next/server';
import {posts} from '../data/posts';

// This API will give the content user provided with title and content body

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  tag:string;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, content } = body;

  if (!title || !content) {
    return new Response('Title and content are required', { status: 400 });
  }

  const newPost: Post = {
    id: Date.now(),
    title,
    content,
    createdAt: new Date().toISOString(),
    tag:'random'
  };
  posts.push(newPost);
  return NextResponse.json(newPost, { status: 201 });
}
