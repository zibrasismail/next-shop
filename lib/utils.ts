import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// convert prisma object to regular object
export function convertToRegularObject<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

// format number with 2 decimal places
export function formatNumber(number: number): string {
  const [int, decimal] = number.toFixed(2).split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}
