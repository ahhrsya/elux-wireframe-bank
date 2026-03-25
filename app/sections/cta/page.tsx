import React from "react";
import { Badge } from "@/components/common/Badge";
import { CtaADemo } from "@/components/sections/cta/CtaA";
import { CtaBDemo } from "@/components/sections/cta/CtaB";
import { CtaCDemo } from "@/components/sections/cta/CtaC";
import { CtaDDemo } from "@/components/sections/cta/CtaD";
import { CtaEDemo } from "@/components/sections/cta/CtaE";

export default function CtaSectionsPage() {
  const variants = [
    { id: "cta-a", label: "Cta A", subtitle: "Cta layout variant A", component: <CtaADemo /> },
    { id: "cta-b", label: "Cta B", subtitle: "Cta layout variant B", component: <CtaBDemo /> },
    { id: "cta-c", label: "Cta C", subtitle: "Cta layout variant C", component: <CtaCDemo /> },
    { id: "cta-d", label: "Cta D", subtitle: "Cta layout variant D", component: <CtaDDemo /> },
    { id: "cta-e", label: "Cta E", subtitle: "Cta layout variant E", component: <CtaEDemo /> },
  ];

  return (
    <div className="pb-24">
      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <Badge variant="accent" className="mb-4">5 Variants</Badge>
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-3">
            Cta Sections
          </h1>
          <p className="text-body text-neutral-600 max-w-2xl">
            High-fidelity cta components ready to drop into your landing page.
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
