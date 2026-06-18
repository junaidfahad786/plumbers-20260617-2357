import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProFlow Plumbing | 24/7 Emergency Plumbers Near You",
  description:
    "ProFlow Plumbing provides expert residential & commercial plumbing services. 24/7 emergency repairs, drain cleaning, water heaters & more. Call now!",
  keywords:
    "plumber, plumbing services, emergency plumber, drain cleaning, water heater repair, pipe repair, leak detection, residential plumbing, commercial plumbing",
  openGraph: {
    title: "ProFlow Plumbing | 24/7 Emergency Plumbers",
    description:
      "Trusted plumbing experts. Fast, reliable, and affordable. Available 24/7 for emergencies.",
    type: "website",
    locale: "en_US",
    siteName: "ProFlow Plumbing",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
