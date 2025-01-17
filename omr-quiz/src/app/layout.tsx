import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OMR-Quiz",
  description: "Ein Quiz von Piotr Gosiewski",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
