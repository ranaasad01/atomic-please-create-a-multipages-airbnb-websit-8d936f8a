"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, Globe, User, Heart } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <svg viewBox="0 0 32 32" className="w-8 h-8 fill-[#FF5A5F]" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 1C10.477 1 6 5.477 6 11c0 3.09 1.4 5.86 3.62 7.73L16 31l6.38-12.27A9.96 9.96 0 0 0 26 11c0-5.523-4.477-10-10-10zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
            </svg>
            <span className="text-[#FF5A5F] font-bold text-xl hidden sm:block">airbnb</span>
          </Link>

          {/* Center Search Bar (desktop) */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer px-4 py-2 gap-3">
            <Link href="/search" className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-800 border-r border-gray-300 pr-3">Anywhere</span>
              <span className="text-sm font-semibold text-gray-800 border-r border-gray-300 pr-3">Any week</span>
              <span className="text-sm text-gray-500 pr-2">Add guests</span>
              <div className="bg-[#FF5A5F] rounded-full p-2">
                <Search className="w-3 h-3 text-white" />
              </div>
            </Link>
          </div>

          {/* Right Nav */}
          <div className="flex items-center gap-2">
            <Link href="/auth" className="hidden md:block text-sm font-semibold text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full transition-colors">
              Become a Host
            </Link>
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
              <Globe className="w-5 h-5 text-gray-700" />
            </button>
            <Link href="/wishlist" className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
              <Heart className="w-5 h-5 text-gray-700" />
            </Link>
            <Link href="/auth" className="hidden md:flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 hover:shadow-md transition-shadow">
              <Menu className="w-4 h-4 text-gray-700" />
              <div className="bg-gray-500 rounded-full p-1">
                <User className="w-4 h-4 text-white" />
              </div>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
          <Link href="/search" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>
            <Search className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Search properties</span>
          </Link>
          <Link href="/wishlist" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>
            <Heart className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Wishlist</span>
          </Link>
          <Link href="/auth" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>
            <User className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Log in / Sign up</span>
          </Link>
          <Link href="/about" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>
            <Globe className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">About</span>
          </Link>
        </div>
      )}
    </header>
  );
}
