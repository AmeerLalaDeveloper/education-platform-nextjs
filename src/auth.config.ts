import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./lib/user.actions";
export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email } = credentials;
        const user = await getUserByEmail(email);
        if (user) return user;
        return null;
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      if (!token) return session;
      session.user.role = token.role;
      session.user.id = token.sub;
      session.user.username = token.username;
      return session;
    },
  },
} satisfies NextAuthConfig;
