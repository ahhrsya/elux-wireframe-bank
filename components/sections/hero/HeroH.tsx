"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/common/Button";

export function HeroH() {
  return (
    <SectionContainer padding="spacious" background="white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-bold text-neutral-900 mb-6">
          Unleash your creative potential
        </h1>
        <p className="text-lg text-neutral-600 mb-8">
          The all-in-one design platform for teams who want to build stunning digital experiences faster than ever before.
        </p>
        <Button size="lg">Start Designing Free</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[200px]">
        <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Dashboard" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400" alt="Analytics" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" alt="Team" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-accent-50 p-6 flex items-center justify-center text-center">
          <div>
            <div className="text-3xl font-bold text-accent-600 mb-1">99%</div>
            <div className="text-sm text-neutral-600">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export function HeroHDemo() {
  return <HeroH />;
}
