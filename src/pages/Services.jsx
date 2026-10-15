import { CalendarCheck, ClipboardList, Stethoscope, HeartPulse } from "lucide-react"
import { PageHero, SectionHeading } from "@/components/shared"
import ServicesGrid from "@/components/sections/ServicesGrid"
import InfoBar from "@/components/sections/InfoBar"
import CtaBanner from "@/components/sections/CtaBanner"

const steps = [
  { icon: CalendarCheck, title: "Book Appointment", text: "Schedule online or call us to pick a convenient slot." },
  { icon: Stethoscope, title: "Consultation", text: "Meet our specialist for a detailed examination." },
  { icon: ClipboardList, title: "Diagnosis & Plan", text: "Get accurate tests and a personalised treatment plan." },
  { icon: HeartPulse, title: "Recovery & Follow-up", text: "We stay with you until you are back to full health." },
]

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="From routine check-ups to specialised treatment, we offer complete care for every member of your family."
        crumbs={[{ label: "Services" }]}
      />
      <ServicesGrid showAll />

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How It Works" title="Your Journey to Better Health" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="relative text-center">
                <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-md ring-1 ring-border">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 text-base font-bold text-navy">{title}</h3>
                <p className="mx-auto mt-2 max-w-[220px] text-[13px] text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InfoBar className="py-16" />
      <CtaBanner />
    </>
  )
}
