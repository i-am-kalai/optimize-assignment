import { Photo } from "pexels";

export const formatImages = (photos: Photo[]) =>
  photos.map((photo) => ({
    id: photo.id,
    title: photo.alt || "Untitled",
    description: photo.alt || "No description available",
    image: photo.src.large2x,
    tags: ["Abstract", "Digital", "Art"],
    photographer: photo.photographer,
    photographerUrl: photo.photographer_url,
  }));
