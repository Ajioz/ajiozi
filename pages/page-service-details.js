import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ServiceDetails from "@/components/sections/innerpages/ServiceDetails";

export default function pageServiceDetails() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <PageTitle pageName="Service Details" />
        <ServiceDetails />
      </Layout>
    </>
  );
}
