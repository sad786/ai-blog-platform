'use client';
//import { useRouter } from 'next/router';
import {usePathname} from 'next/navigation';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
//import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export default function BlogPostPage() {
    const pathname = usePathname().split('/');

    const id = pathname[pathname.length-1];
   const router = useRouter();

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await axios.get<Post[]>('/api/get-posts');
      const selectedPost = response.data.find((p) => p.id === parseInt(id as string, 10));
      if (selectedPost) {
        setPost(selectedPost);
      } else {
        console.error('Post not found');
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <BlogSkeleton />;
  }

  if (!post) {
    return <p className="text-center text-gray-600">Post not found.</p>;
  }


//  const handleDelete = async () => {};


const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      await axios.delete(`/api/delete-post?id=${id}`);
      toast.success('Post deleted successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });

      // Redirect to homepage after deletion
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error) {
      console.error('Error deleting post:', error);
      toast.error('Failed to delete post.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
      <p className="text-sm text-gray-500 mt-4">{new Date(post.createdAt).toLocaleDateString()}</p>
      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className="mt-6 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-all"
      >
        Delete Post
      </button>
    </div>
  );
}

// Skeleton Loader Component
function BlogSkeleton() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg animate-pulse">
      {/* Title Skeleton */}
      <div className="h-8 bg-gray-300 rounded mb-4"></div>

      {/* Content Skeleton */}
      <div className="space-y-4">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
       

      {/* Date Skeleton */}
      <div className="h-4 bg-gray-300 rounded w-1/4 mt-4"></div>
    </div>
  );
}

