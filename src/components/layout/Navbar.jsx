import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/shared"
import { contact, navLinks } from "@/data/site"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={cn("sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow", scrolled && "shadow-[0_2px_16px_-6px_rgba(16,38,74,0.15)]")}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative py-2 text-[13px] font-medium text-navy transition-colors hover:text-primary",
                  isActive && "text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded after:bg-primary"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={contact.phoneHref} className="flex items-center gap-2 text-[13px] font-semibold text-navy hover:text-primary">
            <Phone className="h-4 w-4" />
            {contact.phone}
          </a>
          <Button asChild>
            <Link to="/appointment">Book Appointment</Link>
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <div className="border-t bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn("rounded-md px-3 py-2.5 text-sm font-medium text-navy hover:bg-secondary", isActive && "bg-secondary text-primary")
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a href={contact.phoneHref} className="mt-2 flex items-center gap-2 px-3 py-2 text-sm font-semibold text-navy">
              <Phone className="h-4 w-4 text-primary" />
              {contact.phone}
            </a>
            <Button asChild className="mt-2">
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
