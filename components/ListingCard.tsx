"use client";

import Link from "next/link";
import { Heart, Star } from 'lucide-react';
import { Listing } from "@/lib/types";
import { useWishlist } from "@/context/WishlistContext";

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(listing.id);

  const heartClass = wishlisted
    ? "fill-[#FF5A5F] text-[#FF5A5F]"
    : "fill-black/30 text-white";

  return (
    <div className="group relative">
      <Link href={"/listings/" + listing.id} className="block">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200 mb-3">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {listing.isSuperhost && (
            <div className="absolute top-3 left-3 bg-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
              Superhost
            </div>
          )}
        </div>

        <div className="space-y-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 flex-1">
              {listing.location}
            </h3>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star className="w-3.5 h-3.5 fill-gray-900 text-gray-900" />
              <span className="text-sm font-medium text-gray-900">{listing.rating}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 line-clamp-1">{listing.title}</p>
          <p className="text-sm text-gray-500">{listing.type}</p>
          <p className="text-sm text-gray-900 mt-1">
            <span className="font-semibold">${listing.price}</span>
            <span className="text-gray-500"> / night</span>
          </p>
        </div>
      </Link>

      <button
        onClick={() => toggleWishlist(listing.id)}
        className="absolute top-3 right-3 p-2 rounded-full hover:scale-110 transition-transform"
        aria-label="Toggle wishlist"
      >
        <Heart className={"w-5 h-5 transition-colors " + heartClass} />
      </button>
    </div>
  );
}
