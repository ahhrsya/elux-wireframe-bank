"use client";

import React from "react";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { ArrowRight } from "lucide-react";

interface HeroDProps {
  badge?: string;
  heading: string;
  subheading: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
}

export function HeroD({
  badge,
  heading = "Everything you need to grow your business",
  subheading = "From analytics to automation, we provide the tools that help you work smarter, not harder.",
  ctaPrimary = { text: "Start Building", href: "#" },
  ctaSecondary = { text: "Watch Demo", href: "#" },
  imageSrc,
  imageAlt = "Background visual",
}: HeroDProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background image area */}
      <div className="absolute inset-0 z-0">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover opacity-10"
          />
        ) : (
          <div className="w-full h-full bg-neutral-50" />
        )}
      </div>

      {/* SVG Shape Divider */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
          fill="#F9FAFB"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {badge && (
            <div className="mb-6">
              <Badge variant="neutral">{badge}</Badge>
            </div>
          )}
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-4">
            {heading}
          </h1>
          <p className="text-body text-neutral-600 max-w-xl mx-auto mb-8">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
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
      </div>
    </section>
  );
}

export function HeroDDemo() {
  return (
    <HeroD
      badge="Now in Beta"
      heading="Everything you need to grow your business"
      subheading="From analytics to automation, we provide the tools that help you work smarter, not harder."
      ctaPrimary={{ text: "Start Building", href: "#" }}
      ctaSecondary={{ text: "Watch Demo", href: "#" }}
      imageSrc="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1200"
    />
  );
}
