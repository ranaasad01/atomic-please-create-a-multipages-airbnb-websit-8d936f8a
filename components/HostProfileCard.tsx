"use client";

import Link from "next/link";
import { Star, Shield, MessageCircle } from 'lucide-react';
import { Host } from "@/lib/types";

interface HostProfileCardProps {
  host: Host;
  compact?: boolean;
}

export default function HostProfileCard({ host, compact = false }: HostProfileCardProps) {
  if (compact) {
    return (
      <section className="py-8 border-t border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Meet your host</h2>
        <div className="flex items-start gap-5">
          <Link href={"/host/" + host.id}>
            <img
              src={host.avatar}
              alt={host.name}
              className="w-16 h-16 rounded-full object-cover bg-gray-200 hover:opacity-90 transition-opacity"
            />
          </Link>
          <div className="flex-1">
            <Link href={"/host/" + host.id} className="hover:underline">
              <h3 className="font-bold text-lg text-gray-900">{host.name}</h3>
            </Link>
            {host.isSuperhost && (
              <div className="flex items-center gap-1 text-sm text-gray-600 mt-0.5">
                <Shield className="w-4 h-4 text-[#FF5A5F]" />
                <span>Superhost</span>
              </div>
            )}
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-gray-700 text-gray-700" />
                <span>{host.rating} · {host.reviewCount} reviews</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3 line-clamp-3">{host.bio}</p>
            <div className="mt-3 text-sm text-gray-600 space-y-1">
              <p>Response rate: <span className="font-semibold">{host.responseRate}%</span></p>
              <p>Responds <span className="font-semibold">{host.responseTime}</span></p>
            </div>
            <Link
              href={"/host/" + host.id}
              className="mt-4 inline-flex items-center gap-2 border border-gray-900 rounded-xl px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Contact host
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={host.avatar}
          alt={host.name}
          className="w-20 h-20 rounded-full object-cover bg-gray-200"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{host.name}</h2>
          {host.isSuperhost && (
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
              <Shield className="w-4 h-4 text-[#FF5A5F]" />
              <span className="font-medium">Superhost</span>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4 text-center">
        <div>
          <p className="text-2xl font-bold text-gray-900">{host.reviewCount}</p>
          <p className="text-xs text-gray-500">Reviews</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{host.rating}</p>
          <p className="text-xs text-gray-500">Rating</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{host.responseRate}%</p>
          <p className="text-xs text-gray-500">Response rate</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{host.bio}</p>
      <div className="text-sm text-gray-600 space-y-1 mb-4">
        <p>Member since <span className="font-semibold">{host.joinDate}</span></p>
        <p>Responds <span className="font-semibold">{host.responseTime}</span></p>
      </div>
      <button className="w-full flex items-center justify-center gap-2 bg-[#FF5A5F] hover:bg-[#e04e53] text-white font-semibold py-3 rounded-xl transition-colors">
        <MessageCircle className="w-4 h-4" />
        Contact {host.name.split(" ")[0]}
      </button>
    </div>
  );
}
