import Link from 'next/link';
//import { MouseEvent } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

interface BlogCardProps {
  post: Post;
//  onDelete: (id: number) => void;
}

export default function BlogCard({ post,}: BlogCardProps) {
  // const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.stopPropagation(); // Prevent the click event from propagating to the Link
  //   onDelete(post.id);
  // };

  return (
    <Link href={`/blog/${post.id}`} className="block">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer">
        <div className="p-4">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-600 mt-2">{post.content.slice(0, 100)}...</p>
          {/*<p className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">{post.content.slice(0,100)}...</p>*/}
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}