"use client"

export default function HairTransplantIntro() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 text-center">
        {/* Quote */}
        <p className="text-sm text-[#B88A5A] tracking-wide">
          It is said that “Invest in your hair, it is the crown that you never
          take off.”
        </p>

        {/* Title */}
        <h1 className="mt-6 text-5xl md:text-6xl font-light text-[#333]">
          Hair Transplant
        </h1>

        {/* Description */}
        <p className="mt-8 mx-auto max-w-3xl text-[#666] leading-relaxed">
          Most of us take our looks for granted, just as we do our health and
          youth, until they’re gone. A hair transplant can help many patients
          regain what appears to be a complete head of hair. If you’re concerned
          about losing hair or turning bald, the process might help you feel more
          confident about your appearance. However, you should first speak with
          your doctor about what to expect before and after the procedure.
        </p>

        {/* Image */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-[520px]">
            <img
              src="/images/hair-transplant-procedure.jpg"
              alt="Hair transplant procedure"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
