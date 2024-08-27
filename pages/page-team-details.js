import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import TeamDetails from "@/components/sections/innerpages/TeamDetails"
export default function pageTeamDetails() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Team Details" />
    <TeamDetails />
    </Layout>
    </>
  )
}