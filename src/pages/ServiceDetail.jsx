import { Link, useParams } from "react-router-dom"
import { CalendarDays, CircleCheck, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/shared"
import { DoctorCard } from "@/components/sections/Doctors"
import CtaBanner from "@/components/sections/CtaBanner"
import { contact, doctors, services } from "@/data/site"
import { cn } from "@/lib/utils"
import NotFound from "./NotFound"

// Rough mapping of services to the specialists who handle them.
const specialtyFor = {
  "general-consultation": "General Physician",
  pediatrics: "Pediatrician",
  gynecology: "Gynecologist",
  dermatology: "Dermatologist",
  cardiology: "Cardiologist",
  orthopedics: "Orthopedic Surgeon",
  "dental-care": "Dental Surgeon",
  "lab-services": "Pathologist",
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <NotFound />

  const Icon = service.icon
  const specialists = doctors.filter((d) => d.specialty === specialtyFor[slug])

  return (
    <>
      <PageHero title={service.title} subtitle={service.short} crumbs={[{ label: "Services", to: "/services" }, { label: service.title }]} />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <div>
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
            <Icon className="h-7 w-7" />
          </span>
          <h2 className="mt-6 text-2xl font-bold text-navy sm:text-3xl">About {service.title}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{service.description}</p>

          <h3 className="mt-10 text-lg font-bold text-navy">What We Offer</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-3 rounded-lg border bg-white px-4 py-3 text-sm text-navy">
                <CircleCheck className="h-5 w-5 shrink-0 fill-primary text-white" />
                {f}
              </li>
            ))}
          </ul>

          {specialists.length > 0 && (
            <>
              <h3 className="mt-12 text-lg font-bold text-navy">Our Specialists</h3>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {specialists.map((d) => (
                  <DoctorCard key={d.name} doctor={d} detailed />
                ))}
              </div>
            </>
          )}
        </div>

        <aside className="space-y-6">
          <Card className="p-6">
            <h3 className="text-base font-bold text-navy">All Services</h3>
            <ul className="mt-4 space-y-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm text-navy transition-colors hover:bg-secondary hover:text-primary",
                      s.slug === slug && "bg-primary text-white hover:bg-primary hover:text-white"
                    )}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="bg-gradient-to-br from-[#0f8a86] to-primary p-6 text-white">
            <h3 className="text-lg font-bold">Need Help?</h3>
            <p className="mt-2 text-sm text-white/85">Talk to our care team or book a visit with a specialist.</p>
            <Button asChild variant="white" className="mt-5 w-full">
              <Link to={`/appointment?service=${service.slug}`}>
                <CalendarDays /> Book Appointment
              </Link>
            </Button>
            <Button asChild variant="outline-light" className="mt-3 w-full">
              <a href={contact.phoneHref}>
                <Phone /> {contact.phone}
              </a>
            </Button>
          </Card>
        </aside>
      </section>
      <CtaBanner />
    </>
  )
}
