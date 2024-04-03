import { prisma } from "@/config/database";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Role } from "@prisma/client";
import NextAuth, { DefaultSession } from "next-auth";
import authConfig from "./auth.config";
declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      role: Role;
      isOAuth: boolean;
    };
  }
}

export type AuthSession = {
  session: {
    user: {
      id: string;
      name?: string;
      email?: string;
    };
  } | null;
};
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) session.user.id = token.sub;
      if (token.role && session.user) session.user.role = token.role as Role;
      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email as string;
        session.user.isOAuth = token.isOAuth as boolean;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await prisma.user.findUnique({
        where: { id: token.sub as string },
      });
      if (!existingUser) return token;
      const existingAccount = await prisma.account.findFirst({
        where: { userId: existingUser.id },
      });
      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      return token;
    },
  },
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth-error",
    signOut: "/auth/sign-out",
    newUser: "/account",
  },
  trustHost: true,
  events: {
    async linkAccount({ user }) {
      console.log(user);
      // await prisma.user.update({
      //   where: { id: user.id },
      //   data: {
      //   },
      // });
    },
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  ...authConfig,
});
