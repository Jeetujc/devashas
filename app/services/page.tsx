"use client";

import { motion } from "framer-motion";

import ServicesSection from "@/components/ServicesSection";
import ContactExpert from "@/components/ContactExpert";
import ClinicHighlights from "@/components/ClinicHighlights";
import VideoReviews from "@/components/VideoReviews";
import OurApproach from "@/components/OurApproach";
import BookAppointment from "@/components/BookAppointment";
import ServicesGrid from "@/components/ServicesGrid";

import {
  User,
  Scissors,
  Sparkles,
  Stethoscope,
} from "lucide-react";

/* 🔧 Animation variants */
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Page() {
  const services = [
    {
      image: "/images/services/hair-treatment.jpg",
      title: "Hair Treatment",
      description:
        "We offer one of the finest hair transplant treatments under our expert care and supervision.",
      href: "/services/hair-treatment",
      icon: User,
    },
    {
      image: "/images/services/beard-transplant.jpg",
      title: "Beard Transplant",
      description:
        "Advanced beard restoration procedures designed for natural density and shape.",
      href: "/services/beard-transplant",
      icon: Scissors,
    },
    {
      image: "/images/services/prp.jpg",
      title: "PRP Therapy",
      description:
        "Non-surgical PRP treatments to strengthen hair follicles and improve growth.",
      href: "/services/prp",
      icon: Sparkles,
    },
    {
      image: "/images/services/consultation.jpg",
      title: "Hair Consultation",
      description:
        "Detailed scalp and hair analysis with personalised treatment planning.",
      href: "/services/consultation",
      icon: Stethoscope,
    },
  ];

  return (
    <>
      {/* Hero / Services intro */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ServicesSection />
      </motion.div>

      {/* Services Grid */}
      <motion.section
        className="py-20 bg-base-100"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ServicesGrid services={services} />
          </motion.div>
        </div>
      </motion.section>

      {/* Book Appointment */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <BookAppointment />
      </motion.div>

      {/* Our Approach */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <OurApproach />
      </motion.div>

      {/* Video Reviews */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <VideoReviews />
      </motion.div>

      {/* Highlights */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ClinicHighlights />
      </motion.div>

      {/* Contact */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ContactExpert />
      </motion.div>
    </>
  );
}
