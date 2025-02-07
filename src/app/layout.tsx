"use client";
import { useState, useEffect, Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { Menu, X } from "lucide-react";
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && pathname === '/') {
      const hasLoaded = localStorage.getItem('hasLoaded');
      if (hasLoaded) {
        setIsFirstLoad(false);
      } else {
        const timer = setTimeout(() => {
          setIsFirstLoad(false);
          localStorage.setItem('hasLoaded', 'true');
        }, 7500);
        return () => clearTimeout(timer);
      }
    } else {
      setIsFirstLoad(false);
    }
  }, [pathname]);

  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className={`${inter.className} bg-zinc-900`}>
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden fixed top-4 right-4 z-50 p-2 bg-zinc-800 rounded-md text-zinc-50 hover:bg-zinc-700 transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close Sidebar" : "Open Sidebar"}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Toggle Button */}
        <button
          className="hidden md:block fixed top-4 left-4 z-50 p-2 bg-zinc-700 rounded-md text-zinc-50 hover:bg-zinc-600 transition-colors"
          onClick={() => setIsDesktopOpen(!isDesktopOpen)}
          aria-label={isDesktopOpen ? "Hide Sidebar" : "Show Sidebar"}
        >
          {isDesktopOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Overlay (Click to Close) */}
        {isMobileOpen && (
          <div
            className="fixed inset-0 bg-zinc-950/50 z-30 md:hidden transition-opacity duration-300"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Sidebar with Close Function */}
        <aside
          className={`
            fixed top-0 left-0 h-full w-64 md:w-[15vw] bg-neutral-800 px-2 py-16
            transition-transform duration-300 ease-in-out z-40
            ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
            ${isDesktopOpen ? "md:translate-x-0" : "md:-translate-x-full"}
          `}
        >
          <Sidebar closeSidebar={() => setIsMobileOpen(false)} />
        </aside>

        {/* Main Content with Suspense & Loading Delay */}
        <main className={`
          transition-all duration-300 ease-in-out
          p-12 min-h-screen
          ${isDesktopOpen ? "md:ml-[15vw]" : ""}
          flex items-center justify-center
        `}>
          
          {isFirstLoad ? (
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
