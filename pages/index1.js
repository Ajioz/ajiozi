import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import CallToAction1 from "@/components/sections/CallToAction"
import Clients1 from "@/components/sections/Clients"
import Contact1 from "@/components/sections/Contact"
import Features1 from "@/components/sections/Features1"
import Features1T2 from "@/components/sections/Features2"
import Funfact1 from "@/components/sections/Funfact"
import Marquee1 from "@/components/sections/Marquee"
import News1 from "@/components/sections/News"
import Pricing1 from "@/components/sections/Pricing1"
import Process1 from "@/components/sections/Process1"
import Projects1 from "@/components/sections/Projects1"
import Service1T2 from "@/components/sections/Service1T2"
import Services from "@/components/sections/Services"
import Slider1 from "@/components/sections/Slider1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import WhyChooseUs1 from "@/components/sections/WhyChooseUs1"
export default function Home() {

  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <Slider1 />
    <About1 />
    <Services />
    <Marquee1 />
    <Service1T2 />
    <Team1 />
    <Clients1 />
    <Features1 />
    <Pricing1 />
    <Process1 />
    <WhyChooseUs1 />
    <Features1T2 />
    <Testimonial1 />
    <Projects1 />
    <Funfact1 />
    <Contact1 />
    <News1 />
    <CallToAction1 />
    </Layout>
    </>
  )
}