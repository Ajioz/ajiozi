import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "Ajiozi | Tech Company"}</title>
      </Head>
    </>
  );
};

export default PageHead;
