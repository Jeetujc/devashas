"use client"

import Link from "next/link"

type BlogItem = {
  id: number
  title: string
  excerpt: string
  image: string
  href: string
  date: string
}

const BLOGS: BlogItem[] = [
  {
    id: 1,
    title:
      "Hair Transplant Cost Panvel: Budget-Friendly Hair Transformation in 2023",
    excerpt:
      "Have you ever wondered how much a hair transplant cost Panvel? Let’s dive right in.",
    image: "/blog/1.jpg",
    href: "/consulting-a-hair-specialist-in-navi-mumbai",
    date: "2025-10-31",
  },
  {
    id: 2,
    title:
      "Benefits of Consulting a Hair Specialist in Navi Mumbai for Scalp Problems",
    excerpt:
      "Scalp issues can significantly impact hair health and self-esteem.",
    image: "/blog/2.jpg",
    href: "/benefits-of-consulting-hair-specialist",
    date: "2024-06-26",
  },
  {
    id: 3,
    title:
      "Breaking Down the Laser Therapy Cost: What You Need to Know in 2024",
    excerpt:
      "Laser therapy is a sought-after treatment in medical and cosmetic fields.",
    image: "/blog/3.jpg",
    href: "/laser-therapy-cost",
    date: "2024-06-22",
  },
  {
    id: 4,
    title:
      "From Acne to Anti-Aging: Solutions by the Best Skin Specialist in Navi Mumbai",
    excerpt:
      "Skin concerns like acne and aging signs are more common than you think.",
    image: "/blog/4.jpg",
    href: "/best-skin-specialist-navi-mumbai",
    date: "2024-06-19",
  },
]

export default function BlogSection() {
  return (
    <section className="bg-[#FFF7F9] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#A64B6A] tracking-widest uppercase text-sm">
            Our Blog
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-[#2B0F18]">
            Latest Blog & Articles
          </h2>
          <p className="mt-4 text-[#6B3A4A] max-w-xl mx-auto">
            Expert guide to flawless skin and nourished hair from our
            dermatologists.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {BLOGS.map((blog) => (
            <article
              key={blog.id}
              className="flex gap-6 items-start"
            >
              {/* Image */}
              <div className="w-56 h-36 rounded-xl overflow-hidden bg-[#E6C3CE]/40">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-medium text-[#2B0F18] leading-snug">
                  {blog.title}
                </h3>

                <p className="mt-1 text-sm text-[#7A1F3D]">
                  {new Date(blog.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <p className="mt-3 text-[#5E2A3A] text-sm">
                  {blog.excerpt}
                </p>

                <Link
                  href={blog.href}
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#7A1F3D] hover:text-[#A64B6A] transition"
                >
                  READ MORE
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
