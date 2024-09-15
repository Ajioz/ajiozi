import Messages from "@/components/sections/Messages";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import { fetchMessages } from "@/utils/util-fetch";
import { getSession } from "next-auth/react";

const MessagesPage = ({ messages }) => {
  console.log({ messages });
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
  console.log("Session:", session); // Debugging to check session structure

  let messages = [];

  try {
    messages = await fetchMessages();
  } catch (error) {
    console.error("Error fetching messages:", error);
    messages = [];
  }

  // Check if session exists and has a valid user
  if (!session) {
    return {
      props:{ messages: session},
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
