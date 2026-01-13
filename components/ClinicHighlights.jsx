"use client";

import { motion } from "framer-motion";
import {
  WalletMinimal,
  Star,
  CreditCard,
  UserRound
} from "lucide-react";

const highlights = [
  {
    title: "Easy Payment",
    desc: "All hassle-free payment options available.",
    icon: WalletMinimal,
  },
  {
    title: "4.8 User Review",
    desc: "Best user satisfaction rate.",
    icon: Star,
  },
  {
    title: "0% Interest EMI",
    desc: "0% interest EMI facility available.",
    icon: CreditCard,
  },
  {
    title: "Highly Experienced Doctors",
    desc: "The staff is highly trained and experienced.",
    icon: UserRound,
  },
];

export default function ClinicHighlights() {
  return (
    <section className="bg-base-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="group">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="
                    relative
                    bg-white
                    rounded-3xl
                    p-8
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    h-[360px]
                    flex
                    flex-col
                    justify-center
                  "
                >
                  {/* Bottom disappearing strip */}
                  <span
                    className="
                      absolute
                      left-0
                      bottom-0
                      w-full
                      h-3
                      bg-[#7a0f2b]
                      rounded-b-3xl
                      transition-all
                      duration-300
                      origin-bottom
                      group-hover:opacity-0
                      group-hover:scale-y-0
                    "
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <div
                      className="
                        flex
                        justify-center
                        text-[#b08968]
                        group-hover:text-[#7a0f2b]
                        transition-colors
                        duration-300
                      "
                    >
                      <Icon size={36} strokeWidth={1.4} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
