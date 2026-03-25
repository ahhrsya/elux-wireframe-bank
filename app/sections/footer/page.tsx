import React from "react";
import { Badge } from "@/components/common/Badge";
import { FooterADemo } from "@/components/sections/footer/FooterA";
import { FooterBDemo } from "@/components/sections/footer/FooterB";
import { FooterCDemo } from "@/components/sections/footer/FooterC";
import { FooterDDemo } from "@/components/sections/footer/FooterD";
import { FooterEDemo } from "@/components/sections/footer/FooterE";

export default function FooterSectionsPage() {
  const variants = [
    { id: "footer-a", label: "Footer A", subtitle: "Footer layout variant A", component: <FooterADemo /> },
    { id: "footer-b", label: "Footer B", subtitle: "Footer layout variant B", component: <FooterBDemo /> },
    { id: "footer-c", label: "Footer C", subtitle: "Footer layout variant C", component: <FooterCDemo /> },
    { id: "footer-d", label: "Footer D", subtitle: "Footer layout variant D", component: <FooterDDemo /> },
    { id: "footer-e", label: "Footer E", subtitle: "Footer layout variant E", component: <FooterEDemo /> },
  ];

  return (
    <div className="pb-24">
      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <Badge variant="accent" className="mb-4">5 Variants</Badge>
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-3">
            Footer Sections
          </h1>
          <p className="text-body text-neutral-600 max-w-2xl">
            High-fidelity footer components ready to drop into your landing page.
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
