import { prisma } from "@/config/database";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import * as z from "zod";
export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = z
          .object({
            email: z.string().email({
              message: "Email is required",
            }),
            password: z.string().min(1, {
              message: "Password is required",
            }),
            code: z.optional(z.string()),
          })
          .safeParse(credentials);
        if (validatedFields?.success) {
          try {
            await prisma.$connect();
            const { email, password } = validatedFields.data;
            const user = await prisma.user.findFirst({ where: { email } });
            if (!user || !user.password) return null;
            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );
            if (passwordsMatch) return user;
            return null;
          } catch (error) {
            console.error(error);
            return null;
          } finally {
            await prisma.$disconnect();
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
