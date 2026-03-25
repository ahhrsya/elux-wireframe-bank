"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { type Feature, sampleFeatures } from "@/lib/constants";
import * as LucideIcons from "lucide-react";

type IconName = keyof typeof LucideIcons;

function Icon({ name, ...props }: { name: string } & React.SVGProps<SVGSVGElement>) {
  const LucideIcon = LucideIcons[name as IconName] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
}

interface FeaturesBProps {
  heading?: string;
  subheading?: string;
  features?: Feature[];
}

export function FeaturesB({
  heading = "Why Teams Choose Us",
  subheading = "Built for modern teams that demand speed, reliability, and beautiful design.",
  features = sampleFeatures,
}: FeaturesBProps) {
  return (
    <SectionContainer padding="default" background="neutral-50">
      <div className="text-center mb-16">
        <h2 className="text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43.2px] font-semibold text-neutral-900 tracking-tight mb-3">
          {heading}
        </h2>
        <p className="text-body text-neutral-600 max-w-xl mx-auto">
          {subheading}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Icon/Image side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full aspect-video md:aspect-square bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
                <img src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1460925895917-afdab827c52f' : '1551288049-bebda4e38f71'}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover" alt="Feature" />
              </div>
            </div>

            {/* Text side */}
            <div className="w-full md:w-1/2">
              <h3 className="font-semibold text-neutral-900 text-[20px] leading-[24px] mb-3">
                {feature.title}
              </h3>
              <p className="text-body text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export function FeaturesBDemo() {
  return <FeaturesB />;
}
