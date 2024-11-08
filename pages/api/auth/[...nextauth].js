// Production
/*
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/utils/auth";
import { connectDB } from "@/utils/connectDB";

export default NextAuth({
  session: {
    strategy: "jwt", // Ensure this is set to "jwt" if you're not using a database
  },
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`, // Use a secure cookie name
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Set to true in production
        sameSite: "none", // Change to 'none' if you need cross-site access
        path: "/",
        domain: process.env.COOKIE_DOMAIN || undefined,
      },
    },
  },
  providers: [
    CredentialsProvider({
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

          return { email: user.email };
        } catch (error) {
          console.error("Authorization error:", error.message);
          throw new Error("Authorization failed");
        } finally {
          if (client) client.close();
        }
      },
    }),
  ],
});
*/


// Development
// /*
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/utils/auth";
import { connectDB } from "@/utils/connectDB";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const client = await connectDB();
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
        return { email: user.email, id: user._id.toString() };
      },
    }),
  ],
  debug: true,
});
// */
