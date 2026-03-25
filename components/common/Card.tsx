import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "hover-lift";
  padding?: "sm" | "md" | "lg";
  border?: boolean;
  shadow?: "none" | "sm" | "md";
  hoverBorder?: "accent" | "none";
  className?: string;
}

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const shadowClasses = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
};

export function Card({
  children,
  variant = "default",
  padding = "md",
  border = true,
  shadow = "none",
  hoverBorder = "accent",
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg",
        paddingClasses[padding],
        shadowClasses[shadow],
        border && "border border-neutral-200",
        variant === "hover-lift" &&
          "hover:-translate-y-1 hover:shadow-md transition-all duration-300",
        variant === "default" &&
          "hover:shadow-sm transition-all duration-200",
        hoverBorder === "accent" && "hover:border-accent-500",
        className
      )}
    >
      {children}
    </div>
  );
}
