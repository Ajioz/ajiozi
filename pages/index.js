import Layout from "@/components/layout/Layout";
import About2 from "@/components/sections/About2";
import Award2 from "@/components/sections/Award2";
import Banner from "@/components/sections/Banner";
import CallToAction from "@/components/sections/CallToAction";
import Contact2 from "@/components/sections/Contact2";
import Faq2 from "@/components/sections/Faq2";
import Features2 from "@/components/sections/Features2";
import Features2T2 from "@/components/sections/Features2T2";
import Features2T3 from "@/components/sections/Features2T3";
import Features2T4 from "@/components/sections/Features2T4";
import Funfact2 from "@/components/sections/Funfact2";
import Map2 from "@/components/sections/Map2";
import Marquee2 from "@/components/sections/Marquee2";
import News2 from "@/components/sections/News2";
import Projects2 from "@/components/sections/Projects2";
import Services2 from "@/components/sections/Services2";
import Testimonial2 from "@/components/sections/Testimonial2";
import Video2 from "@/components/sections/Video2";
import Video2T2 from "@/components/sections/Video2T2";

export default function Home2() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <Banner />
        <Services2 />
        <Marquee2 />
        <About2 />
        <Video2 />
        <Funfact2 />
        <Features2 />
        <Video2T2 />
        <Features2T2 />
        <Faq2 />
        <Projects2 />
        <Features2T3 />
        <Testimonial2 />
        <Award2 />
        <Features2T4 />
        <Contact2 />
        <News2 />
        <CallToAction />
        <Map2 />
      </Layout>
    </>
  );
}
