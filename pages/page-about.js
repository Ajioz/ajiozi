import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Award2 from "@/components/sections/Award"
import Clients1 from "@/components/sections/Clients"
import Features2T2 from "@/components/sections/Features2T2"
import PageTitle from "@/components/sections/PageTitle"
import Team1 from "@/components/sections/Team1"
import Video2T2 from "@/components/sections/VideoTm"

export default function PageAbout() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="About Us" />
      <About1 />
      <Video2T2 />
      <Features2T2 />
      <Award2 />
      <Team1 />
      <Clients1 />
    </Layout>
    </>
  )
}