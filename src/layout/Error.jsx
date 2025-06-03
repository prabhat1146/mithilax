import React from "react";
import { Link } from "react-router-dom"; // Remove if not using react-router

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950">
      <div className="text-center p-8 rounded-xl bg-white/90 shadow-lg max-w-md">
        <h1 className="text-7xl font-extrabold text-orange-500 mb-4">404</h1>
        <p className="text-2xl font-bold text-blue-900 mb-2">Page Not Found</p>
        <p className="text-blue-800 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 hover:text-blue-950 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
