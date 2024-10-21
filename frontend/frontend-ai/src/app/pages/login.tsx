"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const LoginRegister: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in:', { username, password });
      // Call your login API here
    } else {
      console.log('Registering:', { username, password });
      // Call your register API here
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Register'}
        </h2>
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
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <button
          onClick={handleToggle}
          className="w-full mt-4 text-center text-sm text-blue-600 hover:underline"
        >
          {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
        </button>
        <div className="mt-6 text-center">
          <Link href="/">
            <a className="text-sm text-blue-600 hover:underline">Back to Home</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
