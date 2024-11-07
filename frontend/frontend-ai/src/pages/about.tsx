"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-3xl w-full">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">About Silas AI</h1>
          <p className="text-lg text-gray-500 mt-2">
            Learn more about your AI personal assistant.
          </p>
        </div>
        <div className="text-left space-y-6">
          <p className="text-lg">
            Silas AI is an intelligent personal assistant designed to help make your everyday tasks easier.
            Powered by advanced machine learning models from Hugging Face, Silas can understand and respond
            to a variety of user queries in real-time. Whether you need to gather information, manage your
            schedule, or simply have a conversation, Silas is here to assist you.
          </p>
          <p className="text-lg">
            Built with Flask for the backend and Next.js for the frontend, Silas AI combines the power of
            modern AI technology with an easy-to-use interface. We aim to provide a conversational experience
            that feels natural and assists you in a variety of tasks seamlessly.
          </p>
          <p className="text-lg">
            Our vision is to make AI technology accessible to everyone and provide personalized support that
            meets your individual needs. Silas is continuously learning and evolving to improve the quality
            of interactions and provide you with a better user experience.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-blue-600 hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
