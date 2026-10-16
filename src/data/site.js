import {
  Stethoscope,
  Baby,
  HeartPulse,
  Bone,
  FlaskConical,
  Smile,
  Sparkles,
  Flower2,
} from "lucide-react"

const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const contact = {
  phone: "+91 62803 47210",
  phoneHref: "tel:+916280347210",
  email: "info@carewellclinic.com",
  addressLine1: "123, Health Street, Sector 45",
  addressLine2: "Your City, State 500001",
  hours: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 2:00 PM"],
}

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "Packages", to: "/packages" },
  { label: "Reports", to: "/reports" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
]

export const images = {
  heroDoctor: u("photo-1614608682850-e0d6ed316d47", 1000),
  heroBg: u("photo-1586773860418-d37222d8fce3", 1600),
  clinic: u("photo-1629909613654-28e377c37b09", 1200),
  about: u("photo-1519494026892-80bbd2d6fd0d", 1200),
  team: u("photo-1666214280557-f1b5022eb634", 1200),
}

export const services = [
  {
    slug: "general-consultation",
    title: "General Consultation",
    short: "Expert consultation for general health concerns and preventive care.",
    icon: Stethoscope,
    description:
      "Our general physicians provide thorough consultations for everyday illnesses, chronic conditions and preventive health. We take time to listen, diagnose accurately and guide you towards long-term wellness.",
    features: ["Annual health check-ups", "Fever, cold & infections", "Diabetes & BP management", "Vaccinations", "Lifestyle counselling"],
  },
  {
    slug: "pediatrics",
    title: "Pediatrics",
    short: "Specialized care for infants, children and adolescents for healthy growth.",
    icon: Baby,
    description:
      "From newborn check-ups to adolescent care, our pediatric team supports your child's growth and development in a friendly, comforting environment.",
    features: ["Newborn & infant care", "Growth monitoring", "Childhood immunisations", "Nutrition guidance", "Developmental assessments"],
  },
  {
    slug: "gynecology",
    title: "Gynecology",
    short: "Women's health and wellness services at every stage of life.",
    icon: Flower2,
    description:
      "Compassionate, confidential care for women — from adolescence through pregnancy and menopause — delivered by experienced gynecologists.",
    features: ["Antenatal & postnatal care", "PCOS / PCOD management", "Menstrual disorders", "Fertility counselling", "Menopause care"],
  },
  {
    slug: "dermatology",
    title: "Dermatology",
    short: "Diagnosis and treatment for skin, hair and nail conditions.",
    icon: Sparkles,
    description:
      "Healthy skin with evidence-based treatments for acne, allergies, pigmentation, hair loss and more, along with safe cosmetic procedures.",
    features: ["Acne & scar treatment", "Hair fall solutions", "Eczema & psoriasis", "Pigmentation care", "Skin allergy testing"],
  },
  {
    slug: "cardiology",
    title: "Cardiology",
    short: "Comprehensive heart care and cardiovascular disease management.",
    icon: HeartPulse,
    description:
      "Protect your heart with advanced diagnostics, risk assessment and personalised treatment plans from our cardiology specialists.",
    features: ["ECG & Echo", "Hypertension care", "Cholesterol management", "Cardiac risk screening", "Post-cardiac rehab"],
  },
  {
    slug: "orthopedics",
    title: "Orthopedics",
    short: "Bone, joint and muscle care to help you move better and live pain-free.",
    icon: Bone,
    description:
      "Treatment for fractures, joint pain, sports injuries and spine problems — helping you get back to the activities you love.",
    features: ["Joint pain & arthritis", "Sports injuries", "Fracture care", "Back & neck pain", "Physiotherapy"],
  },
  {
    slug: "dental-care",
    title: "Dental Care",
    short: "Complete dental care for a healthy smile and strong teeth.",
    icon: Smile,
    description:
      "Gentle dental care for the whole family, from routine cleaning to root canals, braces and cosmetic smile makeovers.",
    features: ["Cleaning & scaling", "Fillings & root canal", "Braces & aligners", "Teeth whitening", "Implants & crowns"],
  },
  {
    slug: "lab-services",
    title: "Lab Services",
    short: "Accurate and quick diagnostic tests and health check-ups.",
    icon: FlaskConical,
    description:
      "Our in-house laboratory offers accurate, fast diagnostic testing with home sample collection and digital reports.",
    features: ["Blood tests", "Thyroid & hormone panels", "Diabetes profile", "Home sample collection", "Online reports"],
  },
]

