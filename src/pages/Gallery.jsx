import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero, SmartImage } from "@/components/shared"
import CtaBanner from "@/components/sections/CtaBanner"
import { gallery } from "@/data/extra"

const categories = ["All", ...new Set(gallery.map((g) => g.category))]

export default function Gallery() {
  const [filter, setFilter] = useState("All")
  const [active, setActive] = useState(null)
  const items = filter === "All" ? gallery : gallery.filter((g) => g.category === filter)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null)
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % items.length)
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + items.length) % items.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [active, items.length])

  return (
    <>
      <PageHero title="Gallery" subtitle="Take a look inside CareWell Clinic — our facilities, equipment and team." crumbs={[{ label: "Gallery" }]} />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <Button key={c} size="sm" variant={filter === c ? "default" : "outline"} className="rounded-full" onClick={() => setFilter(c)}>
              {c}
            </Button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((g, i) => (
            <button
              key={g.title}
              onClick={() => setActive(i)}
              className="group relative cursor-pointer overflow-hidden rounded-xl text-left shadow-sm"
            >
              <SmartImage src={g.src} alt={g.title} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy/80 via-navy/10 to-transparent p-4 opacity-90 transition-opacity group-hover:opacity-100">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/75">{g.category}</p>
                <p className="text-sm font-semibold text-white">{g.title}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <button className="absolute right-4 top-4 cursor-pointer text-white/80 hover:text-white" aria-label="Close"><X className="h-7 w-7" /></button>
          <button
            className="absolute left-3 cursor-pointer rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); setActive((i) => (i - 1 + items.length) % items.length) }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={items[active].src.replace("w=1000", "w=1800")} alt={items[active].title} className="max-h-[80vh] w-auto rounded-lg object-contain" />
            <figcaption className="mt-3 text-center text-sm text-white/85">{items[active].title}</figcaption>
          </figure>
          <button
            className="absolute right-3 cursor-pointer rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); setActive((i) => (i + 1) % items.length) }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
      <CtaBanner />
    </>
  )
}
