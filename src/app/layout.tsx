import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Navbar from "./Components/Navbar";

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sohyb's Portfolio",
  description: "Full-stack NextJS Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cormorant_garamond.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
