import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { prisma } from "./lib/prisma";
import { getUserByEmail } from "./lib/user.actions";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  callbacks: {
    async jwt({ token }) {
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
});
