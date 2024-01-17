"use server";
import { prisma } from "./prisma";
import bcrypt from "bcrypt";
import { AuthError } from "next-auth";
export const handleCredentialsLogin = async (formData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    // await signIn("credentials", {
    // email,
    // password,
    // });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};

export const handleLogout = async () => {
  // await signOut();
};

export const register = async (formData) => {
  try {
    const { username, password, email, image } = Object.fromEntries(formData);

    const user = await prisma.user.findFirst({ where: { email } });
    if (user) {
      return "email already exist";
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
        image_url: image.name,
      },
    });
  } catch (err) {
    console.log("aha", err);
    return "Something went wrong";
  }
};
