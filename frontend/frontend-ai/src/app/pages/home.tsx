import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-4">
      <h1 className="text-4xl font-bold mb-8">AI Assistant Hub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Siri-like Assistant</CardTitle>
            <CardDescription>Experience our AI with a Siri-inspired interface</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/assistant-siri">
              <a>
                <Button className="w-full">Launch Siri-like Assistant</Button>
              </a>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ChatGPT-like Assistant</CardTitle>
            <CardDescription>Interact with our AI using a familiar ChatGPT-style interface</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/aichat">
              <a>
                <Button className="w-full">Launch ChatGPT-like Assistant</Button>
              </a>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
            <CardDescription>Learn more about our AI assistants</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/about">
              <a>
                <Button variant="outline" className="w-full">About Page</Button>
              </a>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>Get in touch with our team</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/contact">
              <a>
                <Button variant="outline" className="w-full">Contact Page</Button>
              </a>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}