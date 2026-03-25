import { Header } from "@/components/layout/Header";
import { HeroADemo } from "@/components/sections/hero/HeroA";
import { HeroBDemo } from "@/components/sections/hero/HeroB";
import { HeroCDemo } from "@/components/sections/hero/HeroC";
import { HeroDDemo } from "@/components/sections/hero/HeroD";
import { HeroEDemo } from "@/components/sections/hero/HeroE";
import { HeroFDemo } from "@/components/sections/hero/HeroF";
import { HeroGDemo } from "@/components/sections/hero/HeroG";
import { HeroHDemo } from "@/components/sections/hero/HeroH";
import { HeroIDemo } from "@/components/sections/hero/HeroI";
import { HeroJDemo } from "@/components/sections/hero/HeroJ";

export default function HeroSectionsPage() {
  const variants = [
    { id: "hero-a", label: "Hero A", subtitle: "Text Left + Image Right (60/40 Split)", component: <HeroADemo /> },
    { id: "hero-b", label: "Hero B", subtitle: "Centered Single Column", component: <HeroBDemo /> },
    { id: "hero-c", label: "Hero C", subtitle: "Split Background Color", component: <HeroCDemo /> },
    { id: "hero-d", label: "Hero D", subtitle: "Full Bleed + SVG Divider", component: <HeroDDemo /> },
    { id: "hero-e", label: "Hero E", subtitle: "Horizontal + Staggered Animations", component: <HeroEDemo /> },
    { id: "hero-f", label: "Hero F", subtitle: "Video/Dark Background Hero", component: <HeroFDemo /> },
    { id: "hero-g", label: "Hero G", subtitle: "App Mockup Hero", component: <HeroGDemo /> },
    { id: "hero-h", label: "Hero H", subtitle: "Bento Grid style Images", component: <HeroHDemo /> },
    { id: "hero-i", label: "Hero I", subtitle: "Centered with 3D Image abstract", component: <HeroIDemo /> },
    { id: "hero-j", label: "Hero J", subtitle: "Two Columns with Registration Form", component: <HeroJDemo /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold bg-accent-500/10 text-accent-500">
            10 Variants
          </span>
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-3">
            Hero Sections
          </h1>
          <p className="text-body text-neutral-600 max-w-2xl">
            Opening sections with value proposition, CTA buttons, and visual elements.
            Each variant follows Greyblocks methodology with neutral-first palette.
          </p>
        </div>
      </section>

      {/* Variants */}
      {variants.map((variant) => (
        <div key={variant.id} id={variant.id}>
          {/* Variant Label */}
          <div className="bg-neutral-50 border-b border-neutral-200 px-4 md:px-8 py-3">
            <div className="max-w-7xl mx-auto flex items-center gap-3">
              <span className="text-sm font-semibold text-neutral-900">
                {variant.label}
              </span>
              <span className="text-sm text-neutral-500">
                — {variant.subtitle}
              </span>
            </div>
          </div>
          {/* Component */}
          <div className="border-b border-neutral-200">
            {variant.component}
          </div>
        </div>
      ))}
    </div>
  );
}
