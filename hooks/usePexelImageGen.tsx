import { createClient, Photo } from "pexels";
import { useState, useTransition } from "react";

const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY || "");

export const usePexelImageGen = () => {
  const [isGenerating, startTransition] = useTransition();
  const [error, setError] = useState<{
    hasError: boolean;
    message: string | null;
  }>({ hasError: false, message: null });
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [noImagesGenerated, setNoImagesGenerated] = useState(false);

  const generateImages = async (query: string, perPage: number = 80) => {
    startTransition(async () => {
      try {
        const response = await client.photos.search({
          query,
          per_page: perPage,
        });

        if ("error" in response) {
          throw new Error(response.error);
        }

        setPhotos(response.photos);
        setNoImagesGenerated(response.photos.length === 0);
      } catch (error) {
        console.error("Error fetching photos:", error);
        setError({
          hasError: true,
          message: error instanceof Error ? error.message : "An error occurred",
        });
      }
    });
  };

  return { generateImages, photos, isGenerating, error, noImagesGenerated };
};
