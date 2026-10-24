import type { Metadata } from "next";
import { Bitter, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const head = Bitter({ variable: "--font-head", subsets: ["latin"], weight: ["700", "800"] });
const body = Hanken_Grotesk({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://executive-plumbing.growlocalvisibility.com"),
  title: "Executive Plumbing | 24/7 Plumber in Espanola, Massey & the North Shore",
  description:
    "24/7 emergency plumbing in Espanola, Massey, the North Shore, Manitoulin and Sudbury. Sewer backups, frozen water lines, camp water pumps and fixed-price quotes. 4.9 stars from 28 Google reviews. Call Matt at (905) 516-4865.",
  openGraph: {
    title: "Executive Plumbing | 24/7 Plumber in Espanola",
    description: "The plumber who actually picks up. 4.9 stars on Google. Call Matt at (905) 516-4865, day or night.",
    type: "website",
    locale: "en_CA",
    images: ["/images/p7.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
