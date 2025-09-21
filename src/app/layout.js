import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import Header & Footer
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "H5 Official Store",
  description: "Merchandise & Ticket Idol Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Konten Halaman Full Edge-to-Edge */}
        <main className="flex-1 w-full">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
