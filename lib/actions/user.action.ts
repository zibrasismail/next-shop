"use server";

import { signIn, signOut } from "@/auth";
import { prisma } from "@/db/prisma";
import { signInFormSchema, signUpFormSchema } from "@/lib/validators";
import { hashSync } from "bcrypt-ts-edge";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { formatError } from "../utils";

// signin with user credentials
export async function signInAction(prevState: unknown, formData: FormData) {
  try {
    const { email, password } = signInFormSchema.parse(
      Object.fromEntries(formData.entries())
    );

    const user = await signIn("credentials", {
      email,
      password,
    });

    if (!user) {
      return { error: "Invalid credentials" };
    }

    return { success: "Sign in successful" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: "invalid email or password" };
  }
}

// signout user
export async function signOutAction() {
  await signOut();
}

// Sign up user
export async function signUpAction(prevState: unknown, formData: FormData) {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    const plainPassword = user.password;

    user.password = hashSync(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    await signIn("credentials", {
      email: user.email,
      password: plainPassword,
    });

    return { success: true, message: "User registered successfully" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: formatError(error) };
  }
}
