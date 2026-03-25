"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { ArrowRight } from "lucide-react";

interface HeroAProps {
  badge?: string;
  heading: string;
  subheading: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
}

export function HeroA({
  badge,
  heading = "Build better products with real-time insights",
  subheading = "Deploy in minutes, scale to millions. The modern platform for teams that move fast and build with confidence.",
  ctaPrimary = { text: "Get Started", href: "#" },
  ctaSecondary = { text: "Learn More", href: "#" },
  imageSrc,
  imageAlt = "Product screenshot",
}: HeroAProps) {
  return (
    <SectionContainer padding="spacious" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        {/* Text Content — 60% */}
        <div className="lg:col-span-3">
          {badge && (
            <div className="mb-6">
              <Badge variant="accent">{badge}</Badge>
            </div>
          )}
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-4">
            {heading}
          </h1>
          <p className="text-body text-neutral-600 max-w-lg mb-8">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              onClick={() => (window.location.href = ctaPrimary.href)}
            >
              {ctaPrimary.text}
            </Button>
            {ctaSecondary && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = ctaSecondary.href)}
              >
                {ctaSecondary.text}
              </Button>
            )}
          </div>
        </div>

        {/* Image — 40% */}
        <div className="lg:col-span-2">
          <div className="bg-neutral-100 rounded-2xl aspect-[4/3] flex items-center justify-center border border-neutral-200">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-neutral-200 rounded-xl mx-auto mb-3" />
                <p className="text-sm text-neutral-400">Hero Image</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

// Default export with sample data
export function HeroADemo() {
  return (
    <HeroA
      badge="New Release v2.0"
      heading="Build better products with real-time insights"
      subheading="Deploy in minutes, scale to millions. The modern platform for teams that move fast and build with confidence."
      ctaPrimary={{ text: "Get Started", href: "#" }}
      ctaSecondary={{ text: "Learn More", href: "#" }}
      imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
    />
  );
}
