"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";

export function TestimonialG() {
  const reviews = [
    { text: "Best design framework I've used. Saved our startup thousands of hours.", name: "Jane Doe", role: "Founder", img: "https://i.pravatar.cc/100?img=1" },
    { text: "Integrating this into our Next.js app was flawless. Highly recommended.", name: "Michael T.", role: "Lead Dev", img: "https://i.pravatar.cc/100?img=59" },
    { text: "We drastically improved our conversion rates using these pre-built layouts. Our agency uses this for every new client.", name: "Sarah W.", role: "CEO", img: "https://i.pravatar.cc/100?img=36" },
    { text: "I can't imagine starting a new project without Layout Bank. High fidelity out of the box.", name: "David L.", role: "Designer", img: "https://i.pravatar.cc/100?img=15" },
    { text: "Responsive, clean, and fast. Everything a modern web application requires.", name: "Elena R.", role: "CTO", img: "https://i.pravatar.cc/100?img=20" },
    { text: "The attention to detail on the typography and spacing makes it feel extremely premium.", name: "Alex K.", role: "Product Manager", img: "https://i.pravatar.cc/100?img=33" }
  ];

  return (
    <SectionContainer padding="spacious" background="white">
      <div className="text-center max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-[32px] md:text-[40px] font-bold text-neutral-900 mb-6">
          Loved by teams worldwide
        </h2>
        <p className="text-xl text-neutral-600">
          Our customers are our biggest advocates finding success.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto space-y-6">
        {reviews.map((r, i) => (
          <div key={i} className="break-inside-avoid bg-neutral-50 border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(s => <span key={s} className="text-amber-400 text-xl leading-none">★</span>)}
            </div>
            <p className="text-lg text-neutral-800 font-medium mb-8">
              "{r.text}"
            </p>
            <div className="flex items-center gap-4">
              <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
              <div>
                <div className="font-bold text-neutral-900">{r.name}</div>
                <div className="text-sm text-neutral-500">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export function TestimonialGDemo() {
  return <TestimonialG />;
}
