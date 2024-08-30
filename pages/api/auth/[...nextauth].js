import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/utils/auth";
import { connectDB } from "@/utils/connectDB";



export default NextAuth({
  session: {
    strategy: "jwt", // Ensure this is set to "jwt" if you're not using a database
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",

      async authorize(credentials) {
        let client;
        try {
          client = await connectDB();

          const usersCollection = client.db().collection("admin");

          const user = await usersCollection.findOne({
            email: credentials.email,
          });

          if (!user) throw new Error("No user found");

          const isValidPassword = await verifyPassword(
            credentials.password,
            user.password
          );

          if (!isValidPassword) throw new Error("Invalid password");

          return {
            email: user.email,
          };
        } catch (error) {
          console.error(error.message);
        } finally {
          client.close();
        }
      },
    }),
  ],
});


