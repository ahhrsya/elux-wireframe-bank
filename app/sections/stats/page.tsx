import React from "react";
import { Badge } from "@/components/common/Badge";
import { StatsADemo } from "@/components/sections/stats/StatsA";
import { StatsBDemo } from "@/components/sections/stats/StatsB";
import { StatsCDemo } from "@/components/sections/stats/StatsC";
import { StatsDDemo } from "@/components/sections/stats/StatsD";
import { StatsEDemo } from "@/components/sections/stats/StatsE";

export default function StatsSectionsPage() {
  const variants = [
    { id: "stats-a", label: "Stats A", subtitle: "Stats layout variant A", component: <StatsADemo /> },
    { id: "stats-b", label: "Stats B", subtitle: "Stats layout variant B", component: <StatsBDemo /> },
    { id: "stats-c", label: "Stats C", subtitle: "Stats layout variant C", component: <StatsCDemo /> },
    { id: "stats-d", label: "Stats D", subtitle: "Stats layout variant D", component: <StatsDDemo /> },
    { id: "stats-e", label: "Stats E", subtitle: "Stats layout variant E", component: <StatsEDemo /> },
  ];

  return (
    <div className="pb-24">
      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <Badge variant="accent" className="mb-4">5 Variants</Badge>
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-3">
            Stats Sections
          </h1>
          <p className="text-body text-neutral-600 max-w-2xl">
            High-fidelity stats components ready to drop into your landing page.
          </p>
        </div>
      </section>

      {variants.map((variant) => (
        <div key={variant.id} id={variant.id}>
          <div className="bg-neutral-50 border-b border-neutral-200 px-4 md:px-8 py-3">
            <div className="max-w-7xl mx-auto flex items-center gap-3">
              <span className="text-sm font-semibold text-neutral-900">{variant.label}</span>
              <span className="text-sm text-neutral-500">— {variant.subtitle}</span>
            </div>
          </div>
          <div className="border-b border-neutral-200">{variant.component}</div>
        </div>
      ))}
    </div>
  );
}
