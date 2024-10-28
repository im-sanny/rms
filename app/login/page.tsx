"use client"
import { AlertCircle, Coffee, Utensils, ChefHat } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Login() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-200 to-red-200 flex items-center justify-center p-4 mt-[64px]">
      <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 p-8 rounded-3xl shadow-2xl backdrop-blur-sm">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <Coffee className="h-10 w-10 text-amber-600 animate-bounce" />
            <Utensils className="h-10 w-10 text-orange-600 animate-bounce delay-100" />
            <ChefHat className="h-10 w-10 text-red-600 animate-bounce delay-200" />
          </div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">
            Welcome to Rainbow
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <Input
              id="username"
              name="username"
              type="text"
              required
              placeholder="Username"
              value={''}
              className="focus:ring-amber-500 focus:border-amber-500 bg-white bg-opacity-50 backdrop-blur-sm"
            />
            <Input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              value={''}
              className="focus:ring-amber-500 focus:border-amber-500 bg-white bg-opacity-50 backdrop-blur-sm"
            />
          </div>

          {'error' && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{'error'}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Sign in to Rainbow
          </Button>
        </form>
        <div className="text-center space-y-2">
          <a href="#" className="block font-medium text-amber-600 hover:text-red-500 transition-colors duration-300">
            Forgot your password?
          </a>
          <a href="#" className="block font-medium text-amber-600 hover:text-red-500 transition-colors duration-300">
            New to Rainbow? Sign up
          </a>
        </div>
      </div>
    </div>
  );
}