"use client"

import Link from "next/link"
import {
    Facebook,
    Instagram,
    Youtube,
    X,
    Phone,
    Clock
} from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-linear-to-b from-neutral to-base-100 text-neutral-content">
            <div className="max-w-7xl mx-auto px-6 py-20">

                {/* MAIN GRID */}
                <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">

                    {/* BRAND */}
                    <div>
                        <div className="flex flex-col gap-2">
                            <span className="text-5xl font-extrabold text-primary">DV</span>
                            <span className="text-3xl font-semibold tracking-wide">
                                DEVASHA'S
                            </span>
                            <span className="flex items-center gap-3 text-sm tracking-widest text-primary">
                                <span className="badge badge-sm badge-primary"></span>
                                COSMETIC CLINIC
                                <span className="badge badge-sm badge-primary"></span>
                            </span>
                        </div>

                        <p className="mt-8 text-base leading-relaxed max-w-md opacity-90">
                            Our team of highly acclaimed doctors excels in hair transplant
                            treatments and cosmetology, while also offering unmatched
                            expertise in plastic surgery.
                        </p>

                        {/* SOCIALS */}
                        <div className="flex gap-5 mt-10">
                            {[Facebook, Instagram, Youtube, X].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label={`Social link ${i + 1}`}
                                    className="btn btn-circle btn-lg bg-primary text-primary-content hover:bg-white hover:text-neutral shadow-lg hover:shadow-primary/50 transition-all"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            Quick Links
                        </h3>
                        <div className="w-20 h-0.75 bg-linear-to-r from-primary to-secondary mb-8"></div>

                        <ul className="space-y-4 text-lg">
                            {["About Us", "Services", "Appointment", "Gallery", "Contact"].map(
                                (item) => (
                                    <li key={item}>
                                        <Link
                                            href="/"
                                            className="hover:text-primary hover:drop-shadow-[0_0_6px_theme(--color-primary)] transition-all"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* USEFUL LINKS */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            Useful Links
                        </h3>
                        <div className="w-20 h-.75 bg-linear-to-r from-primary to-secondary mb-8"></div>

                        <ul className="space-y-4 text-lg">
                            {[
                                "Privacy Policy",
                                "Terms & Conditions",
                                "Disclaimer",
                                "Support",
                                "FAQ",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/"
                                        className="hover:text-primary hover:drop-shadow-[0_0_6px_theme(--color-primary)] transition-all"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CALL / APPOINTMENT */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Make Appointment
                        </h3>
                        <div className="w-24 h-.5 bg-primary mb-6"></div>

                        <div className="space-y-6 text-sm">

                            {/* Jalgaon */}
                            <div className="space-y-2">
                                <a
                                    href="tel:+919988092094"
                                    className="flex items-center gap-3 text-base font-semibold"
                                >
                                    <span className="btn btn-circle btn-sm btn-primary">
                                        <Phone size={16} />
                                    </span>
                                    Call For Jalgaon Clinic
                                </a>
                                <p>+91 99880 92094</p>
                                <p className="flex items-center gap-2">
                                    <Clock size={14} /> 10 AM – 08 PM, Monday – Sunday
                                </p>
                                <p className="flex items-center gap-2">
                                    <Clock size={14} /> Closed on Tuesday
                                </p>
                            </div>

                            
                            {/* Kalyan */}
                            <div className="space-y-2">
                                <a
                                    href="tel:+919988092094"
                                    className="flex items-center gap-3 text-base font-semibold"
                                >
                                    <span className="btn btn-circle btn-sm btn-primary">
                                        <Phone size={16} />
                                    </span>
                                    Call For Kalyan Clinic
                                </a>
                                <p>+91 99880 92094</p>
                                <p className="flex items-center gap-2">
                                    <Clock size={14} /> 10 AM – 07 PM, Monday – Sunday
                                </p>
                                <p className="flex items-center gap-2">
                                    <Clock size={14} /> Closed on Friday
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* DIVIDER LINE */}
                <div className="mt-20 mb-8 h-px bg-linear-to-r from-primary via-base-300 to-secondary"></div>

                {/* COPYRIGHT */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-neutral opacity-80">
                    <p>Devasha's Cosmetic Clinic</p>
                    <p>Copyright © 2021. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}