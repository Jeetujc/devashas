"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ContactExpert from "@/components/ContactExpert";
import ClinicHighlights from "@/components/ClinicHighlights";
import StatsSection from "@/components/StatsSection";
import ClinicLocations from "@/components/ClinicLocations";
import BookAppointment from "@/components/BookAppointment";
const Page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section className="bg-base-200 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Location</h1>
          <p className="mt-4 text-base-content/70">
            Find us at our convenient location to experience top-notch services.
          </p>
        </div>
      </section>

      
      <BookAppointment />
        <ClinicLocations />
      <StatsSection />
      <ClinicHighlights />
        <ContactExpert />
    </>
  );
};

export default Page;
