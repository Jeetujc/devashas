"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import {
  CalendarCheck,
  UserRound,
  Stethoscope,
  Sparkles
} from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

const steps = [
  {
    title: "Make an Appointment",
    desc:
      "Schedule a session by making an appointment via telephone or visiting our clinic. We shall provide you with a time slot as per your convenience.",
    icon: CalendarCheck,
  },
  {
    title: "Meet With Our Doctors",
    desc:
      "Consult with our Doctors and discuss your requirements. We ensure customised and affordable solutions that best suit your needs.",
    icon: UserRound,
  },
  {
    title: "General Hair Checkup",
    desc:
      "Based on the Doctor’s preliminary diagnosis and assessments, we help determine whether a treatment plan would be effective and safe.",
    icon: Stethoscope,
  },
  {
    title: "Get A New Version Of You",
    desc:
      "Dermaplast strengths are hairline design, distribution and natural look that helps you regain confidence.",
    icon: Sparkles,
  },
];

const images = [
  "/images/approach/1.jpg",
  "/images/approach/2.jpg",
  "/images/approach/3.jpg",
];

export default function OurApproach() {
  return (
    <section className="bg-[#f6eeee] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT – IMAGE CAROUSEL */}
        <div className="relative rounded-[32px] overflow-hidden">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            className="h-[520px]"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt="Dermaplast Procedure"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Floating CTA */}
          <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-6 max-w-sm shadow-xl">
            <p className="text-lg font-semibold text-[#2b0f16] mb-2">
              Get a Estimate or Schedule an Appointment With Us
            </p>
            <button className="text-[#b08968] font-medium flex items-center gap-2 hover:gap-3 transition-all">
              Get Started →
            </button>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="space-y-12">
          {/* Heading */}
          <div>
            <p className="text-[#b08968] uppercase tracking-widest text-sm mb-3">
              Our Approach
            </p>
            <h2 className="text-4xl font-semibold text-[#2b0f16] mb-4 leading-snug">
              The Procedure For A Natural Looking Hair Transplant At Dermaplast Clinic
            </h2>
            <p className="text-[#5a3a42] max-w-xl leading-relaxed">
              At Dermaplast, we offer you not just a treatment plan, but an experience
              that you can rely on and be rest-assured! A quick look at our patient journey:
            </p>
          </div>

          {/* Steps */}
          <div className="relative space-y-10">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#e2d6d0]" />

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={index} className="relative flex gap-6">
                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-[#a22a2a] flex items-center justify-center text-white">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#2b0f16] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#5a3a42] leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
