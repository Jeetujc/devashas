"use client";
import { useEffect, useState } from "react"
import Modal from "@/components/Modal"
import Hero from "@/components/Hero";
import HeroOverlayCards from "@/components/HeroOverlayCards";
import AboutSection from "@/components/AboutSection";
import { Stats } from "fs";
import StatsSection from "@/components/StatsSection";


export default function Home() {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 1500) // 1.5 seconds

    return () => clearTimeout(timer)
  }, [])
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      />
      <Hero />
      <HeroOverlayCards/>
      
      <AboutSection showButton={true}/>
      <StatsSection/>

    </div>
  );
}
