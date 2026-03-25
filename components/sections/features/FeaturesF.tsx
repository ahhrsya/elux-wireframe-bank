"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";

export function FeaturesF() {
  const images = [
    { title: "Collaborate instantly", desc: "Share your screen and work together in real-time.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
    { title: "Dashboard metrics", desc: "See all your important numbers at a glance.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
    { title: "Mobile ready", desc: "Access everything anywhere, from your phone.", img: "https://images.unsplash.com/photo-1616077168079-7e09a6a715f0?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <SectionContainer padding="spacious" background="white">
      <div className="text-center mb-16">
        <h2 className="text-[32px] md:text-[40px] leading-tight font-bold text-neutral-900 mb-4">
          Features built for the modern team
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          We've packed in everything you need, and nothing you don't. Experience a seamless workflow.
        </p>
      </div>

      <div className="space-y-20 md:space-y-32 max-w-6xl mx-auto">
        {images.map((item, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row items-center gap-10 lg:gap-20 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative border border-neutral-200 group">
                <img src={item.img} alt={item.title} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors" />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{item.title}</h3>
              <p className="text-lg text-neutral-600 mb-6">{item.desc}</p>
              <ul className="space-y-3 text-neutral-700">
                {["Unlimited members", "Live syncing", "Export to PDF/CSV"].map(check => (
                   <li key={check} className="flex gap-3 items-center">
                     <span className="w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 text-xs font-bold">✓</span>
                     {check}
                   </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export function FeaturesFDemo() {
  return <FeaturesF />;
}
