import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Use a consistent date format that won't change between server and client
export function formatDate(dateString: string) {
  // Use a fixed format that will be consistent between server and client
  const date = new Date(dateString)

  // Format manually to avoid locale differences
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const day = date.getUTCDate()
  const month = months[date.getUTCMonth()]
  const year = date.getUTCFullYear()

  return `${month} ${day}, ${year}`
}

// Default fallback image
export function getPlaceholderImage(): string {
  return "/images/digital-marketing.jpg"
}

// Generate blur placeholder data URLs
export function getBlurDataURL(): string {
  return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
}

// Function to convert a string to a slug
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

// Update keywordToSlug function to be consistent throughout the app
export function keywordToSlug(keyword: string): string {
  return keyword
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
}

// Function to get a normalized image path that always includes the leading slash
export function normalizeImagePath(path: string | null | undefined): string {
  if (!path) return "/images/digital-marketing.jpg"

  if (!path.startsWith("/") && !path.startsWith("http")) {
    return `/${path}`
  }

  return path
}

// Import from blog-data directly rather than defining everything here
export { allBlogPosts as blogPosts } from "./blog-data"
