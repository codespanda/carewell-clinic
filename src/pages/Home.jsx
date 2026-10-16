import Hero from "@/components/sections/Hero"
import InfoBar from "@/components/sections/InfoBar"
import ServicesGrid from "@/components/sections/ServicesGrid"
import WhyChoose from "@/components/sections/WhyChoose"
import Doctors from "@/components/sections/Doctors"
import Testimonials from "@/components/sections/Testimonials"
import StatsBar from "@/components/sections/StatsBar"
import CtaBanner from "@/components/sections/CtaBanner"

export default function Home() {
  return (
    <>
      <Hero />
      <InfoBar className="-mt-6 lg:-mt-40" />
      <ServicesGrid />
      <WhyChoose />
      <Doctors />
      <StatsBar className="pt-4" />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
