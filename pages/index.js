import Layout from "@/components/layout/Layout";
import About from "@/components/sections/About";
import Award from "@/components/sections/Award";
import Banner from "@/components/sections/Banner";
import CallToAction from "@/components/sections/CallToAction";
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
import Testimonial2 from "@/components/sections/Testimonial2";
import Video from "@/components/sections/Video";
import VideoTm from "@/components/sections/VideoTm";

export default function Home2() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <Banner />
        <Services />
        <Marquee />
        <About />
        <Video />
        <Funfact />
        <Features2 />
        <Features1 />
        <VideoTm />
        <Features2T2 />
        <Faq />
        <Projects2 />
        <Features2T3 />
        <Testimonial2 />
        <Award />
        <Features2T4 />
        <Contact />
        <News />
        <CallToAction />
        <Map />
      </Layout>
    </>
  );
}
