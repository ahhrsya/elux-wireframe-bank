import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  padding?: "compact" | "default" | "spacious";
  background?: "white" | "neutral-50" | "neutral-100" | "neutral-900";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  id?: string;
  className?: string;
}

const paddingClasses = {
  compact: "py-8 md:py-12 px-4 md:px-8",
  default: "py-12 md:py-20 px-4 md:px-8 lg:px-12",
  spacious: "py-16 md:py-32 px-4 md:px-8 lg:px-12",
};

const bgClasses = {
  white: "bg-white",
  "neutral-50": "bg-neutral-50",
  "neutral-100": "bg-neutral-100",
  "neutral-900": "bg-neutral-900",
};

const maxWidthClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

export function SectionContainer({
  children,
  padding = "default",
  background = "white",
  maxWidth = "xl",
  id,
  className,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(paddingClasses[padding], bgClasses[background], className)}
    >
      <div className={cn("mx-auto w-full", maxWidthClasses[maxWidth])}>
        {children}
      </div>
    </section>
  );
}
