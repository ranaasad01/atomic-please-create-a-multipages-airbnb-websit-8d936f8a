"use client";

import Link from "next/link";
import { Heart, ArrowLeft } from 'lucide-react';
import { useWishlist } from "@/context/WishlistContext";
import { listings } from "@/lib/data";
import ListingCard from "@/components/ListingCard";

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  const wishlisted = listings.filter((l) => wishlist.includes(l.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to listings
        </Link>
        <div className="flex items-center gap-3">
          <Heart className="w-7 h-7 fill-[#FF5A5F] text-[#FF5A5F]" />
          <h1 className="text-3xl font-bold text-gray-900">Your Wishlist</h1>
        </div>
        <p className="text-gray-500 mt-2">
          {wishlisted.length > 0
            ? wishlisted.length + " saved place" + (wishlisted.length !== 1 ? "s" : "")
            : "Save your favorite places to revisit them later"}
        </p>
      </div>

      {wishlisted.length > 0 ? (
        <>
          {/* Wishlist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlisted.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          {/* Explore More */}
          <div className="mt-12 bg-[#F7F7F7] rounded-3xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Discover more amazing places</h2>
            <p className="text-gray-500 mb-5">
              Explore thousands of unique stays around the world and add them to your wishlist.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#FF5A5F] hover:bg-[#e04e53] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Explore all stays
            </Link>
          </div>
        </>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-gray-300" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">No saved places yet</h2>
          <p className="text-gray-500 max-w-md mb-8">
            As you explore, tap the heart icon on any listing to save it here. Build your dream travel wishlist!
          </p>
          <Link
            href="/"
            className="bg-[#FF5A5F] hover:bg-[#e04e53] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Start exploring
          </Link>

          {/* Suggested Listings */}
          <div className="mt-16 w-full text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Popular places to save</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {listings.slice(0, 4).map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
