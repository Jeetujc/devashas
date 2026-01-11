"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const slides = [
    "/hero-1.jpg",
    "/hero-2.jpg",
    "/hero-3.jpg",
]

export default function Hero() {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [index, setIndex] = useState(0)

    // AUTO SCROLL
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (!carouselRef.current) return
        carouselRef.current.scrollTo({
            left: carouselRef.current.clientWidth * index,
            behavior: "smooth",
        })
    }, [index])

    return (
        <section className="relative h-screen w-full overflow-hidden">

            {/* CAROUSEL */}
            <div
                ref={carouselRef}
                className="carousel h-full w-full overflow-hidden"
            >
                {slides.map((src, i) => (
                    <div key={i} className="carousel-item w-full h-full">
                        <img
                            src={src}
                            alt={`slide-${i}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-neutral/70" />

            {/* CONTENT */}
            <div className="absolute inset-0 z-10 flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">

                    <div className="max-w-2xl text-base-100">

                        {/* WHITE HEADING → LEFT */}
                        <motion.h1
                            initial={{ x: -80, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        >
                            Transform Your Look With Advanced Hair Transplant
                            Techniques At Dermaplast
                        </motion.h1>

                        {/* PRIMARY TEXT → RIGHT (THICK FONT) */}
                        <motion.p
                            initial={{ x: 80, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                            className="mt-6 text-base md:text-lg font-semibold text-primary"
                        >
                            Because looking good isn&apos;t just about hair—it&apos;s about
                            confidence, identity, and feeling your best.
                        </motion.p>


                        {/* CTA BUTTONS */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-6">

                            {/* TAKE HAIR LOSS → DARKER */}
                            <motion.button
                                initial={{ x: -60, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="btn btn-ghost rounded-full px-8 bg-neutral text-base-100 hover:bg-neutral/10"
                            >
                                Take Hair Loss Assessment
                            </motion.button>

                            {/* WATCH VIDEO → NO BORDER */}
                            <motion.button
                                initial={{ x: 60, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="btn btn-ghost rounded-full px-8 bg-transparent text-primary hover:bg-primary/20"
                            >
                                ▶ Watch Video
                            </motion.button>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
