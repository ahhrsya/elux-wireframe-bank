"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SECTION_TYPES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 border-r border-neutral-200 bg-neutral-50/50 hidden md:block overflow-y-auto h-[calc(100vh-64px)] sticky top-16">
      <div className="p-6">
        <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
          Section Types
        </h3>
        <nav className="space-y-1">
          {SECTION_TYPES.map((section) => {
            const isActive = pathname === section.href;
            
            // Map the icon string from constants to the actual Lucide component dynamically
            // Requires casting as any since we are accessing the icon library dynamically
            const Icon = (Icons as any)[section.icon] || Icons.Code;

            return (
              <Link
                key={section.id}
                href={section.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 text-[14px] font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-accent-100/50 text-accent-600 shadow-sm"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-accent-500" : "text-neutral-400")} />
                {section.name}
                <span className="ml-auto text-[10px] font-bold py-0.5 px-1.5 bg-neutral-100 text-neutral-500 rounded-full border border-neutral-200">
                  {section.variants}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
