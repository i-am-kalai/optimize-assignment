import GeneratedImage from "../components/GeneratedImage";

export const DemoResult = ({
  imageUrl,
  isGenerating,
  hasError,
  noImagesGenerated,
}: {
  imageUrl: string;
  isGenerating: boolean;
  hasError: boolean;
  noImagesGenerated: boolean;
}) => {
  if (hasError) {
    return (
      <div className="text-red-500 text-center">
        An error occurred while generating the image.
      </div>
    );
  }

  if (isGenerating) {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Generating...</h1>
        </div>
      </div>
    );
  }

  if (noImagesGenerated) {
    return (
      <div className="text-gray-500 text-center">
        No images were generated for this prompt. Please try a different one.
      </div>
    );
  }

  if (imageUrl) return <GeneratedImage imageUrl={imageUrl} />;
};
