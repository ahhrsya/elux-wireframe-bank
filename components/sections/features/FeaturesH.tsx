"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";

export function FeaturesH() {
  return (
    <SectionContainer padding="spacious" background="neutral-100">
      <div className="text-center mb-16">
        <h2 className="text-[32px] md:text-[40px] leading-tight font-bold text-neutral-900 mb-4">
          An ecosystem designed for speed
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          All the features you expect from a premium tool, meticulously crafted into a unified bento experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[250px] md:auto-rows-[300px]">
        
        {/* Large item */}
        <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm relative overflow-hidden group">
          <div className="relative z-10 max-w-sm">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Automated Workflows</h3>
            <p className="text-neutral-600">Save thousands of hours by automating repetitive tasks across all your apps.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" className="absolute right-0 bottom-0 w-2/3 h-full object-cover rounded-tl-3xl opacity-90 group-hover:scale-105 transition-transform duration-500" alt="Workflows" />
        </div>

        <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
           <h3 className="text-2xl font-bold mb-2 relative z-10">99.9% Uptime</h3>
           <p className="text-accent-100 relative z-10">Our SLA guarantees your business stays online, always.</p>
           <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        </div>

        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm flex flex-col justify-between group">
           <div>
             <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-4">
               <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
             </div>
             <h3 className="text-xl font-bold text-neutral-900 mb-2">Enterprise Security</h3>
           </div>
           <p className="text-neutral-600 text-sm">SOC2 Type II, GDPR, and ISO 27001 certified for peace of mind.</p>
        </div>

        <div className="md:col-span-2 bg-neutral-900 rounded-3xl p-8 text-white relative overflow-hidden group">
          <div className="relative z-10 max-w-sm">
            <h3 className="text-2xl font-bold mb-2">Dark Mode Natively</h3>
            <p className="text-neutral-400">Easy on the eyes. High contrast modes designed for extended usage in any environment.</p>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-neutral-800 to-transparent flex items-center justify-center p-8">
             <div className="w-full h-full bg-neutral-800 rounded-xl border border-neutral-700 shadow-2xl relative">
                <div className="absolute top-4 left-4 right-4 h-4 bg-neutral-700 rounded" />
                <div className="absolute top-12 left-4 w-3/4 h-8 bg-neutral-700 rounded" />
             </div>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
}

export function FeaturesHDemo() {
  return <FeaturesH />;
}
