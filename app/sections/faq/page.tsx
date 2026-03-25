import React from "react";
import { Badge } from "@/components/common/Badge";
import { FaqADemo } from "@/components/sections/faq/FaqA";
import { FaqBDemo } from "@/components/sections/faq/FaqB";
import { FaqCDemo } from "@/components/sections/faq/FaqC";
import { FaqDDemo } from "@/components/sections/faq/FaqD";
import { FaqEDemo } from "@/components/sections/faq/FaqE";

export default function FaqSectionsPage() {
  const variants = [
    { id: "faq-a", label: "Faq A", subtitle: "Faq layout variant A", component: <FaqADemo /> },
    { id: "faq-b", label: "Faq B", subtitle: "Faq layout variant B", component: <FaqBDemo /> },
    { id: "faq-c", label: "Faq C", subtitle: "Faq layout variant C", component: <FaqCDemo /> },
    { id: "faq-d", label: "Faq D", subtitle: "Faq layout variant D", component: <FaqDDemo /> },
    { id: "faq-e", label: "Faq E", subtitle: "Faq layout variant E", component: <FaqEDemo /> },
  ];

  return (
    <div className="pb-24">
      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <Badge variant="accent" className="mb-4">5 Variants</Badge>
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-3">
            Faq Sections
          </h1>
          <p className="text-body text-neutral-600 max-w-2xl">
            High-fidelity faq components ready to drop into your landing page.
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
