import { Link } from "react-router-dom"
import { CircleCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SmartImage } from "@/components/shared"
import { images, whyChoose } from "@/data/site"

export default function WhyChoose({ cta = true }) {
  return (
    <section className="bg-gradient-to-b from-white to-muted">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-xl shadow-[0_18px_40px_-20px_rgba(16,38,74,0.35)]">
          <SmartImage src={images.clinic} alt="CareWell Clinic reception and waiting area" className="aspect-[3/2] w-full object-cover" />
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Why Choose Us</p>
          <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Your Health is in
            <br />
            Safe Hands
          </h2>
          <ul className="mt-7 space-y-4">
            {whyChoose.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-navy/90">
                <CircleCheck className="h-5 w-5 shrink-0 fill-primary text-white" />
                {item}
              </li>
            ))}
          </ul>
          {cta && (
            <Button asChild variant="outline-primary" className="mt-8">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
