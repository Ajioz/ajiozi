import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import PageTitle from "@/components/sections/PageTitle";
import TeamGrid from "@/components/sections/innerpages/TeamGrid";

export default function pageTeamGrid() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="About Us" />
        <About1 />
        <TeamGrid />
      </Layout>
    </>
  );
}
