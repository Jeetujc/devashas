"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

import ContactExpert from "@/components/ContactExpert";
import BlogSection from "@/components/BlogSection2";
import WhyChooseUs from "@/components/WhyChooseUs";
import PostOperativeCare from "@/components/PostOperativeCare";
import MethodsOfHairTransplant from "@/components/MethodsOfHairTransplant";
import PreOperativeCare from "@/components/PreOperativeCare";
import HairTransplantIntro from "@/components/HairTransplantIntro";
import WhatIsHairTransplant from "@/components/WhatIsHairTransplant";
import SurgicalProcedure from "@/components/SurgicalProcedure";
import AnimatedSection from "@/components/AnimatedSection";

const page = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div>
        {/* Header */}
        <m.section
          className="bg-base-200 py-14"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold">Hair Transplant</h1>
            <p className="mt-4 text-base-content/70 max-w-2xl">
              Discover our expert hair transplant services designed to restore
              your confidence and enhance your appearance.
            </p>
          </div>
        </m.section>

        {/* Light animations only */}
        <AnimatedSection>
          <HairTransplantIntro />
        </AnimatedSection>

        <AnimatedSection>
          <WhatIsHairTransplant />
        </AnimatedSection>

        <AnimatedSection>
          <SurgicalProcedure />
        </AnimatedSection>

        <AnimatedSection>
          <PreOperativeCare />
        </AnimatedSection>

        {/* Heavy sections – NO animation */}
        <MethodsOfHairTransplant />
        <PostOperativeCare />

        <AnimatedSection>
          <WhyChooseUs
            location="Jalgaon"
            imageSrc="/images/hair-transplant/jalgaon-hair-transplant.jpg"
          />
        </AnimatedSection>

        <BlogSection />
        <ContactExpert />
      </div>
    </LazyMotion>
  );
};

export default page;
