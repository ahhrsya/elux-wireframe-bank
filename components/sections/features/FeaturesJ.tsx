"use client";

import React, { useState } from "react";
import { SectionContainer } from "@/components/common/SectionContainer";

export function FeaturesJ() {
  const [activeSpot, setActiveSpot] = useState<number | null>(null);

  const hotspots = [
    { id: 1, top: "25%", left: "20%", title: "Global Dashboard", desc: "View multi-region activity in one map view." },
    { id: 2, top: "60%", left: "40%", title: "Real-time Metrics", desc: "Data streams locally directly and updates instantly." },
    { id: 3, top: "45%", left: "80%", title: "User Permissions", desc: "Fine grained access control tied to regional users." }
  ];

  return (
    <SectionContainer padding="spacious" background="neutral-900">
      <div className="text-center max-w-4xl mx-auto mb-16 text-white px-4">
        <h2 className="text-[32px] md:text-[40px] font-bold mb-4">
          Unprecedented Granularity
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          Zoom in, interact, and manage everything from a single high-definition overview panel.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto rounded-[2rem] overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-800 p-2 md:p-6 pb-0">
        <div className="bg-black rounded-t-2xl md:rounded-t-3xl border-t border-x border-neutral-700 relative aspect-video overflow-hidden">
           <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" alt="UI" className="w-full h-full object-cover opacity-60" />
           
           {/* Interactive Hotspots */}
           {hotspots.map((spot, i) => (
             <div 
               key={spot.id} 
               className="absolute z-10" 
               style={{ top: spot.top, left: spot.left }}
               onMouseEnter={() => setActiveSpot(spot.id)}
               onMouseLeave={() => setActiveSpot(null)}
             >
               <div className="relative group cursor-pointer">
                  {/* Ping animation effect */}
                  <span className="absolute -inset-1 rounded-full bg-accent-500 opacity-75 animate-ping" />
                  <span className="relative flex h-5 w-5 rounded-full bg-accent-500 border-2 border-white" />
                  
                  {/* Tooltip Card */}
                  <div className={`absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-64 bg-white text-neutral-900 rounded-xl p-4 shadow-xl border border-neutral-200 transition-all duration-300 pointer-events-none origin-bottom ${activeSpot === spot.id ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                     <div className="font-bold text-lg mb-1">{spot.title}</div>
                     <div className="text-sm text-neutral-600">{spot.desc}</div>
                     {/* Triangle pointer */}
                     <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                  </div>
               </div>
             </div>
           ))}
           <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-900 to-transparent" />
        </div>
      </div>
    </SectionContainer>
  );
}

export function FeaturesJDemo() {
  return <FeaturesJ />;
}
