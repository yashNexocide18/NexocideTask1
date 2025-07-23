"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const [showPassword, setShowPassword] = useState(false); 

  const handlelogin = async () => {
    setError("");
    try {
      const res = await axios.post("http://localhost:8000/api/auth/login", {
        email,
        password,
      });
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
      router.push("/home");
    } catch (err) {
      setError("Login failed. Please try again.");
      console.log(err)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-[#F3F3F3] rounded-[30px] shadow-xl p-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Login
        </h2>

        {error && (
          <div className="text-red-600 text-sm font-medium text-center mb-4">
            {error}
          </div>
        )}

        <form className="space-y-6">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="text-right text-sm">
            <a href="/forgotpassword" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            onClick={handlelogin}
            type="button"
            className="w-full bg-[#191A23] hover:bg-[#2a2b36] text-white font-semibold py-3 rounded-xl transition"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-700">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
