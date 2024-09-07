import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Faq from "@/components/sections/innerpages/Faq";

  const faqHead = {
    headTitle: "Frequently Asked Questions | Ajiozi Services",
    description:
      "Find answers to common questions about Ajiozi Services. Learn more about our software development, embedded systems, IoT solutions, and other tech services.",
    keywords:
      "Ajiozi FAQ, frequently asked questions, software development FAQ, tech solutions FAQ, embedded systems FAQ, IoT services FAQ, professional services FAQ, technology consulting FAQ, custom software FAQ",
};
  
export default function pageFaq() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} head={faqHead}>
        <PageTitle pageName="Frequently Ask Questions" />
        <Faq />
      </Layout>
    </>
  );
}
