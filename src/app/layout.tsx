import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Josefin_Sans } from "next/font/google";
import localFont from "next/font/local";

export const dynamic = "force-dynamic";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: "Quebrada del Condorito",
  description: "Parque Nacional Quebrada del Condorito",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${josefin_sans.className} ${josefin_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
