"use client";

import React from "react";
import TreatmentSection from "@/components/TreatmentSection";

const treatments = [
  {
    title: "Acne / Pimples Treatment",
    image: "/images/skin/acne.jpg",
    description: [
      "Acne is a widespread disorder of the oil glands in the skin and is a major aesthetic concern.",
      "It predominantly affects the face and can permanently impact skin texture if left untreated.",
      "Treatment plans are customized based on skin type, acne severity, and triggers.",
    ],
    bullets: [
      "Oral and topical medications",
      "Chemical peels",
      "Comedone extraction",
      "Intralesional injections",
      "Laser toning",
    ],
  },
  {
    title: "Melasma Treatment",
    image: "/images/skin/melasma.jpg",
    description: [
      "Melasma causes dark patches on the face, commonly affecting women with medium to dark skin tones.",
      "It usually appears on cheeks, forehead, chin, and upper lip.",
    ],
  },
  {
    title: "Vitiligo Treatment",
    image: "/images/skin/vitiligo.jpg",
    description: [
      "Vitiligo is a condition that causes loss of skin color due to destruction of pigment cells.",
      "The contrast is more noticeable in people with darker skin tones.",
    ],
    bullets: [
      "White patches on skin",
      "Premature graying of hair",
      "Loss of pigment in mucous membranes",
    ],
  },
  {
    title: "Psoriasis Treatment",
    image: "/images/skin/psoriasis.jpg",
    description: [
      "Psoriasis is a chronic condition causing rapid skin cell buildup, forming red scaly patches.",
      "It commonly affects the scalp, elbows, knees, and lower back.",
    ],
    bullets: [
      "Steroid creams",
      "Moisturizers",
      "Coal tar preparations",
      "Vitamin D creams",
      "Light therapy",
      "Biologic treatments",
    ],
  },
  {
    title: "Keloid / Hypertrophic Scar Treatment",
    image: "/images/skin/keloid.jpg",
    description: [
      "Keloids form when excess scar tissue grows beyond the original wound.",
      "They commonly appear on the chest, shoulders, earlobes, and cheeks.",
    ],
  },
  {
    title: "Fungal Infection Treatment",
    image: "/images/skin/fungal.jpg",
    description: [
      "Fungal infections occur when fungi overgrow on the skin and overpower the immune system.",
      "Early treatment helps prevent complications.",
    ],
    bullets: [
      "Redness and itching",
      "Cracking or peeling skin",
      "Prescription and OTC antifungal creams",
    ],
  },
  {
    title: "Freckles Treatment",
    image: "/images/skin/freckles.jpg",
    description: [
      "Freckles are flat brown spots caused by sun exposure and melanin clustering.",
      "They are harmless but can be reduced for cosmetic reasons.",
    ],
    bullets: [
      "Chemical peels",
      "Laser treatment",
      "IPL therapy",
      "Sun protection",
      "Topical medication",
    ],
  },
  {
    title: "Skin Tag Removal",
    image: "/images/skin/skintag.jpg",
    description: [
      "Skin tags are benign growths commonly found on the neck, armpits, and eyelids.",
      "They can be safely removed through outpatient procedures.",
    ],
    bullets: [
      "Cryotherapy",
      "Electrocautery",
      "Simple excision",
      "Fast healing",
    ],
  },
  {
    title: "Scar & Tattoo Removal",
    image: "/images/skin/tattoo.jpg",
    description: [
      "Advanced laser treatments help remove scars and unwanted tattoos.",
      "Multiple sessions may be required for optimal results.",
    ],
    bullets: [
      "Fractional laser therapy",
      "Microneedling",
      "Corticosteroid injections",
      "Q-switched lasers",
    ],
  },
];

const page = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-base-200 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Skin Treatment</h1>
          <p className="mt-4 text-base-content/70 max-w-2xl">
            Comprehensive dermatology treatments tailored to restore healthy,
            clear, and confident skin.
          </p>
        </div>
      </section>

      {/* ALTERNATING SECTIONS */}
      {treatments.map((item, index) => (
        <TreatmentSection
          key={item.title}
          {...item}
          reverse={index % 2 !== 0}
        />
      ))}
    </>
  );
};

export default page;
