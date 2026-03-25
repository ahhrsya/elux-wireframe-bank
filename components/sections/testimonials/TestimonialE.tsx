"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { type Testimonial, sampleTestimonials } from "@/lib/constants";
import { Quote } from "lucide-react";

interface TestimonialEProps {
  heading?: string;
  subheading?: string;
  testimonials?: Testimonial[];
}

export function TestimonialE({
  heading = "Stories from Real Users",
  subheading = "See how teams are building better products with our platform.",
  testimonials = sampleTestimonials,
}: TestimonialEProps) {
  return (
    <SectionContainer padding="default" background="neutral-50">
      <div className="text-center mb-12">
        <h2 className="text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43.2px] font-semibold text-neutral-900 tracking-tight mb-3">
          {heading}
        </h2>
        <p className="text-body text-neutral-600 max-w-xl mx-auto">
          {subheading}
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {testimonials.map((t, index) => (
          <div
            key={t.id}
            className={`flex flex-col md:flex-row gap-6 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Quote */}
            <div className="flex-1 bg-white rounded-lg p-6 border border-neutral-200 relative">
              <Quote className="w-8 h-8 text-accent-500/20 mb-3" />
              <p className="text-body text-neutral-700 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1 md:w-40 shrink-0 md:justify-center">
              <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 text-sm font-semibold shrink-0">
                {t.author.charAt(0)}
              </div>
              <div className={`${index % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
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

export function TestimonialEDemo() {
  return <TestimonialE />;
}
