import Features from "./components/Features";
import FontShowcase from "./components/FontShowcase";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import "./fonts.css";

const features = [
  {
    title: "AI-Powered Generation",
    description:
      "Create unique illustrations and logos in seconds using advanced AI technology",
  },
  {
    title: "Professional Quality",
    description:
      "Get high-resolution, print-ready artwork suitable for any project",
  },
  {
    title: "Easy to Use",
    description:
      "Simple text prompts transform into beautiful artwork with just a few clicks",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features features={features} />
      <FontShowcase />
      <Gallery />
    </div>
  );
}
