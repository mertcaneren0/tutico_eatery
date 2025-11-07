import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tutico Lüleburgaz - Sandviç, Kahvaltı ve Eşsiz Lezzetler",
  description: "Lüleburgaz'ın en lezzetli sandviç, kahvaltı, mantı ve atıştırmalıkları Tutico'da. Taze malzemeler, ev yapımı lezzetler. Hemen sipariş verin!",
  keywords: ["lüleburgaz sandviç", "lüleburgaz yemek", "lüleburgaz kahvaltı", "lüleburgaz mantı", "tutico lüleburgaz", "lüleburgaz restaurant"],
  authors: [{ name: "Tutico Lüleburgaz" }],
  openGraph: {
    title: "Tutico Lüleburgaz - Sandviç, Kahvaltı ve Eşsiz Lezzetler",
    description: "Lüleburgaz'ın en lezzetli sandviç, kahvaltı, mantı ve atıştırmalıkları Tutico'da.",
    type: "website",
    locale: "tr_TR",
    siteName: "Tutico Lüleburgaz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
