import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // optional
});

export const metadata: Metadata = {
  title: "Agency Landing Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
