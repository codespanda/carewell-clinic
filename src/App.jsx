import { Route, Routes } from "react-router-dom"
import Layout from "@/components/layout/Layout"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Services from "@/pages/Services"
import ServiceDetail from "@/pages/ServiceDetail"
import DoctorsPage from "@/pages/DoctorsPage"
import Reports from "@/pages/Reports"
import Packages from "@/pages/Packages"
import Faq from "@/pages/Faq"
import Gallery from "@/pages/Gallery"
import Careers from "@/pages/Careers"
import Blog from "@/pages/Blog"
import BlogPost from "@/pages/BlogPost"
import Contact from "@/pages/Contact"
import Appointment from "@/pages/Appointment"
import Legal from "@/pages/Legal"
import NotFound from "@/pages/NotFound"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="doctors" element={<DoctorsPage />} />
        <Route path="reports" element={<Reports />} />
        <Route path="packages" element={<Packages />} />
        <Route path="faq" element={<Faq />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="careers" element={<Careers />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contact" element={<Contact />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="privacy-policy" element={<Legal type="privacy" />} />
        <Route path="terms" element={<Legal type="terms" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
