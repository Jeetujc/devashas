"use client";

import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  image,
  title,
  description,
  href = "#",
  icon: Icon,
}) {
  return (
    <div
      className="
        relative
        h-[60vh]
        min-h-[480px]
        max-h-[720px]
        rounded-[28px]
        overflow-hidden
      "
    >
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Info card */}
      <div
        className="
          absolute
          bottom-6
          left-6
          right-6
          bg-white
          rounded-2xl
          p-6
          shadow-[0_20px_40px_rgba(0,0,0,0.18)]
        "
      >
        <div className="flex gap-4 items-start">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-[#b08968] flex items-center justify-center text-white shrink-0">
            {Icon && <Icon size={22} strokeWidth={1.5} />}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-lg font-semibold text-[#2b0f16] mb-1">
              {title}
            </h3>
            <p className="text-sm text-[#5a3a42] leading-relaxed mb-3">
              {description}
            </p>

            <a
              href={href}
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-[#b08968]
                hover:gap-3
                transition-all
              "
            >
              READ MORE <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
