"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import '../styles/login.css'

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-10 rounded-lg shadow-md max-w-md w-full">
        {/* Bot Icon and Heading */}
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto">
            <Bot className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Login to Silas AI</h1>
          <p className="text-lg text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-lg font-semibold">Username</Label>
            <Input
              id="username"
              placeholder="Enter your username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-lg font-semibold">Password</Label>
            <Input
              id="password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>

          <Button type="submit" className="w-full py-3 text-lg font-bold bg-black text-white rounded-md hover:bg-gray-800 transition">
            Login
          </Button>
        </form>

        {/* Register and Back to Home Links */}
        <div className="mt-8 space-y-4 text-center">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline font-medium">
              Register
            </Link>
          </p>

          <div className="flex justify-center mt-4">
            <Button variant="ghost" asChild className="gap-2 text-purple-700">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

