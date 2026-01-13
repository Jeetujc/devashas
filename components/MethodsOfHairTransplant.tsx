"use client"

export default function MethodsOfHairTransplant() {
  return (
    <section className="bg-[#F4F0E6] py-28 mt-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-5xl font-light text-[#333]">
          Methods Of Hair Transplant
        </h2>

        <p className="mt-4 text-center text-[#777] max-w-4xl mx-auto leading-relaxed">
          The two main methods of Hair Transplantation are{" "}
          <span className="text-[#E39A6B] underline cursor-pointer">
            Follicular Unit Extraction (FUE)
          </span>{" "}
          &amp;{" "}
          <span className="text-[#E39A6B] underline cursor-pointer">
            Follicular Unit Transplant (FUT)
          </span>
          .
        </p>

        {/* Description */}
        <p className="mt-8 max-w-5xl mx-auto text-[#666] leading-relaxed text-center">
          Due to developments in medical science, it is easy to treat baldness
          now. Planting hair on the bald region is known as hair restoration
          treatment. The region from where hair is extracted is called the donor
          region, while the bald region where the hair is planted is called the
          recipient site. Hair transplant is different from skin grafting.
          Dermaplast Aesthetic Clinic has been in the hair industry for the past
          8 years and has been one of the{" "}
          <span className="text-[#E39A6B] underline cursor-pointer">
            top clinics for hair transplant in Panvel & Mumbai
          </span>
          . Dermaplast provides all types of hair transplant treatments.
        </p>

        {/* Methods Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* FUE */}
          <div className="text-center">
            <div className="bg-white p-6 shadow-sm flex items-center justify-center">
              <div className="h-[260px] w-full flex items-center justify-center">
                <img
                  src="/images/fue-method.png"
                  alt="Follicular Unit Extraction (FUE)"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>

            <h3 className="mt-6 text-xl font-medium text-[#333] tracking-wide">
              FOLLICULAR UNIT EXTRACTION (FUE)
            </h3>
          </div>

          {/* FUT */}
          <div className="text-center">
            <div className="bg-white p-6 shadow-sm flex items-center justify-center">
              <div className="h-[260px] w-full flex items-center justify-center">
                <img
                  src="/images/fut-method.png"
                  alt="Follicular Unit Transplant (FUT)"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>

            <h3 className="mt-6 text-xl font-medium text-[#333] tracking-wide">
              FOLLICULAR UNIT TRANSPLANT (FUT)
            </h3>
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
