"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import {
  Users,
  CalendarCheck,
  Award,
  Stethoscope,
} from "lucide-react"

/* ---------------- CountUp Hook ---------------- */
function useCountUp(target: number, start: boolean, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))

      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

/* ---------------- Stat Card ---------------- */
function StatItem({
  icon: Icon,
  value,
  label,
  start,
}: {
  icon: any
  value: number
  label: string
  start: boolean
}) {
  const count = useCountUp(value, start)

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      <h3 className="text-3xl font-bold text-primary-content">
        {count} +
      </h3>

      <p className="text-sm opacity-90">
        {label}
      </p>
    </div>
  )
}

/* ---------------- Main Section ---------------- */
export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })

  return (
    <section className="py-20 bg-base-100">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-6"
      >
        <div className="card bg-linear-to-br from-primary/35 to-primary text-primary-content shadow-xl rounded-3xl">
          <div className="grid grid-cols-2 gap-y-12 gap-x-6 p-10 md:grid-cols-4">

            <StatItem
              icon={Users}
              value={560}
              label="Happy Patients"
              start={isInView}
            />

            <StatItem
              icon={CalendarCheck}
              value={200}
              label="Online Appointments"
              start={isInView}
            />

            <StatItem
              icon={Award}
              value={5}
              label="Years Of Experience"
              start={isInView}
            />

            <StatItem
              icon={Stethoscope}
              value={2}
              label="Doctors & Staff"
              start={isInView}
            />

          </div>
        </div>
      </motion.div>
    </section>
  )
}
