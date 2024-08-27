import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Faq from "@/components/sections/innerpages/Faq"
export default function pageFaq() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Pricing Grid" />
    <Faq />
    </Layout>
    </>
  )
}