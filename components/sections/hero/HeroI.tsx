"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/common/Button";

export function HeroI() {
  return (
    <SectionContainer padding="spacious" background="neutral-50" className="relative text-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-purple-400/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-700 mb-8 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
          System Status: All Systems Operational
        </div>
        <h1 className="text-[48px] md:text-[72px] leading-[1.05] font-extrabold text-neutral-900 tracking-tight mb-8">
          The robust engine for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-purple-600">
            modern commerce
          </span>
        </h1>
        <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
          Scale your business with an infrastructure that handles millions of transactions effortlessly. Reliable, secure, and blazingly fast.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="h-14 px-8 text-base shadow-lg shadow-accent-500/25">
            Start Building Free
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-8 text-base bg-white">
            Read Documentation
          </Button>
        </div>
      </div>
      
      {/* 3D abstract visual representation */}
      <div className="relative z-10 mt-16 max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-neutral-200/50">
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200" alt="Abstract 3D" className="w-full h-auto object-cover max-h-[400px]" />
      </div>
    </SectionContainer>
  );
}

export function HeroIDemo() {
  return <HeroI />;
}
