import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaydatt Karan",
  description: "Web Developer",
  icons: {
    icon: "/developer.svg",
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
        className={`${roboto.className}
          relative antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col justify-between items-center ">
            <Navbar />
            <div className="flex flex-col justify-center lg:max-w-[50vw] max-w-[90vw] items-center">
              {children}
            </div>
            <Footer />
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
