"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export default function HeroSearch() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    params.set("guests", String(guests));
    router.push("/search?" + params.toString());
  };

  return (
    <div className="relative min-h-[520px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-vacation-rental-beach.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Find your next adventure
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 drop-shadow">
          Discover unique stays and experiences around the world
        </p>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="bg-white rounded-2xl md:rounded-full shadow-2xl p-3 flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0"
        >
          {/* Location */}
          <div className="flex items-center gap-3 flex-1 px-4 py-2 md:border-r border-gray-200">
            <MapPin className="w-5 h-5 text-[#FF5A5F] flex-shrink-0" />
            <div className="flex-1 text-left">
              <label className="block text-xs font-semibold text-gray-700 mb-0.5">Where</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Search destinations"
                className="w-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Check In */}
          <div className="flex items-center gap-3 flex-1 px-4 py-2 md:border-r border-gray-200">
            <Calendar className="w-5 h-5 text-[#FF5A5F] flex-shrink-0" />
            <div className="flex-1 text-left">
              <label className="block text-xs font-semibold text-gray-700 mb-0.5">Check in</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full text-sm text-gray-900 focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Check Out */}
          <div className="flex items-center gap-3 flex-1 px-4 py-2 md:border-r border-gray-200">
            <Calendar className="w-5 h-5 text-[#FF5A5F] flex-shrink-0" />
            <div className="flex-1 text-left">
              <label className="block text-xs font-semibold text-gray-700 mb-0.5">Check out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full text-sm text-gray-900 focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center gap-3 flex-1 px-4 py-2">
            <Users className="w-5 h-5 text-[#FF5A5F] flex-shrink-0" />
            <div className="flex-1 text-left">
              <label className="block text-xs font-semibold text-gray-700 mb-0.5">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full text-sm text-gray-900 focus:outline-none bg-transparent"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>{n} guest{n > 1 ? "s" : ""}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#FF5A5F] hover:bg-[#e04e53] text-white font-semibold px-6 py-3 rounded-xl md:rounded-full transition-colors flex items-center justify-center gap-2 flex-shrink-0"
          >
            <Search className="w-5 h-5" />
            <span className="md:hidden">Search</span>
          </button>
        </form>
      </div>
    </div>
  );
}
