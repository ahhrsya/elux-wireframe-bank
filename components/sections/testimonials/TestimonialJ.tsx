"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";

export function TestimonialJ() {
  const reviews = [
    { name: "Jessica L.", role: "Creative Director", body: "Layout Bank provides a solid baseline for all our e-commerce builds.", img: "https://i.pravatar.cc/100?img=10", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Robert M.", role: "Senior Engineer", body: "The clean Tailwind code allows me to override and extend effortlessly.", img: "https://i.pravatar.cc/100?img=12", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Emily C.", role: "Startup Founder", body: "We launched our landing page in 2 hours. Simply brilliant blocks.", img: "https://i.pravatar.cc/100?img=16", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Uber_logo_2018.svg" },
    { name: "Chris P.", role: "Freelance Dev", body: "Exactly what I needed to speed up client projects while keeping quality high.", img: "https://i.pravatar.cc/100?img=11", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" }
  ];

  return (
    <SectionContainer padding="spacious" background="neutral-50">
      <div className="text-center mb-16">
        <h2 className="text-[32px] md:text-[40px] font-bold text-neutral-900 mb-6">
          Powering the world's best teams
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white rounded-[2rem] p-8 border border-neutral-200 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300">
             <div className="h-8 mb-8 flex items-center justify-center opacity-70 grayscale hover:grayscale-0 transition-all">
                <img src={r.logo} alt="Company Logo" className="max-h-full max-w-[120px] object-contain" />
             </div>
             <p className="text-neutral-700 italic font-medium mb-8 grow">
               "{r.body}"
             </p>
             <div className="mt-auto">
                <img src={r.img} alt={r.name} className="w-16 h-16 rounded-full mx-auto mb-3 shadow-md" />
                <div className="font-bold text-neutral-900">{r.name}</div>
                <div className="text-sm text-neutral-500">{r.role}</div>
             </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export function TestimonialJDemo() {
  return <TestimonialJ />;
}
