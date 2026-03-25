"use client";

import React, { useState } from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { type Testimonial, sampleTestimonials } from "@/lib/constants";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1 justify-center">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

interface TestimonialBProps {
  testimonials?: Testimonial[];
}

export function TestimonialB({
  testimonials = sampleTestimonials,
}: TestimonialBProps) {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <SectionContainer padding="default" background="neutral-50">
      <div className="max-w-2xl mx-auto text-center">
        <Stars count={t.rating} />
        <blockquote className="mt-8 mb-8">
          <p className="text-[20px] md:text-[24px] leading-[28px] md:leading-[36px] text-neutral-800 font-medium italic">
            &ldquo;{t.quote}&rdquo;
          </p>
        </blockquote>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 font-semibold">
            {t.author.charAt(0)}
          </div>
          <div className="text-left">
            <p className="font-semibold text-neutral-900">{t.author}</p>
            <p className="text-sm text-neutral-500">
              {t.role} at {t.company}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-accent-500 hover:text-accent-500 transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                  i === current ? "bg-accent-500" : "bg-neutral-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-accent-500 hover:text-accent-500 transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </SectionContainer>
  );
}

export function TestimonialBDemo() {
  return <TestimonialB />;
}
