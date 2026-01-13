"use client"

export default function WhatIsHairTransplant() {
  return (
    <section className="bg-[#F4F0E6] py-28 relative overflow-hidden h-[110%]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Content */}
        <div>
          <p className="text-[#B88A5A] text-sm tracking-widest uppercase">
            Service details
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#333]">
            What Is Hair Transplant?
          </h2>

          <p className="mt-8 font-medium text-[#555]">
            So, what is Hair Transplant?
          </p>

          <p className="mt-4 text-[#666] leading-relaxed max-w-xl">
            A hair transplant is a procedure that involves transplanting hair to
            parts of the scalp that are bald or thinning. It’s also known as hair
            restoration or hair replacement, and it’s strictly for those who
            have explored all other options for hair loss therapy. Hair
            transplants are performed by dermatologists or plastic surgeons.
            Hair transplants are usually performed under local anaesthesia.
          </p>

          <p className="mt-8 font-medium text-[#555]">
            But, what are <span className="text-[#E39A6B] underline">
              the reasons for hair loss?
            </span>
          </p>

          <p className="mt-4 text-[#666] leading-relaxed max-w-xl">
            The bulk of hair loss is caused by pattern baldness. Genetics has a
            role in this. The remaining instances are caused by a number of
            things, including:
          </p>

          <ul className="mt-4 mb-4 list-disc list-inside space-y-2 text-[#666]">
            <li>diet</li>
            <li>stress</li>
            <li>illness</li>
            <li>hormonal imbalance</li>
            <li>medications</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[420px]">
            <img
              src="/images/what-is-hair-transplant.jpg"
              alt="Hair transplant injection procedure"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40L60 45C120 50 240 60 360 58C480 55 600 40 720 35C840 30 960 35 1080 45C1200 55 1320 65 1380 70L1440 75V90H0V40Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  )
}
