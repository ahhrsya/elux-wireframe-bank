import React from "react";
import { Badge } from "@/components/common/Badge";
import { StatsADemo } from "@/components/sections/stats/StatsA";
import { StatsBDemo } from "@/components/sections/stats/StatsB";
import { StatsCDemo } from "@/components/sections/stats/StatsC";
import { StatsDDemo } from "@/components/sections/stats/StatsD";
import { StatsEDemo } from "@/components/sections/stats/StatsE";
import { StatsFDemo } from "@/components/sections/stats/StatsF";
import { StatsGDemo } from "@/components/sections/stats/StatsG";
import { StatsHDemo } from "@/components/sections/stats/StatsH";
import { StatsIDemo } from "@/components/sections/stats/StatsI";
import { StatsJDemo } from "@/components/sections/stats/StatsJ";

export default function StatsSectionsPage() {
  const variants = [
    { id: "stats-a", label: "Stats A", subtitle: "Stats layout variant A", component: <StatsADemo /> },
    { id: "stats-b", label: "Stats B", subtitle: "Stats layout variant B", component: <StatsBDemo /> },
    { id: "stats-c", label: "Stats C", subtitle: "Stats layout variant C", component: <StatsCDemo /> },
    { id: "stats-d", label: "Stats D", subtitle: "Stats layout variant D", component: <StatsDDemo /> },
    { id: "stats-e", label: "Stats E", subtitle: "Stats layout variant E", component: <StatsEDemo /> },
    { id: "stats-f", label: "Stats F", subtitle: "Stats layout variant F", component: <StatsFDemo /> },
    { id: "stats-g", label: "Stats G", subtitle: "Stats layout variant G", component: <StatsGDemo /> },
    { id: "stats-h", label: "Stats H", subtitle: "Stats layout variant H", component: <StatsHDemo /> },
    { id: "stats-i", label: "Stats I", subtitle: "Stats layout variant I", component: <StatsIDemo /> },
    { id: "stats-j", label: "Stats J", subtitle: "Stats layout variant J", component: <StatsJDemo /> },
  ];

  return (
    <div className="pb-24">
      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <Badge variant="accent" className="mb-4">10 Variants</Badge>
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
