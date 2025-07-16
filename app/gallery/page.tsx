"use client";

import { usePexelImageGen } from "@/hooks/usePexelImageGen";
import { formatImages } from "@/utils/formatImages";
import { useEffect } from "react";

export default function Gallery() {
  const { generateImages, photos, isGenerating, error } = usePexelImageGen();

  useEffect(() => {
    generateImages("ai generated art", 80);
  }, []);

  if (error.hasError) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (isGenerating || photos.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Loading gallery...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Explore our collection of AI-generated artwork
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formatImages(photos).map((photo) => (
            <div
              key={photo.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="relative aspect-square">
                <img
                  src={photo.image}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
