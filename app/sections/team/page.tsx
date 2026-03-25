import React from "react";
import { Badge } from "@/components/common/Badge";
import { TeamADemo } from "@/components/sections/team/TeamA";
import { TeamBDemo } from "@/components/sections/team/TeamB";
import { TeamCDemo } from "@/components/sections/team/TeamC";
import { TeamDDemo } from "@/components/sections/team/TeamD";
import { TeamEDemo } from "@/components/sections/team/TeamE";
import { TeamFDemo } from "@/components/sections/team/TeamF";
import { TeamGDemo } from "@/components/sections/team/TeamG";
import { TeamHDemo } from "@/components/sections/team/TeamH";
import { TeamIDemo } from "@/components/sections/team/TeamI";
import { TeamJDemo } from "@/components/sections/team/TeamJ";

export default function TeamSectionsPage() {
  const variants = [
    { id: "team-a", label: "Team A", subtitle: "Team layout variant A", component: <TeamADemo /> },
    { id: "team-b", label: "Team B", subtitle: "Team layout variant B", component: <TeamBDemo /> },
    { id: "team-c", label: "Team C", subtitle: "Team layout variant C", component: <TeamCDemo /> },
    { id: "team-d", label: "Team D", subtitle: "Team layout variant D", component: <TeamDDemo /> },
    { id: "team-e", label: "Team E", subtitle: "Team layout variant E", component: <TeamEDemo /> },
    { id: "team-f", label: "Team F", subtitle: "Team layout variant F", component: <TeamFDemo /> },
    { id: "team-g", label: "Team G", subtitle: "Team layout variant G", component: <TeamGDemo /> },
    { id: "team-h", label: "Team H", subtitle: "Team layout variant H", component: <TeamHDemo /> },
    { id: "team-i", label: "Team I", subtitle: "Team layout variant I", component: <TeamIDemo /> },
    { id: "team-j", label: "Team J", subtitle: "Team layout variant J", component: <TeamJDemo /> },
  ];

  return (
    <div className="pb-24">
      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <Badge variant="accent" className="mb-4">10 Variants</Badge>
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-3">
            Team Sections
          </h1>
          <p className="text-body text-neutral-600 max-w-2xl">
            High-fidelity team components ready to drop into your landing page.
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
