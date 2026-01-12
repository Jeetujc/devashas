'use client'

import { useState } from 'react'
import MediaHeroSlider from './MediaHeroSlider'

/*VIDEO DATA*/
const videos = [
  {
    title: "Patient Testimonial 1",
    duration: "0:11",
    thumb: "/thumb-1.jpg", 
    embed: "https://www.youtube.com/embed/jruRgoSpmBY",
  },
  {
    title: "Patient Testimonial 2",
    duration: "0:11",
    thumb: "/thumb-2.jpg",
    embed: "https://www.youtube.com/embed/jruRgoSpmBY",
  },
  {
    title: "Patient Testimonial 3",
    duration: "0:11",
    thumb: "/thumb-3.jpg",
    embed: "https://www.youtube.com/embed/jruRgoSpmBY",
  },
  {
    title: "Patient Testimonial 4",
    duration: "0:11",
    thumb: "/thumb-4.jpg",
    embed: "https://www.youtube.com/embed/jruRgoSpmBY",
  },
]

/*GALLERY DATA*/
const galleryItems = [
  {
    id: 1,
    category: "Hair",
    image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    category: "Hair",
    image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    category: "Hair",
    image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
]

const filters = ["All", "Hair", "Skin", "Face"]

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [activeVideo, setActiveVideo] = useState(0)

  const filteredGallery =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter(item => item.category === activeFilter)

  return (
    <main>

      {/*HERO*/}
      <section className="bg-base-200 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <p className="mt-4 text-base-content/70">
            Explore our results, clinic moments, and patient stories.
          </p>
        </div>
      </section>

      {/*FILTERS*/}
      <section className="py-10">
        <ul className="flex justify-center gap-3 flex-wrap">
          {filters.map(filter => (
            <li
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`cursor-pointer px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  activeFilter === filter
                    ? "bg-primary text-primary-content"
                    : "bg-base-200 hover:bg-primary hover:text-white"
                }`}
            >
              {filter}
            </li>
          ))}
        </ul>
      </section>

      {/*GALLERY GRID*/}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredGallery.map(item => (
            <div
              key={item.id}
              className="relative break-inside-avoid rounded-xl overflow-hidden group"
            >
              <img
                src={item.image}
                alt=""
                className="w-full rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
            </div>
          ))}
        </div>
      </section>

      {/*VIDEO GALLERY*/}
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

          {/* PLAYER */}
          <div className="lg:col-span-2 aspect-video rounded-2xl overflow-hidden shadow">
            <iframe
              key={videos[activeVideo].embed}
              src={videos[activeVideo].embed}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <h3 className="mt-4 text-xl font-semibold">
              {videos[activeVideo].title}
            </h3>
          </div>

          {/* PLAYLIST */}
          <aside className="bg-base-200 rounded-2xl p-4 space-y-4">
            <h4 className="text-lg font-semibold">Playlist</h4>

            <ul className="space-y-3">
              {videos.map((video, index) => (
                <li
                  key={video.title}
                  onClick={() => setActiveVideo(index)}
                  className={`flex items-center gap-3 cursor-pointer p-2 rounded-xl transition
                    ${
                      activeVideo === index
                        ? "bg-primary text-primary-content"
                        : "hover:bg-base-300"
                    }`}
                >
                  <img
                    src={video.thumb}
                    alt=""
                    className="h-16 w-24 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-medium">{video.title}</p>
                    <span className="text-xs opacity-70">{video.duration}</span>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

        </div>
      </section>

      {/*CLINIC GALLERY*/}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h5 className="uppercase tracking-widest text-primary font-semibold">
              Peek Inside Our World
            </h5>
            <h2 className="text-4xl font-bold mt-2">Clinic Gallery</h2>
          </div>
          <p className="text-base-content/70">
            We are dedicated to making advanced treatments accessible while delivering
            confidence and life-changing results.
          </p>
        </div>
      </section>

      {/*SLIDER*/}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <MediaHeroSlider />
        </div>
      </section>

    </main>
  )
}
