"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, Users, Calendar } from 'lucide-react';
import { Listing } from "@/lib/types";

interface BookingPanelProps {
  listing: Listing;
}

export default function BookingPanel({ listing }: BookingPanelProps) {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const nights =
    checkIn && checkOut
      ? Math.max(
          0,
          Math.round(
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  const subtotal = nights * listing.price;
  const cleaningFee = Math.round(listing.price * 0.15);
  const serviceFee = Math.round(subtotal * 0.12);
  const total = subtotal + cleaningFee + serviceFee;

  const handleReserve = () => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }
    const params = new URLSearchParams({
      listingId: listing.id,
      checkIn,
      checkOut,
      guests: String(guests),
      total: String(total),
      nights: String(nights),
    });
    router.push("/booking/confirmation?" + params.toString());
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 sticky top-28">
      {/* Price Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <span className="text-2xl font-bold text-gray-900">${listing.price}</span>
          <span className="text-gray-500 text-sm"> / night</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-gray-900 text-gray-900" />
          <span className="text-sm font-semibold text-gray-900">{listing.rating}</span>
          <span className="text-sm text-gray-500">({listing.reviewCount})</span>
        </div>
      </div>

      {/* Date Inputs */}
      <div className="border border-gray-300 rounded-xl overflow-hidden mb-3">
        <div className="grid grid-cols-2 divide-x divide-gray-300">
          <div className="p-3">
            <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">
              Check-in
            </label>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="text-sm text-gray-900 focus:outline-none w-full bg-transparent"
              />
            </div>
          </div>
          <div className="p-3">
            <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">
              Check-out
            </label>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="text-sm text-gray-900 focus:outline-none w-full bg-transparent"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 p-3">
          <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">
            Guests
          </label>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-400" />
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="text-sm text-gray-900 focus:outline-none w-full bg-transparent"
            >
              {Array.from({ length: listing.guests }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} guest{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Reserve Button */}
      <button
        onClick={handleReserve}
        className="w-full bg-[#FF5A5F] hover:bg-[#e04e53] text-white font-semibold py-3.5 rounded-xl transition-colors text-base"
      >
        Reserve
      </button>
      <p className="text-center text-xs text-gray-500 mt-2">You won&apos;t be charged yet</p>

      {/* Price Breakdown */}
      {nights > 0 && (
        <div className="mt-5 space-y-3 border-t border-gray-200 pt-5">
          <div className="flex justify-between text-sm text-gray-700">
            <span>${listing.price} × {nights} night{nights > 1 ? "s" : ""}</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-700">
            <span>Cleaning fee</span>
            <span>${cleaningFee}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-700">
            <span>Airbnb service fee</span>
            <span>${serviceFee}</span>
          </div>
          <div className="flex justify-between font-bold text-gray-900 border-t border-gray-200 pt-3">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      )}
    </div>
  );
}
