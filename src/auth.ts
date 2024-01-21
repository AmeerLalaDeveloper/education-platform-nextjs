import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { prisma } from "./lib/prisma";
import { getUserByEmail } from "./lib/user.actions";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  callbacks: {
    session({ session, token }) {
      if (!token) return session;
      session.user.role = token.role;
      session.user.id = token.sub;
      session.user.username = token.username;
      return session;
    },
    async jwt({ token, user: authUser }) {
      if (!token.email) return token;
      const user = await getUserByEmail(token.email);
      if (!user) return token;
      return {
        token,
        role: user.role,
        username: user.username,
        sub: user.user_id,
      };
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
});
