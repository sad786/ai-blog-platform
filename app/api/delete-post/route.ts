import { NextResponse } from 'next/server';
import {posts} from '../get-posts/route';
// interface Post {
//   id: number;
//   title: string;
//   content: string;
//   createdAt: string;
// }

// let posts: Post[] = [];

// DELETE a post by ID
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get('id') || '', 10);

  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) {
    return new Response('Post not found', { status: 404 });
  }

  posts.splice(index, 1);
  return NextResponse.json({ message: 'Post deleted successfully' });
}