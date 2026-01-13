"use client"

export default function PreOperativeCare() {
  return (
    <section className="bg-white py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8 items-start">
        
        {/* Left Content */}
        <div>
          <p className="text-[#B88A5A] text-sm tracking-widest uppercase">
            Service details
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#333]">
            Pre Operative Care
          </h2>

          <p className="mt-6 text-[#666] leading-relaxed max-w-xl">
            It is important to take correct pre-hair transplant care before
            undergoing a hair transplant process. This will guarantee that the
            transplant proceeds without a hitch and that the patient is
            comfortable during the process. The following hair transplant
            precautions must be taken ten days prior to surgery:
          </p>

          {/* Arrow bullets */}
          <ul className="mt-10 space-y-6 max-w-xl">
            <li className="flex items-start gap-4">
              <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#B88A5A] text-white">
                →
              </span>
              <p className="text-[#555] leading-relaxed">
                Aside from vitamins, notably Vitamin B and E, blood thinners,
                and herbal treatments, it’s best to avoid using aspirin, Advil,
                anti-inflammatory pills, or painkillers.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#B88A5A] text-white">
                →
              </span>
              <p className="text-[#555] leading-relaxed">
                Steroids and cortisone creams must be avoided by the patient
                since they might increase the risk of bleeding during surgery.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#B88A5A] text-white">
                →
              </span>
              <p className="text-[#555] leading-relaxed">
                Drinking alcohol and smoking are prohibited.
              </p>
            </li>
          </ul>

          {/* Subsection */}
          <p className="mt-10 font-medium text-[#555]">
            Hair transplant care begins the day before surgery with the
            following instructions:
          </p>

          <ul className="mt-4 list-disc list-inside space-y-2 text-[#666]">
            <li>The patient must get enough sleep.</li>
            <li>
              Applying or using hair spray, gel, or other style treatments
              should be avoided at all costs.
            </li>
            <li>
              It’s also crucial to take any drugs that your doctor has
              recommended.
            </li>
          </ul>

          <p className="mt-8 font-medium text-[#555]">
            The following are additional guidelines to follow on the day of the
            hair transplant:
          </p>

          <ul className="mt-4 list-disc list-inside space-y-2 text-[#666]">
            <li>Use a mild shampoo to clean the scalp.</li>
            <li>Eat a modest breakfast and limit your coffee intake.</li>
            <li>
              Wearing a wig, hair accessories, or hair styling products is not
              recommended.
            </li>
          </ul>

          <p className="mt-4 text-[#666]">
            Exercising, running, jogging, or engaging in any strenuous activity
            should be avoided.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full h-full">
          <img
            src="/images/pre-operative-care.jpg"
            alt="Pre operative hair transplant care"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  )
}
