"use client";

import { usePexelImageGen } from "@/hooks/usePexelImageGen";
import { useState } from "react";
import PromptInput from "../components/PromptInput";
import { DemoResult } from "./DemoResult";

export default function Demo() {
  const [prompt, setPrompt] = useState("");
  const { isGenerating, photos, generateImages, error, noImagesGenerated } =
    usePexelImageGen();

  const handleGenerate = () => {
    if (!prompt) return;
    generateImages(prompt, 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Try MagicMoments
        </h1>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <PromptInput
            prompt={prompt}
            setPrompt={setPrompt}
            isGenerating={isGenerating}
            onGenerate={handleGenerate}
          />

          <DemoResult
            imageUrl={photos[0]?.src.original}
            isGenerating={isGenerating}
            hasError={error.hasError}
            noImagesGenerated={noImagesGenerated}
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Want to create more? Check out our{" "}
            <a href="/pricing" className="text-purple-600 hover:underline">
              pricing plans
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
