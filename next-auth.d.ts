import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  username: string;
  id: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
  interface JWT {
    role: UserRole;
  }
}
