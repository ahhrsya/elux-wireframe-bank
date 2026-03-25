"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Card } from "@/components/common/Card";
import { type Feature, sampleFeatures } from "@/lib/constants";
import * as LucideIcons from "lucide-react";

type IconName = keyof typeof LucideIcons;

function Icon({ name, ...props }: { name: string } & React.SVGProps<SVGSVGElement>) {
  const LucideIcon = LucideIcons[name as IconName] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
}

interface FeaturesAProps {
  heading?: string;
  subheading?: string;
  features?: Feature[];
}

export function FeaturesA({
  heading = "Powerful Features",
  subheading = "Everything you need to build faster, deploy smarter, and scale with confidence.",
  features = sampleFeatures.slice(0, 3),
}: FeaturesAProps) {
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
        {features.map((feature) => (
          <Card key={feature.id} variant="hover-lift" padding="md" hoverBorder="accent">
            <div className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center mb-4 group-hover:bg-accent-500 transition-colors text-accent-500">
              <Icon name={feature.icon} className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-neutral-900 text-[20px] leading-[24px] mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

export function FeaturesADemo() {
  return <FeaturesA />;
}
