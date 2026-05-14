"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Calendar, Users, Home, ArrowLeft, Download, Share2 } from 'lucide-react';
import { getListingById } from "@/lib/data";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const listingId = searchParams.get("listingId") ?? "1";
  const checkIn = searchParams.get("checkIn") ?? "2025-01-15";
  const checkOut = searchParams.get("checkOut") ?? "2025-01-20";
  const guests = Number(searchParams.get("guests") ?? 2);
  const total = Number(searchParams.get("total") ?? 1500);
  const nights = Number(searchParams.get("nights") ?? 5);

  const listing = getListingById(listingId);
  const confirmationNumber = "AIR-" + Math.random().toString(36).substring(2, 8).toUpperCase();

  const cleaningFee = Math.round((listing?.price ?? 200) * 0.15);
  const serviceFee = Math.round((total - cleaningFee) * 0.12 / 1.12);
  const subtotal = total - cleaningFee - serviceFee;

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric", year: "numeric" });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      {/* Success Header */}
      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
        <p className="text-gray-500 text-lg">
          Your reservation has been successfully confirmed. Get ready for an amazing stay!
        </p>
        <div className="mt-4 inline-block bg-gray-100 rounded-xl px-5 py-2">
          <p className="text-sm text-gray-500">Confirmation number</p>
          <p className="text-xl font-bold text-gray-900 tracking-wider">{confirmationNumber}</p>
        </div>
      </div>

      {/* Booking Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6">
        {/* Property Image */}
        {listing && (
          <div className="relative h-48">
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-bold text-lg">{listing.title}</p>
              <p className="text-sm text-white/80">{listing.location}</p>
            </div>
          </div>
        )}

        <div className="p-6 space-y-5">
          {/* Booking Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#FF5A5F] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Check-in</p>
                <p className="text-sm font-semibold text-gray-900">{formatDate(checkIn)}</p>
                <p className="text-xs text-gray-500">After 3:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#FF5A5F] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Check-out</p>
                <p className="text-sm font-semibold text-gray-900">{formatDate(checkOut)}</p>
                <p className="text-xs text-gray-500">Before 11:00 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-[#FF5A5F] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Guests</p>
                <p className="text-sm font-semibold text-gray-900">{guests} guest{guests > 1 ? "s" : ""}</p>
                <p className="text-xs text-gray-500">{nights} night{nights > 1 ? "s" : ""}</p>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="border-t border-gray-200 pt-5 space-y-3">
            <h3 className="font-semibold text-gray-900">Price breakdown</h3>
            <div className="flex justify-between text-sm text-gray-700">
              <span>${listing?.price ?? 0} × {nights} night{nights > 1 ? "s" : ""}</span>
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
            <div className="flex justify-between font-bold text-gray-900 border-t border-gray-200 pt-3 text-base">
              <span>Total (USD)</span>
              <span>${total}</span>
            </div>
          </div>
        </div>
      </div>

      {/* What's Next */}
      <div className="bg-[#F7F7F7] rounded-2xl p-6 mb-6">
        <h3 className="font-bold text-gray-900 mb-4">What happens next?</h3>
        <div className="space-y-4">
          {[
            { icon: "📧", title: "Confirmation email sent", desc: "Check your inbox for your booking details and receipt." },
            { icon: "💬", title: "Message your host", desc: "Introduce yourself and ask any questions about your stay." },
            { icon: "🗺️", title: "Get directions", desc: "Exact address and check-in instructions will be shared 24 hours before arrival." },
          ].map((step) => (
            <div key={step.title} className="flex items-start gap-3">
              <span className="text-2xl">{step.icon}</span>
              <div>
                <p className="font-semibold text-sm text-gray-900">{step.title}</p>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-3 text-sm font-semibold hover:bg-gray-50 transition-colors">
          <Download className="w-4 h-4" />
          Download receipt
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#FF5A5F] hover:bg-[#e04e53] text-white rounded-xl py-3 text-sm font-semibold transition-colors">
          <Share2 className="w-4 h-4" />
          Share trip
        </button>
      </div>
    </div>
  );
}

export default function BookingConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="animate-pulse space-y-4">
          <div className="h-20 w-20 bg-gray-200 rounded-full mx-auto" />
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto" />
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto" />
        </div>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}
