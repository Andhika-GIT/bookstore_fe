// pages/404.tsx
import React from "react";
import { Button, Text } from "@/components/ui";
import Link from "next/link";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <Text type="h1" className="text-red-500 mb-4">
          404
        </Text>
        <Text type="h2" className="text-gray-800 mb-4">
          Page Not Found
        </Text>
        <Text type="p" className="text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist.
        </Text>
        <Link href="/">
          <Button className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
