import { Link } from "react-router-dom"
import { CircleCheck, FlaskConical, Home as HomeIcon, Stethoscope } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PageHero } from "@/components/shared"
import CtaBanner from "@/components/sections/CtaBanner"
import { packages } from "@/data/extra"
import { cn } from "@/lib/utils"

const inr = (n) => `₹${n.toLocaleString("en-IN")}`

const perks = [
  { icon: HomeIcon, text: "Free home sample collection" },
  { icon: FlaskConical, text: "Reports within 24 hours" },
  { icon: Stethoscope, text: "Doctor consultation included" },
]

export default function Packages() {
  return (
    <>
      <PageHero
        title="Health Check-up Packages"
        subtitle="Preventive health packages designed by our doctors — affordable, comprehensive and quick."
        crumbs={[{ label: "Packages" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {perks.map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-2 text-sm font-medium text-navy">
              <Icon className="h-5 w-5 text-primary" /> {text}
            </span>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <Card
              key={p.name}
              className={cn("relative flex flex-col p-7", p.popular && "border-primary ring-1 ring-primary shadow-[0_18px_40px_-20px_rgba(20,150,143,0.6)]")}
            >
              {p.popular && <Badge className="absolute -top-3 left-7">Most Popular</Badge>}
              <h3 className="text-lg font-bold text-navy">{p.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.for}</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="font-heading text-3xl font-bold text-primary">{inr(p.price)}</span>
                <span className="pb-1 text-sm text-muted-foreground line-through">{inr(p.mrp)}</span>
                <span className="pb-1 text-xs font-semibold text-emerald-600">{Math.round((1 - p.price / p.mrp) * 100)}% off</span>
              </div>
              <p className="mt-1 text-xs font-medium text-navy">{p.tests} tests included</p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.items.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-navy/85">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 fill-primary text-white" /> {i}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-7 w-full" variant={p.popular ? "default" : "outline-primary"}>
                <Link to={`/appointment?service=lab-services&package=${encodeURIComponent(p.name)}`}>Book This Package</Link>
              </Button>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Need a custom package for your family or company? <Link to="/contact" className="font-semibold text-primary">Contact us</Link>.
        </p>
      </section>
      <CtaBanner />
    </>
  )
}
