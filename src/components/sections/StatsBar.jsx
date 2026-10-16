import { Stars } from "@/components/shared"
import { stats } from "@/data/site"

export default function StatsBar({ className = "" }) {
  return (
    <section className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="grid grid-cols-2 gap-6 rounded-xl border bg-white p-6 text-center shadow-sm lg:grid-cols-4">
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
  )
}
