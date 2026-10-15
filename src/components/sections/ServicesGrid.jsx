import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/shared"
import { services } from "@/data/site"

export function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <Card className="group flex h-full gap-4 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_14px_30px_-14px_rgba(20,150,143,0.45)]">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-navy transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="flex flex-col">
        <h3 className="text-[15px] font-bold text-navy">{service.title}</h3>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">{service.short}</p>
        <Link to={`/services/${service.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all">
          Learn More <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Card>
  )
}

export default function ServicesGrid({ showAll = false }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Our Services" title="Comprehensive Healthcare Services" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
      {!showAll && (
        <div className="mt-10 text-center">
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      )}
    </section>
  )
}
