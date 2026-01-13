"use client";

/* 🔧 Centralized contact data */
const CONTACT_LOCATIONS = {
  jalgaon: {
    name: "Jalgaon",
    address:
      "Dermaplast Aesthetic Clinic, Jalgaon, Maharashtra.",
    phone: "+91 9988092094",
  },
  kalyan: {
    name: "Kalyan",
    address:
      "Dermaplast Aesthetic Clinic, Kalyan, Maharashtra.",
    phone: "+91 6262080833",
  },
};

export default function ContactExpert({
  locations = ["jalgaon", "kalyan"], // default: show both
}) {
  return (
    <section className="w-full bg-[#f6eeee]">
      <div className="bg-[#fbf7f7] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT – CONTACT INFO */}
          <div className="space-y-10 text-[#0f172a]">
            {/* Email */}
            <div>
              <p className="font-semibold mb-1">Email Address</p>
              <p className="text-[#475569]">
                info@dermaplastclinic.com
              </p>
            </div>

            {/* Dynamic locations */}
            {locations.map((key) => {
              const loc = CONTACT_LOCATIONS[key];
              if (!loc) return null;

              return (
                <div key={key}>
                  <p className="font-semibold mb-1">{loc.name}</p>
                  <p className="text-[#475569] max-w-md">
                    {loc.address}
                  </p>
                  <p className="text-[#7a0f2b] mt-2 font-medium">
                    {loc.phone}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT – FORM CARD */}
          <div className="bg-[#f3eaea] rounded-[32px] p-10 max-w-md w-full">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-full px-6 py-4 bg-white border border-[#e5dcdc] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none"
              />

              <input
                type="email"
                placeholder="E-mail"
                className="w-full rounded-full px-6 py-4 bg-white border border-[#e5dcdc] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-full px-6 py-4 bg-white border border-[#e5dcdc] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-[#7a0f2b] text-white font-medium py-4 hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
