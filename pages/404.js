import Layout from "@/components/layout/Layout";
import dynamic from 'next/dynamic';

const ErrorComponent = dynamic(() => import('@/components/sections/innerpages/Error'), {
  ssr: false,
});

export default function PageError() {

  const errorHead = {
    headTitle: "404 Error | Page Not Found",
    description: "The page you are looking for does not exist. Please check the URL or return to the homepage.",
    keywords: "404 error, page not found, Ajiozi",
  };

  return (
    <>
      <Layout headerStyle={10} footerStyle={10} head={errorHead}>
        <ErrorComponent />
      </Layout>
    </>
  );
}
