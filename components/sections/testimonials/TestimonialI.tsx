"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";

export function TestimonialI() {
  return (
    <SectionContainer padding="spacious" background="white" className="relative overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent-200/40 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[30%] h-[40%] rounded-full bg-orange-300/30 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-8 bg-neutral-100 px-4 py-2 rounded-full border border-neutral-200">
           <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-4" />
           <span className="text-sm font-medium text-neutral-600 border-l border-neutral-300 pl-2">Customer Story</span>
        </div>
        
        <h2 className="text-[36px] md:text-[52px] leading-[1.15] font-extrabold text-neutral-900 mb-10 tracking-tight">
          "Layout Bank has completely revolutionized how we approach prototyping and development. The visual consistency out of the box is unmatched."
        </h2>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Sarah Jenkins" className="w-20 h-20 rounded-full border-4 border-white shadow-xl" />
            <div className="absolute -bottom-2 -right-2 bg-accent-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.588 2.581 6.288-6.288 1.414 1.414-7.702 7.702z" /></svg>
            </div>
          </div>
          <div className="text-center mt-2">
            <div className="text-xl font-bold text-neutral-900">David Martinez</div>
            <div className="text-lg text-neutral-500 font-medium">Head of Design, Google</div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export function TestimonialIDemo() {
  return <TestimonialI />;
}
