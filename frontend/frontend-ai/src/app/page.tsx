"use client";
import React from 'react';
import Link from 'next/link';

function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Silas AI</h1>
      <p className="text-lg mb-4 text-center">
        Silas AI is your personal AI assistant, designed to help make your daily tasks easier and provide you with information quickly.
        Whether you need to chat, ask questions, or learn more about our features, Silas AI is here for you.
      </p>
      <div className="flex space-x-4">
        <Link href="/login">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Sign Up
          </button>
        </Link>
        <Link href="/aichat">
          <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
            Chat Now
          </button>
        </Link>
        <Link href="/about">
          <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">
            About
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
