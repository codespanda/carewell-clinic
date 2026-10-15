import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { CircleCheck, Clock, Phone, ShieldCheck } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PageHero } from "@/components/shared"
import { contact, doctors, services } from "@/data/site"

const selectClass =
  "flex h-10 w-full cursor-pointer rounded-md border border-input bg-background px-3 text-sm text-navy shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:border-primary"

const times = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"]

export default function Appointment() {
  const [params] = useSearchParams()
  const [submitted, setSubmitted] = useState(null)
  const today = new Date().toISOString().split("T")[0]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(Object.fromEntries(new FormData(e.currentTarget)))
  }

  return (
    <>
      <PageHero
        title="Book an Appointment"
        subtitle="Choose your service, doctor and a convenient time. We'll confirm your booking by phone."
        crumbs={[{ label: "Appointment" }]}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
        <Card className="p-7 sm:p-9">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CircleCheck className="h-14 w-14 fill-primary text-white" />
              <h2 className="mt-5 text-2xl font-bold text-navy">Appointment Requested!</h2>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Thank you, {submitted.name}. We've received your request for {submitted.date} at {submitted.time}. Our team will call you
                shortly to confirm.
              </p>
              <div className="mt-7 flex gap-3">
                <Button onClick={() => setSubmitted(null)}>Book Another</Button>
                <Button asChild variant="outline"><Link to="/">Back to Home</Link></Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <h2 className="text-2xl font-bold text-navy">Patient Details</h2>
              </div>
              <div className="space-y-2">
                <Label htmlFor="a-name">Full Name</Label>
                <Input id="a-name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="a-phone">Phone Number</Label>
                <Input id="a-phone" name="phone" type="tel" required placeholder="+91" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="a-email">Email</Label>
                <Input id="a-email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="a-age">Age</Label>
                <Input id="a-age" name="age" type="number" min="0" max="120" placeholder="Age" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="a-service">Service</Label>
                <select id="a-service" name="service" className={selectClass} defaultValue={params.get("service") ?? ""} required>
                  <option value="" disabled>Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="a-doctor">Doctor</Label>
                <select id="a-doctor" name="doctor" className={selectClass} defaultValue={params.get("doctor") ?? ""}>
                  <option value="">Any available doctor</option>
                  {doctors.map((d) => (
                    <option key={d.name} value={d.name}>{d.name} — {d.specialty}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="a-date">Preferred Date</Label>
                <Input id="a-date" name="date" type="date" min={today} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="a-time">Preferred Time</Label>
                <select id="a-time" name="time" className={selectClass} defaultValue="" required>
                  <option value="" disabled>Select a time</option>
                  {times.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="a-notes">Reason for Visit</Label>
                <Textarea id="a-notes" name="notes" placeholder="Briefly describe your symptoms or concerns" />
              </div>
              <Button type="submit" size="lg" className="sm:col-span-2">Confirm Appointment</Button>
            </form>
          )}
        </Card>

        <aside className="space-y-6">
          <Card className="bg-gradient-to-br from-[#0f8a86] to-primary p-7 text-white">
            <Phone className="h-8 w-8" />
            <h3 className="mt-4 text-lg font-bold">Prefer to call?</h3>
            <p className="mt-1 text-sm text-white/85">Our front desk will book you in right away.</p>
            <a href={contact.phoneHref} className="mt-4 block font-heading text-2xl font-bold">{contact.phone}</a>
          </Card>
          <Card className="p-7">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="text-base font-bold text-navy">Opening Hours</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {contact.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
              <li className="font-semibold text-primary">Emergency: 24/7</li>
            </ul>
          </Card>
          <Card className="p-7">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <h3 className="text-base font-bold text-navy">Your privacy matters</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Your details are kept strictly confidential and used only to manage your appointment.</p>
          </Card>
        </aside>
      </section>
    </>
  )
}
