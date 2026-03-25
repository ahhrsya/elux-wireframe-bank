"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Play } from "lucide-react";

interface TestimonialDProps {
  heading?: string;
  subheading?: string;
  videos?: { id: string; title: string; author: string; role: string }[];
}

const defaultVideos = [
  { id: "v1", title: "How we scaled 10x", author: "Sarah Johnson", role: "CEO, TechCorp" },
  { id: "v2", title: "Our deployment journey", author: "Marcus Chen", role: "CTO, ScaleUp" },
  { id: "v3", title: "From zero to launch", author: "Elena Rodriguez", role: "VP Eng, DataFlow" },
];

export function TestimonialD({
  heading = "Hear From Our Customers",
  subheading = "Watch real stories from teams that transformed their workflow.",
  videos = defaultVideos,
}: TestimonialDProps) {
  return (
    <SectionContainer padding="default" background="white">
      <div className="text-center mb-12">
        <h2 className="text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43.2px] font-semibold text-neutral-900 tracking-tight mb-3">
          {heading}
        </h2>
        <p className="text-body text-neutral-600 max-w-xl mx-auto">
          {subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="group cursor-pointer">
            {/* Video Thumbnail */}
            <div className="relative aspect-video bg-neutral-800 rounded-lg overflow-hidden mb-4">
              <div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-neutral-900/30 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Play className="w-5 h-5 text-neutral-900 ml-0.5" />
                </div>
              </div>
            </div>
            {/* Info */}
            <h3 className="font-semibold text-neutral-900 mb-1">
              {video.title}
            </h3>
            <p className="text-sm text-neutral-500">
              {video.author} · {video.role}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export function TestimonialDDemo() {
  return <TestimonialD />;
}
