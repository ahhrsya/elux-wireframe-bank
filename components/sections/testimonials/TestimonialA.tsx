"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { type Testimonial, sampleTestimonials } from "@/lib/constants";
import { Star } from "lucide-react";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

interface TestimonialAProps {
  heading?: string;
  subheading?: string;
  testimonials?: Testimonial[];
}

export function TestimonialA({
  heading = "What Our Customers Say",
  subheading = "Join thousands of satisfied teams who have transformed their workflow.",
  testimonials = sampleTestimonials,
}: TestimonialAProps) {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-lg p-8 border-l-4 border-l-accent-500 border-r border-t border-b border-neutral-200 hover:shadow-md transition-shadow duration-200"
          >
            <Stars count={t.rating} />
            <p className="text-body text-neutral-700 my-6 italic leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
              <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 text-sm font-semibold">
                {t.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-neutral-900 text-sm">
                  {t.author}
                </p>
                <p className="text-xs text-neutral-500">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export function TestimonialADemo() {
  return <TestimonialA />;
}
