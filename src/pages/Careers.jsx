import { Briefcase, CircleCheck, Clock, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PageHero, SectionHeading, SmartImage } from "@/components/shared"
import { contact } from "@/data/site"
import { jobs, perks } from "@/data/extra"
import { images } from "@/data/site"

export default function Careers() {
  const applyHref = (title) => `mailto:${contact.email}?subject=${encodeURIComponent(`Application: ${title}`)}`

  return (
    <>
      <PageHero
        title="Careers at CareWell"
        subtitle="Join a team that puts patients first. We're always looking for caring, skilled people."
        crumbs={[{ label: "Careers" }]}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <SmartImage src={images.team} alt="CareWell medical team" className="aspect-[3/2] w-full rounded-xl object-cover shadow-lg" />
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Why Work With Us</p>
          <h2 className="text-3xl font-bold text-navy">Grow Your Career While Caring for Others</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            At CareWell, every team member plays a part in our patients' recovery. We invest in your growth with training, mentorship
            and a workplace built on respect.
          </p>
          <ul className="mt-6 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-navy">
                <CircleCheck className="h-5 w-5 fill-primary text-white" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading eyebrow="Open Positions" title="Current Openings" />
          <div className="mt-10 space-y-4">
            {jobs.map((j) => (
              <Card key={j.title} className="flex flex-wrap items-center gap-4 p-5 sm:p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-navy">{j.title}</h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="secondary">{j.dept}</Badge>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {j.type}</span>
                    <span>· {j.experience}</span>
                  </div>
                </div>
                <Button asChild variant="outline-primary">
                  <a href={applyHref(j.title)}>Apply Now</a>
                </Button>
              </Card>
            ))}
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
            <Mail className="h-4 w-4 text-primary" />
            Don't see your role? Send your CV to <a href={`mailto:${contact.email}`} className="font-semibold text-primary">{contact.email}</a>
          </p>
        </div>
      </section>
    </>
  )
}
