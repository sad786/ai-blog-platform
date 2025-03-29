'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './components/BlogCard';
import BlogForm from './components/BlogForm';
import SearchBar from './components/SearchBar';

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetchPosts();
  },[]);

  const fetchPosts = async () => {
    const response = await axios.get<Post[]>('/api/get-posts');
    setPosts(response.data);
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`/api/delete-post?id=${id}`);
    fetchPosts();
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">AI Blogging Platform</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredPosts.map((post) => (
          <BlogCard  key={post.id}  post={post} />
        ))}
      </div>
    </div>
  );
}