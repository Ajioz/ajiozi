import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Contact from "@/components/sections/innerpages/Contact";
export default function Pagecontact() {

  const contactHead = {
    headTitle: "Contact Ajiozi Services | Get in Touch with Our Team",
    description:
      "Reach out to Ajiozi Services for inquiries, support, or to discuss your project needs. Our team is here to assist you with professional software development, embedded systems, IoT, and tech solutions.",
    keywords:
      "Ajiozi contact, get in touch, software development inquiries, tech solutions support, embedded systems contact, IoT services, professional services contact, technology consulting, custom software inquiries",
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} head={contactHead}>
        <PageTitle pageName="Contact Us" />
        <Contact />
      </Layout>
    </>
  );
}
