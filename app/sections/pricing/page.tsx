import React from "react";
import { Badge } from "@/components/common/Badge";
import { PricingADemo } from "@/components/sections/pricing/PricingA";
import { PricingBDemo } from "@/components/sections/pricing/PricingB";
import { PricingCDemo } from "@/components/sections/pricing/PricingC";
import { PricingDDemo } from "@/components/sections/pricing/PricingD";
import { PricingEDemo } from "@/components/sections/pricing/PricingE";

export default function PricingSectionsPage() {
  const variants = [
    { id: "pricing-a", label: "Pricing A", subtitle: "Pricing layout variant A", component: <PricingADemo /> },
    { id: "pricing-b", label: "Pricing B", subtitle: "Pricing layout variant B", component: <PricingBDemo /> },
    { id: "pricing-c", label: "Pricing C", subtitle: "Pricing layout variant C", component: <PricingCDemo /> },
    { id: "pricing-d", label: "Pricing D", subtitle: "Pricing layout variant D", component: <PricingDDemo /> },
    { id: "pricing-e", label: "Pricing E", subtitle: "Pricing layout variant E", component: <PricingEDemo /> },
  ];

  return (
    <div className="pb-24">
      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <Badge variant="accent" className="mb-4">5 Variants</Badge>
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-3">
            Pricing Sections
          </h1>
          <p className="text-body text-neutral-600 max-w-2xl">
            High-fidelity pricing components ready to drop into your landing page.
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
