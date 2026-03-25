import { Badge } from "@/components/common/Badge";
import { FeaturesADemo } from "@/components/sections/features/FeaturesA";
import { FeaturesBDemo } from "@/components/sections/features/FeaturesB";
import { FeaturesCDemo } from "@/components/sections/features/FeaturesC";
import { FeaturesDDemo } from "@/components/sections/features/FeaturesD";
import { FeaturesEDemo } from "@/components/sections/features/FeaturesE";

export default function FeaturesSectionsPage() {
  const variants = [
    { id: "features-a", label: "Features A", subtitle: "3-Column Grid", component: <FeaturesADemo /> },
    { id: "features-b", label: "Features B", subtitle: "2-Column Alternating Layout", component: <FeaturesBDemo /> },
    { id: "features-c", label: "Features C", subtitle: "Numbered Steps Single Column", component: <FeaturesCDemo /> },
    { id: "features-d", label: "Features D", subtitle: "4-Column Masonry Grid", component: <FeaturesDDemo /> },
    { id: "features-e", label: "Features E", subtitle: "Horizontal Scrollable Carousel", component: <FeaturesEDemo /> },
  ];

  return (
    <div className="pb-24">

      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <Badge variant="accent" className="mb-4">5 Variants</Badge>
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-3">
            Features Sections
          </h1>
          <p className="text-body text-neutral-600 max-w-2xl">
            Showcase core features with icons, descriptions, and clean grid layouts.
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
