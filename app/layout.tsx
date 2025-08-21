import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  style: "normal",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Leadoc",
  description: "Save hours writing docs. Leadoc auto-generates README files from your code — clean, clear, and ready to share.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={`${inter} antialiased`}
      >
      {children}
      </body>
      </html>
  );
}