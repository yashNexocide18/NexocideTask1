"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Card2() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Failed to fetch blogs:", err));
  }, []);

  return (
    <div className="relative border-2 h-fit mt-20 rounded-[40px] shadow-[0_5px_0_#191A23]">
      <div className="grid grid-cols-3 gap-10  px-12 py-5  ">
        {blogs.map((blog) => (
          <div key={blog.id} className="w-full h-[fit]  px-9 py-8 space-y-5  ">
            <h1 className="text-3xl font-semibold  ">{blog.title}</h1>
            <p className="text-[16px] text-black">{blog.body}</p>
            <div className="flex items-center gap-5 mt-3 ">
              <Image
                src="/Arrow 3.svg"
                alt="arrow"
                width={40}
                height={40}
                className="bg-[#B9FF66] p-2 rounded-full cursor-pointer"
              />
              <button className=" cursor-pointer ">
                Read article
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bg-[#808080] h-[87%] w-[2px]  left-[420px] top-[64px]"></div>
      <div className="absolute h-[87%] w-[2px] bg-[#808080] right-[420px] top-[60px]"></div>
      <div className="absolute  w-[87%] h-[2px] bg-[#808080] left-[82px] top-[50%]"></div>
    </div>
  );
}
