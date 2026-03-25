"use client";

import React from "react";
import { Button } from "@/components/common/Button";
import { ArrowRight } from "lucide-react";

interface HeroCProps {
  heading: string;
  subheading: string;
  ctaPrimary: { text: string; href: string };
}

export function HeroC({
  heading = "Ship products faster with modern tooling",
  subheading = "The complete toolkit for teams that value speed, reliability, and clean design.",
  ctaPrimary = { text: "Get Started", href: "#" },
}: HeroCProps) {
  return (
    <section className="min-h-[600px] lg:min-h-[700px] flex">
      {/* Left: Text (60%) */}
      <div className="flex-1 lg:w-3/5 flex items-center bg-white py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-lg">
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-4">
            {heading}
          </h1>
          <p className="text-body text-neutral-600 mb-8">{subheading}</p>
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
      </div>

      {/* Right: Accent color block (40%) */}
      <div className="hidden lg:flex lg:w-2/5 bg-accent-500 items-center justify-center relative overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/20 rounded-2xl rotate-12" />
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-white/15 rounded-full" />
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-lg -rotate-6" />
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/5 rounded-2xl rotate-45" />
        </div>
      </div>
    </section>
  );
}

export function HeroCDemo() {
  return (
    <HeroC
      heading="Ship products faster with modern tooling"
      subheading="The complete toolkit for teams that value speed, reliability, and clean design."
      ctaPrimary={{ text: "Get Started", href: "#" }}
    />
  );
}
