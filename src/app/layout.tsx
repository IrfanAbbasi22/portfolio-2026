import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import HamburgerMenu from "@/components/layout/HamburgerMenu";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/transitions/Preloader";
import PageTransitionProvider from "@/components/transitions/PageTransitionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohd Irfan | Full Stack Developer",
  description:
    "Full Stack Developer with 5+ years building web apps in React, Next.js and TypeScript, with backend and AI integration work using Node.js, Laravel, n8n and third-party APIs.",
  openGraph: {
    title: "Mohd Irfan | Full Stack Developer",
    description:
      "Full Stack Developer with 5+ years building web apps in React, Next.js and TypeScript, with backend and AI integration work using Node.js, Laravel, n8n and third-party APIs.",
  },
  twitter: {
    title: "Mohd Irfan | Full Stack Developer",
    description:
      "Full Stack Developer with 5+ years building web apps in React, Next.js and TypeScript, with backend and AI integration work using Node.js, Laravel, n8n and third-party APIs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-smooth ${fontVariables}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-cream text-navy selection:bg-navy selection:text-cream">
        <Preloader />
        <PageTransitionProvider />
        <Header />
        <HamburgerMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
