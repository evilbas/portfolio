import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import FooterPage from "./footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "asin portfolio",
  description: "asin portfolio website with next.js",
  authors: [{ name: "asin" }],
  keywords: ["next.js", "typescript", "tailwindcss"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <FooterPage />
      </body>
    </html>
  );
}
