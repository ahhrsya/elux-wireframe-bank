"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";

export function HeroG() {
  return (
    <SectionContainer padding="spacious" background="neutral-50" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge variant="accent" className="mb-6">Mobile App 2.0</Badge>
          <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-bold text-neutral-900 mb-6">
            Manage your finances beautifully.
          </h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-lg">
            Experience the new standard in personal finance. Track spending, set goals, and grow your wealth with our intuitive iOS app.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="px-8">Download App</Button>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-neutral-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
              ))}
            </div>
            <span>Trusted by 50,000+ users</span>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-accent-500/20 to-transparent rounded-full blur-3xl" />
          <div className="relative mx-auto w-[280px] md:w-[320px] rounded-[2.5rem] border-[8px] border-neutral-900 bg-white shadow-2xl overflow-hidden aspect-[9/19.5]">
            <img src="https://images.unsplash.com/photo-1616077168079-7e09a6a715f0?auto=format&fit=crop&q=80&w=600" alt="App UI" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export function HeroGDemo() {
  return <HeroG />;
}
