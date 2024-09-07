import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ServiceGrid from "@/components/sections/innerpages/ServiceGrid";


const serviceHead = {
  headTitle: "Ajiozi Services | Professional Software Development & Tech Solutions",
  description:
    "Discover Ajiozi's professional services in software development, embedded systems, IoT, and tech solutions. Our expert team delivers innovative and customized solutions to meet your business needs.",
  keywords:
    "Ajiozi services, software development, tech solutions, embedded systems, IoT, professional services, technology consulting, custom software, business solutions",
};

export default function pageServiceGrid() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} head={serviceHead}>
        <PageTitle pageName="Our Services" />
        <ServiceGrid />
      </Layout>
    </>
  );
}
