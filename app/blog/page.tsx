import type { Metadata } from "next"
import { allBlogPosts } from "@/lib/blog-data"
import BlogPageClient from "./blog-page-client"

export const metadata: Metadata = {
  title: "Rhode Island Marketing Insights | Amenti AI Blog",
  description:
    "Explore the latest trends, strategies, and insights in digital marketing, SEO, web design, and AI for Rhode Island businesses. Stay ahead with Amenti AI.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Rhode Island Marketing Insights | Amenti AI Blog",
    description:
      "Your go-to resource for digital marketing excellence in Rhode Island. Articles on SEO, AI, web development, and more.",
    url: "https://amentiai.com/blog",
    type: "website",
    images: [
      {
        url: "/images/providence-skyline.jpg",
        width: 1200,
        height: 630,
        alt: "Amenti AI Blog - Providence Skyline",
      },
    ],
  },
}

export default function BlogPage() {
  // The actual filtering and sorting will be handled by BlogPageClient
  // For SSR, we pass all posts and let the client handle initial state
  const uniqueCategories = Array.from(new Set(allBlogPosts.map((post) => post.category).filter(Boolean) as string[]))

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-black min-h-screen">
      <header className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Marketing Insights & AI Trends
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your go-to resource for digital marketing excellence in Rhode Island. Explore articles on SEO, AI, web
            development, and more.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <BlogPageClient posts={allBlogPosts} categories={uniqueCategories} />
      </main>
    </div>
  )
}
