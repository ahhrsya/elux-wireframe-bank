import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  fullWidth?: boolean;
}

const variantClasses = {
  primary:
    "bg-accent-500 hover:bg-accent-600 text-white font-semibold shadow-none hover:shadow-md active:scale-[0.98] transition-all duration-200",
  outline:
    "border-2 border-neutral-300 text-neutral-900 hover:border-accent-500 hover:text-accent-500 font-semibold transition-all duration-200",
  ghost:
    "text-neutral-600 hover:text-accent-500 hover:bg-neutral-50 font-medium transition-colors duration-200",
};

const sizeClasses = {
  sm: "px-3 py-2 text-sm rounded-md",
  md: "px-6 py-2.5 text-sm rounded-md",
  lg: "px-8 py-3 text-base rounded-md",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  isLoading = false,
  fullWidth = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!isLoading && icon && iconPosition === "left" && icon}
      {children}
      {!isLoading && icon && iconPosition === "right" && icon}
    </button>
  );
}
