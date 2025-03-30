import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
//import {posts} from '../data/posts';

// This API will give the content user provided with title and content body

// interface Post {
//   id: number;
//   title: string;
//   content: string;
//   createdAt: string;
// }

// export async function POST(request: NextRequest) {
//   const body = await request.json();
//   const { title } = body;

//   if (!title) {
//     return new Response('Title and content are required', { status: 400 });
    
//   }

//   const newPost: Post = {
//     id: Date.now(),
//     title,
//     content,
//     createdAt: new Date().toISOString(),
//   };
//   posts.push(newPost);
//   return NextResponse.json(newPost, { status: 201 });
// }

// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { NextResponse } from "next/server";

// const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

export async function POST(request:NextRequest) {
  try {
    const { title } = await request.json();
    if (!title) {
      return new Response('Title are required', { status: 400 });
      
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContentStream({
      contents: [{ role: "user", parts: [{ text: title }] }],
      systemInstruction: {
        role: "system",
        parts: [
          {
            text: "You are a blog generator based on topics. You do not answer personal questions. You only generate content based on the topic given to you. Your name is Jarvis.",
          },
        ],
      },
    });

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of result.stream) {
          const text = chunk.text();
          controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ text })}\n\n`));
        }
        controller.close();
      },
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    },);
  } catch (error) {
    console.error("Error generating content:", error);
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
  }
}