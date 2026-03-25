"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";

interface TestimonialCProps {
  heading?: string;
  subheading?: string;
  logos?: { name: string; initial: string }[];
}

const defaultLogos = [
  { name: "TechCorp", initial: "T" },
  { name: "ScaleUp", initial: "S" },
  { name: "DataFlow", initial: "D" },
  { name: "CloudBase", initial: "C" },
  { name: "DevStack", initial: "D" },
  { name: "MetricAI", initial: "M" },
];

export function TestimonialC({
  heading = "Trusted by Industry Leaders",
  subheading = "Join 1,000+ companies that rely on our platform every day.",
  logos = defaultLogos,
}: TestimonialCProps) {
  return (
    <SectionContainer padding="default" background="neutral-50">
      <div className="text-center mb-10">
        <h2 className="text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43.2px] font-semibold text-neutral-900 tracking-tight mb-3">
          {heading}
        </h2>
        <p className="text-body text-neutral-600 max-w-xl mx-auto">
          {subheading}
        </p>
      </div>

      {/* Logo Wall */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center mb-10">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center gap-2 text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-neutral-200 flex items-center justify-center text-sm font-bold text-neutral-400">
              {logo.initial}
            </div>
            <span className="text-sm font-medium hidden sm:inline">
              {logo.name}
            </span>
          </div>
        ))}
      </div>

      {/* Stat */}
      <div className="text-center pt-6 border-t border-neutral-200">
        <p className="text-sm text-neutral-500">
          Trusted by <span className="font-semibold text-neutral-700">1,000+</span> companies worldwide
        </p>
      </div>
    </SectionContainer>
  );
}

export function TestimonialCDemo() {
  return <TestimonialC />;
}
