"use client";

import ContactExpert from "@/components/ContactExpert";
import ClinicHighlights from "@/components/ClinicHighlights";
import StatsSection from "@/components/StatsSection";
import ClinicLocations from "@/components/ClinicLocations";
import BookAppointment from "@/components/BookAppointment";

const Page = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-base-200 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">
            Our Clinic in Kalyan
          </h1>
          <p className="mt-4 text-base-content/70 max-w-2xl">
            Visit our Kalyan clinic for advanced care, experienced doctors,
            and patient-first treatment. Conveniently located and designed
            to provide a comfortable, seamless experience.
          </p>
        </div>
      </section>

      {/* Book Appointment */}
      <BookAppointment locations={["kalyan"]} />

      {/* Clinic Location */}
      <ClinicLocations locations={["kalyan"]} />

      {/* Stats */}
      <StatsSection />

      {/* Highlights */}
      <ClinicHighlights />

      {/* Contact */}
      <ContactExpert city="Kalyan" />
    </>
  );
};

export default Page;
