"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"

export default function HeroOverlayCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })

  return (
    <section ref={ref} className="relative z-20 -mt-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT CARD – REFINED INFO CARD */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <div className="card bg-base-100 shadow-xl p-10 rounded-3xl">
              <h3 className="text-3xl font-semibold mb-8">
                How Can We Help You?
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* LEFT TEXT */}
                <p className="text-base-content/70 leading-relaxed">
                  At Dermaplast Hair & Skin Clinic, we specialize in advanced hair
                  transplant, hair loss treatments, and aesthetic dermatology
                  designed to deliver natural, long-lasting results. Our expert
                  team provides personalized, patient-focused care.
                </p>

                {/* RIGHT CHECKLIST — STARTS FROM TOP */}
                <div className="space-y-6 text-lg font-medium">
                  {[
                    "Hair Transplant",
                    "Skin Care Treatment",
                    "Minor General Surgeries",
                    "Face Care Treatment",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <span className="btn btn-circle btn-sm btn-primary pointer-events-none">
                        ✓
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

              </div>
            </div>


          </motion.div>

          {/* RIGHT CARD – CONSULTATION CTA */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <div className="card bg-neutral text-neutral-content shadow-xl p-10 h-full rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">
                Consultation With Our Doctor
              </h3>

              <p className="text-neutral-content/80 leading-relaxed mb-10">
                Our team of highly skilled doctors brings extensive expertise in
                hair transplant treatments and cosmetology, complemented by
                advanced proficiency in plastic surgery.
              </p>

              <a
                href="tel:+919988092094"
                className="flex items-center gap-5 text-xl font-semibold hover:text-primary transition"
              >
                <span className="btn btn-circle btn-primary">
                  📞
                </span>
                +91 99880 92094
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
