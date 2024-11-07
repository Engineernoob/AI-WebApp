"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserPlus, MessageCircle, Settings, Info, LogIn } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react'; // Added import for Sun and Moon icons

export default function HomePage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <h1 className="text-5xl font-bold mb-8">Welcome to Silas AI</h1>
      <p className="text-lg mb-8 max-w-xl text-center">
        Silas AI is your personal AI assistant, designed to help make your daily tasks easier and provide you with information quickly. Whether you need to chat, ask questions, or learn more about our features, Silas AI is here for you.
      </p>
      <div className="flex space-x-4">
        <Link href="/login" passHref>
          <Button variant="outline">
            <LogIn className="mr-2" /> Login
          </Button>
        </Link>
        <Link href="/signup" passHref>
          <Button variant="outline">
          <UserPlus className="mr-2" /> Sign Up
          </Button>
        </Link>
        <Link href="/aichat" passHref>
          <Button variant="outline">
            <MessageCircle className="mr-2" /> Chat Now
          </Button>
        </Link>
        <Link href="/about" passHref>
          <Button variant="outline">
            <Info className="mr-2" /> About
          </Button>
        </Link>
      </div>
      <div className="mt-8">
        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="mb-4">
          {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </Button>
      </div>
    </div>
  );
}
