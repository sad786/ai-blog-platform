'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function CreateBlogPage() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/generate-post', { title, content });
      console.log(response.data);

      // Show success notification
      toast.success('Blog post created successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });

      // Redirect to homepage after 1 second
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error) {
      console.error(error);

      // Show error notification
      toast.error('Failed to create blog post.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Create a New Blog Post</h1>
        <p className="text-lg text-gray-700">
          Share your thoughts and ideas with the world by creating a new blog post.
        </p>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter blog title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>

          {/* Content Textarea */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            <textarea
              id="content"
              placeholder="Write your blog content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all resize-none"
            ></textarea>
          </div>

          {/* Generate Blog Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-64 py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all disabled:bg-gray-400"
            >
              {loading ? 'Generating...' : 'Generate Blog'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}