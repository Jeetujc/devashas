"use client";

import { Phone, MapPin } from "lucide-react";

/* 🔧 Single source of truth */
const LOCATION_DATA = {
  jalgaon: {
    city: "Jalgaon",
    phone: "+91 9988092094",
    address: "Dermaplast Aesthetic Clinic, Jalgaon, Maharashtra.",
    mapSrc:
      "https://www.google.com/maps?q=Dermaplast%20Aesthetic%20Clinic%20Jalgaon&output=embed",
  },
  kalyan: {
    city: "Kalyan",
    phone: "+91 6262080833",
    address: "Dermaplast Aesthetic Clinic, Kalyan, Maharashtra.",
    mapSrc:
      "https://www.google.com/maps?q=Dermaplast%20Aesthetic%20Clinic%20Kalyan&output=embed",
  },
};

export default function ClinicLocations({ locations }) {
  // If locations is passed → use it
  // If not → show all
  const resolvedLocations =
    locations && locations.length > 0
      ? locations
      : Object.keys(LOCATION_DATA);

  return (
    <section className="bg-[#f6eeee] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid grid-cols-1 gap-12 ${
            resolvedLocations.length > 1 ? "lg:grid-cols-2" : ""
          }`}
        >
          {resolvedLocations.map((key) => {
            const loc = LOCATION_DATA[key];
            if (!loc) return null;

            return (
              <div
                key={key}
                className="flex flex-col justify-between min-h-[520px]"
              >
                {/* Top content */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-[#2b0f16]">
                    {loc.city}
                  </h3>

                  <div className="flex items-center gap-3 text-[#7a0f2b]">
                    <Phone size={18} strokeWidth={1.4} />
                    <a
                      href={`tel:${loc.phone}`}
                      className="underline underline-offset-4"
                    >
                      {loc.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-3 text-[#5a3a42]">
                    <MapPin
                      size={18}
                      strokeWidth={1.4}
                      className="mt-1 text-[#b08968]"
                    />
                    <p className="text-sm leading-relaxed">
                      {loc.address}
                    </p>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src={loc.mapSrc}
                    width="100%"
                    height="260"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-0"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
