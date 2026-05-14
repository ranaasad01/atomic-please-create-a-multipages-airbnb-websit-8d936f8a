"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle as Twitter, Globe as Facebook, Briefcase as Linkedin, Code2 as Github } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter */}
      <div className="bg-[#FF5A5F] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Get travel inspiration in your inbox</h3>
          <p className="text-red-100 mb-6">Discover unique stays, travel tips, and exclusive deals.</p>
          {subscribed ? (
            <p className="text-white font-semibold text-lg">🎉 Thanks for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-[#FF5A5F] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">AirCover</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Safety information</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Supporting people with disabilities</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Cancellation options</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">Airbnb.org: disaster relief</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Support Afghan refugees</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Combating discrimination</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Hosting</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/auth" className="hover:text-white transition-colors">Airbnb your home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">AirCover for Hosts</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Explore hosting resources</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Visit our community forum</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">How to host responsibly</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Airbnb</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">Newsroom</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Learn about new features</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Letter from our founders</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Investors</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <span>© 2024 Airbnb, Inc.</span>
            <div className="flex items-center gap-4">
              <Link href="/about" className="hover:text-white transition-colors">Privacy</Link>
              <span>·</span>
              <Link href="/about" className="hover:text-white transition-colors">Terms</Link>
              <span>·</span>
              <Link href="/about" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
