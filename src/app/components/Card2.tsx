"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

type Blog = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Card2() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const fetches = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetches();
  }, []);

  return (
    <div className="relative border-2 h-fit mt-20 rounded-[40px] shadow-[0_5px_0_#191A23]">
      {loading ? (
        <div className="text-center py-10 text-xl">Loading...</div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-10 px-12 py-5">
            {blogs.map((blog) => (
              <div key={blog.id} className="w-full h-fit px-9 py-8 space-y-5">
                <h1 className="text-3xl font-semibold">{blog.title}</h1>
                <p className="text-[16px] text-black">{blog.body}</p>
                <Link href={`/blog/${blog.id}`} className="flex items-center gap-5 mt-3">
                  <Image
                    src="/Arrow 3.svg"
                    alt="arrow"
                    width={40}
                    height={40}
                    className="bg-[#B9FF66] p-2 rounded-full cursor-pointer"
                  />
                  <button className="cursor-pointer hover:underline">Read article</button>
                </Link>
              </div>
            ))}
          </div>

          <div className="absolute bg-[#808080] h-[87%] w-[2px] left-[420px] top-[64px]"></div>
          <div className="absolute h-[87%] w-[2px] bg-[#808080] right-[420px] top-[60px]"></div>
          <div className="absolute w-[87%] h-[2px] bg-[#808080] left-[82px] top-[50%]"></div>
        </>
      )}
    </div>
  )
};