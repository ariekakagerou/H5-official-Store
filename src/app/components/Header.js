"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ShoppingCart, User, Star } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [ticketOpen, setTicketOpen] = useState(false);
  const [userPoints, setUserPoints] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  
  const ticketDropdownRef = useRef(null);

  // Simulasi data poin user dan item di keranjang
  useEffect(() => {
    // Simulasi fetch data dari API atau localStorage
    setUserPoints(1250);
    setCartItems(3);
  }, []);

  // Handle click outside untuk menutup dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (ticketDropdownRef.current && !ticketDropdownRef.current.contains(event.target)) {
        setTicketOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Format angka dengan pemisah ribuan
  const formatNumber = (num) => {
    return num.toLocaleString('id-ID');
  };

  return (
    <header className="bg-gray-900 text-white shadow-md relative z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold hover:text-yellow-400 transition-colors">
          H5 Official Store
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link href="/" className="hover:text-yellow-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/merch" className="hover:text-yellow-400 transition-colors">
              Merch
            </Link>
          </li>
          
          {/* Ticket dengan dropdown yang bisa diklik */}
          <li className="relative" ref={ticketDropdownRef}>
            <button 
              className="hover:text-yellow-400 transition-colors flex items-center gap-1"
              onClick={() => setTicketOpen(!ticketOpen)}
              onMouseEnter={() => setTicketOpen(true)}
            >
              Ticket
              <svg 
                className={`w-4 h-4 transition-transform ${ticketOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown menu */}
            {ticketOpen && (
              <div className="absolute left-0 top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-50">
                <ul className="py-2">
                  <li>
                    <Link 
                      href="/experience/vc" 
                      className="block px-4 py-3 hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
                      onClick={() => setTicketOpen(false)}
                    >
                      <div className="font-medium">VC Experience</div>
                      <div className="text-sm text-gray-400">Video call dengan member</div>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/experience/message" 
                      className="block px-4 py-3 hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
                      onClick={() => setTicketOpen(false)}
                    >
                      <div className="font-medium">Message</div>
                      <div className="text-sm text-gray-400">Pesan personal dari member</div>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/experience/special" 
                      className="block px-4 py-3 hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
                      onClick={() => setTicketOpen(false)}
                    >
                      <div className="font-medium">Special Event</div>
                      <div className="text-sm text-gray-400">Acara eksklusif terbatas</div>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          
          <li>
            <Link href="/experience/theater" className="hover:text-yellow-400 transition-colors">
              Theater
            </Link>
          </li>
        </ul>

        {/* Icon di kanan */}
        <div className="flex gap-4 items-center">
          {/* Points Display */}
          <div className="hidden sm:flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
            <Star size={16} className="text-yellow-400" fill="currentColor" />
            <span className="text-sm font-medium">{formatNumber(userPoints)}</span>
          </div>

          {/* Shopping Cart dengan badge */}
          <Link href="/checkout" aria-label="Keranjang" className="relative">
            <ShoppingCart size={24} className="hover:text-yellow-400 transition-colors" />
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                {cartItems > 99 ? '99+' : cartItems}
              </span>
            )}
          </Link>

          {/* User Account */}
          <Link href="/account" aria-label="Account">
            <User size={24} className="hover:text-yellow-400 transition-colors" />
          </Link>

          {/* Hamburger (mobile) */}
          <button 
            className="md:hidden hover:text-yellow-400 transition-colors" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col p-4 gap-4">
            {/* Points di mobile */}
            <li className="sm:hidden">
              <div className="flex items-center gap-2 text-yellow-400 font-medium">
                <Star size={18} fill="currentColor" />
                <span>{formatNumber(userPoints)} Points</span>
              </div>
            </li>
            
            <li>
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/merch" 
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition-colors"
              >
                Merch
              </Link>
            </li>
            
            {/* Ticket submenu di mobile */}
            <li>
              <button 
                className="font-semibold hover:text-yellow-400 transition-colors flex items-center gap-2 w-full text-left"
                onClick={() => setTicketOpen(!ticketOpen)}
              >
                Ticket
                <svg 
                  className={`w-4 h-4 transition-transform ${ticketOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {ticketOpen && (
                <ul className="ml-4 mt-3 flex flex-col gap-3 bg-gray-700 rounded-lg p-3">
                  <li>
                    <Link 
                      href="/experience/vc" 
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-yellow-400 transition-colors"
                    >
                      <div className="font-medium">VC Experience</div>
                      <div className="text-sm text-gray-400 mt-1">Video call dengan member</div>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/experience/message" 
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-yellow-400 transition-colors"
                    >
                      <div className="font-medium">Message</div>
                      <div className="text-sm text-gray-400 mt-1">Pesan personal dari member</div>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/experience/special" 
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-yellow-400 transition-colors"
                    >
                      <div className="font-medium">Special Event</div>
                      <div className="text-sm text-gray-400 mt-1">Acara eksklusif terbatas</div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            
            <li>
              <Link 
                href="/experience/theater" 
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition-colors"
              >
                Theater
              </Link>
            </li>
            <li>
              <Link 
                href="/checkout" 
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition-colors flex items-center gap-2"
              >
                Checkout
                {cartItems > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 font-bold">
                    {cartItems}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link 
                href="/account" 
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition-colors"
              >
                Account
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}