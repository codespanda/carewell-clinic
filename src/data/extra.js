import { contact } from "./site"

const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const packages = [
  {
    name: "Basic Health Check",
    price: 999,
    mrp: 1800,
    tests: 32,
    for: "Ideal for young adults",
    items: ["Complete Blood Count (CBC)", "Blood Sugar (Fasting)", "Lipid Profile", "Urine Routine", "Physician Consultation"],
  },
  {
    name: "Comprehensive Wellness",
    price: 2499,
    mrp: 4500,
    tests: 68,
    for: "Recommended for adults 30+",
    popular: true,
    items: ["Everything in Basic", "Liver & Kidney Function", "Thyroid Profile (T3, T4, TSH)", "HbA1c", "Vitamin D & B12", "ECG", "Physician Consultation"],
  },
  {
    name: "Senior Citizen Care",
    price: 3999,
    mrp: 7000,
    tests: 85,
    for: "For 60 years and above",
    items: ["Everything in Comprehensive", "2D Echo", "Bone Density Screening", "PSA / Pap Smear", "Eye & Dental Check-up", "Specialist Consultation"],
  },
  {
    name: "Women's Health",
    price: 2999,
    mrp: 5200,
    tests: 60,
    for: "Complete care for women",
    items: ["CBC & Iron Studies", "Thyroid Profile", "Hormone Panel", "Pap Smear", "Pelvic Ultrasound", "Gynecologist Consultation"],
  },
  {
    name: "Cardiac Screening",
    price: 3499,
    mrp: 6000,
    tests: 45,
    for: "Know your heart health",
    items: ["Lipid Profile", "ECG", "2D Echo", "TMT (Stress Test)", "hs-CRP", "Cardiologist Consultation"],
  },
  {
    name: "Diabetes Care",
    price: 1499,
    mrp: 2600,
    tests: 38,
    for: "Monitor & manage diabetes",
    items: ["Fasting & PP Sugar", "HbA1c", "Kidney Function", "Urine Microalbumin", "Lipid Profile", "Diet Counselling"],
  },
]

/*
 * Sample report data for the Reports page lookup. This site has no backend, so
 * these stand in for what a lab information system would return. Replace the
 * lookup in pages/Reports.jsx with a real API call before going live.
 */
export const sampleReports = [
  {
    id: "CW-24101",
    phone: "9876500001",
    patient: "Ravi Kumar",
    age: "42 / M",
    test: "Complete Blood Count (CBC)",
    collected: "14 Oct 2026, 09:20 AM",
    reported: "14 Oct 2026, 04:45 PM",
    doctor: "Dr. Arjun Mehta",
    status: "Ready",
    results: [
      { name: "Hemoglobin", value: "14.2", unit: "g/dL", range: "13.0 - 17.0" },
      { name: "Total WBC Count", value: "7,800", unit: "/µL", range: "4,000 - 11,000" },
      { name: "Platelet Count", value: "2.6", unit: "lakh/µL", range: "1.5 - 4.5" },
      { name: "RBC Count", value: "4.9", unit: "million/µL", range: "4.5 - 5.5" },
      { name: "PCV", value: "43.1", unit: "%", range: "40 - 50" },
    ],
  },
  {
    id: "CW-24102",
    phone: "9876500001",
    patient: "Ravi Kumar",
    age: "42 / M",
    test: "Lipid Profile",
    collected: "14 Oct 2026, 09:20 AM",
    reported: "14 Oct 2026, 05:10 PM",
    doctor: "Dr. Vikram Singh",
    status: "Ready",
    results: [
      { name: "Total Cholesterol", value: "212", unit: "mg/dL", range: "< 200", flag: "High" },
      { name: "Triglycerides", value: "148", unit: "mg/dL", range: "< 150" },
      { name: "HDL Cholesterol", value: "46", unit: "mg/dL", range: "> 40" },
      { name: "LDL Cholesterol", value: "136", unit: "mg/dL", range: "< 130", flag: "High" },
    ],
  },
  {
    id: "CW-24118",
    phone: "9876500001",
    patient: "Ravi Kumar",
    age: "42 / M",
    test: "Vitamin D (25-OH)",
    collected: "15 Oct 2026, 10:05 AM",
    reported: null,
    doctor: "Dr. Arjun Mehta",
    status: "Processing",
    results: [],
  },
]

