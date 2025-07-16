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
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <link
          rel="stylesheet"
          href="https://ojvz8verwlmikl57.public.blob.vercel-storage.com/fonts.css"
        />
        <AppBar />
        <main className="flex min-h-screen flex-col ">{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
