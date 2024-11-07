'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Bot, LogIn, UserPlus, MessageCircle, Info, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <main className="container mx-auto px-4 py-16">
        <Card className="w-full max-w-4xl mx-auto bg-gray-800/50 border-gray-700">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500/10">
              <Bot className="h-10 w-10 text-indigo-400" />
            </div>
            <CardTitle className="text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
              Welcome to Silas AI
            </CardTitle>
            <CardDescription className="text-lg mt-4 text-gray-300">
              Your personal AI assistant, designed to make your daily tasks easier and provide you with information quickly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <p className="text-center text-gray-400 max-w-2xl mx-auto">
              Whether you need to chat, ask questions, or learn more about our features, Silas AI is here for you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button asChild variant="default" className="w-full bg-indigo-600 hover:bg-indigo-700">
                <Link href="/login" className="flex items-center justify-center">
                  <LogIn className="mr-2 h-4 w-4" /> Login
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-gray-700 hover:bg-gray-700">
                <Link href="/signup" className="flex items-center justify-center">
                  <UserPlus className="mr-2 h-4 w-4" /> Sign Up
                </Link>
              </Button>
              <Button asChild variant="secondary" className="w-full bg-gray-700 hover:bg-gray-600">
                <Link href="/aichat" className="flex items-center justify-center">
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat Now
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full hover:bg-gray-700">
                <Link href="/about" className="flex items-center justify-center">
                  <Info className="mr-2 h-4 w-4" /> About
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Natural Conversations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Experience human-like interactions with advanced language understanding.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Get instant responses powered by state-of-the-art AI technology.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Secure & Private</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Your conversations are encrypted and protected with enterprise-grade security.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </main>

      <div className="fixed bottom-4 right-4">
        <ModeToggle />
      </div>
    </div>
  );
}