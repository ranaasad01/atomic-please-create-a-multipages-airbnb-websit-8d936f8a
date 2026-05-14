"use client";

import { Star } from 'lucide-react';
import { Review } from "@/lib/types";

interface ReviewsSectionProps {
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={"w-3.5 h-3.5 " + (s <= rating ? "fill-gray-900 text-gray-900" : "fill-gray-200 text-gray-200")}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection({ reviews, rating, reviewCount }: ReviewsSectionProps) {
  return (
    <section className="py-8 border-t border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <Star className="w-5 h-5 fill-gray-900 text-gray-900" />
        <h2 className="text-xl font-bold text-gray-900">
          {rating} · {reviewCount} reviews
        </h2>
      </div>

      {/* Rating Breakdown */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-8">
        {[
          { label: "Cleanliness", score: 4.9 },
          { label: "Accuracy", score: 4.8 },
          { label: "Communication", score: 5.0 },
          { label: "Location", score: 4.9 },
          { label: "Check-in", score: 4.9 },
          { label: "Value", score: 4.7 },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-4">
            <span className="text-sm text-gray-700">{item.label}</span>
            <div className="flex items-center gap-2 flex-1">
              <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-900 rounded-full"
                  style={{ width: (item.score / 5) * 100 + "%" }}
                />
              </div>
              <span className="text-sm text-gray-700 w-8 text-right">{item.score}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={review.authorAvatar}
                alt={review.authorName}
                className="w-10 h-10 rounded-full object-cover bg-gray-200"
              />
              <div>
                <p className="font-semibold text-sm text-gray-900">{review.authorName}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            </div>
            <StarRating rating={review.rating} />
            <p className="text-sm text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>

      {reviews.length === 0 && (
        <p className="text-gray-500 text-sm">No reviews yet. Be the first to stay here!</p>
      )}
    </section>
  );
}
