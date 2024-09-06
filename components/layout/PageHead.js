import Head from "next/head";

const PageHead = ({ headTitle, description, keywords }) => {
  const defaultDescription = "Ajiozi is a software company that develops cutting-edge software solutions and embedded system solutions, including Internet of Things technology, training, and research-based works.";
  const defaultKeywords = "Ajiozi, software solutions, embedded systems, IoT, Internet of Things, technology, training, research";

  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "Ajiozi | Tech Company"}</title>
        <meta name="description" content={description ? description : defaultDescription} />
        <meta name="keywords" content={keywords ? keywords : defaultKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
};

export default PageHead;
