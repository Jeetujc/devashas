"use client";

import { Clock } from "lucide-react";

/* 🔧 Central source of truth */
const LOCATION_DATA = {
  jalgaon: {
    name: "Jalgaon",
    hours: [
      { days: "Monday – Sunday", time: "10:00 AM – 08:00 PM" },
      { days: "Wednesday", time: "Closed on Wednesday" },
    ],
  },
  kalyan: {
    name: "Kalyan",
    hours: [
      { days: "Monday – Sunday", time: "11:00 AM – 09:00 PM" },
      { days: "Friday", time: "Closed on Friday" },
    ],
  },
};

export default function BookAppointment({
  locations = ["jalgaon", "kalyan"], // default: show both
}) {
  return (
    <section className="bg-[#f4ece8] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT – FORM */}
        <div className="bg-white rounded-[32px] p-12 shadow-[0_30px_60px_rgba(0,0,0,0.18)]">
          <form className="space-y-6">
            {[
              { type: "text", placeholder: "Your Name" },
              { type: "email", placeholder: "E-mail" },
              { type: "tel", placeholder: "Phone Number" },
            ].map((f, i) => (
              <input
                key={i}
                type={f.type}
                placeholder={f.placeholder}
                className="w-full rounded-full bg-[#efe6e1] px-7 py-4 text-sm text-[#2b0f16] placeholder:text-[#7b6a66] focus:outline-none focus:ring-2 focus:ring-[#7a0f2b]/40"
              />
            ))}

            <input
              type="date"
              className="w-full rounded-full bg-[#efe6e1] px-7 py-4 text-sm text-[#7b6a66] focus:outline-none focus:ring-2 focus:ring-[#7a0f2b]/40"
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full rounded-[26px] bg-[#efe6e1] px-7 py-4 text-sm text-[#2b0f16] placeholder:text-[#7b6a66] focus:outline-none focus:ring-2 focus:ring-[#7a0f2b]/40 resize-none"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#7a0f2b] text-white py-4 font-medium tracking-wide hover:bg-[#651024] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT – OPENING HOURS */}
        <div className="space-y-12">
          <div>
            <p className="text-[#b08968] uppercase tracking-widest text-sm mb-3">
              Book Now
            </p>
            <h2 className="text-4xl font-semibold text-[#2b0f16] mb-5">
              Make An Appointment
            </h2>
            <p className="text-[#5a3a42] leading-relaxed max-w-xl">
              Great look doesn’t happen by chance, it happens by an appointment.
              Dermaplast offers advanced aesthetic and cosmetic care tailored to you.
            </p>
          </div>

          {/* 🔁 Dynamic Locations */}
          <div className="space-y-10">
            {locations.map((key) => {
              const loc = LOCATION_DATA[key];
              if (!loc) return null;

              return (
                <div key={key}>
                  <h3 className="text-xl font-semibold text-[#2b0f16] mb-4">
                    Opening Hours for {loc.name}
                  </h3>

                  {loc.hours.map((h, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-center py-3 ${
                        i !== loc.hours.length - 1
                          ? "border-b border-[#e2d6d0]"
                          : ""
                      }`}
                    >
                      <span className="text-[#5a3a42]">{h.days}</span>
                      <span className="flex items-center gap-2 text-[#7a0f2b]">
                        <Clock size={16} strokeWidth={1.4} />
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
