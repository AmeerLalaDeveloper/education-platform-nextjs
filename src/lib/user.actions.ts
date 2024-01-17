import { prisma } from "./prisma";

export const getUserById = async (id: String) => {
  const res = await prisma.user.findFirst({ where: { user_id: +id } });
  return res;
};

export const getUserByEmail = async (email: string) => {
  const res = await prisma.user.findFirst({ where: { email: email } });

  return res;
};
