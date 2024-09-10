import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import NewsDetails from "@/components/sections/innerpages/NewsDetails";

const blogHead = {
  headTitle:
    "Ajiozi Blog | Insights on Software Development & Tech Innovations",
  description:
    "Explore the Ajiozi Blog for the latest insights, trends, and tutorials in software development, embedded systems, IoT, and tech innovations. Stay updated with expert articles and join our community of tech enthusiasts.",
  keywords:
    "Ajiozi blog, software development, tech insights, embedded systems, IoT, technology trends, tutorials, tech community, innovation, expert articles",
};

export default function pageNewsDetails() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} head={blogHead}>
        <PageTitle pageName="Article Details" />
        <NewsDetails />
      </Layout>
    </>
  );
}