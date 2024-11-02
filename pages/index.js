// import Features2 from "@/components/sections/Features2";
import Layout from "@/components/layout/Layout";
import Slider1 from "@/components/sections/Slider1";
import About from "@/components/sections/About";
import Award from "@/components/sections/Award";
import CallToAction from "@/components/sections/CallToAction";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Features1 from "@/components/sections/Features1";
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
import VideoTm from "@/components/sections/VideoTm";
import Service1T2 from "@/components/sections/Service1T2";
import Process from "@/components/sections/Process1";
import { getBlogs } from "@/utils/util-fetch";

const homeHead = {
  headTitle: "Ajiozi | Premier Software Development & Tech Solutions",
  description:
    "Welcome to Ajiozi, a leading software company offering top-tier software development, embedded systems, IoT technology, and comprehensive tech training. Partner with us for innovative solutions and exceptional service.",
  keywords:
    "Ajiozi, software development, tech solutions, embedded systems, IoT, technology, training, research, innovation, premier services",
};

export default function Home({ articles }) {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} head={homeHead}>
        {/* <Slider1 /> */}
        {/* <Services /> */}
        {/* <Marquee /> */}
        {/* <About /> */}
        {/* <Faq /> */}
        {/* <Process /> */}
        {/* <Funfact /> */}
        {/* <Features1 /> */}
        {/* <VideoTm /> */}
        {/* <Features2T2 /> */}
        {/* <Service1T2 /> */}
        <br />
        {/* <Features2T3 /> */}
        {/* <Features2T4 /> */}
        {/* <Testimonial /> */}
        {/* <Projects2 /> */}
        {/* <Award /> */}
        {/* <Clients /> */}
        {/* <Contact /> */}
        <News articles={articles} />
        {/* <CallToAction /> */}
        {/* <Map /> */}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const articles = await getBlogs();

  return {
    props: {
      articles,
    },
  };
}
