import MediaGallery from "./MediaGallery"

const BlogSection = () => {
  return (
    <>
      {/* Page Header */}
      <section className="relative w-full bg-base-200 py-14">
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className=" md:flex-row items-center  gap-6">
            <h1 className="text-3xl md:text-4xl font-bold mt-2 text-base-content">
              Our Blog
            </h1>
            <p className="mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, reiciendis.</p>
          </div>
        </div>
      </section>

      {/* Blog Layout */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

           
            {/* SIDEBAR */}
            <aside className="space-y-10 lg:sticky lg:top-20 mt-12">

              {/* Categories */}
              <div className="rounded-2xl bg-base-200 p-6">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    { name: "Uncategorized", href: "/category/uncategorized" },
                    { name: "Skin Care", href: "/category/skin-care" },
                    { name: "Hair Care", href: "/category/hair-care" },
                    { name: "General", href: "/category/general" },
                  ].map((cat) => (
                    <li key={cat.name}>
                      <a
                        href={cat.href}
                        className="flex items-center gap-2 text-base-content/80 hover:text-primary transition"
                      >
                        <span className="text-primary">›</span>
                        {cat.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Have Any Question */}
              <div className="rounded-2xl bg-primary text-primary-content p-6">
                <h4 className="text-lg font-semibold mb-2">
                  Have Any Question?
                </h4>
                <p className="text-sm opacity-90 mb-4">
                  We have the best team of doctors with expert knowledge and
                  practice in Hair Transplant treatments and cosmetology.
                </p>
                <div className="space-y-2 text-sm">
                  <a
                    href="tel:+91000000000"
                    className="flex items-center gap-2 hover:underline"
                  >
                    📞 +91 925367XXXXX
                  </a>
                  <p className="flex items-center gap-2">
                    ✉️ xyz@xyz.com
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-base-200 hover:bg-primary hover:text-white transition"
                >
                  facebook logo
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-base-200 hover:bg-black hover:text-white transition"
                >
                  x logo
                </a>
                <a
                  href="https://www.youtube.com/channel/"
                  target="_blank"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-base-200 hover:bg-red-600 hover:text-white transition"
                >
                  yt logo
                </a>
              </div>

              {/* Recent Posts */}
              <div className="rounded-2xl bg-base-200 p-6">
                <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="#" className="block hover:text-primary">
                      Hair Transplant Cost Panvel: Budget-Friendly Hair Transformation
                    </a>
                    <span className="text-xs text-base-content/60">
                     Jan 1, 2026
                    </span>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-primary">
                      Benefits of Consulting a Hair Specialist in Navi Mumbai
                    </a>
                    <span className="text-xs text-base-content/60">
                      Jun 26, 2025
                    </span>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-primary">
                      Breaking Down the Laser Therapy Cost in 2024
                    </a>
                    <span className="text-xs text-base-content/60">
                      Jun 22, 2024
                    </span>
                  </li>
                </ul>
              </div>

              {/* Contact Form */}
              <div className="rounded-2xl bg-base-200 p-6 shadow-lg">
                <h4 className="text-lg font-semibold mb-4">
                  Talk To Our Experts
                </h4>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="input input-bordered w-full"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    required
                    className="input input-bordered w-full"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="input input-bordered w-full"
                  />
                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>

            </aside>

             {/* MAIN CONTENT */}
            <main className="lg:col-span-2 mt-0 space-y-10">
              <MediaGallery />
            </main>

          </div>
        </div>
      </section>
    </>
  )
}

export default BlogSection
