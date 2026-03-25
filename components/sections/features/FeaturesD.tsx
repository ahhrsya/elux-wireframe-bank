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

interface FeaturesDProps {
  heading?: string;
  subheading?: string;
  features?: Feature[];
}

export function FeaturesD({
  heading = "Built for Every Use Case",
  subheading = "From startups to enterprise, our features adapt to your needs.",
  features = sampleFeatures,
}: FeaturesDProps) {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="group bg-white rounded-lg border border-neutral-200 p-6 hover:border-accent-500 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default"
          >
            <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-4 group-hover:bg-accent-500 group-hover:text-white transition-colors text-accent-500">
              <Icon name={feature.icon} className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2 text-[16px]">
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

export function FeaturesDDemo() {
  return <FeaturesD />;
}
