import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already includes a language
  const pathnameHasLocale =
    pathname.startsWith("/ar") || pathname.startsWith("/en");

  if (!pathnameHasLocale) {
    // Get language from cookie or default to 'ar'
    const lang = request.cookies.get("lang")?.value || "ar";

    // Redirect to the language-specific path
    return NextResponse.redirect(new URL(`/${lang}${pathname}`, request.url));
  }

  // Extract language from pathname
  const segments = pathname.split("/");
  const lang = segments[1];

  // Validate language
  if (!["ar", "en"].includes(lang)) {
    return NextResponse.redirect(new URL("/ar", request.url));
  }

  // Handle double language segments like /ar/ar -> /ar
  if (segments.length > 2 && segments[2] === lang) {
    const cleanPath = `/${lang}/${segments.slice(3).join("/")}`;
    return NextResponse.redirect(new URL(cleanPath, request.url));
  }

  // Set language cookie
  const response = NextResponse.next();
  response.cookies.set("lang", lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon.ico|images|locales).*)",
  ],
};
