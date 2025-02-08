"use client";
import { useState, useEffect, Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Sidebar";
import LoaderAnimation from "./loading";
import { usePathname } from 'next/navigation';

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

export default function RootLayout({
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
        }, 7500);
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
      <body className={`${inter.className} bg-zinc-900`}>
        <Navbar />
        
        <main className={`
          transition-all duration-300 ease-in-out
          p-12 min-h-screen
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
      </body>
    </html>
  );
}
