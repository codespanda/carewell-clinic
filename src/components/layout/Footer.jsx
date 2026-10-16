import { useState } from "react"
import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Youtube } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/shared"
import { contact, moreLinks, navLinks, services } from "@/data/site"

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
]

function FooterTitle({ children }) {
  return <h4 className="mb-4 text-sm font-bold text-navy">{children}</h4>
}

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-10 pt-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.3fr_1.4fr_1fr_1.2fr_1.3fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
            We are committed to providing exceptional healthcare services with compassion and excellence.
          </p>
          <div className="mt-5 flex gap-2.5">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-navy transition-colors hover:bg-primary hover:text-white"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <FooterTitle>Quick Links</FooterTitle>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[13px] text-muted-foreground">
            {[...navLinks.slice(1), ...moreLinks.slice(0, 3)].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterTitle>Our Services</FooterTitle>
          <ul className="space-y-2.5 text-[13px] text-muted-foreground">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-primary">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterTitle>Contact Us</FooterTitle>
          <ul className="space-y-4 text-[13px] text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
              <span>{contact.addressLine1}<br />{contact.addressLine2}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
              <a href={contact.phoneHref} className="hover:text-primary">{contact.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
              <a href={`mailto:${contact.email}`} className="hover:text-primary">{contact.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <FooterTitle>Newsletter</FooterTitle>
          <p className="text-[13px] text-muted-foreground">Subscribe to get health tips and clinic updates.</p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              if (email) setSubscribed(true)
            }}
          >
            <Input type="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email address" />
            <Button type="submit" size="icon" className="h-10 w-10 shrink-0" aria-label="Subscribe">
              <Send />
            </Button>
          </form>
          {subscribed && <p className="mt-2 text-xs font-medium text-primary">Thanks for subscribing!</p>}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Separator />
        <div className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 CareWell Clinic. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-primary">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
