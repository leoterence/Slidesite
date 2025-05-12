import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Let's Japon",
  description: "comemoration de l air feodale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-black text-white relative overflow-hidden">
        {children}
      </body>
    </html>
  );
}
