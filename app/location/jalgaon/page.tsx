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
            Our Clinic in Jalgaon
          </h1>
          <p className="mt-4 text-base-content/70 max-w-2xl">
            Visit our Jalgaon clinic for advanced care, experienced doctors,
            and patient-first treatment. Easily accessible, centrally located,
            and designed for your comfort.
          </p>
        </div>
      </section>
<BookAppointment locations={["jalgaon"]} />
      {/* Book Appointment */}
<ClinicLocations locations={["jalgaon"]} />

      {/* Clinic Locations */}

      {/* Stats */}
      <StatsSection />

      {/* Highlights */}
      <ClinicHighlights />

      {/* Contact */}
      <ContactExpert city="Jalgaon" />
    </>
  );
};

export default Page;
