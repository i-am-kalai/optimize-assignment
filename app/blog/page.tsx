import BlogPostCard from "../components/BlogPostCard";
import Newsletter from "../components/Newsletter";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Blog</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Latest insights and updates about AI art generation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>

        <Newsletter />
      </div>
    </div>
  );
}

const blogPosts = [
  {
    title: "The Future of AI Art Generation",
    excerpt:
      "Exploring the latest advancements in AI art generation and what they mean for creatives",
    date: "March 15, 2024",
    readTime: 5,
    image: "/1.webp",
    link: "/blog/future-ai-art",
  },
  {
    title: "10 Tips for Better AI Art Prompts",
    excerpt:
      "Learn how to write more effective prompts to get the best results from AI art generators",
    date: "March 12, 2024",
    readTime: 8,
    image: "/2.webp",
    link: "/blog/ai-art-prompts",
  },
  {
    title: "AI Art in Commercial Projects",
    excerpt:
      "How businesses are leveraging AI-generated art in their marketing and branding",
    date: "March 10, 2024",
    readTime: 6,
    image: "/3.webp",
    link: "/blog/commercial-ai-art",
  },
  {
    title: "Ethics in AI Art Generation",
    excerpt:
      "Understanding the ethical considerations and best practices in AI art creation",
    date: "March 8, 2024",
    readTime: 7,
    image: "/4.webp",
    link: "/blog/ethics-ai-art",
  },
  {
    title: "Customizing AI Art Styles",
    excerpt:
      "A deep dive into creating and fine-tuning custom art styles with AI",
    date: "March 5, 2024",
    readTime: 9,
    image: "/5.webp",
    link: "/blog/custom-ai-styles",
  },
  {
    title: "AI Art for Social Media",
    excerpt:
      "How to create engaging AI-generated content for your social media presence",
    date: "March 3, 2024",
    readTime: 6,
    image: "/6.webp",
    link: "/blog/ai-art-social-media",
  },
];
