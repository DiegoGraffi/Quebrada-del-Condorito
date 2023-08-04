import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Footer from "@/components/Footer";

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
    <html lang="es">
      <body className={`${josefin_sans.className} ${josefin_sans.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
