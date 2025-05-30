import type { Metadata } from "next";
import { Manrope, Poppins, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "100",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "100",
});

export const metadata: Metadata = {
  title: "RegAfrique Consulting",
  description:
    "This is the official website for Regafrique Consulting — a modern regulatory consulting firm helping African businesses navigate compliance, licensing, and legal risk. Through a story-driven, single-page experience, visitors learn who Regafrique is, why regulatory clarity matters, and how the firm can help them grow with confidence. From services like compliance audits to license management, the site builds trust with real impact, client-focused messaging, and strong calls to action. Whether you’re a startup or an exporter, the site shows that with Regafrique, you're never in the dark — you're always ahead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${poppins.variable} ${inter.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
