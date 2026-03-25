import React from "react";
import { Badge } from "@/components/common/Badge";
import { BlogADemo } from "@/components/sections/blog/BlogA";
import { BlogBDemo } from "@/components/sections/blog/BlogB";
import { BlogCDemo } from "@/components/sections/blog/BlogC";
import { BlogDDemo } from "@/components/sections/blog/BlogD";
import { BlogEDemo } from "@/components/sections/blog/BlogE";
import { BlogFDemo } from "@/components/sections/blog/BlogF";
import { BlogGDemo } from "@/components/sections/blog/BlogG";
import { BlogHDemo } from "@/components/sections/blog/BlogH";
import { BlogIDemo } from "@/components/sections/blog/BlogI";
import { BlogJDemo } from "@/components/sections/blog/BlogJ";

export default function BlogSectionsPage() {
  const variants = [
    { id: "blog-a", label: "Blog A", subtitle: "Blog layout variant A", component: <BlogADemo /> },
    { id: "blog-b", label: "Blog B", subtitle: "Blog layout variant B", component: <BlogBDemo /> },
    { id: "blog-c", label: "Blog C", subtitle: "Blog layout variant C", component: <BlogCDemo /> },
    { id: "blog-d", label: "Blog D", subtitle: "Blog layout variant D", component: <BlogDDemo /> },
    { id: "blog-e", label: "Blog E", subtitle: "Blog layout variant E", component: <BlogEDemo /> },
    { id: "blog-f", label: "Blog F", subtitle: "Blog layout variant F", component: <BlogFDemo /> },
    { id: "blog-g", label: "Blog G", subtitle: "Blog layout variant G", component: <BlogGDemo /> },
    { id: "blog-h", label: "Blog H", subtitle: "Blog layout variant H", component: <BlogHDemo /> },
    { id: "blog-i", label: "Blog I", subtitle: "Blog layout variant I", component: <BlogIDemo /> },
    { id: "blog-j", label: "Blog J", subtitle: "Blog layout variant J", component: <BlogJDemo /> },
  ];

  return (
    <div className="pb-24">
      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <Badge variant="accent" className="mb-4">10 Variants</Badge>
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-3">
            Blog Sections
          </h1>
          <p className="text-body text-neutral-600 max-w-2xl">
            High-fidelity blog components ready to drop into your landing page.
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
