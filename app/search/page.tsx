"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, MapPin } from 'lucide-react';
import { useRouter } from "next/navigation";
import ListingCard from "@/components/ListingCard";
import FilterSidebar, { FilterState } from "@/components/FilterSidebar";
import SkeletonCard from "@/components/SkeletonCard";
import { listings } from "@/lib/data";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const locationParam = searchParams.get("location") ?? "";
  const checkInParam = searchParams.get("checkIn") ?? "";
  const checkOutParam = searchParams.get("checkOut") ?? "";
  const guestsParam = Number(searchParams.get("guests") ?? 1);

  const [searchLocation, setSearchLocation] = useState(locationParam);
  const [filters, setFilters] = useState<FilterState>({
    minPrice: 0,
    maxPrice: 3000,
    types: [],
    amenities: [],
    sortBy: "recommended",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchLocation) params.set("location", searchLocation);
    router.push("/search?" + params.toString());
  };

  const results = useMemo(() => {
    let filtered = listings.filter((l) => {
      if (locationParam) {
        const loc = locationParam.toLowerCase();
        if (!l.location.toLowerCase().includes(loc) && !l.city.toLowerCase().includes(loc) && !l.country.toLowerCase().includes(loc)) {
          return false;
        }
      }
      if (l.price < filters.minPrice || l.price > filters.maxPrice) return false;
      if (filters.types.length > 0 && !filters.types.includes(l.type)) return false;
      if (filters.amenities.length > 0) {
        const hasAll = filters.amenities.every((a) => l.amenities.includes(a));
        if (!hasAll) return false;
      }
      if (guestsParam > 1 && l.guests < guestsParam) return false;
      return true;
    });

    if (filters.sortBy === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
    else if (filters.sortBy === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
    else if (filters.sortBy === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);

    return filtered;
  }, [locationParam, filters, guestsParam]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center gap-3 mb-8">
        <div className="flex-1 flex items-center gap-3 border border-gray-300 rounded-full px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
          <MapPin className="w-5 h-5 text-[#FF5A5F] flex-shrink-0" />
          <input
            type="text"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            placeholder="Search by location..."
            className="flex-1 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-[#FF5A5F] hover:bg-[#e04e53] text-white font-semibold px-6 py-3 rounded-full transition-colors flex items-center gap-2"
        >
          <Search className="w-4 h-4" />
          <span className="hidden sm:block">Search</span>
        </button>
      </form>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {locationParam ? "Stays in " + locationParam : "All available stays"}
          </h1>
          <p className="text-gray-500 mt-1">
            {results.length} place{results.length !== 1 ? "s" : ""} found
            {checkInParam && checkOutParam ? " · " + checkInParam + " – " + checkOutParam : ""}
            {guestsParam > 1 ? " · " + guestsParam + " guests" : ""}
          </p>
        </div>
        {/* Mobile filter button rendered inside FilterSidebar */}
      </div>

      <div className="flex gap-8">
        <FilterSidebar onFilter={setFilters} initialFilters={filters} />

        <div className="flex-1 min-w-0">
          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {results.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🔍</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filters to find what you&apos;re looking for.
              </p>
              <button
                onClick={() => {
                  setFilters({ minPrice: 0, maxPrice: 3000, types: [], amenities: [], sortBy: "recommended" });
                  router.push("/search");
                }}
                className="bg-[#FF5A5F] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#e04e53] transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
