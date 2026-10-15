import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionHeading, SmartImage } from "@/components/shared"
import { doctors } from "@/data/site"

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter" },
]

export function DoctorCard({ doctor, detailed = false }) {
  return (
    <Card className="group overflow-hidden p-0 transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-14px_rgba(16,38,74,0.35)]">
      <div className="h-56 overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200">
        <SmartImage src={doctor.image} alt={doctor.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="px-5 pb-5 pt-4 text-center">
        <h3 className="text-[15px] font-bold text-navy">{doctor.name}</h3>
        <p className="mt-1 text-xs font-semibold text-primary">{doctor.specialty}</p>
        {detailed && <p className="mt-1 text-[11px] text-muted-foreground">{doctor.qualification}</p>}
        <p className="mt-1.5 text-xs text-navy/80">{doctor.experience}</p>
        <div className="mt-4 flex justify-center gap-2">
          {socials.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={`${doctor.name} on ${label}`}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-navy transition-colors hover:bg-primary hover:text-white"
            >
              <Icon className="h-3 w-3" />
            </a>
          ))}
        </div>
        {detailed && (
          <Button asChild size="sm" className="mt-4 w-full">
            <Link to={`/appointment?doctor=${encodeURIComponent(doctor.name)}`}>Book Appointment</Link>
          </Button>
        )}
      </div>
    </Card>
  )
}

export default function Doctors({ limit = 4 }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Our Doctors" title="Meet Our Expert Doctors" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.slice(0, limit).map((d) => (
          <DoctorCard key={d.name} doctor={d} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button asChild variant="outline-primary">
          <Link to="/doctors">View All Doctors</Link>
        </Button>
      </div>
    </section>
  )
}
