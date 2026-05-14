"use client";

import { useState } from "react";
import { X, ChevronDown, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <>
      {/* Grid Layout */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-64 md:h-96">
        <div
          className="col-span-2 row-span-2 cursor-pointer overflow-hidden"
          onClick={() => openLightbox(0)}
        >
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {images.slice(1, 5).map((img, i) => (
          <div
            key={i}
            className="cursor-pointer overflow-hidden relative"
            onClick={() => openLightbox(i + 1)}
          >
            <img
              src={img}
              alt={title + " " + (i + 2)}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            {i === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">+{images.length - 5} more</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Show all photos button */}
      <button
        onClick={() => openLightbox(0)}
        className="mt-3 flex items-center gap-2 border border-gray-900 rounded-xl px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors"
      >
        <span>Show all photos</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prev}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/30 rounded-full p-2"
          >
            <ChevronDown className="w-6 h-6 rotate-90" />
          </button>

          <div className="max-w-4xl max-h-screen w-full px-16">
            <img
              src={images[activeIndex]}
              alt={title}
              className="w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-sm">
              {activeIndex + 1} / {images.length}
            </p>
          </div>

          <button
            onClick={next}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/30 rounded-full p-2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}
