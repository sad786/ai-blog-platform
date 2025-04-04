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
  if(tag)
    return 
  
  return NextResponse.json(posts);
}

// export async function POST(){
  
// }
