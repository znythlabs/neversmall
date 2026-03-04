import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neversmall Studios — Creative Agency",
  description:
    "Don't sell yourself short. Neversmall Studios is a creative agency specializing in videography, photography, social management, and meta ads.",
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
