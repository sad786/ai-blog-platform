interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

interface BlogViewProps {
  post: Post;
}

export default function BlogView({ post }: BlogViewProps) {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
      <p className="text-sm text-gray-500 mt-4">{new Date(post.createdAt).toLocaleDateString()}</p>
    </div>
  );
}