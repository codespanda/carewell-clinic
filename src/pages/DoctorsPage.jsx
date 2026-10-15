import { useState } from "react"
import { PageHero } from "@/components/shared"
import { DoctorCard } from "@/components/sections/Doctors"
import CtaBanner from "@/components/sections/CtaBanner"
import { Button } from "@/components/ui/button"
import { doctors } from "@/data/site"

const specialties = ["All", ...new Set(doctors.map((d) => d.specialty))]

export default function DoctorsPage() {
  const [filter, setFilter] = useState("All")
  const list = filter === "All" ? doctors : doctors.filter((d) => d.specialty === filter)

  return (
    <>
      <PageHero
        title="Meet Our Expert Doctors"
        subtitle="Experienced, caring specialists dedicated to your health and wellbeing."
        crumbs={[{ label: "Doctors" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {specialties.map((s) => (
            <Button key={s} size="sm" variant={filter === s ? "default" : "outline"} onClick={() => setFilter(s)} className="rounded-full">
              {s}
            </Button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((d) => (
            <DoctorCard key={d.name} doctor={d} detailed />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
