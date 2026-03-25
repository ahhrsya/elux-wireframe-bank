"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { ArrowRight } from "lucide-react";

interface HeroBProps {
  badge?: string;
  heading: string;
  subheading: string;
  ctaPrimary: { text: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
}

export function HeroB({
  badge,
  heading = "The future of analytics starts here",
  subheading = "Powerful insights, beautifully simple. Everything your team needs to understand what matters most.",
  ctaPrimary = { text: "Start Free Trial", href: "#" },
  imageSrc,
  imageAlt = "Product screenshot",
}: HeroBProps) {
  return (
    <SectionContainer padding="spacious" background="white">
      <div className="max-w-3xl mx-auto text-center">
        {badge && (
          <div className="mb-6">
            <Badge variant="accent">{badge}</Badge>
          </div>
        )}
        <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-4">
          {heading}
        </h1>
        <p className="text-body text-neutral-600 max-w-xl mx-auto mb-8">
          {subheading}
        </p>
        <div className="flex justify-center">
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            onClick={() => (window.location.href = ctaPrimary.href)}
          >
            {ctaPrimary.text}
          </Button>
        </div>

        {/* Optional Hero Image */}
        {imageSrc && (
          <div className="mt-12">
            <div className="bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

        {!imageSrc && (
          <div className="mt-12">
            <div className="bg-neutral-100 rounded-2xl aspect-[16/9] flex items-center justify-center border border-neutral-200">
              <div className="text-center p-8">
                <div className="w-20 h-14 bg-neutral-200 rounded-xl mx-auto mb-3" />
                <p className="text-sm text-neutral-400">Optional Hero Image</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}

export function HeroBDemo() {
  return (
    <HeroB
      badge="Trusted by 10,000+ teams"
      heading="The future of analytics starts here"
      subheading="Powerful insights, beautifully simple. Everything your team needs to understand what matters most."
      ctaPrimary={{ text: "Start Free Trial", href: "#" }}
      imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    />
  );
}
