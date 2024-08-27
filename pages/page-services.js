import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ServiceGrid from "@/components/sections/innerpages/ServiceGrid"
export default function pageServiceGrid() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Service Grid" />
    <ServiceGrid />
    </Layout>
    </>
  )
}