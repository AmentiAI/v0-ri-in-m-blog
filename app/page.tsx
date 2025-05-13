import SlideshowBanner from "@/components/slideshow-banner"
import FeaturedPosts from "@/components/featured-posts"
import Newsletter from "@/components/newsletter"
import Testimonials from "@/components/testimonials"
import Stats from "@/components/stats"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function Home() {
  // Use high-quality professional images
  const businessMeetingImage =
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=2000&dpr=1"
  const digitalMarketingImage =
    "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=2000&dpr=1"

  return (
    <div className="overflow-hidden">
      <SlideshowBanner />
      <FeaturedPosts />

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Rhode Island Internet Marketing Experts</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                We provide specialized digital marketing services tailored to the unique needs of Rhode Island
                businesses. From local SEO to social media management, our team helps Ocean State companies thrive
                online.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Customized strategies for Rhode Island businesses",
                  "Deep understanding of local market dynamics",
                  "Proven results for businesses across the state",
                  "Transparent reporting and communication",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1 text-primary">
                      <CheckCircle2 size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="https://amentiai.com/services">Explore Our Services</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={businessMeetingImage || "/placeholder.svg"}
                    alt="Rhode Island marketing experts in a business meeting"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium text-shadow">Expert marketing strategies for Rhode Island businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <Testimonials />

      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={digitalMarketingImage || "/placeholder.svg"}
                    alt="Rhode Island digital marketing dashboard and analytics"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 bg-primary/30 dark:bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-secondary/30 dark:bg-secondary/20 rounded-full blur-xl"></div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Why Rhode Island Businesses Choose Us</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">Local Market Expertise</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our deep understanding of Rhode Island's unique business landscape gives you a competitive edge in
                    the local market.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">Customized Strategies</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We develop tailored marketing plans that align with your specific business goals and target
                    audience.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">Proven Results</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our track record of success with Rhode Island businesses speaks for itself, with measurable ROI and
                    growth.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild>
                  <Link href="https://amentiai.com/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Newsletter />
          </div>
        </div>
      </section>
    </div>
  )
}
