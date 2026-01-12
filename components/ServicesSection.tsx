import React from 'react'

const ServicesSection = () => {
  return (
    <div>
        {/*HERO*/}
      <section className="bg-base-200 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="mt-4 text-base-content/70">
            Explore our results, clinic moments, and patient stories.
          </p>
        </div>
      </section>

      <section id="services" className="bg-base-100 py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-16">
      <div>
        <h5 className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
          Our Services
        </h5>
        <h2 className="text-4xl font-bold">
          What Service We Offer
        </h2>
      </div>

      <p className="text-base-content/70 leading-relaxed">
        We are a leading medico-aesthetic clinic, revolutionising aesthetic
        dermatology. Our expert Dermatologists and Trichologists deliver
        real results for all skin and hair concerns.
      </p>
    </div>

    {/* SERVICES GRID */}
   
  </div>
      </section>

    </div>
  )
}

export default ServicesSection