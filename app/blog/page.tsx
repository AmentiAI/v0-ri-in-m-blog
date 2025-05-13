import { blogPosts } from "@/lib/utils"
import BlogCard from "@/components/blog-card"
import Newsletter from "@/components/newsletter"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const newportHarborImage = "/images/providence-night.png"

  return (
    <div className="pt-0 pb-20">
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
          {blogPosts.map((post) => (
            <div key={post.slug}>
              <BlogCard
                title={post.title}
                description={post.description}
                slug={post.slug}
                date={post.date}
                imageUrl={post.imageUrl}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <Newsletter />
        </div>
      </div>
    </div>
  )
}
