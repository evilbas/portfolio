import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import FooterPage from "./footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdoulaye BA - portfolio",
  description: "My personal portfolio and projects",
  authors: [{ name: "Abdoulaye BA" }],
  keywords: ["portfolio", "profile", "curriculum vitae", "cv", "projects"],
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
