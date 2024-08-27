import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ProjectDetails from "@/components/sections/innerpages/ProjectDetails";
import Projects2 from "@/components/sections/Projects2";
export default function pageProjectDetails() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="Project Details" />
        <ProjectDetails />
        <Projects2 />
      </Layout>
    </>
  );
}
