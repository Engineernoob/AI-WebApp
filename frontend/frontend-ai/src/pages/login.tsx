"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowBigLeftDash } from 'lucide-react';

const Login: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    if (username && password) {
      // Assuming login is successful, redirect to AI chat page
      router.push('/aichat');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link href="/signup" className="text-blue-600 hover:underline">
            Don't have an account? Register
          </Link>
          <Link href="/">
            <ArrowBigLeftDash className="mr-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

