/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useMemo, useEffect } from 'react'
import { Search, Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, urlFor } from '@/sanity/lib/client'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const posts = await getAllPosts()
        setBlogs(posts)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(blogs.flatMap(blog => blog.categories || []))]
    return cats
  }, [blogs])

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (blog.excerpt && blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === 'All' || (blog.categories && blog.categories.includes(selectedCategory))
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory, blogs])

  const ArticleCard = ({ post }: { post: any }) => (
    <Link href={`/blog/${post.slug.current}`} className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block">
      {/* Image with internal padding and curved corners */}
      <div className="relative h-[200px] mb-6 overflow-hidden rounded-2xl">
        <Image
          src={post.mainImage ? urlFor(post.mainImage).url() : "/images/blog/images1.avif"}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {post.categories && post.categories.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {post.categories.map((cat: string, i: number) => (
              <span key={i} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content - simplified to just title and description */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-blue-600 font-medium overflow-hidden">
          <span>{post.author}</span>
          <span className="w-1 h-1 rounded-full bg-blue-300" />
          <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
        {/* Title */}
        <h3 className="text-lg font-semibold leading-tight line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        <div className="pt-2 flex items-center text-blue-600 text-sm font-semibold">
          Read Article
          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )

  return (
    <div className="min-h-screen bg-[#f6f3ff] mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="mb-8 sm:mb-10 text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase mb-2 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
            Our Blogs
          </span>
          <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">Insights</span> & Logistics Trends
          </h1>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <div className="flex items-center">
              <Search className="ml-4 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-sm">
            <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
            <p className="text-gray-500 font-medium">Fetching the latest insights...</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((post) => (
              <ArticleCard key={post._id} post={post} />
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && filteredBlogs.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or browse different categories</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-xl font-medium hover:shadow-lg transition-all"
            >
              View All Articles
            </button>
          </div>
        )}
      </div>
    </div>
  )
}