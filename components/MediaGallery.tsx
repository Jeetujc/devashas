"use client"

import Link from "next/link"

type MediaItem = {
  id: number
  title: string
  excerpt: string
  image: string
  href: string
  date: string
}

const ITEMS: MediaItem[] = [
  {
    id: 1,
    title: "Dermaplast wins Best Aesthetic Clinic 2025",
    excerpt:
      "Our clinic received recognition for excellence in patient care and results.",
    image:
      "https://media.istockphoto.com/id/545453916/photo/beautiful-woman-with-medical-plaster-on-her-face.webp",
    href: "/media/1",
    date: "2025-01-05",
  },
  {
    id: 2,
    title: "New non-surgical facelift technique",
    excerpt:
      "An overview of the new minimally invasive protocol we introduced.",
    image:
      "https://plus.unsplash.com/premium_photo-1745168472419-1e7c046b89a8?w=600&auto=format&fit=crop&q=60",
    href: "/media/2",
    date: "2024-12-12",
  },
  {
    id: 3,
    title: "Dr. Devasha on national morning show",
    excerpt:
      "Highlights from the interview on skin health and sun protection.",
    image:
      "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=600&auto=format&fit=crop&q=60",
    href: "/media/3",
    date: "2024-11-01",
  },
  {
    id: 4,
    title: "Hair restoration results — case study",
    excerpt:
      "Before & after outcomes from our hair transplant program.",
    image:
      "https://images.unsplash.com/photo-1715866549135-e3bc3c6148a9?w=600&auto=format&fit=crop&q=60",
    href: "/media/4",
    date: "2024-10-10",
  },
  {
    id: 5,
    title: "Safe chemical peels — what to expect",
    excerpt:
      "A patient guide to recovery and results.",
    image:
      "https://images.unsplash.com/photo-1676118036556-a6e23ddab63d?w=600&auto=format&fit=crop&q=60",
    href: "/media/5",
    date: "2024-09-20",
  },
  {
    id: 6,
    title: "Affordable financing options",
    excerpt:
      "Learn about our EMI plans and easy payment choices.",
    image:
      "https://plus.unsplash.com/premium_photo-1701174671902-ee9ac858ff32?w=600&auto=format&fit=crop&q=60",
    href: "/media/6",
    date: "2024-08-15",
  },
  {
    id: 7,
    title: "Dermaplast wins Best Aesthetic Clinic 2025",
    excerpt:
      "Our clinic received recognition for excellence in patient care and results.",
    image:
      "https://media.istockphoto.com/id/545453916/photo/beautiful-woman-with-medical-plaster-on-her-face.webp",
    href: "/media/1",
    date: "2025-01-05",
  },
  {
    id: 8,
    title: "New non-surgical facelift technique",
    excerpt:
      "An overview of the new minimally invasive protocol we introduced.",
    image:
      "https://plus.unsplash.com/premium_photo-1745168472419-1e7c046b89a8?w=600&auto=format&fit=crop&q=60",
    href: "/media/2",
    date: "2024-12-12",
  },
  {
    id: 9,
    title: "Dr. Devasha on national morning show",
    excerpt:
      "Highlights from the interview on skin health and sun protection.",
    image:
      "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=600&auto=format&fit=crop&q=60",
    href: "/media/3",
    date: "2024-11-01",
  },
  {
    id: 10,
    title: "Hair restoration results — case study",
    excerpt:
      "Before & after outcomes from our hair transplant program.",
    image:
      "https://images.unsplash.com/photo-1715866549135-e3bc3c6148a9?w=600&auto=format&fit=crop&q=60",
    href: "/media/4",
    date: "2024-10-10",
  },
  {
    id: 11,
    title: "Safe chemical peels — what to expect",
    excerpt:
      "A patient guide to recovery and results.",
    image:
      "https://images.unsplash.com/photo-1676118036556-a6e23ddab63d?w=600&auto=format&fit=crop&q=60",
    href: "/media/5",
    date: "2024-09-20",
  },
  {
    id: 12,
    title: "Affordable financing options",
    excerpt:
      "Learn about our EMI plans and easy payment choices.",
    image:
      "https://plus.unsplash.com/premium_photo-1701174671902-ee9ac858ff32?w=600&auto=format&fit=crop&q=60",
    href: "/media/6",
    date: "2024-08-15",
  },
  
]

export default function MediaGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item) => (
          <article
            key={item.id}
            className="card bg-base-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <Link href={item.href} className="block h-full">
              {/* Image */}
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col h-full">
                <time
                  dateTime={item.date}
                  className="text-xs text-base-content/60"
                >
                  {new Date(item.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </time>

                <h3 className="mt-2 text-lg font-semibold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-base-content/70 line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="mt-auto pt-4">
                  <span className="btn btn-ghost btn-sm">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