export const doctors = [
  {
    name: "Dr. Arjun Mehta",
    specialty: "General Physician",
    experience: "10+ Years Experience",
    image: u("photo-1612349317150-e413f6a5b16d", 600),
    qualification: "MBBS, MD (Internal Medicine)",
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Gynecologist",
    experience: "8+ Years Experience",
    image: u("photo-1594824476967-48c8b964273f", 600),
    qualification: "MBBS, MS (Obstetrics & Gynecology)",
  },
  {
    name: "Dr. Rahul Verma",
    specialty: "Orthopedic Surgeon",
    experience: "12+ Years Experience",
    image: u("photo-1622253692010-333f2da6031d", 600),
    qualification: "MBBS, MS (Orthopedics)",
  },
  {
    name: "Dr. Neha Kapoor",
    specialty: "Pediatrician",
    experience: "9+ Years Experience",
    image: u("photo-1651008376811-b90baee60c1f", 600),
    qualification: "MBBS, MD (Pediatrics)",
  },
  {
    name: "Dr. Vikram Singh",
    specialty: "Cardiologist",
    experience: "15+ Years Experience",
    image: u("photo-1537368910025-700350fe46c7", 600),
    qualification: "MBBS, MD, DM (Cardiology)",
  },
  {
    name: "Dr. Ananya Rao",
    specialty: "Dermatologist",
    experience: "7+ Years Experience",
    image: u("photo-1580281657527-47f249e8f4df", 600),
    qualification: "MBBS, MD (Dermatology)",
  },
  {
    name: "Dr. Karan Malhotra",
    specialty: "Dental Surgeon",
    experience: "11+ Years Experience",
    image: u("photo-1582750433449-648ed127bb54", 600),
    qualification: "BDS, MDS (Prosthodontics)",
  },
  {
    name: "Dr. Sneha Iyer",
    specialty: "Pathologist",
    experience: "6+ Years Experience",
    image: u("photo-1527613426441-4da17471b66d", 600),
    qualification: "MBBS, MD (Pathology)",
  },
]

