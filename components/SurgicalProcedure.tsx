"use client"

export default function SurgicalProcedure() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <p className="text-[#B88A5A] text-sm tracking-widest uppercase">
          Grafting
        </p>

        <h2 className="mt-4 text-5xl font-light text-[#333]">
          Surgical Procedure
        </h2>

        {/* Description */}
        <div className="mt-10 max-w-3xl space-y-6 text-[#666] leading-relaxed">
          <p>
            Hair fall and baldness can affect your looks and self-confidence.
            Hair regrowth is now possible, thanks to the hair transplantation
            method. It is a blessing of modern medicine and technology.
          </p>

          <p>
            Hair transplantation is one of the most advanced approaches to
            combat hair loss. It includes removing hair grafts from the donor
            (hair supplier) region and inserting them into the bald part.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl">
          
          {/* 1 Day */}
          <div className="flex items-start gap-5">
            <div className="text-[#B88A5A]">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </div>
            <div>
              <p className="text-xl font-medium text-[#333]">1 Day</p>
              <p className="text-sm text-[#777]">No Hospital Admission</p>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-start gap-5">
            <div className="text-[#B88A5A]">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
            </div>
            <div>
              <p className="text-xl font-medium text-[#333]">6–8 Hours</p>
              <p className="text-sm text-[#777]">Duration of Operation</p>
            </div>
          </div>

          {/* Anaesthesia */}
          <div className="flex items-start gap-5">
            <div className="text-[#B88A5A]">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 7h16" />
                <path d="M6 7v10a4 4 0 004 4h4a4 4 0 004-4V7" />
                <path d="M9 11h6" />
              </svg>
            </div>
            <div>
              <p className="text-xl font-medium text-[#333]">
                Local Anaesthesia
              </p>
              <p className="text-sm text-[#777]">Anesthetic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
