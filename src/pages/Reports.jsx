import { useState } from "react"
import { Link } from "react-router-dom"
import { Clock, FileSearch, FileText, Home as HomeIcon, Printer, Search, ShieldCheck, X, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Logo, PageHero, SectionHeading } from "@/components/shared"
import CtaBanner from "@/components/sections/CtaBanner"
import { contact } from "@/data/site"
import { reportSteps, sampleReports } from "@/data/extra"
import { cn } from "@/lib/utils"

const modes = [
  { key: "id", label: "Report ID", placeholder: "e.g. CW-24101" },
  { key: "phone", label: "Mobile Number", placeholder: "10-digit registered mobile" },
]

const features = [
  { icon: Zap, title: "Same-day Reports", text: "Most routine test results are ready within hours." },
  { icon: HomeIcon, title: "Home Collection", text: "Free sample pickup from your doorstep." },
  { icon: ShieldCheck, title: "NABL Standards", text: "Accurate results with strict quality control." },
  { icon: Clock, title: "24/7 Access", text: "Download your reports anytime, anywhere." },
]

// Stand-in for a lab system API — see the note in data/extra.js.
function findReports(mode, value) {
  const q = value.trim().toUpperCase().replace(/\s+/g, "")
  if (mode === "id") return sampleReports.filter((r) => r.id === q)
  return sampleReports.filter((r) => r.phone === q.replace(/^\+?91/, ""))
}

function ReportView({ report, onClose }) {
  return (
    <Card id="printable" className="mt-8 overflow-hidden p-0">
      <div className="flex items-center justify-between border-b bg-secondary/50 px-6 py-4">
        <Logo />
        <div className="text-right text-xs text-muted-foreground">
          <p>{contact.addressLine1}, {contact.addressLine2}</p>
          <p>{contact.phone} · {contact.email}</p>
        </div>
      </div>
      <div className="grid gap-x-8 gap-y-2 border-b px-6 py-5 text-sm sm:grid-cols-2">
        {[
          ["Patient", report.patient],
          ["Age / Sex", report.age],
          ["Report ID", report.id],
          ["Referred By", report.doctor],
          ["Collected", report.collected],
          ["Reported", report.reported],
        ].map(([k, v]) => (
          <p key={k}><span className="inline-block w-28 text-muted-foreground">{k}</span><span className="font-medium text-navy">{v}</span></p>
        ))}
      </div>
      <div className="px-6 py-5">
        <h3 className="text-center text-base font-bold uppercase tracking-wide text-navy">{report.test}</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-xs uppercase tracking-wide text-muted-foreground">
                <th className="py-2 pr-4 font-semibold">Test</th>
                <th className="py-2 pr-4 font-semibold">Result</th>
                <th className="py-2 pr-4 font-semibold">Unit</th>
                <th className="py-2 font-semibold">Reference Range</th>
              </tr>
            </thead>
            <tbody>
              {report.results.map((r) => (
                <tr key={r.name} className="border-b last:border-0">
                  <td className="py-2.5 pr-4 text-navy">{r.name}</td>
                  <td className={cn("py-2.5 pr-4 font-semibold", r.flag ? "text-destructive" : "text-navy")}>
                    {r.value} {r.flag && <span className="text-xs">({r.flag})</span>}
                  </td>
                  <td className="py-2.5 pr-4 text-muted-foreground">{r.unit}</td>
                  <td className="py-2.5 text-muted-foreground">{r.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Results should be interpreted by a qualified doctor in light of clinical findings. — End of report —
        </p>
      </div>
      <div className="flex flex-wrap justify-end gap-3 border-t bg-muted px-6 py-4 print:hidden">
        <Button variant="outline" onClick={onClose}><X /> Close</Button>
        <Button onClick={() => window.print()}><Printer /> Print / Save PDF</Button>
      </div>
    </Card>
  )
}

export default function Reports() {
  const [mode, setMode] = useState("id")
  const [value, setValue] = useState("")
  const [results, setResults] = useState(null)
  const [open, setOpen] = useState(null)

  const current = modes.find((m) => m.key === mode)

  const search = (e) => {
    e.preventDefault()
    setOpen(null)
    setResults(findReports(mode, value))
  }

  return (
    <>
      <div className="print:hidden">
        <PageHero
          title="Lab Reports"
          subtitle="Check the status of your tests and download your reports online — quick, secure and paperless."
          crumbs={[{ label: "Reports" }]}
        />
      </div>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Card className="p-7 sm:p-9 print:hidden">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
              <FileSearch className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-bold text-navy">Find Your Report</h2>
              <p className="text-sm text-muted-foreground">Search with your Report ID or registered mobile number.</p>
            </div>
          </div>

          <div className="mt-6 inline-flex rounded-lg bg-muted p-1">
            {modes.map((m) => (
              <button
                key={m.key}
                type="button"
                onClick={() => {
                  setMode(m.key)
                  setValue("")
                  setResults(null)
                }}
                className={cn(
                  "cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  mode === m.key ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-navy"
                )}
              >
                {m.label}
              </button>
            ))}
          </div>

          <form onSubmit={search} className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end">
            <div className="flex-1 space-y-2">
              <Label htmlFor="r-value">{current.label}</Label>
              <Input
                id="r-value"
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={current.placeholder}
                inputMode={mode === "phone" ? "numeric" : "text"}
              />
            </div>
            <Button type="submit" size="lg" className="h-10"><Search /> Search Reports</Button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">
            Sample lookup — try Report ID <span className="font-semibold text-navy">CW-24101</span> or mobile{" "}
            <span className="font-semibold text-navy">9876500001</span>.
          </p>

          {results && (
            <div className="mt-8">
              {results.length === 0 ? (
                <div className="rounded-lg border border-dashed px-6 py-8 text-center">
                  <p className="font-semibold text-navy">No reports found</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Please check the details and try again, or call us at{" "}
                    <a href={contact.phoneHref} className="font-medium text-primary">{contact.phone}</a>.
                  </p>
                </div>
              ) : (
                <ul className="divide-y rounded-lg border">
                  {results.map((r) => (
                    <li key={r.id} className="flex flex-wrap items-center gap-4 px-5 py-4">
                      <FileText className="h-5 w-5 text-primary" />
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-navy">{r.test}</p>
                        <p className="text-xs text-muted-foreground">{r.id} · Collected {r.collected}</p>
                      </div>
                      <Badge variant={r.status === "Ready" ? "default" : "secondary"}>{r.status}</Badge>
                      <Button size="sm" variant="outline-primary" disabled={r.status !== "Ready"} onClick={() => setOpen(r)}>
                        {r.status === "Ready" ? "View Report" : "Awaiting results"}
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </Card>

        {open && <ReportView report={open} onClose={() => setOpen(null)} />}
      </section>

      <section className="bg-muted py-16 print:hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How It Works" title="Getting Your Reports" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reportSteps.map((s, i) => (
              <div key={s.title} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-[230px] text-[13px] text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 print:hidden">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="p-6">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-[15px] font-bold text-navy">{title}</h3>
              <p className="mt-1 text-[13px] text-muted-foreground">{text}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Looking for a test? See our <Link to="/packages" className="font-semibold text-primary">health packages</Link> or{" "}
          <Link to="/services/lab-services" className="font-semibold text-primary">lab services</Link>.
        </p>
      </section>
      <div className="print:hidden"><CtaBanner /></div>
    </>
  )
}
