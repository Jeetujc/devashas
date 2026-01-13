"use client";

import React from "react";

type TreatmentSectionProps = {
  title: string;
  description: string[];
  bullets?: string[];
  image: string;
  reverse?: boolean;
};

const TreatmentSection = ({
  title,
  description,
  bullets,
  image,
  reverse = false,
}: TreatmentSectionProps) => {
  return (
    <section className="bg-[#f7f2eb] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex flex-col lg:flex-row gap-14 items-start ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-neutral-900">
              {title}
            </h2>

            <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed">
              {description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {bullets && (
              <ul className="mt-6 space-y-2 list-disc list-inside text-neutral-600">
                {bullets.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {/* BUTTON */}
            <div className="mt-10">
              <button
                className="px-12 py-4 rounded-full bg-[#b08968] text-white font-medium hover:opacity-90 transition"
                style={{ minWidth: "240px" }}
              >
                Book Now
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-[420px] rounded-2xl overflow-hidden bg-neutral-200">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
