import { X } from "lucide-react"

type Props = {
  open: boolean
  onClose: () => void
}

export default function Modal({ open, onClose }: Props) {
  if (!open) return null

  return (
    // <div className="modal modal-open">
    <div className="modal modal-open max-w-[100vw] overflow-hidden">
      {/* BACKDROP */}
      <div
        className="modal-backdrop bg-black/60"
        onClick={onClose}
      ></div>

      {/* MODAL PANEL */}
      <div
        className="
          modal-box
          w-[95%] max-w-md
          bg-base-100
          rounded-2xl
          p-0
          overflow-hidden
          
          animate-slide-in-left
          
        "
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 btn btn-sm btn-circle btn-ghost"
        >
          <X />
        </button>

        {/* ILLUSTRATION */}
        <div className="bg-base-200 p-6 flex justify-center">
          <img
            src="/doctor-illustration.png" /* replace with your image */
            alt="Doctor Consultation"
            className="w-48"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Get A Video Consultation
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />

            <input
              type="email"
              placeholder="E-mail"
              className="input input-bordered w-full"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />

            <button
              type="submit"
              className="btn btn-primary w-full rounded-full mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

