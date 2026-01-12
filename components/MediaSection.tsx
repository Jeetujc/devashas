"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Stethoscope,
  HandCoins,
  UserRoundCheck,
} from "lucide-react"

function FeatureItem({
  icon: Icon,
  title,
  description,
}: {
  icon: any
  title: string
  description: string
}) {
  return (
    <div className="group flex items-start gap-6">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-base-200 transition-all group-hover:bg-primary">
        <Icon className="h-7 w-7 text-primary group-hover:text-primary-content transition-colors" />
      </div>

      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-base-content/70">{description}</p>
      </div>
    </div>
  )
}

export default function AboutSection({ showButton = true }) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" })

  return (
    <section ref={sectionRef} className="bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium text-primary">
              About Dermaplast Aesthetic Clinic
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              We Provide The Best Aesthetic Services In India
            </h2>

            <p className="mt-6 max-w-xl text-base text-base-content/70">
              Dermaplast Clinic is a medico-aesthetic clinic focused on leveraging
              advances in medicine to make you look more beautiful and youthful.
            </p>

            <div className="mt-10 space-y-8">
              <FeatureItem
                icon={Stethoscope}
                title="Modern Technology"
                description="Latest FDA approved technology and equipment."
              />
              <FeatureItem
                icon={HandCoins}
                title="Affordable Pricing"
                description="Low-cost EMI options available."
              />
              <FeatureItem
                icon={UserRoundCheck}
                title="Certified Doctors"
                description="Highly experienced medical professionals."
              />
            </div>

            {showButton && (
              <div className="mt-10">
                <button className="btn btn-primary rounded-full px-8">
                  More About Us
                </button>
              </div>
            )}
          </motion.div>

          {/* RIGHT SIDE (IMAGES + FORM) */}
          <div className="space-y-6">

            {/* IMAGES */}
            <div className="h-60 grid grid-cols-2 gap-6">
              <motion.img
                src="/images/hair-treatment.jpg"
                alt="Hair Treatment"
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="rounded-3xl object-cover"
              />

              <motion.img
                src="/images/skin-treatment.jpg"
                alt="Skin Treatment"
                initial={{ opacity: 0, y: -60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-3xl object-cover"
              />

            </div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card bg-base-200 rounded-3xl p-8"
            >
              <form className="space-y-4">
                <input className="input input-bordered w-full rounded-full" placeholder="Your Name" />
                <input className="input input-bordered w-full rounded-full" placeholder="E-mail" />
                <input className="input input-bordered w-full rounded-full" placeholder="Phone Number" />
                <button className="btn btn-primary w-full rounded-full mt-4">
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
