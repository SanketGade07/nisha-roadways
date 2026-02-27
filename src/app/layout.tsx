import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nisha - Ship Inspections Platform",
  description:
    "Connect ship owners with qualified inspectors to simplify compliance and maintenance processes.",
  icons: {
    icon: "/images/FAVICON.png?v=5",
    shortcut: "/images/FAVICON.png?v=5",
    apple: "/images/FAVICON.png?v=5",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <ConditionalNavbar />
        {children}
      </body>
    </html>
  );
}
