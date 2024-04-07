import NextAuth from "next-auth";

import authConfig from "./auth.config";

const RoutesFactory = {
  publicRoutes: ["/", "/blog/*", "/products/*","/blog/*","/contact/*","/cart/*", "/auth/new-verification"],
  authRoutes: [
    "/auth/sign-up",
    "/auth/sign-in",
    "/auth/error",
    "/auth/forgot-password",
  ],
  apiAuthPrefix: "/api/auth",
  DEFAULT_LOGIN_REDIRECT: "/",
};
const { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } =
  RoutesFactory;

const { auth } = NextAuth(authConfig);
//@ts-ignore
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // if (isApiAuthRoute) {
  //   return null;
  // }

  // if (isAuthRoute) {
  //   if (isLoggedIn) {
  //     return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  //   }
  //   return null;
  // }

  // if (!isLoggedIn && !isPublicRoute) {
  //   let callbackUrl = nextUrl.pathname;
  //   if (nextUrl.search) {
  //     callbackUrl += nextUrl.search;
  //   }

  //   const encodedCallbackUrl = encodeURIComponent(callbackUrl);

  //   return Response.redirect(
  //     new URL(`/auth/sign-in?callbackUrl=${encodedCallbackUrl}`, nextUrl)
  //   );
  // }

  return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
