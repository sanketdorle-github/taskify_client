// src/pages/Home.jsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-blue-50 to-white">
      <Card className="w-full max-w-2xl shadow-xl rounded-2xl p-6">
        <CardContent className="space-y-6 text-center">
          <h1 className="text-4xl font-bold text-blue-600">Welcome to Todo App!</h1>
          <p className="text-lg text-gray-600">
            Organize your tasks, boost your productivity, and never miss a deadline again.
          </p>
          <p className="text-md text-gray-500">
            Whether it's your daily routine or a long-term project, we’ve got you covered.
          </p>
          <p className="italic text-gray-400">"Your tasks. Your goals. Your time."</p>

          <Button className="mt-4 w-full sm:w-auto px-6 py-2 text-base">
            <Link to="/register">
            Get Started
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
