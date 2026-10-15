import { Link } from "react-router-dom"
import { Ambulance, CalendarCheck, Clock, MapPin } from "lucide-react"
import { contact } from "@/data/site"

const items = [
  { icon: Clock, title: "Opening Hours", lines: contact.hours },
  { icon: MapPin, title: "Location", lines: [contact.addressLine1, contact.addressLine2] },
  { icon: Ambulance, title: "Emergency Care", lines: ["24/7 Emergency Services", contact.phone] },
  { icon: CalendarCheck, title: "Book Appointment", lines: ["Quick & easy appointment", "booking system"], to: "/appointment" },
]

export default function InfoBar({ className = "" }) {
  return (
    <section className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="grid rounded-xl bg-gradient-to-r from-[#0f8a86] to-primary text-white shadow-[0_12px_30px_-12px_rgba(20,150,143,0.6)] sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, lines, to }, i) => {
          const body = (
            <div className="flex gap-4 px-7 py-6">
              <Icon className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.75} />
              <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <div className="mt-2 space-y-0.5 text-xs text-white/85">
                  {lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </div>
            </div>
          )
          return (
            <div key={title} className={i > 0 ? "border-white/20 sm:border-l max-sm:border-t" : ""}>
              {to ? (
                <Link to={to} className="block rounded-xl transition-colors hover:bg-white/10">{body}</Link>
              ) : (
                body
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
