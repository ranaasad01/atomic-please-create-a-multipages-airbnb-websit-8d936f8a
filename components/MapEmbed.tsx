"use client";

interface MapEmbedProps {
  lat: number;
  lng: number;
  location: string;
}

export default function MapEmbed({ lat, lng, location }: MapEmbedProps) {
  const mapUrl =
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyD-placeholder&q=" +
    encodeURIComponent(location) +
    "&center=" +
    lat +
    "," +
    lng +
    "&zoom=13";

  return (
    <section className="py-8 border-t border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-5">Where you&apos;ll be</h2>
      <p className="text-sm text-gray-600 mb-4">{location}</p>
      <div className="rounded-2xl overflow-hidden bg-gray-100 h-72 relative">
        {/* Placeholder map with location pin */}
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#FF5A5F] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <p className="font-semibold text-gray-800">{location}</p>
            <p className="text-sm text-gray-500 mt-1">Exact location provided after booking</p>
            <a
              href={"https://maps.google.com/?q=" + encodeURIComponent(location)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-[#FF5A5F] underline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
