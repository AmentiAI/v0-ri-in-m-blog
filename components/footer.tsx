import Link from "next/link"
import Image from "next/image"
import { Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block mb-4">
              <div className="relative w-[450px] h-[110px]">
                <Image
                  src="/images/rimarket-trends-logo.png"
                  alt="RIMarketTrends.com Logo"
                  fill
                  className="object-contain"
                  sizes="450px"
                  unoptimized={true}
                />
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Expert internet marketing insights for Rhode Island businesses, helping you navigate the digital landscape
              with confidence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="https://amentiai.com/contact"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 dark:text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://amentiai.com/services/seo"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  href="https://amentiai.com/services/social-media"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  Social Media
                </Link>
              </li>
              <li>
                <Link
                  href="https://amentiai.com/services/ppc"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  PPC Advertising
                </Link>
              </li>
              <li>
                <Link
                  href="https://amentiai.com/services/web-design"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                >
                  Web Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 dark:text-white">Contact</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400 space-y-3">
              <p>123 Main Street</p>
              <p>Providence, RI 02903</p>
              <p>
                <a
                  href="mailto:info@amentiai.com"
                  className="hover:text-primary dark:hover:text-primary transition-colors duration-200"
                >
                  info@amentiai.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+14015551234"
                  className="hover:text-primary dark:hover:text-primary transition-colors duration-200"
                >
                  (401) 555-1234
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Keywords Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-8 text-xs text-gray-500 dark:text-gray-400">
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Providence SEO Company
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Website Design Providence RI
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Digital Marketing Providence RI
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              SEO Services Rhode Island
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Local SEO Providence RI
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Marketing Agency Providence RI
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Rhode Island Web Development
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              PPC Management Providence
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Social Media Marketing RI
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Affordable Web Design RI
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Best SEO Agency RI
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Search Engine Optimization Providence
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              RI Small Business Marketing
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Ecommerce Website Design RI
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Content Marketing Providence
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Providence WordPress Developer
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Online Marketing Services RI
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Branding Agency Providence
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Westerly Rhode Island Internet Marketing
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Rhode Island Internet Marketing
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Connecticut Internet Marketing
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Massachusetts Internet Marketing
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Westerly Rhode Island SEO
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Rhode Island SEO
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Connecticut SEO
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Massachusetts SEO
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              USA SEO
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              USA Internet Marketing
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Newport RI SEO
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Cranston Digital Marketing
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Warwick Web Design
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              East Greenwich SEO Services
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Pawtucket Website Development
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              North Kingstown Digital Agency
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              South County RI Marketing
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Hartford CT SEO Company
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Boston MA Digital Marketing
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              New England SEO Services
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Google Ads Management RI
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Facebook Ads Providence
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              E-commerce SEO Rhode Island
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Shopify Experts Providence
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              WordPress SEO Rhode Island
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Mobile Website Design RI
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Responsive Web Design Providence
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              SEO Consultant Rhode Island
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Local Business SEO RI
            </a>{" "}
            •
            <a href="https://amentiai.com" className="hover:text-primary transition-colors duration-200">
              Technical SEO Services Providence
            </a>
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            &copy; 2025 RIMarketTrends.com. powered by{" "}
            <a
              href="https://amentiai.com"
              className="text-primary hover:text-primary/80 transition-colors duration-200"
            >
              Amenti AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
