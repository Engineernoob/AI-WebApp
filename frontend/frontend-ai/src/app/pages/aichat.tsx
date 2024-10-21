"use client"
import Link from 'next/link'
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, MessageCircle, Settings, Sun, Moon, Send } from "lucide-react"
import { useTheme } from "next-themes"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Message = {
  text: string;
  sender: "user" | "ai";
};

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { theme, setTheme } = useTheme();
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;
    const newMessages = [...messages, { text: input, sender: "user" as "user" | "ai" }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch(`${process.env.BACKEND_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages([...newMessages, { text: data.response, sender: "ai" }]);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Sorry, I'm having trouble responding right now.");
      setMessages([...newMessages, { text: "Sorry, I'm having trouble responding right now.", sender: "ai" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={`flex h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
        {/* Left Navbar */}
        <nav className={`w-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
          <div className="flex flex-col items-center py-4">
            <Link href="/home" passHref>
              <Button variant="ghost" size="icon" className="mb-4">
                <Home className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="/assistant-siri" passHref>
              <Button variant="ghost" size="icon" className="mb-4">
                <MessageCircle className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="/assistant-chatgpt" passHref>
              <Button variant="ghost" size="icon" className="mb-4">
                <Settings className="h-6 w-6" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="mb-4">
              {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Chat Area */}
          <ScrollArea ref={scrollAreaRef} className="flex-1 p-4 scroll-area">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                <div
                  className={`inline-block p-3 rounded-lg max-w-[70%] ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : theme === 'dark' ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-left mb-4">
                <div className={`inline-block p-3 rounded-lg ${theme === 'dark' ? "bg-gray-700 text-white" : "bg-gray-300 text-black"}`}>
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </ScrollArea>

          {/* Input Area */}
          <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <div className="flex items-center max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className={`flex-1 mr-2 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
              />
              <Button onClick={handleSend}>
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
