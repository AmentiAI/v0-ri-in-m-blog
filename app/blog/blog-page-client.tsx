"use client"

import { useState, useMemo } from "react"
import type { BlogPost } from "@/lib/blog-data" // Assuming BlogPost type is in blog-data
import BlogCard from "@/components/blog-card" // Assuming BlogCard component path
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface BlogPageClientProps {
  posts: BlogPost[]
  categories: string[]
}

const POSTS_PER_PAGE = 9

export default function BlogPageClient({ posts, categories }: BlogPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts = useMemo(() => {
    return posts
      .filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (post.keywords && post.keywords.some((kw) => kw.toLowerCase().includes(searchTerm.toLowerCase()))),
      )
      .filter((post) => (selectedCategory === "all" ? true : post.category === selectedCategory))
  }, [posts, searchTerm, selectedCategory])

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)

  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)
  }, [filteredPosts, currentPage])

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo(0, 0) // Scroll to top on page change
    }
  }

  const getPaginationItems = () => {
    const items = []
    const maxPagesToShow = 5 // Max number of page links to show (e.g., 1, 2, ..., 5, 6, 7, ..., 10)
    const halfMaxPages = Math.floor(maxPagesToShow / 2)

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i)
      }
    } else {
      items.push(1) // Always show first page
      if (currentPage > halfMaxPages + 1 && totalPages > maxPagesToShow) {
        items.push("ellipsis_start")
      }

      let startPage = Math.max(
        2,
        currentPage -
          halfMaxPages +
          (currentPage < totalPages - halfMaxPages ? 0 : 1 + (maxPagesToShow % 2 === 0 ? 1 : 0)),
      )
      let endPage = Math.min(totalPages - 1, currentPage + halfMaxPages - (currentPage > halfMaxPages + 1 ? 0 : 1))

      if (currentPage <= halfMaxPages) {
        endPage = Math.min(totalPages - 1, maxPagesToShow - 1)
      } else if (currentPage >= totalPages - halfMaxPages + 1) {
        startPage = Math.max(2, totalPages - maxPagesToShow + 2)
      }

      for (let i = startPage; i <= endPage; i++) {
        items.push(i)
      }

      if (currentPage < totalPages - halfMaxPages && totalPages > maxPagesToShow) {
        items.push("ellipsis_end")
      }
      items.push(totalPages) // Always show last page
    }
    return items
  }

  return (
    <div>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setCurrentPage(1) // Reset to first page on search
          }}
          className="max-w-full md:max-w-md"
          aria-label="Search blog posts"
        />
        <Select
          value={selectedCategory}
          onValueChange={(value) => {
            setSelectedCategory(value)
            setCurrentPage(1) // Reset to first page on category change
          }}
        >
          <SelectTrigger className="w-full md:w-[200px]" aria-label="Filter by category">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {currentPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 text-xl py-12">
          No articles found matching your criteria.
        </p>
      )}

      {totalPages > 1 && (
        <Pagination className="mt-12">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(currentPage - 1)
                }}
                aria-disabled={currentPage === 1}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : undefined}
              />
            </PaginationItem>
            {getPaginationItems().map((item, index) => (
              <PaginationItem key={index}>
                {typeof item === "number" ? (
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handlePageChange(item)
                    }}
                    isActive={currentPage === item}
                  >
                    {item}
                  </PaginationLink>
                ) : (
                  <PaginationEllipsis />
                )}
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(currentPage + 1)
                }}
                aria-disabled={currentPage === totalPages}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : undefined}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}
