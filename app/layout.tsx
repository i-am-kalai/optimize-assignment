/* eslint-disable @next/next/no-page-custom-font */
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import AppBar from "./components/AppBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "MagicMoments - AI Art Generator for Creatives",
  description:
    "Transform your ideas into stunning illustrations and logos with our AI-powered art generator",
  keywords: [
    "AI art",
    "illustration",
    "logo design",
    "creative tools",
    "AI generator",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Inter:wght@400;500;600;700&family=Lobster&family=Pacifico&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Anton&family=Bebas+Neue&family=Charm:wght@400;700&family=Cinzel:wght@400;700&family=Comfortaa:wght@300;400;700&family=Courgette&family=Crimson+Text:ital,wght@0,400;0,700;1,400&family=Dosis:wght@200;400;700&family=Great+Vibes&family=Indie+Flower&family=Josefin+Sans:ital,wght@0,300;0,400;0,700;1,400&family=Kalam:wght@300;400;700&family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,300;0,400;0,700;1,400&family=Open+Sans:ital,wght@0,300;0,400;0,700;1,400&family=Oswald:wght@200;400;700&family=Poppins:ital,wght@0,300;0,400;0,700;1,400&family=Quicksand:wght@300;400;700&family=Raleway:ital,wght@0,300;0,400;0,700;1,400&family=Roboto:ital,wght@0,300;0,400;0,700;1,400&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,400&family=Roboto+Mono:ital,wght@0,300;0,400;0,700;1,400&family=Roboto+Slab:wght@300;400;700&family=Rubik:ital,wght@0,300;0,400;0,700;1,400&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,400&family=Source+Serif+Pro:ital,wght@0,300;0,400;0,700;1,400&family=Space+Grotesk:wght@300;400;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Ubuntu:ital,wght@0,300;0,400;0,700;1,400&family=Work+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <AppBar />
        <main className="flex min-h-screen flex-col ">{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
