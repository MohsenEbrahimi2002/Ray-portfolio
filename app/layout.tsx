import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import  ActiveSectionContext  from "@/context/activeSectionContext";
import FinisherHeader from "@/components/FinisherHeader";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ray Portfolio",
  description: "Ray is full-stack developer with 4 years experience ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-[#131120] text-gray-950 relative  pt-28 sm:pt-36`}
      >
         <FinisherHeader />
        
        <ActiveSectionContext>
        <Header />
        {children}
        <ThemeToggle/>
        <Footer />
        </ActiveSectionContext>
        
      </body>
    </html>
  );
}
