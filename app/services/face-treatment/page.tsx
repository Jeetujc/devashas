"use client";

import React from "react";
import TreatmentSection from "@/components/TreatmentSection";

const treatments = [
  {
    title: "Acne Scar Treatment",
    image: "/images/face/acne-scar.jpg",
    description: [
      "Active breakouts are frustrating enough but the scars that acne can leave behind can be difficult to manage.",
      "Scars form when a breakout penetrates deep into the skin and damages tissue, leading to abnormal collagen production.",
      "Identifying the scar type is essential before choosing the right treatment approach.",
    ],
    bullets: [
      "Rolling scars",
      "Boxcar scars",
      "Ice pick scars",
      "Macular erythematous scars",
      "Hypertrophic scars",
    ],
  },
  {
    title: "Chemical Peeling",
    image: "/images/face/chemical-peel.jpg",
    description: [
      "Chemical peels are used to improve and smooth the texture of the skin.",
      "A chemical solution is applied to remove the outermost damaged layers of skin, revealing healthier skin underneath.",
    ],
    bullets: [
      "Discolored skin",
      "Wrinkles",
      "Sun damaged skin",
      "Scars",
      "Age spots",
      "Freckles",
      "Melasma",
      "Fine lines",
    ],
  },
  {
    title: "Vampire Facial",
    image: "/images/face/vampire-facial.jpg",
    description: [
      "A vampire facial uses platelet-rich plasma (PRP) derived from your own blood to rejuvenate the skin.",
      "PRP is applied after microneedling to stimulate collagen production and skin repair.",
    ],
    bullets: [
      "Brightened skin",
      "Reduced wrinkles",
      "Plumper skin",
      "Improved texture",
      "Increased collagen production",
    ],
  },
  {
    title: "Mesotherapy",
    image: "/images/face/mesotherapy.jpg",
    description: [
      "Mesotherapy is a non-surgical, minimally invasive treatment involving micro-injections of vitamins and antioxidants.",
      "It rejuvenates the skin, improves texture, and enhances hydration.",
    ],
    bullets: [
      "Reduced fine lines",
      "Improved elasticity",
      "Brighter complexion",
      "Fades acne scars",
    ],
  },
  {
    title: "Microneedling / Collagen Induction Therapy",
    image: "/images/face/microneedling.jpg",
    description: [
      "Microneedling stimulates collagen production by creating controlled micro-injuries in the skin.",
      "This helps repair acne scars, wrinkles, and uneven skin tone.",
    ],
    bullets: [
      "Acne scars",
      "Wrinkles",
      "Uneven skin tone",
      "Enlarged pores",
      "Loss of elasticity",
    ],
  },
  {
    title: "Botox and Fillers",
    image: "/images/face/botox.jpg",
    description: [
      "Botox relaxes facial muscles to reduce expression lines.",
      "Dermal fillers restore lost volume and smooth facial contours.",
    ],
  },
];

const page = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-base-200 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Face Treatment</h1>
          <p className="mt-4 text-base-content/70 max-w-2xl">
            Explore our comprehensive face treatment services designed to
            revitalize your skin and enhance your natural beauty.
          </p>
        </div>
      </section>

      {/* ALTERNATING SECTIONS */}
      {treatments.map((item, index) => (
        <TreatmentSection
          key={item.title}
          {...item}
          reverse={index % 2 === 1}
        />
      ))}
    </>
  );
};

export default page;
