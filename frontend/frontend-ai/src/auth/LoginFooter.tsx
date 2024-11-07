import { LogIn } from 'lucide-react';

export default function LoginHeader() {
  return (
    <div className="text-center">
      <div className="mx-auto h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center">
        <LogIn className="h-6 w-6 text-white" />
      </div>
      <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome back</h2>
      <p className="mt-2 text-sm text-gray-600">
        Please sign in to your account
      </p>
    </div>
  );
}