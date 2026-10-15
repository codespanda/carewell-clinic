import { Eye, HeartHandshake, ShieldCheck, Target } from "lucide-react"
import { Card } from "@/components/ui/card"
import { PageHero, SectionHeading, SmartImage } from "@/components/shared"
import WhyChoose from "@/components/sections/WhyChoose"
import Doctors from "@/components/sections/Doctors"
import CtaBanner from "@/components/sections/CtaBanner"
import { images, stats } from "@/data/site"

const values = [
  { icon: Target, title: "Our Mission", text: "To deliver accessible, affordable and compassionate healthcare that puts every patient's wellbeing first." },
  { icon: Eye, title: "Our Vision", text: "To be the most trusted neighbourhood clinic, known for clinical excellence and genuine human care." },
  { icon: HeartHandshake, title: "Compassion", text: "We listen, we care and we treat every patient like family — with dignity and respect." },
  { icon: ShieldCheck, title: "Integrity", text: "Transparent pricing, ethical practice and honest advice in every consultation." },
]

export default function About() {
  return (
    <>
      <PageHero
        title="About CareWell Clinic"
        subtitle="Caring for our community with expertise, empathy and modern medicine since 2011."
        crumbs={[{ label: "About Us" }]}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <SmartImage src={images.about} alt="Clinic corridor" className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg" />
          <div className="absolute -bottom-6 right-6 rounded-xl bg-primary px-6 py-4 text-white shadow-lg">
            <p className="font-heading text-3xl font-bold">15+</p>
            <p className="text-xs text-white/85">Years of trusted care</p>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Who We Are</p>
          <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">A Clinic Built Around You</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            CareWell Clinic began with a simple idea — quality healthcare should feel personal. Today our multi-speciality team of
            physicians, surgeons and specialists serves thousands of families with the same warmth we started with.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            With modern diagnostics, an in-house laboratory and a comfortable, hygienic facility, we bring together everything you need
            for complete care under one roof.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg bg-secondary px-3 py-4 text-center">
                <p className="font-heading text-2xl font-bold text-primary">{s.value}</p>
                <p className="mt-1 text-[11px] font-medium text-navy/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What Drives Us" title="Our Mission & Values" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="p-7 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-base font-bold text-navy">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <WhyChoose cta={false} />
      <Doctors />
      <CtaBanner />
    </>
  )
}
