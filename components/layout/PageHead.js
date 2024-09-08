import Head from "next/head";

const PageHead = ({ headTitle, description, keywords }) => {
  const defaultTitle = "Ajiozi | Leading Software and Tech Development Company";
  const defaultDescription = "Ajiozi is a leading software company specializing in cutting-edge software solutions, embedded systems, IoT technology, training, and research.";
  const defaultKeywords = "Ajiozi, software solutions, embedded systems, IoT, Internet of Things, technology, training, research, leading tech company";

  const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL || "/images/logo.png";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ajiozi",
    "url": "https://www.ajiozi.com",
    "logo": logoUrl,
    "sameAs": [
      "https://www.facebook.com/ajiozi",
      "https://www.twitter.com/ajiozi",
      "https://www.linkedin.com/company/ajiozi"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-806-410-7055",
      "contactType": "Customer Service"
    },
    "founders": [
      {
        "@type": "Person",
        "name": "Ajiroghene Sunday"
      },
      {
        "@type": "Person",
        "name": "Sandra Isianya"
      },
      {
        "@type": "Person",
        "name": "Richard Iteke"
      }
    ],
    "foundingDate": "2020-01-01",
    "foundingLocation": "Delta, Nigeria",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "31 Airport Road",
      "addressLocality": "Delta",
      "addressRegion": "DTH",
      "postalCode": "332213",
      "addressCountry": "NG"
    }
  };

  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : defaultTitle}</title>
        <meta name="description" content={description ? description : defaultDescription} />
        <meta name="keywords" content={keywords ? keywords : defaultKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ajiozi.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
    </>
  );
};

export default PageHead;
