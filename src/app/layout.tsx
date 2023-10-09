import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./Components/Navbar";

const helvetica = localFont({
  src: [
    {
      path: "../../public/Helvetica/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Helvetica/Helvetica-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
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
      <body className={helvetica.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
