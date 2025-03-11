import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaydatt Karan",
  description: "Web Developer",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}
          relative antialiased`}
      >
        <main className="flex flex-col justify-between items-center ">
          <Navbar />
          <div className="flex flex-col justify-center lg:max-w-[60vw] max-w-[90vw] items-center">
            {children}
          </div>
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
