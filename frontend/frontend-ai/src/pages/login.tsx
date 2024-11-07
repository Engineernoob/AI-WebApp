"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Bot, User, Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      router.push('/aichat');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full">
        {/* Bot Icon and Heading */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mx-auto mb-4">
            <Bot className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Login to Silas AI</h1>
          <p className="text-gray-500 mt-2">Enter your credentials to access your account</p>
        </div>

        {/* Error Alert */}
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-lg font-medium text-gray-700">Username</Label>
            <div className="relative">
              <Input
                id="username"
                placeholder="Enter your username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <User className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-lg font-medium text-gray-700">Password</Label>
            <div className="relative">
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <Lock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <Button type="submit" className="w-full py-3 text-lg font-bold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Login
          </Button>
        </form>

        {/* Register and Back to Home Links */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline font-medium">
              Register
            </Link>
          </p>

          <div className="flex justify-center mt-4">
            <Link href="/">
              <Button variant="ghost" className="gap-2 text-blue-600 hover:underline">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
