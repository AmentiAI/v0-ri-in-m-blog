import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const heroBackgroundImage = "/images/providence-night.png"

  return (
    <section
      className="pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-32 relative overflow-hidden"
      aria-label="Hero Section"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={
            heroBackgroundImage ||
            "/placeholder.svg?height=1200&width=1600&query=Providence%20Rhode%20Island%20skyline%20night" ||
            "/placeholder.svg" ||
            "/placeholder.svg"
          }
          alt="Providence, Rhode Island skyline at night - home of RIMarketTrends digital marketing experts"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
          onError={(e) => {
            console.error(`Failed to load hero background image`)
            e.currentTarget.src = "/placeholder.svg?key=2twce"
          }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/50 p-8 rounded-xl">
            <h1 className="text-white">
              <span className="block mb-4 text-4xl md:text-5xl font-bold">Rhode Island's Premier</span>
              <span className="text-3xl md:text-4xl font-bold">Internet Marketing Insights</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mt-6 mb-10 max-w-3xl mx-auto">
              Expert strategies and actionable tips to help Rhode Island businesses succeed in the digital landscape
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4" role="navigation" aria-label="Primary">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/blog">Explore Insights</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/20 border-white text-white hover:bg-white/30"
              >
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
