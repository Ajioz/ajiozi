import React from "react";
import Messages from "@/components/sections/Messages";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";

const MessagesPage = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="Messages" />
        <Messages />
      </Layout>
    </>
  );
};

export default MessagesPage;
