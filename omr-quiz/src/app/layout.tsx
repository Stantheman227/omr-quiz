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
      <body>
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.2/jspdf.umd.min.js"></script>
      </body>
    </html>
  );
}
