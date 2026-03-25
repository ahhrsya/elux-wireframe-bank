import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "neutral" | "ghost";
  className?: string;
}

const variantClasses = {
  accent: "bg-accent-500/10 text-accent-500",
  neutral: "bg-neutral-100 text-neutral-700",
  ghost: "border border-neutral-300 text-neutral-600",
};

export function Badge({
  children,
  variant = "neutral",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full text-xs font-semibold",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
