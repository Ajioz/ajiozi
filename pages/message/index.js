import React from "react";
import Messages from "@/components/sections/Messages";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import { fetchMessages } from "@/utils/util-fetch";

const MessagesPage = ({ messages }) => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="Messages" />
        <Messages messages={messages} />
      </Layout>
    </>
  );
};

export default MessagesPage;

export async function getServerSideProps() {
  const messages = await fetchMessages();
  return {
    props: {
      messages,
    },
  };
}

