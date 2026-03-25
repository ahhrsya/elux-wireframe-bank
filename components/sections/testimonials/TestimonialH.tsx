"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/common/Button";

export function TestimonialH() {
  return (
    <SectionContainer padding="spacious" background="neutral-900">
      <div className="max-w-7xl mx-auto relative rounded-[2rem] overflow-hidden bg-neutral-800 border border-neutral-700 grid grid-cols-1 lg:grid-cols-2 shadow-2xl items-center">
        
        <div className="p-12 md:p-16 lg:p-24 relative z-10 flex flex-col justify-center">
          <svg className="w-12 h-12 text-accent-500 mb-8 opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-8 leading-tight">
            Switching to this framework allowed us to move five times faster than before. We completely overhauled our frontend in 2 weeks.
          </h2>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-neutral-600">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Author" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-white text-lg">Rebecca Simmons</div>
              <div className="text-neutral-400">VP of Engineering, Acme Corp</div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-neutral-700/50">
             <Button variant="outline" className="text-white border-neutral-600 hover:bg-white hover:text-black transition-colors">
               Read the Case Study
             </Button>
          </div>
        </div>

        <div className="w-full h-full min-h-[400px] lg:min-h-0 relative">
          <div className="absolute inset-0 bg-neutral-900/40 mix-blend-multiply z-10" />
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" alt="Team meeting" className="w-full h-full object-cover absolute inset-0" />
        </div>

      </div>
    </SectionContainer>
  );
}

export function TestimonialHDemo() {
  return <TestimonialH />;
}
