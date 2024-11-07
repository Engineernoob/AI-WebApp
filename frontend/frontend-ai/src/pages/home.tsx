"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { UserPlus, MessageCircle, Info, LogIn, Bot, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// ModeToggle component defined inline
function ModeToggle() {
  const { setTheme } = useTheme()

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
  )
}

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Bot className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Welcome to Silas AI
          </CardTitle>
          <CardDescription className="text-lg mt-4">
            Your personal AI assistant, designed to make your daily tasks easier and provide you with information quickly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-8 text-muted-foreground">
            Whether you need to chat, ask questions, or learn more about our features, Silas AI is here for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="default">
              <Link href="/login">
                <LogIn className="mr-2 h-4 w-4" /> Login
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/signup">
                <UserPlus className="mr-2 h-4 w-4" /> Sign Up
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/aichat">
                <MessageCircle className="mr-2 h-4 w-4" /> Chat Now
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/about">
                <Info className="mr-2 h-4 w-4" /> About
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="fixed bottom-4 right-4">
        <ModeToggle />
      </div>
    </div>
  )
}