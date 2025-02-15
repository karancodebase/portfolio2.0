"use client";
import { useState, useEffect, Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Sidebar";
import LoaderAnimation from "./loading";
import { usePathname } from 'next/navigation';
import { DotBackground } from "@/components/ui/dot-background";
import { Footer } from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"]
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Only show loading animation on home page
    if (pathname === '/') {
      // Check if this is a fresh page load/reload
      if (performance.navigation.type === 1 || !performance.navigation.type) {
        setIsFirstLoad(true);
        const timer = setTimeout(() => {
          setIsFirstLoad(false);
        }, 3500);
        return () => clearTimeout(timer);
      } else {
        setIsFirstLoad(false);
      }
    } else {
      setIsFirstLoad(false);
    }
  }, [pathname]);

  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className={`${inter.className} bg-neutral-900`}>
        <DotBackground>
        <Navbar />
        <main className={`
          transition-all duration-300 ease-in-out
          md:p-12 p-2 min-h-screen
          pt-24 md:pt-20
          flex items-center justify-center
        `}>
          {isFirstLoad && pathname === '/' ? (
            <LoaderAnimation isLoading={isFirstLoad} />
          ) : (
            <Suspense fallback={<p>Loading content...</p>}>
              {children}
            </Suspense>
          )}
        </main>
        <Footer />
        </DotBackground>
        
        <Analytics />
      </body>
    </html>
  );
} 