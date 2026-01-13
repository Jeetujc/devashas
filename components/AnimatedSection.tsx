"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import React from "react";

export default function AnimatedSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
