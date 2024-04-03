import { useSession } from "next-auth/react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const checkAuth = async () => !(await auth()) && redirect("/");
export const checkIsSignedIn = async () => (await auth()) && redirect("/");
export const currentUser = async () => (await auth())?.user;
export const currentRole = async () => (await auth())?.user?.role;
export const useCurrentRole = () => useSession().data?.user?.role;
export const useCurrentUser = () => useSession().data?.user;
