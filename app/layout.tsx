import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quixivo — Run Your Institute Like a Pro",
  description:
    "All-in-one institute management platform. Fee collection, GPS attendance, live classes, student portal & more. Trusted by 3,000+ institutes across India.",
  keywords:
    "institute management, coaching software, fee management, attendance, live classes, JEE NEET coaching",
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
