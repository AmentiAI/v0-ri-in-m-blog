import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "RIMarketTrends.com | Rhode Island Internet Marketing Blog",
  description:
    "Expert internet marketing insights for Rhode Island businesses. Local SEO, social media, content marketing strategies tailored for Ocean State companies.",
  keywords:
    "Rhode Island marketing, RI SEO, Providence digital marketing, Ocean State internet marketing, Rhode Island web design",
  authors: [{ name: "RIMarketTrends Team" }],
  creator: "RIMarketTrends.com",
  publisher: "RIMarketTrends.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rimarkettrends.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "RIMarketTrends.com | Rhode Island Internet Marketing Blog",
    description:
      "Expert internet marketing insights for Rhode Island businesses. Local SEO, social media, content marketing strategies tailored for Ocean State companies.",
    url: "https://rimarkettrends.com",
    siteName: "RIMarketTrends.com",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/rimarket-trends-logo.png",
        width: 800,
        height: 600,
        alt: "RIMarketTrends.com Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RIMarketTrends.com | Rhode Island Internet Marketing Blog",
    description:
      "Expert internet marketing insights for Rhode Island businesses. Local SEO, social media, content marketing strategies tailored for Ocean State companies.",
    images: ["/images/rimarket-trends-logo.png"],
  },
  icons: {
    icon: "/images/rimarket-trends-logo.png",
    shortcut: "/images/rimarket-trends-logo.png",
    apple: "/images/rimarket-trends-logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#0066cc" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* Move scripts outside of ThemeProvider to avoid hydration issues */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RIMarketTrends.com",
              url: "https://rimarkettrends.com",
              logo: "https://rimarkettrends.com/images/rimarket-trends-logo.png",
              sameAs: [
                "https://twitter.com/rimarkettrends",
                "https://www.facebook.com/rimarkettrends",
                "https://www.linkedin.com/company/rimarkettrends",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main Street",
                addressLocality: "Providence",
                addressRegion: "RI",
                postalCode: "02903",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-401-555-1234",
                contactType: "customer service",
              },
            }),
          }}
          strategy="afterInteractive"
        />

        <Script id="performance-optimization" strategy="afterInteractive">
          {`
            // Intersection Observer for lazy loading
            if (typeof window !== 'undefined') {
              document.addEventListener('DOMContentLoaded', function() {
                const lazyImages = document.querySelectorAll('.lazy-load');
                
                if ('IntersectionObserver' in window) {
                  const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                      if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                      }
                    });
                  });
                  
                  lazyImages.forEach(img => imageObserver.observe(img));
                }
              });
            }
          `}
        </Script>

        <Script id="seo-optimization" strategy="afterInteractive">
          {`
            // Only run in browser
            if (typeof window !== 'undefined') {
              // Preconnect to important domains
              const links = [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
                { rel: 'preconnect', href: 'https://images.pexels.com' }
              ];
              
              links.forEach(link => {
                const linkEl = document.createElement('link');
                Object.keys(link).forEach(attr => {
                  linkEl[attr] = link[attr];
                });
                document.head.appendChild(linkEl);
              });
              
              // Add structured data breadcrumbs dynamically based on current page
              const path = window.location.pathname;
              if (path !== '/') {
                const segments = path.split('/').filter(Boolean);
                const breadcrumbList = {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://rimarkettrends.com"
                    }
                  ]
                };
                
                let currentPath = '';
                segments.forEach((segment, index) => {
                  currentPath += '/' + segment;
                  breadcrumbList.itemListElement.push({
                    "@type": "ListItem",
                    "position": index + 2,
                    "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
                    "item": "https://rimarkettrends.com" + currentPath
                  });
                });
                
                const script = document.createElement('script');
                script.type = 'application/ld+json';
                script.text = JSON.stringify(breadcrumbList);
                document.head.appendChild(script);
              }
            }
          `}
        </Script>
      </body>
    </html>
  )
}
