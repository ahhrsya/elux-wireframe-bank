import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronDown, Globe, Mail, Star, LayoutGrid } from "lucide-react";

export function PricingC() {
  return (
    <SectionContainer background="white" padding="default">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Badge variant="accent" className="mb-4">Pricing C</Badge>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-4">Simple, transparent pricing</h2>
        <p className="text-neutral-600">No hidden fees. No surprise charges.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <Card key={i} className={cn("p-8", i === 2 && "border-accent-500 shadow-xl relative")}>
            {i === 2 && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>}
            <h3 className="text-xl font-bold mb-2">Plan {i}</h3>
            <p className="text-4xl font-extrabold mb-6">$ {i * 29}<span className="text-sm font-normal text-neutral-500">/mo</span></p>
            <ul className="space-y-4 mb-8">
              {[1, 2, 3, 4].map(f => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span className="text-sm">Feature {f} included</span>
                </li>
              ))}
            </ul>
            <Button variant={i === 2 ? "primary" : "outline"} className="w-full">Get Started</Button>
          </Card>
        ))}
      </div>
    
    </SectionContainer>
  );
}

export function PricingCDemo() {
  return <PricingC />;
}
