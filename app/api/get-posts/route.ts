import { NextResponse } from 'next/server';

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export let posts: Post[] = [{id:1, title: 'Sample Post', content: 'This is a sample post.', createdAt: new Date().toISOString() }];

export async function GET() {
  return NextResponse.json(posts);
}

// Helper function to add posts
export function addPost(post: Post) {
  posts.push(post);
}