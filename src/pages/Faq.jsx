import { Link } from "react-router-dom"
import { MessageCircleQuestion, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PageHero } from "@/components/shared"
import { contact } from "@/data/site"
import { faqGroups } from "@/data/extra"

export default function Faq() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers about appointments, reports, billing and more."
        crumbs={[{ label: "FAQs" }]}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <div className="space-y-10">
          {faqGroups.map((g) => (
            <div key={g.title}>
              <h2 className="text-xl font-bold text-navy">{g.title}</h2>
              <Accordion type="single" collapsible className="mt-4 rounded-xl border bg-white px-6">
                {g.items.map((f, i) => (
                  <AccordionItem key={f.q} value={`${g.title}-${i}`} className={i === g.items.length - 1 ? "border-b-0" : ""}>
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
        <aside>
          <Card className="sticky top-24 bg-gradient-to-br from-[#0f8a86] to-primary p-7 text-white">
            <MessageCircleQuestion className="h-9 w-9" />
            <h3 className="mt-4 text-lg font-bold">Still have questions?</h3>
            <p className="mt-2 text-sm text-white/85">Our team is happy to help with anything not covered here.</p>
            <Button asChild variant="white" className="mt-6 w-full">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline-light" className="mt-3 w-full">
              <a href={contact.phoneHref}><Phone /> {contact.phone}</a>
            </Button>
          </Card>
        </aside>
      </section>
    </>
  )
}
