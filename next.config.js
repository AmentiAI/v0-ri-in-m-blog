/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"], // Keep this
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blob.v0.dev",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      // Add any other specific hostnames you expect to use.
      // Avoid "**" for hostname if possible for better security long-term.
      // For debugging, you could temporarily add one very broad one if you suspect
      // an unlisted domain, but the ones above cover what's been mentioned.
    ],
  },
  // ... other configurations
}

module.exports = nextConfig
