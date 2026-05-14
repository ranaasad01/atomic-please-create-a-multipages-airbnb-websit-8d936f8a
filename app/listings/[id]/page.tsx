export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Star, Users, BedDouble, Bath, Home, Shield, ArrowLeft } from 'lucide-react';
import { getListingById, getHostById, getReviewsByListingId } from "@/lib/data";
import ImageGallery from "@/components/ImageGallery";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import BookingPanel from "@/components/BookingPanel";
import ReviewsSection from "@/components/ReviewsSection";
import MapEmbed from "@/components/MapEmbed";
import HostProfileCard from "@/components/HostProfileCard";

export default async function ListingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const listing = getListingById(id);
  if (!listing) notFound();

  const host = getHostById(listing.hostId);
  if (!host) notFound();

  const reviews = getReviewsByListingId(listing.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to listings
      </Link>

      {/* Title */}
      <div className="mb-5">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{listing.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-gray-900 text-gray-900" />
            <span className="font-semibold text-gray-900">{listing.rating}</span>
            <span>({listing.reviewCount} reviews)</span>
          </div>
          {listing.isSuperhost && (
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-[#FF5A5F]" />
              <span className="font-medium">Superhost</span>
            </div>
          )}
          <span>·</span>
          <span className="underline font-medium">{listing.location}</span>
        </div>
      </div>

      {/* Image Gallery */}
      <ImageGallery images={listing.images} title={listing.title} />

      {/* Main Content */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2">
          {/* Property Overview */}
          <div className="pb-8 border-b border-gray-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {listing.type} hosted by {host.name}
                </h2>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{listing.guests} guests</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    <span>{listing.bedrooms} bedroom{listing.bedrooms > 1 ? "s" : ""}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <BedDouble className="w-4 h-4" />
                    <span>{listing.beds} bed{listing.beds > 1 ? "s" : ""}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{listing.bathrooms} bath{listing.bathrooms > 1 ? "s" : ""}</span>
                  </div>
                </div>
              </div>
              <img
                src={host.avatar}
                alt={host.name}
                className="w-14 h-14 rounded-full object-cover bg-gray-200 flex-shrink-0"
              />
            </div>
          </div>

          {/* Highlights */}
          <div className="py-8 border-b border-gray-200 space-y-5">
            <div className="flex items-start gap-4">
              <Home className="w-6 h-6 text-gray-700 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Entire {listing.type.toLowerCase()}</p>
                <p className="text-sm text-gray-500">You&apos;ll have the {listing.type.toLowerCase()} to yourself.</p>
              </div>
            </div>
            {listing.isSuperhost && (
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-gray-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">{host.name} is a Superhost</p>
                  <p className="text-sm text-gray-500">Superhosts are experienced, highly rated hosts who are committed to providing great stays.</p>
                </div>
              </div>
            )}
            <div className="flex items-start gap-4">
              <Star className="w-6 h-6 text-gray-700 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Highly rated</p>
                <p className="text-sm text-gray-500">This home is in the top 5% of eligible listings based on ratings, reviews, and reliability.</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="py-8 border-b border-gray-200">
            <p className="text-gray-700 leading-relaxed">{listing.description}</p>
          </div>

          {/* Amenities */}
          <AmenitiesGrid amenities={listing.amenities} />

          {/* Map */}
          <MapEmbed lat={listing.lat} lng={listing.lng} location={listing.location} />

          {/* Host */}
          <HostProfileCard host={host} compact />

          {/* Reviews */}
          <ReviewsSection reviews={reviews} rating={listing.rating} reviewCount={listing.reviewCount} />
        </div>

        {/* Right Column — Booking Panel */}
        <div className="lg:col-span-1">
          <BookingPanel listing={listing} />
        </div>
      </div>
    </div>
  );
}
