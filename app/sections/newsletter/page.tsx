import React from "react";
import { Badge } from "@/components/common/Badge";
import { NewsletterADemo } from "@/components/sections/newsletter/NewsletterA";
import { NewsletterBDemo } from "@/components/sections/newsletter/NewsletterB";
import { NewsletterCDemo } from "@/components/sections/newsletter/NewsletterC";
import { NewsletterDDemo } from "@/components/sections/newsletter/NewsletterD";
import { NewsletterEDemo } from "@/components/sections/newsletter/NewsletterE";

export default function NewsletterSectionsPage() {
  const variants = [
    { id: "newsletter-a", label: "Newsletter A", subtitle: "Newsletter layout variant A", component: <NewsletterADemo /> },
    { id: "newsletter-b", label: "Newsletter B", subtitle: "Newsletter layout variant B", component: <NewsletterBDemo /> },
    { id: "newsletter-c", label: "Newsletter C", subtitle: "Newsletter layout variant C", component: <NewsletterCDemo /> },
    { id: "newsletter-d", label: "Newsletter D", subtitle: "Newsletter layout variant D", component: <NewsletterDDemo /> },
    { id: "newsletter-e", label: "Newsletter E", subtitle: "Newsletter layout variant E", component: <NewsletterEDemo /> },
  ];

  return (
    <div className="pb-24">
      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <Badge variant="accent" className="mb-4">5 Variants</Badge>
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-3">
            Newsletter Sections
          </h1>
          <p className="text-body text-neutral-600 max-w-2xl">
            High-fidelity newsletter components ready to drop into your landing page.
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
