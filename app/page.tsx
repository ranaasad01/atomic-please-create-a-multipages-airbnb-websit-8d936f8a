"use client";

import { useState, useMemo } from "react";
import HeroSearch from "@/components/HeroSearch";
import CategoryTabs from "@/components/CategoryTabs";
import ListingCard from "@/components/ListingCard";
import { listings } from "@/lib/data";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return listings;
    return listings.filter((l) => l.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <HeroSearch />
      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {activeCategory === "all" ? "Explore all stays" : activeCategory + " stays"}
          </h2>
          <p className="text-gray-500 mt-1">
            {filtered.length} place{filtered.length !== 1 ? "s" : ""} to stay
          </p>
        </div>

        {/* Listings Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🏠</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No listings found</h3>
            <p className="text-gray-500">Try a different category or check back later.</p>
          </div>
        )}

        {/* Inspiration Section */}
        <section className="mt-16 py-12 bg-[#F7F7F7] rounded-3xl px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Inspiration for your next trip</h2>
          <p className="text-gray-500 mb-8">Explore popular destinations around the world</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { city: "Malibu", country: "California", image: "https://media.timeout.com/images/105825634/image.jpg" },
              { city: "Aspen", country: "Colorado", image: "https://www.pcma.org/wp-content/uploads/2019/11/aspen-lightup-nell.jpeg" },
              { city: "Santorini", country: "Greece", image: "https://www.strogilisantorini.com/blog/user/pages/01.home/36.santorini-destination/01-santorini-greece.jpg" },
              { city: "Bora Bora", country: "French Polynesia", image: "https://www.tahititourisme.com/app/uploads/iris-images/23217/bora-bora-la-perle-du-pacifique-a-stephane-mailion-photography-1920x1080-f50_50.webp" },
            ].map((dest) => (
              <a
                key={dest.city}
                href={"/search?location=" + dest.city}
                className="group relative rounded-2xl overflow-hidden aspect-square block"
              >
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-bold text-sm">{dest.city}</p>
                  <p className="text-xs text-white/80">{dest.country}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Become a Host CTA */}
        <section className="mt-12 rounded-3xl overflow-hidden relative h-64 md:h-80">
          <img
            src="https://www.thepapermillstore.com/media/catalog/product/cache/cda15aeb030434d359fbe2aedf849a1c/c/l/classic-crest-classic-natural-white-card-stock-smooth.jpg"
            alt="Become a host"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="px-8 md:px-12 max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Become a host and earn extra income
              </h2>
              <p className="text-white/90 mb-5 text-sm md:text-base">
                Join millions of hosts who earn money sharing their spaces with travelers from around the world.
              </p>
              <a
                href="/auth"
                className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
