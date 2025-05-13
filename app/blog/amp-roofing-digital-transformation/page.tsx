import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import SocialShare from "@/components/social-share"
import Newsletter from "@/components/newsletter"
import { blogPosts } from "@/lib/utils"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

export default function AmpRoofingCaseStudyPage() {
  const slug = "amp-roofing-digital-transformation"
  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const publishDate = post.date
  const postTitle = post.title
  const postUrl = `https://rimarkettrends.com/blog/${slug}`

  // Related posts that would appear at the bottom
  const relatedPosts = [
    {
      title: "SEO Strategies for Rhode Island Small Businesses",
      slug: "seo-strategies-rhode-island-small-businesses",
      description:
        "Discover effective SEO strategies tailored specifically for small businesses in Rhode Island to improve local search rankings.",
      imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    },
    {
      title: "Web Design Best Practices for Rhode Island Businesses",
      slug: "web-design-best-practices-rhode-island-businesses",
      description:
        "Discover the essential web design elements that Rhode Island businesses need to attract and convert local customers.",
      imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    },
  ]

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
        <article className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80 mb-6 transition-colors duration-200"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to all insights
          </Link>

          <div className="mb-8">
            <div className="flex items-center mb-4 text-sm">
              <time className="text-gray-500 dark:text-gray-400">{formatDate(publishDate)}</time>
              <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
              <span className="text-primary dark:text-primary/80">Case Study</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">{postTitle}</h1>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10 ring-1 ring-gray-200 dark:ring-gray-800">
            <div className="aspect-[16/9] relative">
              <Image
                src="/images/amp-roofing-logo.png"
                alt="AMP Roofing LLC Logo"
                fill
                className="object-contain bg-white p-8"
                sizes="(max-width: 768px) 100vw, 800px"
                quality={95}
                priority
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <SocialShare title={postTitle} url={postUrl} />

          <div className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Related Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.slug}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link href={`/blog/${relatedPost.slug}`} className="block">
                    <div className="relative h-48 w-full group">
                      <Image
                        src={relatedPost.imageUrl || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold mb-2 hover:text-primary dark:hover:text-primary/80 transition-colors duration-200 dark:text-white">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{relatedPost.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <Newsletter />
          </div>

          <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Need help with your Rhode Island marketing?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our team of experts specializes in helping Rhode Island businesses grow their online presence with proven
              strategies tailored to your specific needs.
            </p>
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="https://amentiai.com/#contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}
