import { clsx, type ClassValue } from "clsx";

// Simple clsx-like function (no external dependency needed)
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
