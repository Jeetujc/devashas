"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs, Autoplay, EffectFade } from "swiper/modules"
import { useState } from "react"
import type { Swiper as SwiperType } from "swiper"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "swiper/css/effect-fade"

const images = [
  "https://dermaplastclinic.com/wp-content/uploads/2025/02/OSR_6187-1-scaled.webp",
  "https://dermaplastclinic.com/wp-content/uploads/2025/02/OSR_6211-1-scaled.webp",
  "https://dermaplastclinic.com/wp-content/uploads/2022/03/JVG_0313-1-scaled.jpg",
  "https://dermaplastclinic.com/wp-content/uploads/2022/03/IMG_2682-scaled.jpg",
  "https://dermaplastclinic.com/wp-content/uploads/2025/11/IMG20251013182305-1-scaled.webp",
  "https://dermaplastclinic.com/wp-content/uploads/2025/02/IMG_20231027_110030-scaled.jpg",
  "https://dermaplastclinic.com/wp-content/uploads/2025/02/IMG20250120120206-scaled.jpg",
  "https://dermaplastclinic.com/wp-content/uploads/2025/11/IMG20251013182519-1-scaled.webp",
  "https://dermaplastclinic.com/wp-content/uploads/2025/11/IMG20251013182544-scaled.webp",
  "https://dermaplastclinic.com/wp-content/uploads/2025/11/IMG_20250930_122127056-1-scaled.webp",
  "https://dermaplastclinic.com/wp-content/uploads/2025/11/IMG20251013182322-scaled.webp",
  "https://dermaplastclinic.com/wp-content/uploads/2025/11/IMG_20250930_122318043-scaled.webp",
]

export default function MediaHeroSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <>
      <Swiper
        modules={[Navigation, Thumbs, Autoplay, EffectFade]}
        effect="fade"
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        loop
        speed={500}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full h-140 rounded-xl overflow-hidden"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${img})` }} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView={5}
          watchSlidesProgress
          breakpoints={{
            0: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="h-28"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="h-full rounded-lg bg-center bg-cover cursor-pointer border-2 border-transparent hover:border-black transition" style={{ backgroundImage: `url(${img})` }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
