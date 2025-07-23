"use client";

import { useEffect, useState, use } from "react";

type Blog = {
  id: number;
  title: string;
  body: string;
};

export default function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data: Blog = await res.json();
      setBlog(data);
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="p-10 w-[80vw] mx-auto text-xl">Loading...</div>;
  }

  if (!blog) {
    return <div className="p-10 w-[80vw] mx-auto text-red-500">Blog not found.</div>;
  }

  return (
    <div className=" p-10 w-[80vw] mx-auto">
      <button
        onClick={() => window.history.back()}
        className=" px-4 py-2 mb-4 rounded-[50%] bg-[#B9FF66] text-black hover:bg-[#A8E55C] transition-colors duration-300"
      >
        X
      </button>
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-lg text-gray-700">{blog.body}</p>
    </div>
  );
}