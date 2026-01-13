"use client"

type WhyChooseUsProps = {
  location: "Jalgaon" | "Kalyan"
  imageSrc: string
}

export default function WhyChooseUs({
  location,
  imageSrc,
}: WhyChooseUsProps) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-[#B88A5A] text-sm tracking-widest uppercase">
            Service details
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#333] leading-tight">
            Why Choose Us For Hair <br />
            Transplant In {location}?
          </h2>

          <p className="mt-6 text-[#666] leading-relaxed max-w-xl">
            At Dermaplast Aesthetic Clinic, our doctors provide customized
            treatments tailored to each patient’s needs. With state-of-the-art
            technology and advanced equipment, we ensure a safe, comfortable,
            and effective hair transplant experience. Easy finance options,
            including EMI facilities, are available for all patients in{" "}
            {location}.
          </p>

          {/* Bullet Points */}
          <ul className="mt-10 space-y-6">
            <li className="flex items-start gap-4">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#B88A5A] text-white">
                →
              </span>
              <p className="text-[#555]">
                We use the most advanced FDA-certified technology in our
                state-of-the-art operating rooms.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#B88A5A] text-white">
                →
              </span>
              <p className="text-[#555]">
                Our team consists of highly qualified, well-trained, and
                experienced hair transplant surgeons ensuring precision and
                safety.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#B88A5A] text-white">
                →
              </span>
              <p className="text-[#555]">
                Above all, we follow a completely personalized approach for
                every patient.
              </p>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full h-full">
          <img
            src={imageSrc}
            alt={`Hair transplant procedure in ${location}`}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  )
}
