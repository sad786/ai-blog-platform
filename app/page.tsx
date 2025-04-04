'use client';
import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './components/BlogCard';
//import BlogForm from './components/BlogForm';
import SearchBar from './components/SearchBar';
import Skeleton from './components/Skeleton';

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  tag:string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
//    setLoading(true);
    fetchPosts();
//    setLoading(false);
  },[]);


  const handleTab = async (tag:string) => {
    //const id = await fetch("api/get-posts/");
    const res = await fetch(`api/get-posts?tag=${tag}`);
    const posts = await res.json();
    setPosts(posts);
  }

  const fetchPosts = async () => {
    const response = await axios.get<Post[]>('/api/get-posts');
    setLoading(false);
    setPosts(response.data);
  };

  // const handleDelete = async (id: number) => {
  //   await axios.delete(`/api/delete-post?id=${id}`);
  //   fetchPosts();
  // };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">AI Blogging Platform</h1>
      <button
            type="button"
            onClick={handleTab}
            style={{
              padding: "10px 20px",
              backgroundColor: loading ? "#ccc" : "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: loading ? "not-allowed" : "pointer",
              marginTop:"10px",
              opacity: loading ? 0.6 : 1
            }}
            className="w-64 py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all disabled:bg-gray-400"
          >
        Nature
        </button>
        <button
            type="button"
            onClick={handleTab}
            style={{
              padding: "10px 20px",
              backgroundColor: loading ? "#ccc" : "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: loading ? "not-allowed" : "pointer",
              marginTop:"10px",
              opacity: loading ? 0.6 : 1
            }}
            className="w-64 py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all disabled:bg-gray-400"
          >

          AI</button>

      <SearchBar setSearchTerm={setSearchTerm} />


      {
        
      loading?<div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-6 mt-8"><Skeleton/> <Skeleton/> <Skeleton/></div>:(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {
            filteredPosts.map((post) => (
            <BlogCard  key={post.id}  post={post} />
          ))}
      
      </div>
      )}
      
    </div>
  );
}
