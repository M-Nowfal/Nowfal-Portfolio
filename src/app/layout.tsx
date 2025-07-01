import type { Metadata, Viewport } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import { Geist, Geist_Mono } from "next/font/google";
import AOSInitializer from "@/components/AOSInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nowfal Portfolio",
  description: "Nowfal's Portfolio built with Next.js to showcase my skills and projects",
  icons: [
    { rel: "icon", url: "/portfolio_images/portofolio.png", sizes: "32x32" },
    { rel: "apple-touch-icon", url: "/portfolio_images/portofolio.png", sizes: "180x180" }
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hydrated">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout>
          <AOSInitializer />
          {children}
        </Layout>
      </body>
    </html>
  );
}
