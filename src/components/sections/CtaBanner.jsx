import { Link } from "react-router-dom"
import { CalendarDays, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contact } from "@/data/site"

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0f8a86] to-primary px-8 py-8 text-white sm:px-14 lg:px-20">
        <div className="absolute -left-10 -top-16 h-44 w-44 rounded-full bg-white/10" aria-hidden />
        <div className="absolute -bottom-20 right-1/3 h-40 w-40 rounded-full bg-white/5" aria-hidden />
        <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-xl font-bold leading-snug sm:text-2xl">
              Take the First Step Towards
              <br className="hidden sm:block" /> Better Health
            </h2>
            <p className="mt-2 max-w-xs text-xs text-white/80">Book an appointment today and let our experts care for you and your family.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="white" size="lg">
              <Link to="/appointment">
                <CalendarDays /> Book an Appointment
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="lg">
              <a href={contact.phoneHref}>
                <Phone /> Call Us: {contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
