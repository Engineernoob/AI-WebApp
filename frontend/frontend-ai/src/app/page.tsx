"use client"
import React from 'react';
import Link from 'next/link';
import Home from './pages/home';
import Login from "./pages/login";
import Chat from "./pages/aichat";
import SignUp from "./pages/signup";
import About from "./pages/about";

function Page() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/aichat">Chat</Link>
        <Link href="/signup">Sign Up</Link>
        <Link href="/about">About</Link>
      </nav>
      <main>
        <Home />
        <Login />
        <Chat />
        <SignUp />
        <About />
      </main>
    </div>
  );
}

export default Page;