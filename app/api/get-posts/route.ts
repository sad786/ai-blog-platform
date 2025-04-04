import { NextResponse } from 'next/server';
import {posts} from '../data/posts';

// interface Post {
//     id: number;
//     title: string;
//     content: string;
//     createdAt: string;
// }

// const posts:Post[] = [
//     {
//         id:1,
//         title: "First Post",
//         content:"The is the First Post created for sample data",
//         createdAt: new Date().toISOString(),
//     },
// ];


export async function GET() {
  
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get('tag') || '';

  if(tag){
    newPosts = posts.map((post) => post.tag===tag)
    return NextResponse.json(newPosts);
  }
  else{
    return NextResponse.json(posts);
  }
}

// export async function POST(){
  
// }
