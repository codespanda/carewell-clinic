import { PageHero } from "@/components/shared"
import { contact } from "@/data/site"

const content = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      ["Information We Collect", "We collect the personal and medical information you provide when booking appointments, visiting the clinic or contacting us, such as your name, contact details and health history."],
      ["How We Use It", "Your information is used solely to provide medical care, manage appointments, share reports and communicate important updates. We never sell your data."],
      ["Data Security", "Medical records are stored securely with restricted access in line with applicable healthcare data protection regulations."],
      ["Your Rights", "You may request access to, correction of, or deletion of your personal information at any time by contacting us."],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    sections: [
      ["Appointments", "Appointments booked online are requests and are confirmed by our team via phone. Please arrive 10 minutes before your scheduled time."],
      ["Cancellations", "Kindly inform us at least 4 hours in advance if you need to cancel or reschedule an appointment."],
      ["Medical Information", "Content on this website is for general information and does not replace professional medical advice, diagnosis or treatment."],
      ["Payments", "Consultation and procedure fees are payable at the clinic. Transparent pricing is shared before any treatment."],
    ],
  },
}

export default function Legal({ type }) {
  const page = content[type]
  return (
    <>
      <PageHero title={page.title} crumbs={[{ label: page.title }]} />
      <section className="mx-auto max-w-3xl space-y-8 px-4 py-16 sm:px-6">
        <p className="text-sm text-muted-foreground">Last updated: October 2026</p>
        {page.sections.map(([h, p]) => (
          <div key={h}>
            <h2 className="text-xl font-bold text-navy">{h}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p}</p>
          </div>
        ))}
        <p className="text-[15px] text-muted-foreground">
          Questions? Email us at <a className="font-medium text-primary" href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </section>
    </>
  )
}
