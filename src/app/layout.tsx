import type { Metadata } from "next";
// import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "mylodev",
  description: "software engineer, bali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
