"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { motion } from "framer-motion"

interface BlogCardProps {
  title: string
  description: string
  slug: string
  date: string
  imageUrl: string | null | undefined
  category?: string
}

export default function BlogCard({ title, description, slug, date, imageUrl, category = "Marketing" }: BlogCardProps) {
  const [isInView, setIsInView] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [imageError, setImageError] = useState(false)

  // Default fallback image - always use this if no image or on error
  const fallbackImage = "/images/digital-marketing.jpg"

  // Normalize image path to ensure it starts with a slash
  let normalizedImageUrl = imageUrl || fallbackImage
  if (normalizedImageUrl && !normalizedImageUrl.startsWith("/") && !normalizedImageUrl.startsWith("http")) {
    normalizedImageUrl = `/${normalizedImageUrl}`
  }

  // Determine the actual image to display
  const displayImage = imageError ? fallbackImage : normalizedImageUrl

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  // Handle image error by using a fallback
  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 h-full flex flex-col card-3d"
    >
      <Link href={`/blog/${slug}`} className="block relative">
        <div className="relative h-56 w-full overflow-hidden rounded-t-xl group">
          <Image
            src={displayImage || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
            onError={handleImageError}
            priority={false}
            unoptimized={true}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-grow glass-card bg-white dark:bg-gray-800">
        <div className="flex items-center mb-2">
          <time className="text-sm text-gray-500 dark:text-gray-400">{formatDate(date)}</time>
          <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
          <span className="text-sm text-primary dark:text-primary/80">{category}</span>
        </div>
        <Link href={`/blog/${slug}`} className="flex-grow group">
          <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-primary dark:group-hover:text-primary/80 transition-colors duration-200">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{description}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-primary hover:text-primary/80 dark:text-primary/80 dark:hover:text-primary font-medium transition-colors duration-200 mt-auto btn-animated"
        >
          Read More
          <svg
            className="ml-1 w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}
