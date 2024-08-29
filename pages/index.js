import Layout from "@/components/layout/Layout";
import Slider1 from "@/components/sections/Slider1";
import About from "@/components/sections/About";
import Award from "@/components/sections/Award";
import CallToAction from "@/components/sections/CallToAction";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Features1 from "@/components/sections/Features1";
import Features2 from "@/components/sections/Features2";
import Features2T2 from "@/components/sections/Features2T2";
import Features2T3 from "@/components/sections/Features2T3";
import Features2T4 from "@/components/sections/Features2T4";
import Funfact from "@/components/sections/Funfact";
import Map from "@/components/sections/Map";
import Marquee from "@/components/sections/Marquee";
import News from "@/components/sections/News";
import Projects2 from "@/components/sections/Projects2";
import Services from "@/components/sections/Services";
import Testimonial from "@/components/sections/Testimonial1";
import Video from "@/components/sections/Video";
import VideoTm from "@/components/sections/VideoTm";
import Service1T2 from "@/components/sections/Service1T2";
import Process1 from "@/components/sections/Process1";

export default function Home2() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Slider1 />
        <Services />
        <Marquee />
        <About />
        <Faq />
        <Process1 />
        <Funfact />
        <Features1 />
        <VideoTm />
        <Features2 />
        <Service1T2 /><br />
        <Features2T2 />
        <Projects2 />
        <Features2T4 />
        <Features2T3 />
        <Testimonial />
        <Award />
        <Clients />
        <Contact />
        <News />
        <CallToAction />
        <Map />
      </Layout>
    </>
  );
}
