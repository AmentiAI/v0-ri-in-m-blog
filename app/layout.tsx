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
  description: "Expert internet marketing insights for Rhode Island businesses",
  icons: {
    icon: "/images/rimarket-trends-logo.png",
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
        <Script id="performance-optimization" strategy="afterInteractive">
          {`
            // Intersection Observer for lazy loading
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
          `}
        </Script>
      </body>
    </html>
  )
}
