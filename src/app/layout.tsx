import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";


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

        <Image src="/oQ65CY9Qk1W3v2c4ykiPXXB3og.avif" width={2000} height={500} alt="/" className="absolute top-0 opacity-70 z-1"/>
        {/* <img
          src="/oQ65CY9Qk1W3v2c4ykiPXXB3og.avif"
          alt=""
          className="absolute top-0 opacity-70 z-1"
        /> */}
        <main className="flex flex-col justify-between items-center ">
          <Navbar />
          <div className="flex flex-col justify-center lg:max-w-[60vw] max-w-[90vw] items-center">
            {children}
          </div>
          <Footer />
        </main>
        {/* <img
          src="/al308zatZMQ6YDjv3djWwbCnKqQ.avif"
          alt=""
          className="absolute top-0 opacity-70 z-1"
          /> */}
          <Analytics />
      </body>
    </html>
  );
}
