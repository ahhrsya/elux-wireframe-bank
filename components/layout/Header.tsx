"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SECTION_TYPES } from "@/lib/constants";
import { LayoutGrid, Menu, X } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center group-hover:bg-accent-600 transition-colors">
              <LayoutGrid className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-neutral-900 text-lg">
              Layout Bank
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {SECTION_TYPES.slice(0, 6).map((section) => (
              <Link
                key={section.id}
                href={section.href}
                className="px-3 py-2 text-sm text-neutral-600 hover:text-accent-500 rounded-md hover:bg-neutral-50 transition-colors"
              >
                {section.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 text-sm text-neutral-600 hover:text-accent-500 rounded-md hover:bg-neutral-50 transition-colors cursor-pointer">
                More ↓
              </button>
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-neutral-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {SECTION_TYPES.slice(6).map((section) => (
                  <Link
                    key={section.id}
                    href={section.href}
                    className="block px-4 py-2 text-sm text-neutral-600 hover:text-accent-500 hover:bg-neutral-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {section.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden border-t border-neutral-200 overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <nav className="px-4 py-2">
          {SECTION_TYPES.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className="block px-3 py-2.5 text-sm text-neutral-600 hover:text-accent-500 hover:bg-neutral-50 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              {section.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
