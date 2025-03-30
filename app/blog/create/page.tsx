'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
// import { marked } from "marked";
// import DOMPurify from "dompurify";

export default function CreateBlogPage() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();


  const handleTab = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // if (e.key === "Tab" || e.key === "Enter") {
      // e.preventDefault(); // Prevent default behavior of Tab or Enter

      if (!title.trim()) return; // Ignore empty input

    //  setIsGenerating(true); // Disable text box area
      setContent(""); // Clear previous content
    //  e.preventDefault();
      setLoading(true);
   // setContent(""); // Clear previous content
      try{
          const response = await fetch("/api/gen-ai-blog", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title }),
          });

          const reader = response.body?.getReader();
          const decoder = new TextDecoder();

          if(reader){
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value);
            console.log(chunk);
            let parsedChunk = JSON.parse(chunk.split("\n\n")[0].replace("data: ", ""));
            parsedChunk = parsedChunk.text;

            parsedChunk = parsedChunk.replace(/#+/g, "").replace(/\*+/g, "").replace(/_/g, "");  // Remove underscores (italic)

            // Converting Markdown to HTML and sanitizing it
            // const markdownContent = parsedChunk.text;
            // const htmlContent = DOMPurify.sanitize(marked(markdownContent) as string);

            setContent((prev) => prev + parsedChunk);
          }
        }
    }catch(err){
      console.log(err);
    }finally{
      setLoading(false);
     }
//  }
  };
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
        </p>{/*
        <p className="text-lg text-gray-600">
          To generate AI blog, enter Title and hit Enter Key or Tab Key on your keyboard and see the AI generated blog.
        </p>*/}
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
          
          {title.trim() &&(
          <button
            type="button"
            onClick={handleTab}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop:"10px",
            }}
          >
            Generate by AI
          </button>
        )}
          </div>


          {/* Content Textarea */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            <textarea
              id="content"
              placeholder="Write your blog content here..."
              readOnly={loading}
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
              {loading ? 'Generating...' : 'Post Blog'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}