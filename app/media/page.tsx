import MediaGallery from "@/components/MediaGallery"
import MediaHeroSlider from "@/components/MediaHeroSlider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Media - Devasha's Clinic",
  description: "Latest news, press and media from Devasha's Clinic",
}

export default function MediaPage() {
  return (
    <main className="bg-base-100">

      {/* Page Header */}
      <section className="bg-base-200 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-bold">Media</h1>
          <p className="mt-3 text-base text-base-content/70">
            Latest news, press coverage and announcements from Devasha&apos;s Clinic.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h5 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
                Peek Inside Our World
              </h5>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Our Media Highlights
              </h2>
            </div>

            <div>
              <p className="text-gray-600 text-base leading-relaxed">
                We are a leading medico-aesthetic clinic, revolutionising the
                concept of aesthetic dermatology. Our expert Dermatologists and
                Trichologists are rigorously trained to give real results for all
                your skin and hair concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Slider */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <MediaHeroSlider />
        </div>
      </section>

      {/* Media Cards */}
      {/* yeh section thoda aur achche se style krlena */}
      <section className="py-14">
        <h1 className="text-3xl font-bold mb-8 justify-center flex">Media</h1>
        <MediaGallery />
      </section>
        {/* Contact Us Section */}
      <section id="contact-us" className="w-full py-20 bg-base-100">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

      {/* LEFT – CONTACT INFO */}
      <div>
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-primary" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Contact Us
          </h3>
        </div>

        <h2 className="text-3xl font-bold mb-8">Talk to an Expert</h2>

        {/* Contact Items */}
        <div className="space-y-6">

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              ✉️
            </div>
            <div>
              <h4 className="font-semibold">Email Address</h4>
              <p className="text-base-content/70">info@xyz.com</p>
            </div>
          </div>

          {/* Mumbai */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              📍
            </div>
            <div>
              <h4 className="font-semibold">Banglore</h4>
              <p className="text-sm text-base-content/70">
                Row House 7, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, ab., Banglore
              </p>
            </div>
          </div>

          {/* Mumbai Phone */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              📞
            </div>
            <div>
              <h4 className="font-semibold">Call Us</h4>
              <a href="tel:+919988092094" className="text-base-content/70 hover:underline">
                +91 99880 92094
              </a>
            </div>
          </div>

          {/* Pune */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              📍
            </div>
            <div>
              <h4 className="font-semibold">Pune</h4>
              <p className="text-sm text-base-content/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, atque.
                Pune – 411014
              </p>
            </div>
          </div>

          {/* Pune Phone */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              📞
            </div>
            <div>
              <h4 className="font-semibold">Call Us</h4>
              <a href="tel:+916262080833" className="text-base-content/70 hover:underline">
               +91 99880 92094
              </a>
            </div>
          </div>

          {/* Chhatrapati Sambhajinagar */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              📍
            </div>
            <div>
              <h4 className="font-semibold">Chhatrapati Sambhajinagar</h4>
              <p className="text-sm text-base-content/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, consequatur. – 431005
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT – FORM */}
      <div className="rounded-2xl bg-base-200 p-8 shadow-md">
        <h3 className="text-2xl font-semibold mb-6">Consult Our Expert</h3>

        <form className="space-y-5">
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

          <button
            type="submit"
            className="btn btn-primary w-full text-base"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  </div>
</section>


    </main>
  )
}
