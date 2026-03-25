"use client";

import React, { useState } from "react";
import { SectionContainer } from "@/components/common/SectionContainer";

export function FeaturesG() {
  const tabs = [
    { id: "analytics", label: "Analytics", content: "Understand your usage and traffic in real time.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" },
    { id: "security", label: "Security", content: "Bank-level encryption and SSO support.", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000" },
    { id: "collaboration", label: "Collaboration", content: "Work together seamlessly with permissions.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeData = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <SectionContainer padding="spacious" background="neutral-50">
      <div className="text-center mb-12">
        <h2 className="text-[32px] md:text-[40px] leading-tight font-bold text-neutral-900 mb-4">
          Everything your business needs
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-neutral-200">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
                activeTab === tab.id 
                  ? "border-accent-500 text-accent-600" 
                  : "border-transparent text-neutral-500 hover:text-neutral-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">{activeData.label}</h3>
              <p className="text-neutral-600 mb-6 text-lg">{activeData.content}</p>
              <button className="text-accent-600 font-semibold hover:text-accent-700 flex items-center gap-2 cursor-pointer">
                Learn more and explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md aspect-video">
               <img src={activeData.img} alt={activeData.label} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export function FeaturesGDemo() {
  return <FeaturesG />;
}
