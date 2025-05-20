import type { Metadata } from "next"
import Script from "next/script"
import { allBlogPosts } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"
import Newsletter from "@/components/newsletter"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ErrorBoundary from "@/components/error-boundary"

export const metadata: Metadata = {
  title: "Marketing Insights | Rhode Island Digital Marketing Blog",
  description:
    "Expert marketing insights and strategies for Rhode Island businesses. Learn about SEO, social media, content marketing, and more from local experts.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Marketing Insights | Rhode Island Digital Marketing Blog",
    description:
      "Expert marketing insights and strategies for Rhode Island businesses. Learn about SEO, social media, content marketing, and more from local experts.",
    url: "https://rimarkettrends.com/blog",
    type: "website",
    images: [
      {
        url: "/images/providence-night.png",
        width: 1200,
        height: 630,
        alt: "Providence, Rhode Island skyline at night",
      },
    ],
  },
}

export default function BlogPage() {
  const newportHarborImage = "/images/providence-night.png"

  return (
    <ErrorBoundary>
      <div className="pt-0 pb-20">
        <Script
          id="blog-listing-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Rhode Island Marketing Insights",
              description: "Expert marketing insights and strategies for Rhode Island businesses.",
              url: "https://rimarkettrends.com/blog",
              publisher: {
                "@type": "Organization",
                name: "RIMarketTrends.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://rimarkettrends.com/images/rimarket-trends-logo.png",
                },
              },
              blogPosts: allBlogPosts.slice(0, 10).map((post) => ({
                "@type": "BlogPosting",
                headline: post.title,
                description: post.description,
                datePublished: post.date,
                url: `https://rimarkettrends.com/blog/${post.slug}`,
                image: post.imageUrl,
                author: {
                  "@type": "Organization",
                  name: "RIMarketTrends.com",
                },
              })),
            }),
          }}
        />
        <div className="m-0 p-0">
          {/* Navigation Menu */}
          <div className="flex justify-between items-start p-0 m-0">
            <Link href="/">
              <div className="relative w-[800px] h-[200px]">
                <Image
                  src="/images/rimarket-trends-logo.png"
                  alt="RIMarketTrends.com Logo"
                  fill
                  className="object-contain object-left-top"
                  sizes="800px"
                  priority
                  unoptimized={true}
                />
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 mt-8 mr-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white transition-colors duration-200 font-semibold"
              >
                Insights
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white transition-colors duration-200"
              >
                About
              </Link>
              <Button asChild size="sm">
                <Link href="https://amentiai.com/#contact">Contact Us</Link>
              </Button>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-20">
          <div className="relative mb-16 rounded-2xl overflow-hidden">
            <div className="h-64 md:h-80 relative">
              <Image
                src={newportHarborImage || "/placeholder.svg"}
                alt="Providence, Rhode Island skyline at night"
                fill
                className="object-cover"
                sizes="100vw"
                priority
                quality={100}
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl">
                    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-2xl">
                      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-shadow">
                        Rhode Island Marketing Insights
                      </h1>
                      <p className="text-xl text-white text-shadow-sm">
                        Expert strategies for Rhode Island businesses to thrive in the digital landscape
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post) => (
              <div key={post.slug}>
                <BlogCard
                  title={post.title}
                  description={post.description}
                  slug={post.slug}
                  date={post.date}
                  imageUrl={post.imageUrl}
                  category={post.category || "Marketing"}
                />
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-3xl mx-auto">
            <Newsletter />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}
