import React from "react";
import { getSession } from "next-auth/react";
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

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const messages = await fetchMessages();

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      messages,
    },
  };
}
