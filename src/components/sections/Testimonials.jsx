import { useEffect, useState } from "react"
import { Quote } from "lucide-react"
import { Card } from "@/components/ui/card"
import { SectionHeading, SmartImage, Stars } from "@/components/shared"
import { testimonials } from "@/data/site"
import { cn } from "@/lib/utils"

export function TestimonialCard({ t }) {
  return (
    <Card className="flex h-full flex-col p-7">
      <div className="flex gap-4">
        <Quote className="h-7 w-7 shrink-0 rotate-180 fill-primary text-primary" />
        <p className="text-[13px] leading-relaxed text-navy/80">"{t.quote}"</p>
      </div>
      <div className="mt-6 flex items-center gap-3 pl-11">
        <SmartImage src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
        <div>
          <p className="text-[13px] font-semibold text-navy">{t.name}</p>
          <Stars count={t.rating} className="mt-1" />
        </div>
      </div>
    </Card>
  )
}

const PER_PAGE = 3

export default function Testimonials() {
  const pages = Math.ceil(testimonials.length / PER_PAGE)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setPage((p) => (p + 1) % pages), 7000)
    return () => clearInterval(id)
  }, [pages])

  const visible = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Patient Testimonials" title="What Our Patients Say" />
      <div key={page} className="mt-12 grid gap-6 animate-fade md:grid-cols-3">
        {visible.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-2.5">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            aria-label={`Show testimonials page ${i + 1}`}
            className={cn("h-2 rounded-full transition-all cursor-pointer", i === page ? "w-2 bg-primary ring-4 ring-primary/20" : "w-2 bg-slate-300 hover:bg-slate-400")}
          />
        ))}
      </div>
    </section>
  )
}
