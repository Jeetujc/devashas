"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    text:
      "Very friendly and accommodating staff. Doctors and treatment staff were experienced and results were visible. Follow-ups were done properly.",
    name: "Abhishek Ranbhise",
    role: "Student",
    rating: 5,
  },
  {
    text:
      "Excellent experience. Clean clinic and very polite staff. Doctor explained the procedure clearly.",
    name: "Sneha Patil",
    role: "Working Professional",
    rating: 5,
  },
  {
    text:
      "Highly professional doctors. Felt comfortable throughout the treatment.",
    name: "Rahul Deshmukh",
    role: "Entrepreneur",
    rating: 5,
  },
  {
    text:
      "One of the best aesthetic clinics I have visited. Staff is very caring.",
    name: "Pooja Kulkarni",
    role: "Designer",
    rating: 5,
  },
  {
    text:
      "Results exceeded expectations. Clean environment and friendly approach.",
    name: "Nikhil Patil",
    role: "Engineer",
    rating: 5,
  },
  {
    text:
      "Doctor took time to explain everything patiently. Very reassuring.",
    name: "Anjali Joshi",
    role: "Teacher",
    rating: 5,
  },
  {
    text:
      "Great service and excellent post-treatment support.",
    name: "Amit Shah",
    role: "Business Owner",
    rating: 5,
  },
  {
    text:
      "Clinic ambience is calming. Staff makes you feel comfortable instantly.",
    name: "Neha More",
    role: "HR Manager",
    rating: 5,
  },
  {
    text:
      "Professional, hygienic, and trustworthy. Would recommend.",
    name: "Kunal Pawar",
    role: "Marketing Specialist",
    rating: 5,
  },
  {
    text:
      "Smooth appointment process and visible results.",
    name: "Ritika Jain",
    role: "Consultant",
    rating: 5,
  },
];

export default function VideoReviews() {
  return (
    <section className="bg-base-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
    

        {/* Iframe Video */}
        <div className="flex justify-center mb-16">
         <iframe width="1017" height="572" src="https://www.youtube.com/embed/MyQxnFgPgQU?list=PLuUymNQQO5ZxScnEsYIbdjNhcEklLDsdg" title="Great Ormond Street Hospital for Children" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        {/* Reviews Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4500 }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white p-8 rounded-3xl h-full shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                <p className="text-[#5a3a42] text-sm leading-relaxed mb-6">
                  {review.text}
                </p>

                <div className="flex gap-1 text-[#b08968] mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#b08968" strokeWidth={0} />
                  ))}
                </div>

                <div>
                  <p className="font-semibold text-[#2b0f16]">
                    {review.name}
                  </p>
                  <p className="text-sm text-[#7b6a66]">
                    {review.role}
                  </p>
                </div>

                <div className="absolute bottom-4 right-6 text-[#f3e6dd] text-7xl leading-none select-none">
                  ”
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
