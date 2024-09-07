import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ProjectGrid from "@/components/sections/innerpages/ProjectGrid";

const projectHead = {
  headTitle: "Ajiozi Projects | Innovative Software & Tech Solutions",
  description:
    "Explore our portfolio of innovative projects at Ajiozi. From cutting-edge software development to advanced embedded systems and IoT solutions, see how our expert team brings technology to life.",
  keywords:
    "Ajiozi projects, software development, tech solutions, embedded systems, IoT, technology consulting, custom software, innovative projects, tech portfolio",
};

export default function pageProjectGrid() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} head={projectHead}>
        <PageTitle pageName="Projects" />
        <ProjectGrid />
      </Layout>
    </>
  );
}
