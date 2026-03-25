"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { type Feature, sampleFeatures } from "@/lib/constants";

interface FeaturesCProps {
  heading?: string;
  subheading?: string;
  features?: Feature[];
}

export function FeaturesC({
  heading = "How It Works",
  subheading = "Get started in three simple steps. No complex setup, no learning curve.",
  features = sampleFeatures.slice(0, 3),
}: FeaturesCProps) {
  return (
    <SectionContainer padding="default" background="white" maxWidth="md">
      <div className="text-center mb-12">
        <h2 className="text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43.2px] font-semibold text-neutral-900 tracking-tight mb-3">
          {heading}
        </h2>
        <p className="text-body text-neutral-600 max-w-xl mx-auto">
          {subheading}
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {features.map((feature, index) => (
          <div key={feature.id}>
            <div className="flex gap-6 py-8">
              {/* Number */}
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-full bg-accent-500/10 text-accent-500 flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-neutral-900 text-[20px] leading-[24px] mb-2">
                  {feature.title}
                </h3>
                <p className="text-body text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>

            {/* Divider */}
            {index < features.length - 1 && (
              <div className="border-b border-neutral-200 ml-16" />
            )}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export function FeaturesCDemo() {
  return <FeaturesC />;
}
