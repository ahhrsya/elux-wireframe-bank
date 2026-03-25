import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronDown, Globe, Mail, Star, LayoutGrid } from "lucide-react";

export function StatsE() {
  return (
    <SectionContainer background="neutral-900" padding="default">
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-200">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="px-4">
            <h4 className="text-4xl font-extrabold text-white mb-2">{i * 10}k+</h4>
            <p className="text-neutral-400 font-medium tracking-wide">Metric {i}</p>
          </div>
        ))}
      </div>
    
    </SectionContainer>
  );
}

export function StatsEDemo() {
  return <StatsE />;
}
