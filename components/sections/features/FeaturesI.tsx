"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";

export function FeaturesI() {
  const repeatedTools = [
    { name: "Slack", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" },
    { name: "Notion", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" },
    { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { name: "Stripe", icon: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" }
  ];

  return (
    <SectionContainer padding="spacious" background="white" className="overflow-hidden">
      <div className="text-center max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-[32px] md:text-[40px] font-bold text-neutral-900 mb-6">
          Connects with your entire stack
        </h2>
        <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
          We integrate seamlessly with over 200+ native apps and 1000s of third-party tools via Zapier.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group bg-gradient-to-r from-transparent via-neutral-50/50 to-transparent py-10 rounded-3xl border border-neutral-100">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8 transition-transform duration-1000">
           {/* Replace standard CSS animation with multiple copies for infinite marquee effect */}
           {[...Array(6)].map((_, i) => (
             <div key={i} className="flex gap-16">
               {repeatedTools.map((tool, j) => (
                 <div key={j} className="flex items-center gap-4 bg-white px-6 py-4 rounded-xl shadow-sm border border-neutral-200">
                    <img src={tool.icon} alt={tool.name} className="h-8 w-8 object-contain" />
                    <span className="text-xl font-bold text-neutral-900">{tool.name}</span>
                 </div>
               ))}
             </div>
           ))}
        </div>
        
        {/* Soft edge blur using CSS gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
      </div>
    </SectionContainer>
  );
}

export function FeaturesIDemo() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      <FeaturesI />
    </>
  );
}
