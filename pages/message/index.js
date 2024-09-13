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
  let messages = [];

  try {
    messages = await fetchMessages();
  } catch (error) {
    console.error("Error fetching messages:", error);
    // Handle the error appropriately, e.g., set messages to an empty array or a default value
    messages = []; // or you can set a default message
  }

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
