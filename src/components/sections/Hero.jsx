import { Link } from "react-router-dom"
import { CalendarDays, Cpu, LayoutGrid, UserRound, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SmartImage } from "@/components/shared"
import { images } from "@/data/site"

const highlights = [
  { icon: UserRound, label: ["Experienced", "Doctors"] },
  { icon: Cpu, label: ["Advanced", "Technology"] },
  { icon: HeartHandshake, label: ["Personalized", "Care"] },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft clinic backdrop */}
      <div className="absolute inset-0" aria-hidden>
        <SmartImage src={images.heroBg} alt="" className="h-full w-full object-cover opacity-[0.12] blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pt-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-16">
        <div className="pb-8 lg:pb-32">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">Welcome to CareWell Clinic</p>
          <h1 className="text-4xl font-bold leading-[1.15] text-navy sm:text-5xl lg:text-[54px]">
            Compassionate Care
            <br />
            for a Healthier You
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            We provide comprehensive healthcare services with a patient-first approach. Your health, comfort and happiness are our priority.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/appointment">
                <CalendarDays /> Book an Appointment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">
                <LayoutGrid /> Our Services
              </Link>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label[0]} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy shadow-sm ring-1 ring-border">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-[13px] font-semibold leading-tight text-navy">
                  {label[0]}
                  <br />
                  {label[1]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-md self-end sm:h-[520px] lg:h-[600px] lg:max-w-none">
          {/* Teal arc */}
          <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-primary/80 to-primary sm:h-[520px] sm:w-[520px] lg:-right-56 lg:bottom-[-40px] lg:h-[600px] lg:w-[600px]" aria-hidden />
          <div className="absolute -right-32 bottom-10 h-[360px] w-[360px] rounded-full border-[18px] border-white/30 lg:-right-44 lg:h-[520px] lg:w-[520px]" aria-hidden />
          <SmartImage
            src={images.heroDoctor}
            alt="Smiling female doctor with stethoscope"
            loading="eager"
            className="absolute bottom-0 left-1/2 h-full w-[85%] -translate-x-1/2 rounded-t-[200px] object-cover object-top [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
          />
        </div>
      </div>
    </section>
  )
}
