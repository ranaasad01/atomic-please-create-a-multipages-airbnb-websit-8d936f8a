"use client";

import { useState } from "react";
import { X, SlidersHorizontal } from 'lucide-react';

interface FilterSidebarProps {
  onFilter: (filters: FilterState) => void;
  initialFilters?: FilterState;
}

export interface FilterState {
  minPrice: number;
  maxPrice: number;
  types: string[];
  amenities: string[];
  sortBy: string;
}

const propertyTypes = ["Villa", "Cabin", "Mansion", "Loft", "Treehouse", "Farmhouse", "Bungalow", "Castle", "Dome", "Eco-lodge"];
const amenityOptions = ["WiFi", "Pool", "Kitchen", "Hot tub", "Parking", "BBQ grill", "Washer", "Dryer", "Air conditioning", "Fireplace", "Gym"];
const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export default function FilterSidebar({ onFilter, initialFilters }: FilterSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(initialFilters?.minPrice ?? 0);
  const [maxPrice, setMaxPrice] = useState(initialFilters?.maxPrice ?? 3000);
  const [types, setTypes] = useState<string[]>(initialFilters?.types ?? []);
  const [amenities, setAmenities] = useState<string[]>(initialFilters?.amenities ?? []);
  const [sortBy, setSortBy] = useState(initialFilters?.sortBy ?? "recommended");

  const applyFilters = () => {
    onFilter({ minPrice, maxPrice, types, amenities, sortBy });
    setMobileOpen(false);
  };

  const toggleType = (t: string) => {
    setTypes((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);
  };

  const toggleAmenity = (a: string) => {
    setAmenities((prev) => prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]);
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Sort */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Sort by</h3>
        <div className="space-y-2">
          {sortOptions.map((opt) => (
            <label key={opt.value} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="sort"
                value={opt.value}
                checked={sortBy === opt.value}
                onChange={() => setSortBy(opt.value)}
                className="accent-[#FF5A5F]"
              />
              <span className="text-sm text-gray-700">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Price range</h3>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-1">
            <label className="text-xs text-gray-500 mb-1 block">Min</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <span className="text-gray-500 text-sm mr-1">$</span>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full text-sm focus:outline-none"
                min={0}
                max={maxPrice}
              />
            </div>
          </div>
          <span className="text-gray-400 mt-4">—</span>
          <div className="flex-1">
            <label className="text-xs text-gray-500 mb-1 block">Max</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <span className="text-gray-500 text-sm mr-1">$</span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full text-sm focus:outline-none"
                min={minPrice}
                max={10000}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Property Type */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Property type</h3>
        <div className="grid grid-cols-2 gap-2">
          {propertyTypes.map((t) => (
            <label key={t} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={types.includes(t)}
                onChange={() => toggleType(t)}
                className="accent-[#FF5A5F] rounded"
              />
              <span className="text-sm text-gray-700">{t}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Amenities</h3>
        <div className="space-y-2">
          {amenityOptions.map((a) => (
            <label key={a} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={amenities.includes(a)}
                onChange={() => toggleAmenity(a)}
                className="accent-[#FF5A5F] rounded"
              />
              <span className="text-sm text-gray-700">{a}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={applyFilters}
        className="w-full bg-[#FF5A5F] hover:bg-[#e04e53] text-white font-semibold py-3 rounded-xl transition-colors"
      >
        Apply filters
      </button>
    </div>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filters
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-72 flex-shrink-0">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-36">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Filters</h2>
          <FilterContent />
        </div>
      </div>
    </>
  );
}
