import { Link } from "react-router-dom"
import { CalendarDays, Cpu, LayoutGrid, UserRound, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroDoctor from "@/assets/hero-doctor.webp"
import heroDoctorSm from "@/assets/hero-doctor-sm.webp"

const heroSrcSet = `${heroDoctorSm} 900w, ${heroDoctor} 1536w`

const highlights = [
  { icon: UserRound, label: ["Experienced", "Doctors"] },
  { icon: Cpu, label: ["Advanced", "Technology"] },
  { icon: HeartHandshake, label: ["Personalized", "Care"] },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pt-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-16">
        <div className="pb-8 lg:min-h-[600px] lg:pb-48">
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

        {/* Mobile / tablet: banner image below the text */}
        <img
          src={heroDoctor}
          srcSet={heroSrcSet}
          sizes="100vw"
          alt="Smiling female doctor with stethoscope and arms crossed"
          className="-mx-4 w-[calc(100%+2rem)] max-w-none sm:-mx-6 sm:w-[calc(100%+3rem)] lg:hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
        />
      </div>

      {/* Desktop: the image runs to the bottom of the hero, behind the info bar
          (which overlaps the hero by 10rem). It sits beside the text but always
          reaches the right page edge (~1000px wide). */}
      <img
        src={heroDoctor}
        srcSet={heroSrcSet}
        sizes="1000px"
        fetchpriority="high"
        alt="Smiling female doctor with stethoscope and arms crossed"
        className="absolute bottom-0 left-[max(calc(50%-7rem),calc(100%-980px))] hidden h-full max-h-[676px] w-auto max-w-none lg:block [mask-image:linear-gradient(to_right,transparent,black_26%),linear-gradient(to_bottom,transparent,black_8%)] [mask-composite:intersect]"
      />
    </section>
  )
}
