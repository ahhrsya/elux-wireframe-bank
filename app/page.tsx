import Link from "next/link";
import { SECTION_TYPES } from "@/lib/constants";
import * as LucideIcons from "lucide-react";

type IconName = keyof typeof LucideIcons;

function DynamicIcon({ name, ...props }: { name: string } & React.SVGProps<SVGSVGElement>) {
  const Icon = LucideIcons[name as IconName] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
  if (!Icon) return null;
  return <Icon {...props} />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 rounded-full text-xs font-semibold bg-accent-500/10 text-accent-500">
            55+ Section Variants
          </span>
          <h1 className="text-h1 text-neutral-900 font-semibold tracking-tight mb-4 text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px]">
            Layout Bank
          </h1>
          <p className="text-body text-neutral-600 max-w-2xl mx-auto mb-8">
            A comprehensive library of reusable landing page sections built with
            Greyblocks/Flowbase methodology. Mix & match to build beautiful
            landing pages without starting from zero.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/sections/hero"
              className="inline-flex items-center px-6 py-2.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm rounded-md transition-all duration-200 hover:shadow-md active:scale-[0.98]"
            >
              Browse Sections
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center px-6 py-2.5 border-2 border-neutral-300 text-neutral-900 hover:border-accent-500 hover:text-accent-500 font-semibold text-sm rounded-md transition-all duration-200"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Section Grid */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43.2px] font-semibold text-neutral-900 tracking-tight mb-3">
              11 Section Types
            </h2>
            <p className="text-body text-neutral-600">
              Each section type has 5 layout variations, ready to mix & match.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SECTION_TYPES.map((section) => (
              <Link
                key={section.id}
                href={section.href}
                className="group bg-white rounded-lg border border-neutral-200 p-6 hover:border-accent-500 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-4 group-hover:bg-accent-500 group-hover:text-white transition-colors text-accent-500">
                  <DynamicIcon name={section.icon} className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  {section.name}
                </h3>
                <p className="text-sm text-neutral-500 mb-3">
                  {section.description}
                </p>
                <span className="text-xs font-medium text-accent-500">
                  {section.variants} variants →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43.2px] font-semibold text-neutral-900 tracking-tight mb-3">
            Greyblocks Philosophy
          </h2>
          <p className="text-body text-neutral-600 mb-8">
            Every section follows a strict design system: neutral-first palette,
            typography-driven hierarchy, 8px grid, and refined micro-interactions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Section Types", value: "11" },
              { label: "Variants", value: "55+" },
              { label: "Responsive", value: "100%" },
              { label: "Zero Custom CSS", value: "✓" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[28px] md:text-[36px] font-semibold text-neutral-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
