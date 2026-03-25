"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";

export function TestimonialF() {
  const reviews = [
    { name: "Alice Chen", handle: "@alicec", body: "This layout bank makes life 10x easier. Incredible quality." },
    { name: "Bob Smith", handle: "@bobdev", body: "Shipped my MVP in under 48 hours. Tailwind+Next is a lifesaver." },
    { name: "Charlie", handle: "@charlie_ux", body: "The design constraints are perfectly balanced. Great aesthetics." },
    { name: "Dana Roberts", handle: "@danacr", body: "I don't think I can ever go back to writing raw CSS again." },
    { name: "Evan", handle: "@evan_codes", body: "Absolute game changer for freelance developers like me." }
  ];

  return (
    <SectionContainer padding="spacious" background="neutral-50" className="overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-[32px] md:text-[40px] font-bold text-neutral-900 mb-6">
          Loved by developers globally
        </h2>
        <p className="text-xl text-neutral-600">
          We process over 1M requests daily, with zero downtime.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto border-y border-neutral-200 bg-gradient-to-r py-8 from-transparent overflow-hidden">
          <div className="animate-marquee-fast whitespace-nowrap flex items-center gap-6 px-4">
            {[...Array(3)].map((_, i) => (
             <React.Fragment key={i}>
              {reviews.map((r, j) => (
                <div key={j} className="inline-block w-[350px] bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm shrink-0 whitespace-normal">
                   <div className="flex items-center gap-3 mb-4">
                      <img src={`https://i.pravatar.cc/100?img=${j+30}`} className="w-10 h-10 rounded-full" alt={r.name} />
                      <div>
                        <div className="font-bold text-neutral-900">{r.name}</div>
                        <div className="text-sm text-neutral-500">{r.handle}</div>
                      </div>
                      <div className="ml-auto text-accent-500">
                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                      </div>
                   </div>
                   <p className="text-neutral-700 font-medium leading-relaxed">
                     {r.body}
                   </p>
                </div>
              ))}
             </React.Fragment>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-50 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-50 to-transparent" />
      </div>

    </SectionContainer>
  );
}

export function TestimonialFDemo() {
   return (
    <>
      <style>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 30s linear infinite;
        }
      `}</style>
      <TestimonialF />
    </>
  );
}
