'use client';
import { useState } from 'react';
import axios from 'axios';
import { redirect } from 'next/navigation';

interface BlogFormProps {}

export default function BlogForm({}: BlogFormProps) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/generate-post', { title,content });
      console.log(response.data);
      alert('Blog post generated successfully!');
      //redirect('/');
    } catch (error) {
      console.error(error);
      alert('Failed to generate blog post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Enter a topic..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
      />
      <input
        type="textbox"
        placeholder=""
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all disabled:bg-gray-400"
      >
        {loading ? 'Generating...' : 'Generate Blog Post'}
      </button>
    </form>
  );
}