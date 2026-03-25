import { Badge } from "@/components/common/Badge";
import { TestimonialADemo } from "@/components/sections/testimonials/TestimonialA";
import { TestimonialBDemo } from "@/components/sections/testimonials/TestimonialB";
import { TestimonialCDemo } from "@/components/sections/testimonials/TestimonialC";
import { TestimonialDDemo } from "@/components/sections/testimonials/TestimonialD";
import { TestimonialEDemo } from "@/components/sections/testimonials/TestimonialE";
import { TestimonialFDemo } from "@/components/sections/testimonials/TestimonialF";
import { TestimonialGDemo } from "@/components/sections/testimonials/TestimonialG";
import { TestimonialHDemo } from "@/components/sections/testimonials/TestimonialH";
import { TestimonialIDemo } from "@/components/sections/testimonials/TestimonialI";
import { TestimonialJDemo } from "@/components/sections/testimonials/TestimonialJ";

export default function TestimonialsSectionsPage() {
  const variants = [
    { id: "testimonial-a", label: "Testimonial A", subtitle: "3-Card Grid with Left Accent Border", component: <TestimonialADemo /> },
    { id: "testimonial-b", label: "Testimonial B", subtitle: "Carousel/Slider Single Focus", component: <TestimonialBDemo /> },
    { id: "testimonial-c", label: "Testimonial C", subtitle: "Logo Wall + Trust Stat", component: <TestimonialCDemo /> },
    { id: "testimonial-d", label: "Testimonial D", subtitle: "Video Testimonial Grid", component: <TestimonialDDemo /> },
    { id: "testimonial-e", label: "Testimonial E", subtitle: "Inline Alternating Quote Cards", component: <TestimonialEDemo /> },
    { id: "testimonial-f", label: "Testimonial F", subtitle: "Scrolling Marquee Cards", component: <TestimonialFDemo /> },
    { id: "testimonial-g", label: "Testimonial G", subtitle: "High-fi Masonry Grid", component: <TestimonialGDemo /> },
    { id: "testimonial-h", label: "Testimonial H", subtitle: "Twitter / Social Media Style", component: <TestimonialHDemo /> },
    { id: "testimonial-i", label: "Testimonial I", subtitle: "Single Large with Background", component: <TestimonialIDemo /> },
    { id: "testimonial-j", label: "Testimonial J", subtitle: "Grid with Real Company Logos", component: <TestimonialJDemo /> },
  ];

  return (
    <div className="pb-24">

      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <Badge variant="accent" className="mb-4">10 Variants</Badge>
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-3">
            Testimonial Sections
          </h1>
          <p className="text-body text-neutral-600 max-w-2xl">
            Customer reviews, social proof, logo walls, and video testimonials.
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
