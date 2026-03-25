"use client";

import React, { useRef } from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { type Feature, sampleFeatures } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as LucideIcons from "lucide-react";

type IconName = keyof typeof LucideIcons;

function Icon({ name, ...props }: { name: string } & React.SVGProps<SVGSVGElement>) {
  const LucideIcon = LucideIcons[name as IconName] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
}

interface FeaturesEProps {
  heading?: string;
  subheading?: string;
  features?: Feature[];
}

export function FeaturesE({
  heading = "Everything You Need",
  subheading = "A complete toolkit to power your next big idea.",
  features = sampleFeatures,
}: FeaturesEProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <SectionContainer padding="default" background="neutral-50">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43.2px] font-semibold text-neutral-900 tracking-tight mb-3">
            {heading}
          </h2>
          <p className="text-body text-neutral-600 max-w-xl">
            {subheading}
          </p>
        </div>
        {/* Navigation arrows */}
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-accent-500 hover:text-accent-500 transition-colors cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-accent-500 hover:text-accent-500 transition-colors cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {features.map((feature) => (
          <div
            key={feature.id}
            className="snap-start shrink-0 w-[280px] md:w-[300px] bg-white rounded-lg border border-neutral-200 p-6 hover:border-accent-500 hover:shadow-md transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-4 text-accent-500">
              <Icon name={feature.icon} className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export function FeaturesEDemo() {
  return <FeaturesE />;
}
