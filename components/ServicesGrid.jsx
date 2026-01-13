"use client";

import ServiceCard from "./ServiceCard";

export default function ServicesGrid({ services }) {
  return (
    <section className="bg-[#f6eeee] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
