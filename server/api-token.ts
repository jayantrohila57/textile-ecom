import { prisma as db } from "@/config/database";
import { TC } from "@/lib/tc";

export const getVerificationTokenByToken = async (token: string) =>
  TC(
    async () => await db.verificationToken.findUnique({ where: { token } }),
    token
  );
export const getVerificationTokenByEmail = async (email: string) =>
  TC(
    async () => await db.verificationToken.findFirst({ where: { email } }),
    email
  );
