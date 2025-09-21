"use client";
import Link from "next/link";
import { Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="container mx-auto px-4 py-8">
        {/* Menu utama */}
        <ul className="flex flex-wrap justify-center gap-6 mb-6">
          <li>
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/merch" className="hover:text-yellow-400">
              Merch
            </Link>
          </li>
          <li>
            <Link href="/ticket" className="hover:text-yellow-400">
              Ticket
            </Link>
          </li>
          <li>
            <Link href="/experience/theater" className="hover:text-yellow-400">
              Theater
            </Link>
          </li>
        </ul>

        {/* Social media */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter size={24} className="hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} className="hover:text-pink-400" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube size={24} className="hover:text-red-500" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} H5 Official Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
