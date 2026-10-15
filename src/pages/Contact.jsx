import { useState } from "react"
import { Clock, Mail, MapPin, Phone, Send, CircleCheck } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PageHero, SectionHeading } from "@/components/shared"
import { contact, faqs } from "@/data/site"

const cards = [
  { icon: MapPin, title: "Visit Us", lines: [contact.addressLine1, contact.addressLine2] },
  { icon: Phone, title: "Call Us", lines: [contact.phone, "24/7 Emergency"], href: contact.phoneHref },
  { icon: Mail, title: "Email Us", lines: [contact.email, "Reply within 24 hours"], href: `mailto:${contact.email}` },
  { icon: Clock, title: "Opening Hours", lines: contact.hours },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHero title="Contact Us" subtitle="We're here to help. Reach out with any question or to schedule your visit." crumbs={[{ label: "Contact" }]} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, lines, href }) => (
            <Card key={title} className="p-6 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[15px] font-bold text-navy">{title}</h3>
              <div className="mt-2 space-y-0.5 text-[13px] text-muted-foreground">
                {lines.map((l, i) =>
                  href && i === 0 ? (
                    <a key={l} href={href} className="block hover:text-primary">{l}</a>
                  ) : (
                    <p key={l}>{l}</p>
                  )
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Card className="p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-navy">Send Us a Message</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fill out the form and our team will get back to you shortly.</p>
            {sent ? (
              <div className="mt-8 flex flex-col items-center rounded-xl bg-secondary px-6 py-12 text-center">
                <CircleCheck className="h-12 w-12 fill-primary text-white" />
                <p className="mt-4 font-heading text-lg font-bold text-navy">Message sent!</p>
                <p className="mt-1 text-sm text-muted-foreground">Thank you for reaching out. We'll be in touch soon.</p>
                <Button variant="outline-primary" className="mt-6" onClick={() => setSent(false)}>Send another</Button>
              </div>
            ) : (
              <form
                className="mt-7 grid gap-5 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="c-name">Full Name</Label>
                  <Input id="c-name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-phone">Phone</Label>
                  <Input id="c-phone" type="tel" required placeholder="+91" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="c-email">Email</Label>
                  <Input id="c-email" type="email" required placeholder="you@example.com" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="c-subject">Subject</Label>
                  <Input id="c-subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="c-msg">Message</Label>
                  <Textarea id="c-msg" required placeholder="Write your message..." />
                </div>
                <Button type="submit" size="lg" className="sm:col-span-2">
                  <Send /> Send Message
                </Button>
              </form>
            )}
          </Card>

          <div className="overflow-hidden rounded-xl border shadow-sm">
            <iframe
              title="CareWell Clinic location"
              src="https://www.google.com/maps?q=Hyderabad&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <Accordion type="single" collapsible className="mt-10 rounded-xl border bg-white px-6">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className={i === faqs.length - 1 ? "border-b-0" : ""}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
