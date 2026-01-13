"use client"

export default function PostOperativeCare() {
  return (
    <section className="bg-[#F4F0E6] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <p className="text-[#B88A5A] text-sm tracking-widest uppercase">
          Service details
        </p>

        <h2 className="mt-4 text-5xl font-light text-[#333]">
          Post Operative Care
        </h2>

        {/* Intro */}
        <p className="mt-6 max-w-4xl text-[#666] leading-relaxed">
          After hair transplant surgery, like with any other surgical procedure,
          it’s important to take adequate care of yourself as well as take all
          of the required precautions. For a few days after a hair transplant,
          you may most likely experience some soreness in the scalp. In most
          cases, the doctor will prescribe pain killers as well as antibiotics
          and anti-inflammatory drugs. It's also crucial to avoid touching the
          recipient region and to follow the drugs prescribed for hair
          transplant recovery.
        </p>

        {/* Bullet Points */}
        <ul className="mt-12 space-y-8 max-w-5xl">
          <li className="flex items-start gap-5">
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B88A5A] text-white">
              →
            </span>
            <p className="text-[#555] leading-relaxed">
              The patient must wear bandages for at least a day following the
              surgery and keep them on overnight to keep the incision line and
              surgical area clean. To prevent swelling, remove the bandage or
              head-wrap with scissors the day following the transplant.
            </p>
          </li>

          <li className="flex items-start gap-5">
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B88A5A] text-white">
              →
            </span>
            <p className="text-[#555] leading-relaxed">
              Bath and cleaning of the donor area are included in the after hair
              transplant care two days following the surgery. On this day, the
              patient must clean the recipient and donor areas by pouring water
              over them many times. However, it is important that you do not use
              a towel to dry your hair.
            </p>
          </li>

          <li className="flex items-start gap-5">
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B88A5A] text-white">
              →
            </span>
            <p className="text-[#555] leading-relaxed">
              The patient must wash their donor region twice a day after the
              second day, using a mild, antibacterial shampoo and conditioner.
              This is a vital step in hair transplant maintenance because it
              ensures that scalp flakes and crust are eliminated and that
              infection is avoided.
            </p>
          </li>
        </ul>
      </div>

      {/* Bottom wave effect */}
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
