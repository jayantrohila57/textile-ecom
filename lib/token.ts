import { prisma } from "@/config/database";
import { getVerificationTokenByEmail } from "@/server/api-token";
import { v4 as uuidv4 } from "uuid";
import { TC } from "./tc";

export const generateVerificationToken = async (email: string) =>
  TC(async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 2 * 60 * 60 * 1000); // 2 hours
    const existingToken = await getVerificationTokenByEmail(email);
    if (existingToken) {
      await prisma.verificationToken.delete({
        where: {
          id: existingToken.id,
        },
      });
    }
    const verificationToken = await prisma.verificationToken.create({
      data: {
        email,
        token,
        expires,
      },
    });
    return verificationToken;
  }, email);
