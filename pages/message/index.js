// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });
//   console.log("Session:", session); // Debugging to check session structure

//   let messages = [];

//   try {
//     messages = await fetchMessages();
//   } catch (error) {
//     console.error("Error fetching messages:", error);
//     messages = [];
//   }

//   // Check if session exists and has a valid user
//   if (!session || !session.user) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//       messages,
//     },
//   };
// }


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
  if (!session || !session.user) {
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
