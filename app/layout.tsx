import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Layout Bank | Landing Page Section Library",
  description:
    "A comprehensive collection of reusable landing page sections built with Greyblocks/Flowbase methodology. Mix & match 55+ section variants to build beautiful landing pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
