"use client";

import { Wifi, Waves, UtensilsCrossed, Wind, WashingMachine, Car, Flame, Dumbbell, Eye, TreePine, Star, Check } from 'lucide-react';

const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi className="w-5 h-5" />,
  Pool: <Waves className="w-5 h-5" />,
  Kitchen: <UtensilsCrossed className="w-5 h-5" />,
  "Air conditioning": <Wind className="w-5 h-5" />,
  Washer: <WashingMachine className="w-5 h-5" />,
  Parking: <Car className="w-5 h-5" />,
  Fireplace: <Flame className="w-5 h-5" />,
  Gym: <Dumbbell className="w-5 h-5" />,
  "Ocean view": <Eye className="w-5 h-5" />,
  "Mountain view": <TreePine className="w-5 h-5" />,
  "Superhost": <Star className="w-5 h-5" />,
};

interface AmenitiesGridProps {
  amenities: string[];
}

export default function AmenitiesGrid({ amenities }: AmenitiesGridProps) {
  return (
    <section className="py-8 border-t border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-5">What this place offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {amenities.map((amenity) => (
          <div key={amenity} className="flex items-center gap-4 py-2">
            <span className="text-gray-700">
              {amenityIcons[amenity] ?? <Check className="w-5 h-5" />}
            </span>
            <span className="text-sm text-gray-700">{amenity}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