export const reportSteps = [
  { title: "Sample Collection", text: "Visit the clinic or book a free home sample collection." },
  { title: "Receive Report ID", text: "You get a Report ID by SMS right after your sample is collected." },
  { title: "Check Online", text: "Enter your Report ID or registered mobile number on this page." },
  { title: "Download & Consult", text: "Download a PDF and discuss the results with our doctors." },
]

export const gallery = [
  { src: u("photo-1629909613654-28e377c37b09", 1000), title: "Dental Suite", category: "Facilities" },
  { src: u("photo-1519494026892-80bbd2d6fd0d", 1000), title: "Patient Corridor", category: "Facilities" },
  { src: u("photo-1586773860418-d37222d8fce3", 1000), title: "Clinic Building", category: "Facilities" },
  { src: u("photo-1666214280557-f1b5022eb634", 1000), title: "Our Medical Team", category: "Team" },
  { src: u("photo-1666214277730-e9c7e755e5a3", 1000), title: "Consultation in Progress", category: "Team" },
  { src: u("photo-1580281657527-47f249e8f4df", 1000), title: "Specialist Care", category: "Team" },
  { src: u("photo-1576091160550-2173dba999ef", 1000), title: "Diagnostics", category: "Equipment" },
  { src: u("photo-1505751172876-fa1923c5c528", 1000), title: "Health Check-ups", category: "Equipment" },
]

export const jobs = [
  { title: "Staff Nurse (GNM / B.Sc)", dept: "Nursing", type: "Full-time", experience: "1-3 years" },
  { title: "Lab Technician", dept: "Laboratory", type: "Full-time", experience: "2+ years" },
  { title: "Front Desk Executive", dept: "Administration", type: "Full-time", experience: "0-2 years" },
  { title: "Consultant Dermatologist", dept: "Medical", type: "Part-time", experience: "5+ years" },
  { title: "Physiotherapist", dept: "Rehabilitation", type: "Full-time", experience: "1+ years" },
]

export const perks = [
  "Competitive salary & annual bonus",
  "Health insurance for you and family",
  "Continuing medical education support",
  "Supportive, respectful work culture",
]

export const faqGroups = [
  {
    title: "Appointments",
    items: [
      { q: "How do I book an appointment?", a: "Book online from the Appointment page, call us, or walk in during opening hours." },
      { q: "Can I walk in without an appointment?", a: "Yes, walk-ins are welcome. Booking ahead simply reduces your waiting time." },
      { q: "How do I cancel or reschedule?", a: `Call ${contact.phone} at least 4 hours before your appointment and our team will help.` },
    ],
  },
  {
    title: "Reports & Lab Tests",
    items: [
      { q: "When will my lab report be ready?", a: "Most routine reports are ready the same day. Specialised tests may take 2-3 days." },
      { q: "How can I download my report?", a: "Go to the Reports page and enter your Report ID or registered mobile number." },
      { q: "Do you offer home sample collection?", a: "Yes, free home sample collection is available within city limits for orders above ₹500." },
      { q: "Do I need to fast before tests?", a: "Fasting of 10-12 hours is needed for blood sugar and lipid tests. Water is allowed." },
    ],
  },
  {
    title: "Billing & Insurance",
    items: [
      { q: "Which insurance providers do you accept?", a: "We accept most major health insurers and offer cashless facilities for empanelled providers." },
      { q: "What payment methods are accepted?", a: "Cash, all major cards, UPI and net banking are accepted at the clinic." },
      { q: "Are health package prices inclusive of consultation?", a: "Yes, every health package includes a doctor consultation to review your results." },
    ],
  },
  {
    title: "Emergency & General",
    items: [
      { q: "Are emergency services available 24/7?", a: `Yes. Call our emergency line ${contact.phone} at any time.` },
      { q: "Is parking available?", a: "Yes, free parking is available for patients and visitors." },
      { q: "Can a family member accompany the patient?", a: "Yes, one attendant may accompany each patient during consultation." },
    ],
  },
]
