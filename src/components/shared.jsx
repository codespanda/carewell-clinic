import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, ImageIcon, Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function Logo({ light = false, className }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)} aria-label="CareWell Clinic home">
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden>
        <path
          d="M15 4h10v11h11v10H25v11H15V25H4V15h11z"
          stroke={light ? "#fff" : "#14968f"}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M20 13.5c-1.6-2.2-5.6-1.6-5.6 1.7 0 2.6 3.4 4.6 5.6 6.3 2.2-1.7 5.6-3.7 5.6-6.3 0-3.3-4-3.9-5.6-1.7z" fill={light ? "#fff" : "#10264a"} transform="translate(0 2)" />
      </svg>
      <div className="leading-none">
        <div className={cn("font-heading text-xl font-bold tracking-tight", light ? "text-white" : "text-primary")}>
          Care<span className={light ? "text-white" : "text-navy"}>Well</span>
        </div>
        <div className={cn("mt-0.5 text-[10px] font-medium tracking-[0.35em]", light ? "text-white/80" : "text-muted-foreground")}>
          CLINIC
        </div>
      </div>
    </Link>
  )
}

export function SectionHeading({ eyebrow, title, className, align = "center" }) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>}
      <h2 className="text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
      <span className={cn("mt-4 block h-0.5 w-12 rounded bg-primary", align === "center" && "mx-auto")} />
    </div>
  )
}

/** Image with a soft branded fallback if the remote source fails. */
export function SmartImage({ src, alt, className, ...props }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className={cn("flex items-center justify-center bg-gradient-to-br from-secondary to-primary/30", className)} role="img" aria-label={alt}>
        <ImageIcon className="h-10 w-10 text-primary/60" />
      </div>
    )
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} {...props} />
}

export function Stars({ count = 5, className }) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={cn("h-3.5 w-3.5", i < count ? "fill-amber-400 text-amber-400" : "text-gray-300")} />
      ))}
    </div>
  )
}

export function PageHero({ title, subtitle, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-white to-secondary/60">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15" aria-hidden />
      <div className="absolute -bottom-32 right-40 h-56 w-56 rounded-full bg-primary/10" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <nav className="mb-3 flex items-center gap-1 text-xs font-medium text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3" />
              {c.to ? (
                <Link to={c.to} className="hover:text-primary">{c.label}</Link>
              ) : (
                <span className="text-primary">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  )
}
