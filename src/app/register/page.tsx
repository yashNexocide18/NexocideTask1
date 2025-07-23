"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function SignupPage() {
  const router = useRouter();
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handlesignup = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/auth/register', { username, email, password });
      alert(res.data.message)
      localStorage.setItem('token', res.data.token);
      router.push('/login')
    } catch (err) {
      console.log(err)
    }
  }





  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-[#F3F3F3] rounded-[30px] shadow-xl p-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Sign Up
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={username}
              onChange={(e) => setuserName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 top-8 flex items-center text-sm text-gray-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>


          <button
            onClick={handlesignup}
            type="button"
            className="w-full bg-[#191A23] hover:bg-[#2a2b36] text-white font-semibold py-3 rounded-xl transition"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-700">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
