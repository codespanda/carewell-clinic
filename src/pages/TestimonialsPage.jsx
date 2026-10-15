import { PageHero, Stars } from "@/components/shared"
import { TestimonialCard } from "@/components/sections/Testimonials"
import CtaBanner from "@/components/sections/CtaBanner"
import { stats, testimonials } from "@/data/site"

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Patient Testimonials"
        subtitle="Real stories from the patients and families who trust CareWell Clinic with their health."
        crumbs={[{ label: "Testimonials" }]}
      />

      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-xl border bg-white p-6 text-center shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-3xl font-bold text-primary">4.9/5</p>
            <Stars className="mt-1 justify-center" />
            <p className="mt-1 text-xs text-muted-foreground">Average Rating</p>
          </div>
          {stats.slice(0, 3).map((s) => (
            <div key={s.label}>
              <p className="font-heading text-3xl font-bold text-primary">{s.value}</p>
              <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
