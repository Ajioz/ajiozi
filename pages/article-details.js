import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import NewsDetails from "@/components/sections/innerpages/NewsDetails";
import { getBlogs } from "@/utils/util-fetch";

const blogHead = {
  headTitle:
    "Ajiozi Blog | Insights on Software Development & Tech Innovations",
  description:
    "Explore the Ajiozi Blog for the latest insights, trends, and tutorials in software development, embedded systems, IoT, and tech innovations. Stay updated with expert articles and join our community of tech enthusiasts.",
  keywords:
    "Ajiozi blog, software development, tech insights, embedded systems, IoT, technology trends, tutorials, tech community, innovation, expert articles",
};

const style = {
  textAlign: "center",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  color: "#333",
};

function ArticleNotFound() {
  return (
    <div style={style}>
      <h2>Article Not Found</h2>
      <p>
        We're sorry, the article you are looking for culd not b loaded this
        time, try again later!
      </p>
    </div>
  );
}

export default function pageNewsDetails({ articles }) {
  const router = useRouter();
  const { id } = router.query;

  if (id === undefined || !articles) {
    return <div>Loading...</div>;
  }

  const article = articles?.find((article) => article.id === id);

  if (!article) return <ArticleNotFound />; // Use the new component

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} head={blogHead}>
        <PageTitle pageName={article.mainHeading} tag={article.tag} />
        <NewsDetails articleDetails={article} articles={articles} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  let articles = [];
  try {
    articles = await getBlogs();
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      articles,
    },
  };
}