export const testimonials = [
  {
    quote: "CareWell Clinic provides exceptional care with a personal touch. The doctors are very attentive and the staff is friendly.",
    name: "Ravi Kumar",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    quote: "I had a great experience with the treatment and follow-up care. Highly recommended for anyone looking for quality healthcare.",
    name: "Sneha Patel",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    quote: "The clinic is clean, well-equipped and the appointment process is so convenient. Thank you CareWell Clinic!",
    name: "Amit Singh",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
  },
  {
    quote: "Dr. Neha was wonderful with my daughter. She explained everything patiently and made us feel completely at ease.",
    name: "Pooja Nair",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
  {
    quote: "Lab reports came the same evening and the doctor called to explain them. Truly patient-first service.",
    name: "Suresh Reddy",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg",
    rating: 5,
  },
  {
    quote: "After months of knee pain, the orthopedic team got me back to my morning walks. Grateful for their care.",
    name: "Meera Joshi",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 5,
  },
  {
    quote: "Booking online took less than a minute and I was seen right on time. Very professional and caring team.",
    name: "Rohit Sharma",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
  },
  {
    quote: "The gynecology team supported me throughout my pregnancy. I felt heard, safe and well cared for at every visit.",
    name: "Kavya Menon",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    quote: "Excellent dental care — painless root canal and a very gentle doctor. My whole family now comes here.",
    name: "Arvind Gupta",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    rating: 4,
  },
]

export const posts = [
  {
    slug: "10-habits-for-a-healthier-heart",
    title: "10 Simple Habits for a Healthier Heart",
    excerpt: "Small daily changes can make a big difference to your cardiovascular health. Here's where to start.",
    category: "Cardiology",
    date: "Oct 02, 2026",
    author: "Dr. Vikram Singh",
    image: u("photo-1505751172876-fa1923c5c528", 900),
  },
  {
    slug: "child-vaccination-schedule-guide",
    title: "A Parent's Guide to Child Vaccination Schedules",
    excerpt: "Everything you need to know about keeping your child's immunisations on track, from birth to teens.",
    category: "Pediatrics",
    date: "Sep 24, 2026",
    author: "Dr. Neha Kapoor",
    image: u("photo-1503454537195-1dcabb73ffb9", 900),
  },
  {
    slug: "monsoon-skin-care-tips",
    title: "Monsoon Skin Care: Tips from a Dermatologist",
    excerpt: "Humidity brings its own set of skin troubles. Keep your skin healthy with these expert tips.",
    category: "Dermatology",
    date: "Sep 12, 2026",
    author: "Dr. Ananya Rao",
    image: u("photo-1570172619644-dfd03ed5d881", 900),
  },
  {
    slug: "why-annual-health-checkups-matter",
    title: "Why Annual Health Check-ups Matter",
    excerpt: "Preventive screening catches problems early. Learn which tests you should be taking every year.",
    category: "General Health",
    date: "Aug 30, 2026",
    author: "Dr. Arjun Mehta",
    image: u("photo-1576091160550-2173dba999ef", 900),
  },
  {
    slug: "protecting-your-joints-as-you-age",
    title: "Protecting Your Joints as You Age",
    excerpt: "Strength, mobility and the right habits can keep arthritis at bay. Our orthopedic surgeon explains.",
    category: "Orthopedics",
    date: "Aug 18, 2026",
    author: "Dr. Rahul Verma",
    image: u("photo-1571019613454-1cb2f99b2d8b", 900),
  },
  {
    slug: "nutrition-during-pregnancy",
    title: "Nutrition Essentials During Pregnancy",
    excerpt: "What to eat, what to avoid and the supplements that support a healthy pregnancy.",
    category: "Gynecology",
    date: "Aug 05, 2026",
    author: "Dr. Priya Sharma",
    image: u("photo-1490645935967-10de6ba17061", 900),
  },
]

export const whyChoose = [
  "Highly qualified and experienced doctors",
  "State-of-the-art medical equipment",
  "Patient-first approach and personalized care",
  "Hygienic and comfortable environment",
  "Transparent pricing and ethical practices",
]

export const stats = [
  { value: "15+", label: "Years of Service" },
  { value: "25k+", label: "Happy Patients" },
  { value: "30+", label: "Expert Doctors" },
  { value: "8", label: "Specialities" },
]

export const faqs = [
  {
    q: "Do I need an appointment or can I walk in?",
    a: "Walk-ins are welcome, but booking an appointment online or by phone helps reduce your waiting time.",
  },
  {
    q: "Which insurance providers do you accept?",
    a: "We accept most major health insurance providers and offer cashless facilities for empanelled insurers. Contact the front desk for details.",
  },
  {
    q: "Are emergency services available 24/7?",
    a: `Yes. Our emergency line ${contact.phone} is available round the clock.`,
  },
  {
    q: "Can I get my lab reports online?",
    a: "Yes, lab reports are shared via email and WhatsApp as soon as they are ready, usually within 24 hours.",
  },
]

export const moreLinks = [
  { label: "Gallery", to: "/gallery" },
  { label: "FAQs", to: "/faq" },
  { label: "Careers", to: "/careers" },
  { label: "Book Appointment", to: "/appointment" },
]
