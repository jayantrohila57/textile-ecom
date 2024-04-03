import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Inter as font } from "next/font/google";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fonts = font({ subsets: ["latin"] });

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");