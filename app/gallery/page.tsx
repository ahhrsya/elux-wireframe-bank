import { Header } from "@/components/layout/Header";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-3">
            Gallery
          </h1>
          <p className="text-body text-neutral-600 max-w-2xl mx-auto mb-8">
            Full landing page examples mixing different section variants.
          </p>
          <p className="text-sm text-neutral-400">Coming soon — Full page combos will be available after all section types are built.</p>
          <Link
            href="/"
            className="inline-flex items-center mt-6 px-6 py-2.5 border-2 border-neutral-300 text-neutral-900 hover:border-accent-500 hover:text-accent-500 font-semibold text-sm rounded-md transition-all duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
