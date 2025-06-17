"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { formatDate, getBlurDataURL } from "@/lib/utils"
import { useEffect, useState } from "react"
import { CalendarDays, Tag } from "lucide-react"

interface BlogCardProps {
  post: {
    slug: string
    title: string
    date: string
    description: string
    imageUrl?: string
    category?: string
  }
  index: number
}

const DEFAULT_FALLBACK_IMAGE = "/images/digital-marketing.jpg" // A known good local image

export default function BlogCard({ post, index }: BlogCardProps) {
  const [currentImage, setCurrentImage] = useState(post.imageUrl || DEFAULT_FALLBACK_IMAGE)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    // Reset image when post.imageUrl changes
    setCurrentImage(post.imageUrl || DEFAULT_FALLBACK_IMAGE)
    setImageError(false)
  }, [post.imageUrl])

  const handleImageError = () => {
    if (!imageError) {
      // Prevent infinite loops if fallback also fails
      console.error(`Error loading image: ${currentImage}. Falling back to default. Post: ${post.title}`)
      setCurrentImage(DEFAULT_FALLBACK_IMAGE)
      setImageError(true) // Mark that an error occurred
    } else {
      console.error(
        `Fallback image ${DEFAULT_FALLBACK_IMAGE} also failed to load for post: ${post.title}. This might indicate a deeper issue.`,
      )
    }
  }

  const isPlaceholderUrl = typeof currentImage === "string" && currentImage.startsWith("/placeholder.svg")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl group border-gray-200 dark:border-gray-700 flex flex-col">
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden aspect-[16/9] relative">
          {isPlaceholderUrl ? (
            <img
              src={currentImage || "/placeholder.svg"}
              alt={post.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            <Image
              key={currentImage} // Add key to help React re-render on src change
              src={currentImage || "/placeholder.svg"} // Ensure a valid src, even if it's a placeholder string
              alt={post.title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              onError={handleImageError}
              placeholder={getBlurDataURL()}
              unoptimized={true} // Kept for debugging simplicity as per previous steps
              priority={index < 3} // Prioritize loading for the first few cards
              loading={index < 3 ? undefined : "lazy"}
            />
          )}
        </Link>
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            {post.category && (
              <Badge variant="outline" className="mb-2 text-sm font-medium text-primary border-primary/50">
                <Tag className="w-3 h-3 mr-1" />
                {post.category}
              </Badge>
            )}
            <h3 className="text-xl font-semibold mb-2 leading-tight group-hover:text-primary transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{post.description}</p>
          </div>
          <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700/50">
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <CalendarDays className="w-4 h-4 mr-2" />
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
