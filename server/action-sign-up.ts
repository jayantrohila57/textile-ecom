"use server";

import { prisma } from "@/config/database";
import * as z from "zod";

import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/validation/validation";

type TValue = z.infer<typeof RegisterSchema>;
export const register = async (values: TValue) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (existingUser) {
      return { error: "Email already in use!" };
    }

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return { success: "User Registration Successfully. Please Sign In." };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong." };
  }
};
