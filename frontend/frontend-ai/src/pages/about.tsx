"use client"
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 px-4">
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-center">About Silas AI</h1>
        <p className="text-lg mb-4">
          Silas AI is an intelligent personal assistant designed to help make your everyday tasks easier. Powered by advanced machine learning models from Hugging Face, Silas can understand and respond to a variety of user queries in real-time. Whether you need to gather information, manage your schedule, or simply have a conversation, Silas is here to assist you.
        </p>
        <p className="text-lg mb-4">
          Built with Flask for the backend and Next.js for the frontend, Silas AI combines the power of modern AI technology with an easy-to-use interface. We aim to provide a conversational experience that feels natural and assists you in a variety of tasks seamlessly.
        </p>
        <p className="text-lg mb-4">
          Our vision is to make AI technology accessible to everyone and provide personalized support that meets your individual needs. Silas is continuously learning and evolving to improve the quality of interactions and provide you with a better user experience.
        </p>
        <div className="text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
